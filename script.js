/**
 * Core Audio Controller Module (Full Seamless Integration with Backup Mechanism)
 */
class AudioController {
    constructor() {
        this.tracks = {
            opening: new Audio("musik/opening.mp3"),
            school: new Audio("musik/school.mp3"),
            emotional: new Audio("musik/emotional.mp3"),
            ending: new Audio("musik/ending.mp3"),
            click: new Audio("musik/click.mp3")
        };
        this.currentBgm = null;
        this.currentBgmKey = null;
        this.storageKey = "dhh_audio_state";

        Object.keys(this.tracks).forEach(key => {
            this.tracks[key].loop = key !== 'click';
        });

        this.initCrossPageAudio();
    }

    initCrossPageAudio() {
        const savedState = localStorage.getItem(this.storageKey);
        if (savedState) {
            const state = JSON.parse(savedState);
            this.currentBgmKey = state.currentBgmKey || "opening";
            
            if (this.tracks[this.currentBgmKey]) {
                this.currentBgm = this.tracks[this.currentBgmKey];
                if (state.savedTime > 0) {
                    this.currentBgm.currentTime = state.savedTime;
                }
            }
        } else {
            this.currentBgmKey = "opening";
            this.currentBgm = this.tracks["opening"];
        }

        window.addEventListener('DOMContentLoaded', () => {
            this.syncSliders();
            this.bindGlobalClickSfx();
        });

        this.autoplayRecovery();
        setInterval(() => this.saveAudioState(), 300);
    }

    autoplayRecovery() {
        if (!this.currentBgm) return;
        this.updateVolume();
        const playAttempt = () => {
            this.currentBgm.play().catch(() => {
                document.addEventListener('click', () => {
                    if (this.currentBgm) this.currentBgm.play().catch(e => console.log("Audio Play Intercepted", e));
                }, { once: true });
            });
        };
        playAttempt();
    }

    saveAudioState() {
        const bgmSlider = document.getElementById("bgmVolume");
        const sfxSlider = document.getElementById("sfxVolume");
        
        const state = {
            currentBgmKey: this.currentBgmKey,
            savedTime: this.currentBgm ? this.currentBgm.currentTime : 0,
            bgmVol: bgmSlider ? bgmSlider.value : "0.5",
            sfxVol: sfxSlider ? sfxSlider.value : "0.7"
        };
        localStorage.setItem(this.storageKey, JSON.stringify(state));
    }

    playBgm(key) {
        if (!this.tracks[key] || this.currentBgm === this.tracks[key]) return;
        this.stopBgm();
        this.currentBgmKey = key;
        this.currentBgm = this.tracks[key];
        this.updateVolume();
        this.currentBgm.play().catch(() => console.log("Audio interaction triggered via BGM."));
        this.saveAudioState();
    }

    stopBgm() {
        if (this.currentBgm) {
            this.currentBgm.pause();
            this.currentBgm.currentTime = 0;
        }
    }

    playSfx(key) {
        if (this.tracks[key]) {
            const sfx = this.tracks[key];
            const sfxSlider = document.getElementById("sfxVolume");
            sfx.volume = sfxSlider ? parseFloat(sfxSlider.value) : 0.7;
            sfx.currentTime = 0;
            sfx.play().catch(e => console.log("SFX Play Blocked", e));
        }
    }

    updateVolume() {
        const bgmSlider = document.getElementById("bgmVolume");
        if (this.currentBgm && bgmSlider) {
            this.currentBgm.volume = parseFloat(bgmSlider.value);
        } else if (this.currentBgm) {
            const savedState = localStorage.getItem(this.storageKey);
            const vol = savedState ? JSON.parse(savedState).bgmVol : 0.5;
            this.currentBgm.volume = parseFloat(vol);
        }
    }

    syncSliders() {
        const savedState = localStorage.getItem(this.storageKey);
        if (savedState) {
            const state = JSON.parse(savedState);
            const bgmSlider = document.getElementById("bgmVolume");
            const sfxSlider = document.getElementById("sfxVolume");
            if (bgmSlider) bgmSlider.value = state.bgmVol;
            if (sfxSlider) sfxSlider.value = state.sfxVol;
        }
        this.updateVolume();
    }

    bindGlobalClickSfx() {
        document.body.addEventListener('click', (e) => {
            if (e.target.closest('button') || e.target.closest('.icon-btn') || e.target.closest('.episode-card') || e.target.closest('.dialogue-box')) {
                this.playSfx('click');
            }
        });
    }
}

/**
 * Advanced State & Saving Modular Management
 */
class EngineStateManager {
    constructor() {
        this.storageKey = "modular_vn_engine_save";
    }

    buildPackage(engine) {
        return {
            episodeId: engine.currentEpisodeId,
            pointer: engine.currentPointer,
            affection: engine.affection,
            mood: engine.mood,
            history: engine.history,
            playerName: (typeof characters !== 'undefined' && characters.player) ? characters.player.name : "Player",
            girlName: (typeof characters !== 'undefined' && characters.girl) ? characters.girl.name : "Clara",
            currentBg: engine.activeBg,
            currentBgm: engine.activeBgm,
            settings: {
                bgmVol: document.getElementById("bgmVolume") ? document.getElementById("bgmVolume").value : "0.5",
                sfxVol: document.getElementById("sfxVolume") ? document.getElementById("sfxVolume").value : "0.7",
                textSpeed: document.getElementById("textSpeed") ? document.getElementById("textSpeed").value : "30",
                autoSpeed: document.getElementById("autoSpeed") ? document.getElementById("autoSpeed").value : "2000"
            }
        };
    }

    writeToStorage(dataPackage) {
        localStorage.setItem(this.storageKey, JSON.stringify(dataPackage));
        
        // Jembatan integrasi ke berkas terpisah js/save.js jika SaveManager diaktifkan
        if (typeof SaveManager !== "undefined") {
            // Mengambil angka integer episode berdasarkan teks string (contoh: "episode1" -> 1)
            const epNum = parseInt(dataPackage.episodeId.replace(/^\D+/g, '')) || 1;
            SaveManager.gameStateRef = {
                currentEpisode: epNum,
                currentScene: dataPackage.pointer,
                affection: dataPackage.affection,
                trust: engine ? engine.trust || 0 : 0,
                flags: engine ? engine.flags || {} : {},
                volume: parseFloat(dataPackage.settings.bgmVol),
                mute: false
            };
            // Sinkronkan ke local storage utama milik save.js secara paralel
            SaveManager.saveGame();
        }
    }

    readFromStorage() {
        const data = localStorage.getItem(this.storageKey);
        return data ? JSON.parse(data) : null;
    }
}

/**
 * Core Visual Novel Architecture Engine
 */
class VisualNovelEngine {
    constructor() {
        this.stateManager = new EngineStateManager();
        
        this.episodes = { 
            episode1: typeof episode1 !== 'undefined' ? episode1 : [],
            episode2: typeof episode2 !== 'undefined' ? episode2 : []
        };
        
        this.currentEpisodeId = "episode1";
        this.currentPointer = 0;
        this.affection = 0;
        this.trust = 0; // Dukungan variabel tambahan agar match dengan save.js
        this.flags = {}; // Dukungan penampung pilihan agar match dengan save.js
        this.mood = "Neutral";
        this.history = [];
        
        this.isTyping = false;
        this.typingInterval = null;
        this.currentActiveTypingText = "";
        this.isDisplayingChoiceResult = false; // Flag Pemisah State Dialog

        this.autoMode = false;
        this.skipMode = false;
        this.autoTimer = null;

        this.activeBg = "";
        this.activeBgm = "";
    }

    startNewGame() {
        // Cek pengaman penulisan ulang (Overwrite Protection)
        if (typeof SaveManager !== "undefined" && SaveManager.hasActiveProgress()) {
            const confirmOverwrite = confirm("Starting a new game will overwrite your current progress. Apakah Anda yakin?");
            if (!confirmOverwrite) return;
        }

        this.currentEpisodeId = "episode1";
        this.currentPointer = 0;
        this.affection = 0;
        this.trust = 0;
        this.flags = {};
        this.mood = "Neutral";
        this.history = [];
        this.isDisplayingChoiceResult = false;
        this.disableModes();
        
        const bar = document.getElementById("affectionBar");
        const val = document.getElementById("affectionValue");
        if (bar) bar.style.width = "0%";
        if (val) val.textContent = "0%";
        
        // Inisialisasi balik skema save.js ke titik mula default saat New Game ditekan
        if (typeof SaveManager !== "undefined") {
            SaveManager.createSave();
        }

        ui.switchScreen("gameContainer");
        this.renderFrame();
    }

    startEpisode(epId) {
        this.currentEpisodeId = epId;
        this.currentPointer = 0;
        this.affection = 0;
        this.mood = "Neutral";
        this.history = [];
        this.isDisplayingChoiceResult = false;
        this.disableModes();
        
        const bar = document.getElementById("affectionBar");
        const val = document.getElementById("affectionValue");
        if (bar) bar.style.width = "0%";
        if (val) val.textContent = "0%";
        
        ui.switchScreen("gameContainer");
        this.renderFrame();
    }

    renderFrame() {
        const episodeScript = this.episodes[this.currentEpisodeId];
        if (!episodeScript || episodeScript.length === 0) {
            console.error(`Script untuk ${this.currentEpisodeId} tidak ditemukan.`);
            return;
        }
        
        const step = episodeScript[this.currentPointer];
        if (!step) return;

        // Process Environmental Assets
        if (step.background) {
            this.activeBg = step.background;
            if (step.fade) {
                ui.triggerFade(() => {
                    const bg = document.getElementById("bgLayer");
                    if (bg) bg.style.backgroundImage = `url('${step.background}')`;
                });
            } else {
                const bg = document.getElementById("bgLayer");
                if (bg) bg.style.backgroundImage = `url('${step.background}')`;
            }
        }

        if (step.bgm) {
            this.activeBgm = step.bgm;
            audio.playBgm(step.bgm);
        }

        // Process Character Properties
        this.renderCharacters(step);

        // Process Dialogue Box Meta Data
        const nameBox = document.getElementById("nameBox");
        if (nameBox) {
            if (step.speaker && typeof characters !== 'undefined' && characters[step.speaker] && characters[step.speaker].name !== "") {
                nameBox.style.display = "block";
                nameBox.textContent = characters[step.speaker].name;
            } else {
                nameBox.style.display = "none";
            }
        }

        const moodVal = document.getElementById("moodValue");
        if (step.mood) {
            this.mood = step.mood;
            if (moodVal) moodVal.textContent = ui.getMoodEmoji(this.mood) + " " + this.mood;
        }

        // Run Typewriter System Container
        this.typeText(step.text || "", () => {
            if (step.choices) {
                ui.renderChoiceOverlay(step.choices);
            } else if (this.skipMode) {
                setTimeout(() => this.nextStep(), 150);
            } else if (this.autoMode) {
                const speedEl = document.getElementById("autoSpeed");
                const speed = speedEl ? parseInt(speedEl.value) : 2000;
                this.autoTimer = setTimeout(() => this.nextStep(), speed);
            }
        });

        // Record Logs & Execute Auto-Save Engine
        if (step.text && step.text !== "") {
            const speakerName = (step.speaker && typeof characters !== 'undefined' && characters[step.speaker]) ? characters[step.speaker].name : "Narasi";
            this.history.push({ name: speakerName, content: step.text });
        }
        
        this.autoSave();
    }

    renderCharacters(step) {
        const girlEl = document.getElementById("charGirl");
        const boyEl = document.getElementById("charBoy");
        if (!girlEl || !boyEl) return;

        if (step.sprite === "hidden") {
            girlEl.classList.remove("visible", "active-speaker");
            return;
        }

        if (step.speaker === "girl" || step.sprite === "visible") {
            girlEl.classList.add("visible", "active-speaker");
            boyEl.classList.add("visible");
            boyEl.classList.remove("active-speaker");
        } else if (step.speaker === "player") {
            boyEl.classList.add("visible", "active-speaker");
            girlEl.classList.add("visible");
            girlEl.classList.remove("active-speaker");
        } else if (step.speaker === "system" || step.speaker === "narration") {
            boyEl.classList.remove("active-speaker");
            girlEl.classList.remove("active-speaker");
        }
    }

    typeText(text, callback) {
        clearInterval(this.typingInterval);
        this.isTyping = true;
        this.currentActiveTypingText = text; 
        let index = 0;
        const container = document.getElementById("dialogueText");
        if (!container) return;
        container.textContent = "";

        const speedEl = document.getElementById("textSpeed");
        const speed = speedEl ? (parseInt(speedEl.value) || 30) : 30;

        this.typingInterval = setInterval(() => {
            if (index >= text.length) {
                clearInterval(this.typingInterval);
                this.isTyping = false;
                if (callback) callback();
                return;
            }
            container.textContent += text[index];
            index++;
        }, speed);
    }

    nextStep() {
        const episodeScript = this.episodes[this.currentEpisodeId];
        const step = episodeScript[this.currentPointer];

        // 1. Jika teks sedang mengetik, selesaikan secara instan saat diklik
        if (this.isTyping) {
            clearInterval(this.typingInterval);
            const container = document.getElementById("dialogueText");
            if (container) {
                container.textContent = this.currentActiveTypingText || "";
            }
            this.isTyping = false;
            
            // Jika dalam mode dialog normal yang mempunyai pilihan, tampilkan tombol opsi setelah teks penuh
            if (!this.isDisplayingChoiceResult && step && step.choices) {
                ui.renderChoiceOverlay(step.choices);
            }
            return;
        }

        clearTimeout(this.autoTimer);

        // 2. Alur Interseptor: Jika sedang menampilkan teks pilihan Vanitas, klik berikutnya baru memicu rute Clara
        if (this.isDisplayingChoiceResult) {
            this.isDisplayingChoiceResult = false;
            this.renderFrame(); // Pointer sudah di-set ke targetIndex rute Clara, panggil frame barunya
            return;
        }

        if (step && step.choices) return; // Kunci tombol Next jika pilihan sedang aktif di layar

        // 3. Progresi Dialog Normal
        if (step && step.nextIndex !== undefined) {
            this.currentPointer = step.nextIndex;
        } else {
            this.currentPointer++;
        }

        if (this.currentPointer >= episodeScript.length) {
            // Manajemen Pembukaan Kunci Bab Otomatis berbasis Data Int Kustom saat Episode berakhir
            if (this.currentEpisodeId === "episode1") {
                if (typeof SaveManager !== "undefined") {
                    SaveManager.completeEpisode(1); // Gembok Episode 2 Terbuka permanen
                }
                this.currentEpisodeId = "episode2";
                this.currentPointer = 0;
                this.renderFrame();
            } else if (this.currentEpisodeId === "episode2") {
                if (typeof SaveManager !== "undefined") {
                    SaveManager.completeEpisode(2); // Gembok Episode 3 Terbuka permanen
                }
                this.disableModes();
                ui.switchScreen("mainMenu");
                audio.playBgm("opening");
            } else {
                this.disableModes();
                ui.switchScreen("mainMenu");
                audio.playBgm("opening");
            }
        } else {
            this.renderFrame();
        }
    }

    selectChoice(index, choices) {
        audio.playSfx("click");
        const choice = choices[index];

        // 1. Kalkulasi Status Kedekatan
        this.affection = Math.min(100, Math.max(0, this.affection + choice.affection));
        const bar = document.getElementById("affectionBar");
        const val = document.getElementById("affectionValue");
        if (bar) bar.style.width = `${this.affection}%`;
        if (val) val.textContent = `${this.affection}%`;

        // Menyimpan status Choice Flags bila didefinisikan dalam naskah opsi dialog cerita Anda
        if (choice.flagKey) {
            this.flags[choice.flagKey] = choice.flagValue;
        }

        // 2. Bersihkan Overlay Tombol Pilihan dari Layar
        document.getElementById("choiceContainer").classList.add("hidden");

        // 3. Set Engine ke State Hasil Pilihan & Siapkan Pointer Rute Clara berikutnya
        this.isDisplayingChoiceResult = true;
        this.currentPointer = choice.targetIndex; 

        // 4. Tampilkan Nama dan Sprite Vanitas (Player)
        const nameBox = document.getElementById("nameBox");
        if (nameBox && typeof characters !== 'undefined' && characters.player) {
            nameBox.style.display = "block";
            nameBox.textContent = characters.player.name;
        }
        this.renderCharacters({ speaker: "player" });

        // 5. Cetak Ucapan Vanitas & Tunggu Klik Manual Pemain (Tidak ada auto-timeout)
        const playerText = choice.playerDialogue || choice.text;
        
        const pName = (typeof characters !== 'undefined' && characters.player) ? characters.player.name : "Vanitas";
        this.history.push({ name: pName, content: playerText });

        this.typeText(playerText, () => {
            // Berhenti di sini. Alur diserahkan sepenuhnya ke fungsi klik nextStep() milik pemain.
        });
    }

    autoSave() {
        const pack = this.stateManager.buildPackage(this);
        this.stateManager.writeToStorage(pack);
    }

    manualSave() {
        this.autoSave();
        alert("Progress permainan berhasil disimpan!");
    }

    loadGame() {
        // Cek pengambilan fallback data dari modul jembatan modular save.js atau internal standar
        let pack = this.stateManager.readFromStorage();
        
        if (!pack && typeof SaveManager !== "undefined") {
            const raw = SaveManager.loadSave();
            if (raw && raw.currentEpisode) {
                pack = {
                    episodeId: "episode" + raw.currentEpisode,
                    pointer: raw.currentScene,
                    affection: raw.affection,
                    mood: "Neutral",
                    history: [],
                    currentBg: "",
                    currentBgm: "",
                    settings: { bgmVol: raw.settings.volume, sfxVol: 0.7, textSpeed: 30, autoSpeed: 2000 }
                };
            }
        }

        if (!pack) return;

        this.currentEpisodeId = pack.episodeId;
        this.currentPointer = pack.pointer;
        this.affection = pack.affection;
        this.mood = pack.mood;
        this.history = pack.history || [];
        this.isDisplayingChoiceResult = false;
        
        if (typeof characters !== 'undefined') {
            if (characters.player) characters.player.name = pack.playerName;
            if (characters.girl) characters.girl.name = pack.girlName;
        }
        this.activeBg = pack.currentBg;
        this.activeBgm = pack.currentBgm;

        if (document.getElementById("bgmVolume")) document.getElementById("bgmVolume").value = pack.settings.bgmVol;
        if (document.getElementById("sfxVolume")) document.getElementById("sfxVolume").value = pack.settings.sfxVol;
        if (document.getElementById("textSpeed")) document.getElementById("textSpeed").value = pack.settings.textSpeed;
        if (document.getElementById("autoSpeed")) document.getElementById("autoSpeed").value = pack.settings.autoSpeed;

        const bar = document.getElementById("affectionBar");
        const val = document.getElementById("affectionValue");
        if (bar) bar.style.width = `${this.affection}%`;
        if (val) val.textContent = `${this.affection}%`;
        
        const moodVal = document.getElementById("moodValue");
        if (moodVal) moodVal.textContent = ui.getMoodEmoji(this.mood) + " " + this.mood;

        if (this.activeBg) {
            const bg = document.getElementById("bgLayer");
            if (bg) bg.style.backgroundImage = `url('${this.activeBg}')`;
        }

        audio.playBgm(this.activeBgm || "opening");

        this.disableModes();
        ui.switchScreen("gameContainer");
        this.renderFrame();
    }

    toggleAuto() {
        this.autoMode = !this.autoMode;
        this.skipMode = false;
        const autoBtn = document.getElementById("autoBtn");
        const skipBtn = document.getElementById("skipBtn");
        if (autoBtn) autoBtn.classList.toggle("active", this.autoMode);
        if (skipBtn) skipBtn.classList.remove("active");
        if (this.autoMode && !this.isTyping) this.nextStep();
    }

    toggleSkip() {
        this.skipMode = !this.skipMode;
        this.autoMode = false;
        const skipBtn = document.getElementById("skipBtn");
        const autoBtn = document.getElementById("autoBtn");
        if (skipBtn) skipBtn.classList.toggle("active", this.skipMode);
        if (autoBtn) autoBtn.classList.remove("active");
        if (this.skipMode) this.nextStep();
    }

    disableModes() {
        this.autoMode = false;
        this.skipMode = false;
        const autoBtn = document.getElementById("autoBtn");
        const skipBtn = document.getElementById("skipBtn");
        if (autoBtn) autoBtn.classList.remove("active");
        if (skipBtn) skipBtn.classList.remove("active");
        clearTimeout(this.autoTimer);
    }
}

/**
 * UI Presentation Controller Module
 */
class UIController {
    switchScreen(id) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const screen = document.getElementById(id);
        if (screen) screen.classList.add('active');
    }

    toggleModal(id) {
        const modal = document.getElementById(id);
        if (modal) modal.classList.toggle("hidden");
    }

    triggerFade(callback) {
        const layer = document.getElementById("fadeLayer");
        if (!layer) {
            if (callback) callback();
            return;
        }
        layer.style.opacity = 1;
        setTimeout(() => {
            if (callback) callback();
            layer.style.opacity = 0;
        }, 600);
    }

    renderChoiceOverlay(choices) {
        const container = document.getElementById("choiceContainer");
        if (!container) return;
        container.innerHTML = "";
        choices.forEach((choice, idx) => {
            const btn = document.createElement("button");
            btn.className = "choice-btn";
            btn.textContent = choice.text;
            btn.onclick = () => game.selectChoice(idx, choices);
            container.appendChild(btn);
        });
        container.classList.remove("hidden");
    }

    toggleHistory() {
        const logContainer = document.getElementById("historyLog");
        if (!logContainer) return;
        logContainer.innerHTML = "";
        game.history.forEach(h => {
            const item = document.createElement("div");
            item.className = "history-item";
            item.innerHTML = `<div class="history-name">${h.name}</div><div>${h.content}</div>`;
            logContainer.appendChild(item);
        });
        this.toggleModal("historyModal");
    }

    toggleFullscreen() {
        const checkbox = document.getElementById("fullscreenToggle");
        if (!checkbox) return;
        if (checkbox.checked) {
            if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
        }
    }

    getMoodEmoji(mood) {
        const map = {
            Happy: "😊", Neutral: "😐", Embarrassed: "😳", Comfortable: "🥰",
            Annoyed: "😒", Angry: "😠", Sad: "😭", Laughing: "🤣", Confused: "😶"
        };
        return map[mood] || "😐";
    }
}

// Global System Instance Injections
const audio = new AudioController();
const game = new VisualNovelEngine();
const ui = new UIController();

// Parallax Matrix Simulation
document.addEventListener("mousemove", (e) => {
    const bg = document.getElementById("bgLayer");
    const container = document.getElementById("gameContainer");
    if (bg && container && container.classList.contains("active")) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// Ambient Particles Core Engine
(function initAmbientFX() {
    const container = document.getElementById("particleContainer");
    if (!container) return;
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.width = `${Math.random() * 5 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.background = "rgba(255, 117, 140, 0.25)";
        particle.style.borderRadius = "50%";
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animation = `bounce ${Math.random() * 3 + 3}s infinite ease-in-out alternate`;
        container.appendChild(particle);
    }
})();

// Bootstrap Initializer
window.addEventListener("DOMContentLoaded", () => {
    // Jalankan sistem proteksi struktur save data jika versi game diperbarui
    if (typeof SaveManager !== "undefined") {
        SaveManager.migrateSave();
    }

    const continueBtn = document.getElementById("continueBtn");
    
    // Logika Validasi Visibilitas Tombol Menu Utama
    const hasProgress = localStorage.getItem("modular_vn_engine_save") || (typeof SaveManager !== "undefined" && SaveManager.hasActiveProgress());
    if (continueBtn) {
        if (hasProgress) {
            continueBtn.style.display = "block";
        } else {
            continueBtn.style.display = "none";
        }
    }
    
    // Sambungkan pemicu muat simpanan ke tombol bawaan UI jika diklik
    if (continueBtn) {
        continueBtn.onclick = () => game.loadGame();
    }
});
