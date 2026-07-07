/**
 * save.js - Sistem Manajemen Penyimpanan Visual Novel Profesional
 * Menangani pembuatan data, penyimpanan otomatis, kelanjutan game, migrasi versi, dan pembukaan episode.
 */

const CURRENT_GAME_VERSION = "1.0"; // Versi konten game saat ini
const CURRENT_SAVE_VERSION = 1;     // Naikkan angka ini jika struktur data variabel di masa depan berubah

const DEFAULT_SAVE_DATA = {
    saveVersion: CURRENT_SAVE_VERSION,
    gameVersion: CURRENT_GAME_VERSION,
    unlockedEpisode: 1,
    completedEpisodes: [],
    currentEpisode: 1,
    currentScene: 0,
    affection: 0,
    trust: 0,
    flags: {},
    settings: {
        volume: 1,
        mute: false
    }
};

const SaveManager = {
    // Referensi ke objek State internal game di script.js
    gameStateRef: null,

    /**
     * Mengaitkan Game Engine/State utama ke SaveManager dan mengecek migrasi data
     * @param {Object} gameStateReference 
     */
    init(gameStateReference) {
        this.gameStateRef = gameStateReference;
        this.migrateSave();
    },

    /**
     * Membuat penyimpanan baru dengan data default
     */
    createSave() {
        const newSave = JSON.parse(JSON.stringify(DEFAULT_SAVE_DATA));
        localStorage.setItem("vn_save_data", JSON.stringify(newSave));
        return newSave;
    },

    /**
     * Mengambil data mentah dari LocalStorage, jika kosong otomatis membuat baru
     */
    getRawSave() {
        const data = localStorage.getItem("vn_save_data");
        if (!data) return this.createSave();
        try {
            return JSON.parse(data);
        } catch (e) {
            console.error("Data save rusak, membuat ulang data default.", e);
            return this.createSave();
        }
    },

    /**
     * Membaca penyimpanan dan memasukkan nilainya ke dalam State Game Runtime
     */
    loadSave() {
        const save = this.getRawSave();
        if (this.gameStateRef) {
            this.gameStateRef.currentEpisode = save.currentEpisode;
            this.gameStateRef.currentScene = save.currentScene;
            this.gameStateRef.affection = save.affection;
            this.gameStateRef.trust = save.trust;
            this.gameStateRef.flags = save.flags || {};
            
            // Konfigurasi audio dikembalikan ke state (eksekusi tetap di script.js)
            if (save.settings) {
                this.gameStateRef.volume = save.settings.volume;
                this.gameStateRef.mute = save.settings.mute;
            }
        }
        return save;
    },

    /**
     * Menyimpan data progres game saat ini ke LocalStorage (Auto Save)
     */
    saveGame() {
        if (!this.gameStateRef) return;
        
        const currentSave = this.getRawSave();
        
        // Perbarui data dari Runtime State Game
        currentSave.currentEpisode = this.gameStateRef.currentEpisode;
        currentSave.currentScene = this.gameStateRef.currentScene;
        currentSave.affection = this.gameStateRef.affection;
        currentSave.trust = this.gameStateRef.trust;
        currentSave.flags = this.gameStateRef.flags || {};
        
        if (!currentSave.settings) currentSave.settings = {};
        currentSave.settings.volume = this.gameStateRef.volume !== undefined ? this.gameStateRef.volume : 1;
        currentSave.settings.mute = this.gameStateRef.mute !== undefined ? this.gameStateRef.mute : false;
        
        currentSave.gameVersion = CURRENT_GAME_VERSION;

        localStorage.setItem("vn_save_data", JSON.stringify(currentSave));
    },

    /**
     * Melanjutkan permainan berdasarkan episode dan scene terakhir yang tersimpan
     */
    continueGame() {
        const save = this.loadSave();
        window.location.href = `episode.html?ep=${save.currentEpisode}&scene=${save.currentScene}`;
    },

    /**
     * Membuka akses untuk episode baru secara permanen
     * @param {number} epNumber 
     */
    unlockEpisode(epNumber) {
        const save = this.getRawSave();
        if (epNumber > save.unlockedEpisode) {
            save.unlockedEpisode = epNumber;
            localStorage.setItem("vn_save_data", JSON.stringify(save));
        }
    },

    /**
     * Menandai suatu episode telah selesai dan otomatis membuka episode berikutnya
     * @param {number} epNumber 
     */
    completeEpisode(epNumber) {
        const save = this.getRawSave();
        if (!save.completedEpisodes.includes(epNumber)) {
            save.completedEpisodes.push(epNumber);
        }
        localStorage.setItem("vn_save_data", JSON.stringify(save));
        this.unlockEpisode(epNumber + 1); // Unlock episode selanjutnya (misal: Selesai Ep 1 -> Ep 2 Terbuka)
    },

    /**
     * Melakukan validasi penggabungan (Deep-Merge) data tanpa menghapus progres lama pemain saat situs diperbarui
     */
    migrateSave() {
        const save = localStorage.getItem("vn_save_data");
        if (!save) {
            this.createSave();
            return;
        }

        try {
            let parsedSave = JSON.parse(save);
            let needsUpdate = false;

            // Jika versi save di komputer pemain lebih lama atau belum terdefinisi
            if (!parsedSave.saveVersion || parsedSave.saveVersion < CURRENT_SAVE_VERSION) {
                // Melakukan migrasi properti baru dari data default tanpa menimpa progress lama
                parsedSave = { ...DEFAULT_SAVE_DATA, ...parsedSave };
                parsedSave.saveVersion = CURRENT_SAVE_VERSION;
                needsUpdate = true;
            }

            // Pastikan objek bersarang seperti settings atau flags tidak kosong/hilang
            if (!parsedSave.settings) {
                parsedSave.settings = { ...DEFAULT_SAVE_DATA.settings };
                needsUpdate = true;
            }
            if (!parsedSave.flags) {
                parsedSave.flags = {};
                needsUpdate = true;
            }

            if (needsUpdate) {
                localStorage.setItem("vn_save_data", JSON.stringify(parsedSave));
                console.log(`[Save System] Berhasil melakukan migrasi data ke struktur Versi: ${CURRENT_SAVE_VERSION}`);
            }
        } catch (e) {
            console.error("Gagal melakukan proses migrasi otomatis.", e);
        }
    },

    /**
     * Mereset total seluruh data simpanan jika ada konfirmasi eksplisit dari pemain
     */
    resetSave() {
        const confirmReset = confirm("Apakah Anda yakin ingin menghapus semua data permainan? Tindakan ini tidak dapat dibatalkan.");
        if (confirmReset) {
            const freshSave = JSON.parse(JSON.stringify(DEFAULT_SAVE_DATA));
            localStorage.setItem("vn_save_data", JSON.stringify(freshSave));
            if (this.gameStateRef) {
                this.loadSave();
            }
            alert("Data penyimpanan telah dibersihkan.");
            window.location.reload();
        }
    },

    /**
     * Memeriksa apakah pemain memiliki progres berjalan (bukan di awal game baru)
     * Digunakan untuk menyembunyikan/menampilkan tombol Continue & Episode di Menu Utama
     */
    hasActiveProgress() {
        const data = localStorage.getItem("vn_save_data");
        if (!data) return false;
        try {
            const parsed = JSON.parse(data);
            // Progres dianggap valid jika sudah melewati scene 0 di Episode 1 ATAU sudah berada di Episode ke atas.
            return parsed.currentEpisode > 1 || parsed.currentScene > 0;
        } catch (e) {
            return false;
        }
    }
};
