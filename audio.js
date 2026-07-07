/**
 * Decode Her Heart - Centralized AudioManager Module
 */
class AudioManager {
    constructor() {
        this.tracks = {
            opening: new Audio("musik/opening.mp3"),
            school: new Audio("musik/school.mp3"),
            emotional: new Audio("musik/emotional.mp3"),
            ending: new Audio("musik/ending.mp3"),
            click: new Audio("musik/click.mp3")
        };
        
        this.currentBgmKey = null;
        this.currentBgm = null;
        this.storageKey = "dhh_audio_state";

        // Setup loop untuk semua BGM murni (kecuali efek klik)
        Object.keys(this.tracks).forEach(key => {
            if (key !== 'click') {
                this.tracks[key].loop = true;
            }
        });

        this.init();
    }

    init() {
        // Ambil data konfigurasi audio terakhir dari localStorage
        const savedState = localStorage.getItem(this.storageKey);
        if (savedState) {
            const state = JSON.parse(savedState);
            this.volumeBgm = state.volumeBgm !== undefined ? state.volumeBgm : 0.5;
            this.volumeSfx = state.volumeSfx !== undefined ? state.volumeSfx : 0.7;
            this.isMuted = state.isMuted || false;
            this.currentBgmKey = state.currentBgmKey || "opening";
            this.savedTime = state.savedTime || 0;
        } else {
            this.volumeBgm = 0.5;
            this.volumeSfx = 0.7;
            this.isMuted = false;
            this.currentBgmKey = "opening";
            this.savedTime = 0;
        }

        // Terapkan konfigurasi awal saat DOM siap
        window.addEventListener('DOMContentLoaded', () => {
            this.syncSlidersWithState();
            this.bindButtonClicks();
        });

        // Jalankan pemulihan lagu
        this.restoreBgm();

        // Interval otomatis mencatat detik musik secara real-time
        setInterval(() => this.saveState(), 300);
    }

    saveState() {
        const state = {
            volumeBgm: this.volumeBgm,
            volumeSfx: this.volumeSfx,
            isMuted: this.isMuted,
            currentBgmKey: this.currentBgmKey,
            savedTime: this.currentBgm ? this.currentBgm.currentTime : 0
        };
        localStorage.setItem(this.storageKey, JSON.stringify(state));
    }

    restoreBgm() {
        if (!this.currentBgmKey || !this.tracks[this.currentBgmKey]) return;
        
        this.currentBgm = this.tracks[this.currentBgmKey];
        this.currentBgm.volume = this.isMuted ? 0 : this.volumeBgm;
        
        if (this.savedTime > 0) {
            this.currentBgm.currentTime = this.savedTime;
        }

        const playAttempt = () => {
            this.currentBgm.play().catch(() => {
                // Atasi blokir autoplay browser
                document.addEventListener('click', () => {
                    if (this.currentBgm) this.currentBgm.play();
                }, { once: true });
            });
        };
        playAttempt();
    }

    playBgm(key) {
        if (!this.tracks[key] || this.currentBgmKey === key) return;

        this.fadeOut(() => {
            this.currentBgmKey = key;
            this.currentBgm = this.tracks[key];
            this.currentBgm.currentTime = 0;
            this.currentBgm.volume = 0;
            this.currentBgm.play().catch(e => console.log("BGM Play Interrupted", e));
            this.fadeIn();
            this.saveState();
        });
    }

    playSfx(key) {
        if (this.tracks[key] && !this.isMuted) {
            this.tracks[key].currentTime = 0;
            this.tracks[key].volume = this.volumeSfx;
            this.tracks[key].play().catch(e => console.log("SFX Play Interrupted", e));
        }
    }

    setBgmVolume(val) {
        this.volumeBgm = parseFloat(val);
        if (this.currentBgm && !this.isMuted) {
            this.currentBgm.volume = this.volumeBgm;
        }
        this.saveState();
    }

    setSfxVolume(val) {
        this.volumeSfx = parseFloat(val);
        this.saveState();
    }

    fadeIn(callback) {
        if (!this.currentBgm || this.isMuted) return;
        let vol = 0;
        const interval = setInterval(() => {
            vol += 0.05;
            if (vol >= this.volumeBgm) {
                this.currentBgm.volume = this.volumeBgm;
                clearInterval(interval);
                if (callback) callback();
            } else {
                this.currentBgm.volume = vol;
            }
        }, 30);
    }

    fadeOut(callback) {
        if (!this.currentBgm || this.isMuted) {
            if (callback) callback();
            return;
        }
        let vol = this.currentBgm.volume;
        const interval = setInterval(() => {
            vol -= 0.05;
            if (vol <= 0) {
                this.currentBgm.pause();
                this.currentBgm.volume = 0;
                clearInterval(interval);
                if (callback) callback();
            } else {
                this.currentBgm.volume = vol;
            }
        }, 20);
    }

    syncSlidersWithState() {
        const bgmSlider = document.getElementById("bgmVolume");
        const sfxSlider = document.getElementById("sfxVolume");
        if (bgmSlider) bgmSlider.value = this.volumeBgm;
        if (sfxSlider) sfxSlider.value = this.volumeSfx;
    }

    // Fungsi otomatis yang membuat semua tombol di HTML memutar efek klik click.mp3
    bindButtonClicks() {
        document.body.addEventListener('click', (e) => {
            if (e.target.closest('button') || e.target.closest('.icon-btn') || e.target.closest('.episode-card') || e.target.closest('.dialogue-box')) {
                this.playSfx('click');
            }
        });
    }
}

window.audioSystem = new AudioManager();
