/**
 * Visual Novel Script Data - Episode 2
 * 
 * Alur Kerja Sesuai Engine Baru:
 * Clara Bertanya -> Player Memilih -> Teks 'playerDialogue' Muncul (Vanitas Bicara) -> Clara Merespon (Rute)
 */
const episode2 = [
    // --- SEGMEN 1: MEMASUKI LORONG SEKOLAH ---
    // Index 0
    {
        speaker: "system",
        text: "Episode 2: Jejak Langkah di Lorong Sekolah",
        background: "image/lorong.jpg",
        bgm: "school",
        fade: true
    },
    // Index 1
    {
        speaker: "narration",
        text: "Langkah kaki kami bergema pelan saat melewati pintu masuk utama. Bau lantai kayu yang baru dipel dan aroma khas gedung sekolah langsung menyambut kami."
    },
    // Index 2
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Nah, sekarang kita sudah masuk gedung utama. Gimana, Vanitas? Kerasa beda banget ya sama sekolah lama kamu?"
    },
    // Index 3
    {
        speaker: "player",
        text: "Iya juga sih. Suasananya kerasa lebih hidup di sini."
    },
    // Index 4
    {
        speaker: "girl",
        mood: "Happy",
        text: "Kan, apa aku bilang! Sekolah ini emang punya aura yang bikin betah tahu. Apalagi kalau kamu udah ketemu anak-anak lain nanti."
    },
    // Index 5
    {
        speaker: "player",
        text: "Tapi eh bentar, ngomong-ngomong kamu dari tadi jalan di depanku terus. Emang sengaja mau pamer ban kapten ketua murid ya?"
    },
    // Index 6
    {
        speaker: "girl",
        mood: "Embarrassed",
        text: "Eh?! M-Mana ada! Aku cuma jalan duluan biar bisa nunjukin jalan dengan bener tahu!"
    },
    // Index 7
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Tapi kalau dipikir-pikir... kamu kelihatan tenang banget dari tadi pas pertama kali masuk gerbang. Kamu beneran nggak deg-degan sama sekali?"
    },
    // Index 8: PILIHAN 1
    {
        choices: [
            { 
                text: "Sebenernya agak gugup sih, tapi aku coba tahan aja.", 
                playerDialogue: "Sebenernya agak gugup sih, tapi aku coba tahan aja biar nggak kelihatan memalukan di depanmu.",
                affection: 10, 
                targetIndex: 9 
            },
            { 
                text: "Biasa aja, lagian kan cuma pindah sekolah, bukan pindah planet.", 
                playerDialogue: "Biasa aja, lagian kan cuma pindah sekolah, bukan pindah planet. Nggak ada alasan buat panik.",
                affection: 0, 
                targetIndex: 12 
            },
            { 
                text: "Gugup banget, makanya dari tadi aku merhatiin kamu terus biar tenang.", 
                playerDialogue: "Gugup banget, makanya dari tadi aku merhatiin kamu terus biar bisa sedikit lebih tenang.",
                affection: 15, 
                targetIndex: 15 
            }
        ]
    },

    // ==========================================
    // RUTE 1A: Jujur Gugup (Index 9 - Index 11)
    // ==========================================
    // Index 9
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Ahahaha, syukurlah kalau gitu. Kirain kamu tipe robot yang nggak punya emosi. Wajar kok gugup, namanya juga hari pertama."
    },
    // Index 10
    {
        speaker: "player",
        text: "Robot? Emang mukaku sedatar itu ya?"
    },
    // Index 11
    {
        speaker: "girl",
        mood: "Laughing",
        text: "Sedikit sih! Tapi seenggaknya sekarang kamu kelihatan lebih manusiawi, hehe.",
        nextIndex: 18 // Lompat ke Segmen 2
    },

    // ==========================================
    // RUTE 1B: Santai / Dingin (Index 12 - Index 14)
    // ==========================================
    // Index 12
    {
        speaker: "girl",
        mood: "Annoyed",
        text: "Ih, lempeng banget sih jawabannya. Padahal aku udah siap-siap mau nenangin kamu kalau kamu gemeteran."
    },
    // Index 13
    {
        speaker: "player",
        text: "Ya maaf, lagian terlalu santai juga bawaan dari dulu."
    },
    // Index 14
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Iya deh si paling santai. Tapi awas ya nanti kalau di kelas mendadak keringet dingin!",
        nextIndex: 18 // Lompat ke Segmen 2
    },

    // ==========================================
    // RUTE 1C: Salting / Gombal Tipis (Index 15 - Index 17)
    // ==========================================
    // Index 15
    {
        speaker: "girl",
        mood: "Embarrassed",
        text: "W-Wha...?! N-Ngapain merhatiin aku?! Lagian emang aku obat penenang apa?!"
    },
    // Index 16
    {
        speaker: "narration",
        text: "Clara langsung memalingkan wajahnya dengan cepat. Langkah kakinya mendadak jadi agak terburu-buru, mencoba menyembunyikan rona merah tipis di pipinya."
    },
    // Index 17
    {
        speaker: "girl",
        mood: "Confused",
        text: "D-Jangan tiba-tiba ngomong hal kayak gitu ah... Nanti kalau ada murid lain yang denger bisa salah paham tahu!",
        nextIndex: 18 // Lompat ke Segmen 2
    },

    // --- SEGMEN 2: PERTANYAAN VANITAS (TENTANG KETUA KELAS) ---
    // Index 18
    {
        speaker: "narration",
        text: "Kami terus berjalan menyusuri koridor lantai satu yang dihiasi jejeran loker siswa. Keadaan masih cukup sepi karena bel masuk baru akan berbunyi sekitar lima belas menit lagi."
    },
    // Index 19
    {
        speaker: "player",
        text: "Clara, aku mau nanya sesuatu boleh?"
    },
    // Index 20
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Boleh dong, mau nanya apa? Seputar denah sekolah atau peraturan?"
    },
    // Index 21
    {
        speaker: "player",
        text: "Bukan, soal kamu. Kenapa sih kamu mau-maunya repot jadi ketua kelas atau ketua murid kayak gini? Kan tugasnya banyak."
    },
    // Index 22
    {
        speaker: "girl",
        mood: "Happy",
        text: "Oh, itu! Hmm... sebenernya awalnya karena ditunjuk paksa sih sama wali kelas tahun lalu, katanya aku kelihatan paling tegas."
    },
    // Index 23
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Tapi lama-kelamaan seru juga tahu. Aku suka aja ngebantu orang-orang di kelas biar semuanya kompak. Emang kelihatan repot banget ya?"
    },
    // Index 24: PILIHAN 2
    {
        choices: [
            { 
                text: "Keren sih, berarti kamu emang bisa diandelin sama semua orang.", 
                playerDialogue: "Keren sih menurutku, berarti kamu emang tipe orang yang bisa diandelin sama semua orang.",
                affection: 15, 
                targetIndex: 25 
            },
            { 
                text: "Kelihatan capek aja. Apa kamu nggak pernah ngerasa pengen egois sesekali?", 
                playerDialogue: "Kelihatan capek aja dari luar. Apa kamu nggak pernah ngerasa pengen egois sesekali demi diri sendiri?",
                affection: 10, 
                targetIndex: 28 
            },
            { 
                text: "Iya, kelihatan kayak orang yang cari-cari kerjaan tambahan.", 
                playerDialogue: "Iya, jujur kelihatan kayak orang yang lagi sibuk cari-cari kerjaan tambahan.",
                affection: -5, 
                targetIndex: 31 
            }
        ]
    },

    // ==========================================
    // RUTE 2A: Pujian Tulus (Index 25 - Index 27)
    // ==========================================
    // Index 25
    {
        speaker: "girl",
        mood: "Embarrassed",
        text: "E-Eh? Diandelin ya... B-Biasa aja kok, jangan muji berlebihan gitu ah."
    },
    // Index 26
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Tapi makasih ya. Denger kalimat itu dari anak baru kayak kamu rasanya bikin usaha capekku selama ini kebayar, hehe."
    },
    // Index 27
    {
        speaker: "player",
        text: "Sama-sama. Itu fakta kok.",
        nextIndex: 34 // Lompat ke Segmen 3
    },

    // ==========================================
    // RUTE 2B: Pertanyaan Emosional (Index 28 - Index 30)
    // ==========================================
    // Index 28
    {
        speaker: "girl",
        mood: "Confused",
        text: "Ngerasa pengen egois...? Hmm, jujur kadang-kadang ada sih momen kayak gitu. Pas tugas numpuk terus anak-anak kelas malah berisik."
    },
    // Index 29
    {
        speaker: "girl",
        mood: "Sad",
        text: "Kalau udah kayak gitu, rasanya pengen ngumpet aja di perpus sampai jam pulang."
    },
    // Index 30
    {
        speaker: "player",
        text: "Kalau besok-besok kamu pengen ngumpet, ajak aku aja. Biar ada temennya.",
        nextIndex: 34 // Lompat ke Segmen 3
    },

    // ==========================================
    // RUTE 2C: Kurang Sensitif (Index 31 - Index 33)
    // ==========================================
    // Index 31
    {
        speaker: "girl",
        mood: "Angry",
        text: "Heii! Cari kerjaan tambahan gimana maksudnya?! Ini namanya tanggung jawab tahu!"
    },
    // Index 32
    {
        speaker: "girl",
        mood: "Annoyed",
        text: "Lagian kalau nggak ada yang mau ngurusin hal-hal kecil, kelas bisa jadi berantakan. Tahu ah, bikin kesel aja jawabannya."
    },
    // Index 33
    {
        speaker: "narration",
        text: "Clara melipat kedua tangannya di depan dada sambil mendengus pelan. Dia mempercepat jalannya sekitar satu langkah di depanku.",
        nextIndex: 34 // Lompat ke Segmen 3
    },

    // --- SEGMEN 3: BALASAN PERTANYAAN CLARA (TENTANG TEMAN) ---
    // Index 34
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Sekarang gantian aku yang mau nanya! Jangan curang ya, dari tadi kamu terus yang nanya-nanya."
    },
    // Index 35
    {
        speaker: "player",
        text: "Iya, iya, silakan ketua kelas. Mau nanya apa?"
    },
    // Index 36
    {
        speaker: "girl",
        mood: "Confused",
        text: "Di sekolah lama kamu dulu... kamu udah punya banyak temen dekat belum? Atau jangan-jangan kamu tipe penyendiri yang suka mojok?"
    },
    // Index 37: PILIHAN 3
    {
        choices: [
            { 
                text: "Punya beberapa kok, tapi aku emang lebih suka ketenangan.", 
                playerDialogue: "Punya beberapa kok, tapi aku emang dasarnya lebih suka ketenangan.",
                affection: 5, 
                targetIndex: 38 
            },
            { 
                text: "Nggak punya. Makanya di sini aku berharap kamu jadi temen pertamaku.", 
                playerDialogue: "Nggak punya sama sekali. Makanya di sekolah baru ini aku berharap kamu yang jadi temen pertamaku.",
                affection: 15, 
                targetIndex: 40 
            },
            { 
                text: "Kepo banget ya. Emang ada hubungannya sama tugas OSIS kamu?", 
                playerDialogue: "Kamu kepo banget ya. Emang pertanyaan barusan ada hubungannya sama tugas ketertiban OSIS kamu?",
                affection: -10, 
                targetIndex: 43 
            }
        ]
    },

    // ==========================================
    // RUTE 3A (Index 38 - Index 39)
    // ==========================================
    // Index 38
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Oh, kirain antisosial banget, hehe. Tapi bagus deh kalau emang suka ketenangan, berarti kamu nggak bakal bikin pusing guru-guru di sini."
    },
    // Index 39
    {
        speaker: "player",
        text: "Tenang aja, aku murid teladan yang hemat kata-kata.",
        nextIndex: 46 // Lompat ke Segmen 4
    },

    // ==========================================
    // RUTE 3B (Index 40 - Index 42)
    // ==========================================
    // Index 40
    {
        speaker: "girl",
        mood: "Embarrassed",
        text: "T-Temen pertama?! Uh... k-kamu ini ngomongnya kasual banget ya."
    },
    // Index 41
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Tapi... tentu aja! Mulai detik ini, anggap aja aku ini temen pertama kamu di sekolah ini. Kalau ada apa-apa, cari aku duluan, oke?"
    },
    // Index 42
    {
        speaker: "player",
        text: "Siap, mohon bantuannya ya, Clara.",
        nextIndex: 46 // Lompat ke Segmen 4
    },

    // ==========================================
    // RUTE 3C (Index 43 - Index 45)
    // ==========================================
    // Index 43
    {
        speaker: "girl",
        mood: "Sad",
        text: "M-Masa nanya gitu dibilang kepo sih... Kan aku cuma mau kenal lebih dekat biar gampang bantuin kamu adaptasi."
    },
    // Index 44
    {
        speaker: "narration",
        text: "Suara Clara mendadak mengecil. Matanya melihat ke arah sepatunya sendiri dengan tatapan yang sedikit kecewa."
    },
    // Index 45
    {
        speaker: "player",
        text: "Eh, maaf, maksudku bukan gitu kok. Jangan dimasukin ke hati ya.",
        nextIndex: 46 // Lompat ke Segmen 4
    },

    // --- SEGMEN 4: JALAN DI LORONG & JOKE RELEVAN ---
    // Index 46
    {
        speaker: "narration",
        text: "Kami melewati papan pengumuman besar yang penuh dengan pamflet klub dan ekstrakurikuler sekolah. Beberapa poster tampak sudah agak usang."
    },
    // Index 47
    {
        speaker: "player",
        text: "Ngomong-ngomong, dari tadi kamu ngomong terus, apa kamu nggak pernah ngerasa capek atau kehabisan bahan obrolan?"
    },
    // Index 48
    {
        speaker: "girl",
        mood: "Laughing",
        text: "Hahaha! Banyak yang bilang gitu sih. Tapi entah kenapa kalau ngobrol sama orang baru, bawaannya pengen mencairkan suasana terus."
    },
    // Index 49
    {
        speaker: "girl",
        mood: "Confused",
        text: "Emangnya suara aku ngeganggu ya? Maaf deh kalau aku terlalu berisik..."
    },
    // Index 50: PILIHAN 4
    {
        choices: [
            { 
                text: "Nggak kok, malah aku suka. Lorongnya jadi nggak terasa sepi.", 
                playerDialogue: "Nggak kok, malah aku suka dengerinnya. Lorong sekolahnya jadi nggak terasa sepi dan dingin.",
                affection: 15, 
                targetIndex: 51 
            },
            { 
                text: "Dikit sih, tapi seenggaknya telingaku belum dapet polusi suara.", 
                playerDialogue: "Dikit sih, tapi seenggaknya telingaku belum mendadak dapet polusi suara robot.",
                affection: 5, 
                targetIndex: 54 
            },
            { 
                text: "Iya, agak pusing dengernya dari tadi.", 
                playerDialogue: "Iya, jujur agak sedikit pusing dengernya dari tadi di halte.",
                affection: -10, 
                targetIndex: 57 
            }
        ]
    },

    // ==========================================
    // RUTE 4A (Index 51 - Index 53)
    // ==========================================
    // Index 51
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Beneran? Syukurlah kalau kamu nggak keganggu. Berartii aku boleh terus ngomong sepanjang jalan ini kan?"
    },
    // Index 52
    {
        speaker: "player",
        text: "Boleh, silakan aja. Lagian dengerin kamu ngomong itu lumayan menghibur."
    },
    // Index 53
    {
        speaker: "girl",
        mood: "Happy",
        text: "Hehe, asyik! Jarang-jarang ada anak yang mau jadi pendengar setia kayak kamu.",
        nextIndex: 60 // Lompat ke Segmen 5
    },

    // ==========================================
    // RUTE 4B (Index 54 - Index 56)
    // ==========================================
    // Index 54
    {
        speaker: "girl",
        mood: "Annoyed",
        text: "Polusi suara dibilang?! Wah, parah banget bahasamu ya! Gini-gini suaraku ini aset penting buat ngatur anak-anak kelas tahu!"
    },
    // Index 55
    {
        speaker: "player",
        text: "Hahaha, iya ampun. Tapi seru kok, bercanda doang tadi."
    },
    // Index 56
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Awas aja ya kalau diulangin lagi. Aku mogok ngomong baru tahu rasa kamu.",
        nextIndex: 60 // Lompat ke Segmen 5
    },

    // ==========================================
    // RUTE 4C (Index 57 - Index 59)
    // ==========================================
    // Index 57
    {
        speaker: "girl",
        mood: "Sad",
        text: "Oh... maaf ya. Kalau gitu aku diem aja deh sampai kita sampai di depan kelas nanti."
    },
    // Index 58
    {
        speaker: "narration",
        text: "Clara benar-benar menutup rapat mulutnya. Suasana koridor seketika berubah menjadi sunyi dan kaku selama beberapa saat."
    },
    // Index 59
    {
        speaker: "player",
        text: "Eh, jangan diem beneran dong. Malah jadi serem ini lorongnya.",
        nextIndex: 60 // Lompat ke Segmen 5
    },

    // --- SEGMEN 5: INTERAKSI INISIATIF (LAPER / BREAKFAST) ---
    // Index 60
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Eh, liat deh ke arah jendela luar lorong itu. Itu area kantin belakang sekolah kita. Aduh... mencium bau aromanya dari jauh gini, perutku mendadak laper lagi deh."
    },
    // Index 61: PILIHAN 5
    {
        choices: [
            { 
                text: "Nanti pas jam istirahat, mau aku beliin sesuatu di kantin?", 
                playerDialogue: "Nanti pas jam istirahat, mau aku beliin jajanan atau sesuatu di kantin belakang?",
                affection: 15, 
                targetIndex: 62 
            },
            { 
                text: "Perasaan tadi sebelum masuk gerbang kamu billing udah sarapan deh.", 
                playerDialogue: "Perasaan tadi pas di depan gerbang kamu bilang sendiri udah selesai sarapan deh.",
                affection: 0, 
                targetIndex: 65 
            },
            { 
                text: "Sama. Malah dari tadi pagi aku belum sempet makan apa-apa.", 
                playerDialogue: "Sama sih. Malah sebenernya dari tadi pagi aku belum sempet masuk makanan apa-apa.",
                affection: 10, 
                targetIndex: 68 
            }
        ]
    },

    // ==========================================
    // RUTE 5A (Index 62 - Index 64)
    // ==========================================
    // Index 62
    {
        speaker: "girl",
        mood: "Embarrassed",
        text: "M-Mau dibeliin?! Eh... t-tidak usah repot-repot! Masa anak baru malah ngebeliin jajanan buat ketua kelasnya sih."
    },
    // Index 63
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Tapi... kalau kamu maksa, nanti kita ke kantin bareng-bareng aja pas istirahat pertama ya? Aku yang tunjukin stan makanan paling enak!"
    },
    // Index 64
    {
        speaker: "player",
        text: "Boleh, deal ya. Jangan sampai lupa.",
        nextIndex: 71 // Lompat ke Segmen 6
    },

    // ==========================================
    // RUTE 5B (Index 65 - Index 67)
    // ==========================================
    // Index 65
    {
        speaker: "girl",
        mood: "Annoyed",
        text: "Ih, kamu ini nggak tahu aja ya? Kapasitas perut cewek itu terbagi dua: satu buat makanan utama, satu lagi buat camilan!"
    },
    // Index 66
    {
        speaker: "player",
        text: "Teori dari mana itu? Baru denger aku."
    },
    // Index 67
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Teori mutlak anak perempuan sedunia! Makanya jangan heran kalau liat aku makan lagi nanti.",
        nextIndex: 71 // Lompat ke Segmen 6
    },

    // ==========================================
    // RUTE 5C (Index 68 - Index 70)
    // ==========================================
    // Index 68
    {
        speaker: "girl",
        mood: "Confused",
        text: "Hah?! Beneran belum sarapan? Kenapa nggak bilang dari tadi pas di halte bus coba?"
    },
    // Index 69
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Untung aja di dalam tas aku selalu sedia roti cadangan. Nih, ambil buat kamu ganjel perut dulu sebelum kelas dimulai."
    },
    // Index 70
    {
        speaker: "player",
        text: "Wah, makasih banyak ya, Clara. Kamu bener-bener penyelamat.",
        nextIndex: 71 // Lompat ke Segmen 6
    },

    // --- SEGMEN 6: PERTANYAAN CLARA (TENTANG KENAPA SELALU KALEM) ---
    // Index 71
    {
        speaker: "narration",
        text: "Kami melewati belokan koridor menuju tangga tengah. Beberapa anak dari kelas lain mulai terlihat berjalan berlawanan arah dengan kami, sesekali menyapa Clara."
    },
    // Index 72
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Oiya Vanitas, aku perhatiin dari tadi cara jalan kamu, tatapan mata kamu... semuanya kelihatan tenang banget. Kok bisa sih?"
    },
    // Index 73
    {
        speaker: "girl",
        mood: "Confused",
        text: "Maksudku, apa kamu emang jarang marah? Atau kamu emang sengaja masang muka misterius begini biar kelihatan keren di depan cewek?"
    },
    // Index 74: PILIHAN 6
    {
        choices: [
            { 
                text: "Bawaan dari lahir mungkin. Tapi kalau di deket kamu, jantungku agak kurang kalem.", 
                playerDialogue: "Mungkin emang bawaan dari lahir. Tapi jujur, kalau posisinya lagi sedekat ini sama kamu, jantungku agak kurang kalem sih.",
                affection: 15, 
                targetIndex: 75 
            },
            { 
                text: "Nggak juga, aku cuma lagi males mikir hal yang nggak penting aja.", 
                playerDialogue: "Nggak juga, aslinya aku cuma lagi males aja mikirin hal-hal sepele yang nggak penting.",
                affection: 5, 
                targetIndex: 78 
            },
            { 
                text: "Emang mukaku kelihatan sok keren ya? Maaf deh kalau mengganggu.", 
                playerDialogue: "Emang dari luar mukaku kelihatan sok keren ya? Maaf deh kalau itu bikin kamu keganggu.",
                affection: -5, 
                targetIndex: 81 
            }
        ]
    },

    // ==========================================
    // RUTE 6A (Index 75 - Index 77)
    // ==========================================
    // Index 75
    {
        speaker: "girl",
        mood: "Embarrassed",
        text: "J-Jantung kamu... kurang kalem...?! M-Maksudnya gimana coba?!"
    },
    // Index 76
    {
        speaker: "girl",
        mood: "Confused",
        text: "Tuh kan! Kamu suka banget ya tiba-tiba ngomong hal rancu yang bikin orang mikir macem-macem!"
    },
    // Index 77
    {
        speaker: "player",
        text: "Hahaha, mukamu langsung merah gitu. Berarti eksperimenku berhasil.",
        nextIndex: 84 // Lompat ke Segmen 7
    },

    // ==========================================
    // RUTE 6B (Index 78 - Index 80)
    // ==========================================
    // Index 78
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Oalah, ternyata aslinya mageran ya, cuma ketutup sama casing-nya yang kelihatan cool, hahaha."
    },
    // Index 79
    {
        speaker: "player",
        text: "Nah, itu kamu tahu. Jangan berekspektasi terlalu tinggi sama aku."
    },
    // Index 80
    {
        speaker: "girl",
        mood: "Happy",
        text: "Nggak apa-apa, seenggaknya itu bikin kamu jadi unik dibanding anak cowok lain yang hobinya pecicilan.",
        nextIndex: 84 // Lompat ke Segmen 7
    },

    // ==========================================
    // RUTE 6C (Index 81 - Index 83)
    // ==========================================
    // Index 81
    {
        speaker: "girl",
        mood: "Sad",
        text: "Eh, bukan gitu! Bukan mengganggu kok! Aduh, jangan salah paham, maksudku tuh beneran kelihatan bagus, bukan sok keren!"
    },
    // Index 82
    {
        speaker: "girl",
        mood: "Confused",
        text: "Kenapa malah aku yang jadi panik gini ya... Pokoknya lupakan pertanyaanku tadi!"
    },
    // Index 83
    {
        speaker: "player",
        text: "Iya, iya, aman kok. Nggak aku masukin ke hati.",
        nextIndex: 84 // Lompat ke Segmen 7
    },

    // --- SEGMEN 7: PERTANYAAN VANITAS (KLUB SEKOLAH) ---
    // Index 84
    {
        speaker: "narration",
        text: "Langkah kami membawa kami ke lantai dua gedung sekolah. Di dinding koridor atas ini, terdapat deretan piala yang tersusun rapi di dalam lemari kaca."
    },
    // Index 85
    {
        speaker: "player",
        text: "Selain sibuk jadi pengurus kelas, kamu ikut klub ekstrakurikuler apa di sini?"
    },
    // Index 86
    {
        speaker: "girl",
        mood: "Happy",
        text: "Aku ikut klub Jurnalistik! Bagian ngewawancarain orang dan nulis artikel bulanan sekolah. Seru banget tahu!"
    },
    // Index 87
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Kalau kamu sendiri nanti pas udah masuk, ada rencana mau gabung klub apa? Di sini ada klub olahraga, seni, sampai robotik loh."
    },
    // Index 88: PILIHAN 7
    {
        choices: [
            { 
                text: "Klub Jurnalistik aja deh, biar bisa sering-sering ketemu kamu.", 
                playerDialogue: "Gimana kalau aku masuk Klub Jurnalistik aja? Biar nanti di luar kelas kita bisa sering-sering ketemu.",
                affection: 15, 
                targetIndex: 89 
            },
            { 
                text: "Belum kepikiran, mungkin klub yang santai dan nggak banyak nuntut waktu.", 
                playerDialogue: "Belum kepikiran sih, mungkin nanti aku cari klub yang santai dan nggak banyak nuntut waktu luang.",
                affection: 5, 
                targetIndex: 92 
            },
            { 
                text: "Kayaknya aku nggak bakal ikut klub apa-apa, mau langsung pulang aja.", 
                playerDialogue: "Kayaknya aku nggak bakal ikut klub apa-apa deh. Pulang sekolah mau langsung balik ke rumah.",
                affection: 0, 
                targetIndex: 95 
            }
        ]
    },

    // ==========================================
    // RUTE 7A (Index 89 - Index 91)
    // ==========================================
    // Index 89
    {
        speaker: "girl",
        mood: "Embarrassed",
        text: "M-Masuk jurnalistik demi aku?! N-Nggak boleh tahu! Pilih klub itu harus sesuai minat bakat kamu, bukan karena alasan personal!"
    },
    // Index 90
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Tapi... kalau kamu beneran daftar ke ruang jurnalistik nanti sore, aku yang bakal jadi mentor pertama kamu. Jadi... ya, pikirin baik-baik aja."
    },
    // Index 91
    {
        speaker: "player",
        text: "Sip, tawaran mentor yang cukup menarik.",
        nextIndex: 98 // Lompat ke Segmen 8
    },

    // ==========================================
    // RUTE 7B (Index 92 - Index 94)
    // ==========================================
    // Index 92
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Klub yang santai ya? Hmm... klub catur atau klub pencinta alam mungkin cocok buat tipe-tipe kayak kamu."
    },
    // Index 93
    {
        speaker: "player",
        text: "Catur boleh juga sih, nggak perlu banyak lari-lari."
    },
    // Index 94
    {
        speaker: "girl",
        mood: "Happy",
        text: "Nanti aku kenalin sama ketua klub caturnya deh, kebetulan dia temen sekelas kita juga.",
        nextIndex: 98 // Lompat ke Segmen 8
    },

    // ==========================================
    // RUTE 7C (Index 95 - Index 97)
    // ==========================================
    // Index 95
    {
        speaker: "girl",
        mood: "Annoyed",
        text: "Yah... tim langsung pulang alias pasukan 'woles' ternyata. Sayang banget, padahal masa SMA itu paling seru kalau ikut kegiatan klub."
    },
    // Index 96
    {
        speaker: "player",
        text: "Mungkin nanti aku berubah pikiran kalau situasinya mendukung."
    },
    // Index 97
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Oke, aku pegang ucapan kamu ya. Siapa tahu beberapa minggu lagi kamu mendadak mohon-mohon pengen masuk klub.",
        nextIndex: 98 // Lompat ke Segmen 8
    },

    // --- SEGMEN 8: PERTANYAAN INISIATIF KEDUA (SIAPA YANG DISUKA) ---
    // Index 98
    {
        speaker: "narration",
        text: "Udara pagi mulai terasa sedikit hangat saat sinar matahari menembus jendela koridor lantai dua. Kelas kami, ruangan 2-A, sudah mulai dekat di ujung lorong."
    },
    // Index 99
    {
        speaker: "player",
        text: "Clara, mumpung masih berdua aja... boleh aku tanya satu hal lagi?"
    },
    // Index 100
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Sure, mau nanya apa lagi? Serius amat mukanya."
    },
    // Index 101: PILIHAN 8
    {
        choices: [
            { 
                text: "Sebagai ketua kelas yang populer, kamu lagi punya seseorang yang kamu suka nggak?", 
                playerDialogue: "Sebagai ketua kelas yang cukup populer di sini, kamu sendiri lagi punya seseorang yang kamu taksir atau kamu suka nggak?",
                affection: 20, 
                targetIndex: 102 
            },
            { 
                text: "Kamu punya banyak temen cowok nggak di kelas nanti?", 
                playerDialogue: "Kamu kira-kira punya banyak temen cowok dekat nggak di kelas 2-A nanti?",
                affection: 5, 
                targetIndex: 106 
            },
            { 
                text: "Nggak jadi deh, kelupaan mau nanya apa tadi.", 
                playerDialogue: "Ah, nggak jadi deh. Mendadak malah kelupaan mau nanya apa tadi pas jalan.",
                affection: -5, 
                targetIndex: 109 
            }
        ]
    },

    // ==========================================
    // RUTE 8A: Pertanyaan Asmara (Index 102 - Index 105)
    // ==========================================
    // Index 102
    {
        speaker: "girl",
        mood: "Embarrassed",
        text: "O-Orang yang aku s-suka...?! K-Kenapa mendadak nanyain soal hubungan pribadi kayak gitu?!"
    },
    // Index 103
    {
        speaker: "girl",
        mood: "Confused",
        text: "A-Aku ini nggak pernah mikirin hal-hal romantis kayak gitu tahu! Dari dulu fokusku cuma belajar sama ngurusin organisasi!"
    },
    // Index 104
    {
        speaker: "player",
        text: "Oh, berarti beneran belum ada ya?"
    },
    // Index 105
    {
        speaker: "girl",
        mood: "Embarrassed",
        text: "B-Bukan urusan kamu! Lagian kenapa kamu nanya gitu?! Jangan-jangan... k-kamu..."
    },
    // Index 106 -- Titik Transisi Dialog
    {
        speaker: "player",
        text: "Aku cuma penasaran aja, santai. Mukamu merah banget loh itu.",
        nextIndex: 112 // Lompat ke Segmen 9
    },

    // ==========================================
    // RUTE 8B: Pertanyaan Teman Cowok (Index 107 - Index 108)
    // ==========================================
    // Index 107
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Temen cowok? Ya lumayan banyak sih, kan statusku ketua kelas, jadi otomatis harus akrab sama semua anak tanpa tebang pilih."
    },
    // Index 108
    {
        speaker: "player",
        text: "Nggak ada yang deket banget atau mencurigakan?"
    },
    // Index 109
    {
        speaker: "girl",
        mood: "Laughing",
        text: "Hahaha! Mencurigakan gimana maksudnya? Semuanya murni temen sekelas kok, tenang aja.",
        nextIndex: 112 // Lompat ke Segmen 9
    },

    // ==========================================
    // RUTE 8C: Pembatalan / Dingin (Index 110 - Index 111)
    // ==========================================
    // Index 110
    {
        speaker: "girl",
        mood: "Annoyed",
        text: "Ih! Kebiasaan deh bikin orang penasaran terus dipotong tengah jalan gitu aja!"
    },
    // Index 111
    {
        speaker: "player",
        text: "Maaf, efek kurang sarapan jadi memorinya agak nge-lag.",
    },
    // Index 112
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Awas aja ya, utang satu pertanyaan kamu ke aku.",
        nextIndex: 113 // Lompat ke Segmen 9
    },

    // --- SEGMEN 9: FLIRT ALAMI & KONFLIK EMOSI CLARA ---
    // Index 113
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Eh Vanitas, jujur ya... menurut kamu aku ini tipe ketua kelas yang terlalu galak atau banyak ngatur nggak sih?"
    },
    // Index 114
    {
        speaker: "girl",
        mood: "Sad",
        text: "Soalnya kadang beberapa anak suka bisik-bisik kalau aku lagi negasin aturan seragam atau jadwal piket."
    },
    // Index 115: PILIHAN 9
    {
        choices: [
            { 
                text: "Menurutku tindakanmu itu imut kok. Berarti kamu peduli.", 
                playerDialogue: "Malah menurutku tindakanmu selama ini itu imut kok. Itu bukti konkret kalau kamu beneran peduli sama mereka.",
                affection: 15, 
                targetIndex: 116 
            },
            { 
                text: "Enggak kok, justru itu bikin suasana kelas jadi lebih hidup.", 
                playerDialogue: "Enggak kok, justru ketegasan kamu itu yang bikin suasana dalam kelas nanti jadi jauh lebih hidup.",
                affection: 10, 
                targetIndex: 119 
            },
            { 
                text: "Dikit sih, mungkin dikurangin aja porsi ngaturnya.", 
                playerDialogue: "Dikit sih harus kuakui, mungkin ke depannya bisa dikurangin dikit aja porsi ngaturnya.",
                affection: -5, 
                targetIndex: 122 
            }
        ]
    },

    // ==========================================
    // RUTE 9A: Imut (Index 116 - Index 118)
    // ==========================================
    // Index 116
    {
        speaker: "girl",
        mood: "Embarrassed",
        text: "I-Imut...?! P-Bagian mananya yang imut coba pas marah-marah?! Kamu aneh banget deh selera penilaiannya!"
    },
    // Index 117
    {
        speaker: "narration",
        text: "Clara meremas ujung seragamnya, berusaha keras mengalihkan pandangannya ke luar jendela koridor, membiarkan angin pagi meniup rambutnya."
    },
    // Index 118
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Tapi... dibilang kayak gitu... bikin aku ngerasa kalau apa yang aku lakuin nggak sia-sia. Makasih ya, Vanitas.",
        nextIndex: 125 // Lompat ke Segmen 10
    },

    // ==========================================
    // RUTE 9B: Hidup (Index 119 - Index 121)
    // ==========================================
    // Index 119
    {
        speaker: "girl",
        mood: "Happy",
        text: "Bener kan? Kalau kelas terlalu sunyi juga kesannya kayak kuburan. Mending berisik tapi tertib!"
    },
    // Index 120
    {
        speaker: "player",
        text: "Betul, lagian itu kan emang udah jadi tugas kamu."
    },
    // Index 121
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Hehe, iya juga sih. Makasih ya udah dukung cara kerjaku.",
        nextIndex: 125 // Lompat ke Segmen 10
    },

    // ==========================================
    // RUTE 9C: Mengurangi (Index 122 - Index 124)
    // ==========================================
    // Index 122
    {
        speaker: "girl",
        mood: "Sad",
        text: "Oh... gitu ya menurut pandangan kamu sebagai anak baru..."
    },
    // Index 123
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Mungkin emang bener aku yang harus lebih banyak nahan diri mulai sekarang."
    },
    // Index 124
    {
        speaker: "player",
        text: "Eh, jangan terlalu dipikirin, itu cuma pendapat sekilas aja kok.",
        nextIndex: 125 // Lompat ke Segmen 10
    },

    // --- SEGMEN 10: PERTANYAAN TERAKHIR SEBELUM SAMPAI ---
    // Index 125
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Nggak kerasa ya, kita udah hampir sampai di depan pintu kelas kita. Tuh, plang kelas 2-A udah kelihatan di depan."
    },
    // Index 126
    {
        speaker: "player",
        text: "Iya ya, jalannya pelan tapi kerasa cepet banget karena sambil ngobrol."
    },
    // Index 127
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Vanitas... makasih ya buat obrolan sepanjang koridor ini. Aku ngerasa kita udah jadi lebih akrab dibanding pas di halte bus tadi."
    },
    // Index 128
    {
        speaker: "player",
        text: "Aku juga ngerasa gitu. Makasih juga udah mau dengerin candaanku."
    },
    // Index 129
    {
        speaker: "girl",
        mood: "Happy",
        text: "Sama-sama! Nah, sebelum kita buka pintunya dan resmi masuk ke dalam situasi kelas... ada kata-kata terakhir nggak?"
    },
    // Index 130: PILIHAN 10
    {
        choices: [
            { 
                text: "Semoga setelah di dalam kelas nanti, kamu tetep sering ngajak aku ngobrol ya.", 
                playerDialogue: "Semoga pas udah di dalam kelas nanti, kamu tetep sering-sering ngajak aku ngobrol kayak gini ya.",
                affection: 15, 
                targetIndex: 131 
            },
            { 
                text: "Siap kapten, aku bakal selalu di belakangmu.", 
                playerDialogue: "Siap kapten ketua kelas! Aku bakal selalu jalan mengekor di belakangmu.",
                affection: 10, 
                targetIndex: 133 
            },
            { 
                text: "Nggak ada, ayo langsung masuk aja.", 
                playerDialogue: "Nggak ada kata khusus sih. Ayo langsung geser pintunya dan masuk aja.",
                affection: 0, 
                targetIndex: 135 
            }
        ]
    },

    // ==========================================
    // RUTE 10A (Index 131 - Index 132)
    // ==========================================
    // Index 131
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Tentu aja! Tenang aja, aku nggak bakal ngebiarin temen pertamaku ini kesepian di pojokan kelas."
    },
    // Index 132
    {
        speaker: "player",
        text: "Janji ya? Janji ketua kelas itu mutlak.",
        nextIndex: 136 // Lompat ke Akhir Segmen
    },

    // ==========================================
    // RUTE 10B (Index 133 - Index 134)
    // ==========================================
    // Index 133
    {
        speaker: "girl",
        mood: "Embarrassed",
        text: "K-Kapten apa sih, panggil nama biasa aja kayak tadi! Bikin merinding aja dengernya, hahaha."
    },
    // Index 134
    {
        speaker: "girl",
        mood: "Happy",
        text: "Tapi iya, ayo kita hadapi anak-anak kelas bareng-bareng!",
        nextIndex: 136 // Lompat ke Akhir Segmen
    },

    // ==========================================
    // RUTE 10C (Index 135)
    // ==========================================
    // Index 135
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Oke deh, singkat padat dan jelas banget khas kamu ya, wkwkwk.",
        nextIndex: 136
    },

    // --- SEGMEN ENDING EPISODE 2 ---
    // Index 136
    {
        speaker: "narration",
        text: "Kami berdua akhirnya menghentikan langkah kaki tepat di depan pintu geser kayu bertuliskan papan perak 'Kelas 2-A'."
    },
    // Index 137
    {
        speaker: "narration",
        text: "Sayup-sayup dari balik pintu, terdengar suara riuh obrolan murid-murid lain yang sudah datang lebih awal. Hari baru kami di sekolah ini akan segera dimulai."
    },
    // Index 138
    {
        speaker: "girl",
        mood: "Happy",
        text: "Nah... kita sudah sampai di depan depan kelas."
    },
    // Index 139
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Udah siap buat liat ruangan baru kamu, Vanitas?"
    },
    // Index 140
    {
        speaker: "player",
        text: "Siap. Mari kita buka."
    },
    // Index 141
    {
        speaker: "system",
        text: "To Be Continued...",
        background: "image/lorong.jpg",
        fade: true
    }
];
