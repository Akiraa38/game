const episode1 = [
    // =========================================================================
    // BAGIAN 1: PERTEMUAN AWAL DI GERBANG SEKOLAH (3 PILIHAN)
    // =========================================================================
    {
        background: "image/sekolah.jpg",
        bgm: "school",
        speaker: "narration",
        text: "Pagi hari di sekolah baru. Aku berdiri di depan gerbang, memperhatikan daun-daun gugur. Tenang dan asing. Tiba-tiba seorang gadis menghampiriku."
    },
    {
        speaker: "girl",
        sprite: "visible",
        mood: "Neutral",
        text: "Hei! Kamu murid pindahan itu ya? Yang namanya Vanitas? Salam kenal, aku Clara, ketua kelas 2-A!"
    },
    {
        speaker: "player",
        text: "Bagaimana aku harus meresponnya?",
        choices: [
            { text: "Salam kenal, Clara. Mohon bantuannya.", playerDialogue: "Salam kenal, Clara. Mohon bantuannya.", targetIndex: 3, affection: 5, mood: "Happy" },
            { text: "Ya. Aku Vanitas.", playerDialogue: "Ya. Aku Vanitas.", targetIndex: 4, affection: 0, mood: "Neutral" },
            { text: "Tahu dari mana namaku?", playerDialogue: "Tahu dari mana namaku?", targetIndex: 5, affection: -5, mood: "Confused" }
        ]
    },
    {
        speaker: "girl",
        mood: "Happy",
        text: "Sama-sama! Wah, kamu tipikal orang yang sopan ya. Jarang-jarang ada murid pindahan se-tenang ini.",
        nextIndex: 6
    },
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Singkat padat dan jelas ya... Kamu agak pendiam ternyata. Oke deh, tidak apa-apa.",
        nextIndex: 6
    },
    {
        speaker: "girl",
        mood: "Annoyed",
        text: "Ih, ketus banget! Ya tahu dari wali kelas lah, kan aku ditugaskan untuk menjemputmu di sini!",
        nextIndex: 6
    },
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Daripada kita berdiri terus di depan gerbang kaya patung selamat datang, mending kita jalan santai di area taman depan ini yuk sebelum masuk?"
    },
    {
        speaker: "player",
        text: "Boleh, lagipula bel masuk sepertinya masih sekitar lima belas menit lagi."
    },
    {
        speaker: "girl",
        mood: "Happy",
        text: "Sip! Ikuti aku ya. Oh ya, jalannya pelan-pelan saja, tidak usah terburu-buru menikmati udara pagi."
    },
    {
        speaker: "narration",
        text: "Clara mulai melangkah mendahuluiku menyusuri jalan setapak halaman sekolah. Langkah kakinya tampak ringan, senada dengan ayunan rambutnya."
    },
    {
        speaker: "narration",
        text: "Aku mengekor di belakangnya, mempertahankan jarak sekitar dua langkah di bawah rindangnya pepohonan halaman depan."
    },
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Hmm... suasana pagi di halaman luar ini segar banget ya? Aku selalu suka bau udara sekolah di jam-jam segini."
    },
    {
        speaker: "player",
        text: "Iya, udaranya cukup bersih untuk ukuran sekolah di tengah kota."
    },
    {
        speaker: "girl",
        mood: "Happy",
        text: "Kan? Pohon-pohon besar di taman depan ini dirawat banget sama penjaga sekolah. Makanya adem."
    },
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Ngomong-ngomong, Vanitas. Kamu asalnya dari kota mana sebelum pindah ke sini? Kalau boleh tahu, sih."
    },

    // =========================================================================
    // BAGIAN 2: BASA-BASI ASAL DAERAH & IMPRESI AWAL (3 PILIHAN)
    // =========================================================================
    {
        speaker: "player",
        text: "Asal kotaku...",
        choices: [
            { text: "Dari kota metropolitan yang padat.", playerDialogue: "Aku dari kota besar. Di sana jauh lebih bising dan macet dibandingkan di sini.", targetIndex: 16, affection: 5, mood: "Neutral" },
            { text: "Dari daerah pinggiran yang tenang.", playerDialogue: "Aku pindah dari daerah pinggiran. Suasananya mirip seperti kota ini, jadi aku tidak terlalu kaget.", targetIndex: 21, affection: 5, mood: "Comfortable" },
            { text: "Rahasia, tebak saja sendiri.", playerDialogue: "Bukannya lebih seru kalau kamu menebaknya sendiri nanti seiring berjalannya waktu?", targetIndex: 26, affection: 10, mood: "Laughing" }
        ]
    },
    // Jalur Kota Besar (16-20)
    {
        speaker: "girl",
        mood: "Surprised",
        text: "Wah, dari kota metropolitan?! Pantas saja pembawaanmu kelihatan keren dan agak cuek!"
    },
    {
        speaker: "player",
        text: "Benarkah? Kurasa penampilanku biasa saja."
    },
    {
        speaker: "girl",
        mood: "Laughing",
        text: "Beneran tahu! Anak-anak kota besar biasanya punya aura yang beda. Tapi pasti di sana stres banget ya karena macet?"
    },
    {
        speaker: "player",
        text: "Bisa dibilang begitu. Makanya aku merasa halaman sekolah ini jauh lebih santai."
    },
    {
        speaker: "girl",
        mood: "Happy",
        text: "Baguslah kalau kamu suka! Berarti kamu bakal betah di sini lama-lama.",
        nextIndex: 31
    },
    // Jalur Pinggiran (21-25)
    {
        speaker: "girl",
        mood: "Happy",
        text: "Oh! Pantas saja kamu kelihatan tenang banget sejak tadi berdiri di gerbang."
    },
    {
        speaker: "player",
        text: "Apakah aku terlihat se-santai itu?"
    },
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Iya, kelihatan damai banget. Orang yang dari tempat tenang biasanya tidak gampang panik saat masuk lingkungan baru."
    },
    {
        speaker: "player",
        text: "Mungkin itu hanya perasaanku yang sudah terbiasa dengan kesunyian."
    },
    {
        speaker: "girl",
        mood: "Happy",
        text: "Tapi itu poin plus kok! Di kelas kita nanti anak-anaknya agak ramai, jadi kehadiranmu bisa bikin suasana seimbang.",
        nextIndex: 31
    },
    // Jalur Tebak Sendiri (26-30)
    {
        speaker: "girl",
        mood: "Laughing",
        text: "Hahaha! Main rahasia-rahasiaan nih? Oke, siapa takut! Aku paling suka teka-teki!"
    },
    {
        speaker: "player",
        text: "Kuharap tebakanmu nanti tidak meleset jauh."
    },
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Tenang saja, insting ketua kelas itu kuat tahu! Hmm... kalau dari caramu bicara, tebakanku sih kamu dari kota yang gak terlalu bising."
    },
    {
        speaker: "player",
        text: "Menarik. Kita lihat saja nanti apakah itu benar."
    },
    {
        speaker: "girl",
        mood: "Happy",
        text: "Asyik, tantangan diterima! Jangan bocorkan jawabannya duluan ya!",
        nextIndex: 31
    },

    // =========================================================================
    // BAGIAN 3: BASA-BASI ALASAN PINDAH SEKOLAH (3 PILIHAN)
    // =========================================================================
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Tapi ya, aku masih penasaran... Kenapa sih kamu mendadak pindah ke sini di pertengahan semester gini? Kan tanggung banget."
    },
    {
        speaker: "player",
        text: "Alasan kepindahanku...",
        choices: [
            { text: "Ikut urusan pekerjaan orang tua.", playerDialogue: "Karena urusan pekerjaan orang tua yang mendadak dipindahkan ke kota ini.", targetIndex: 33, affection: 5, mood: "Neutral" },
            { text: "Ingin mencari suasana baru.", playerDialogue: "Aku cuma ingin mencari suasana baru yang lebih tenang dan jauh dari rutinitas lama.", targetIndex: 43, affection: 5, mood: "Happy" },
            { text: "Ada masalah sedikit di sekolah lama.", playerDialogue: "Ada sedikit urusan rumit di sekolah lamaku yang membuatku terpaksa pindah.", targetIndex: 53, affection: 2, mood: "Sad" }
        ]
    },
    // Jalur Pekerjaan Orang Tua (33-42)
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Oh, masalah pekerjaan orang tua ya... Klasik sih, tapi pasti berat banget buat kamunya."
    },
    {
        speaker: "player",
        text: "Kenapa kamu berpikir ini berat?"
    },
    {
        speaker: "girl",
        mood: "Sad",
        text: "Ya iyalah! Harus ninggalin teman-teman lama, lingkungan lama, terus tiba-tiba dipaksa mulai dari nol lagi di tempat asing."
    },
    {
        speaker: "player",
        text: "Aku tidak terlalu memikirkan hal itu. Lagipula aku tidak punya banyak teman dekat di sekolah lama."
    },
    {
        speaker: "girl",
        mood: "Surprised",
        text: "Eh? Serius? Orang se-cool kamu tidak punya banyak teman?"
    },
    {
        speaker: "player",
        text: "Aku lebih suka menyendiri. Hubungan pertemanan yang terlalu luas terkadang melelahkan."
    },
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Hmm... masuk akal sih. Kadang drama pertemanan itu emang bikin pusing kepala."
    },
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Tapi tenang saja, di kelas 2-A anak-anaknya baik kok. Kami tidak memaksa orang untuk langsung membaur kalau tidak nyaman."
    },
    {
        speaker: "player",
        text: "Terima kasih, Clara. Itu cukup melegakan didengar."
    },
    {
        speaker: "girl",
        mood: "Happy",
        text: "Sama-sama! Lagian kan sekarang kamu udah punya aku sebagai teman pertamamu di sini, iya kan?",
        nextIndex: 63
    },
    // Jalur Suasana Baru (43-52)
    {
        speaker: "girl",
        mood: "Laughing",
        text: "Suasana baru? Wah, alasanmu santai banget ya! Berarti kamu tipe orang yang berani mengambil risiko."
    },
    {
        speaker: "player",
        text: "Bukan berani, aku hanya bosan dengan rutinitas yang monoton."
    },
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Monoton ya... Memang sih, kalau setiap hari melakukan hal yang persis sama, hidup rasanya datar banget."
    },
    {
        speaker: "player",
        text: "Begitulah. Makanya perpindahan ini seperti memutar lembaran buku yang baru."
    },
    {
        speaker: "girl",
        mood: "Happy",
        text: "Wih, bahasamu puitis juga! 'Memutar lembaran buku baru'... Aku suka filosofinya!"
    },
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Kalau begitu, semoga sekolah ini bisa memberikan warna baru yang tidak membosankan buat kamu ya."
    },
    {
        speaker: "player",
        text: "Semoga saja. Setidaknya pertemuan pertama ini tidak buruk."
    },
    {
        speaker: "girl",
        mood: "Embarrassed",
        text: "E-Eh? Pertemuan denganku maksudnya? Kamu bisa aja deh...",
        nextIndex: 63
    },
    // Jalur Masalah di Sekolah Lama (53-62)
    {
        speaker: "girl",
        mood: "Sad",
        text: "Eh... Maaf ya, aku gak bermaksud buat mengorek masa lalu atau bikin kamu gak nyaman."
    },
    {
        speaker: "player",
        text: "Tidak apa-apa, itu bukan masalah besar yang ilegal kok."
    },
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Baguslah kalau begitu. Intinya, apa pun yang terjadi di sana, anggap saja sekarang kamu punya kesempatan buat 'reset' semuanya."
    },
    {
        speaker: "player",
        text: "Iya, kamu benar. Lembaran baru dimulai hari ini."
    },
    {
        speaker: "girl",
        mood: "Happy",
        text: "Yap! Kalau butuh bantuan adaptasi atau ada yang ganggu kamu, bilang saja ke aku selaku ketua kelas!",
        nextIndex: 63
    },

    // =========================================================================
    // BAGIAN 4: OBROLAN KULINER & INTERAKSI DI TAMAN SEKOLAH (3 PILIHAN)
    // =========================================================================
    {
        speaker: "narration",
        text: "Kami terus berjalan memutari area taman luar. Angin berembus pelan, membawa aroma rumput basah."
    },
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Oh iya, mumpung ingat. Nanti kalau jam istirahat atau pulang sekolah, kamu harus tahu kalau di sekitar sini ada surga kuliner hidden gem!"
    },
    {
        speaker: "player",
        text: "Hidden gem? Seperti apa contohnya?"
    },
    {
        speaker: "girl",
        mood: "Happy",
        text: "Banyak! Ada kedai ramen kecil di gang seberang, terus ada toko kue wafel yang hits banget. Kamu sendiri seleranya gimana? Suka makanan manis, gurih, atau pedas?"
    },
    {
        speaker: "player",
        text: "Mengenai makanan favorit, aku lebih suka...",
        choices: [
            { text: "Makanan yang manis.", playerDialogue: "Aku lebih menyukai makanan yang manis, seperti kue atau camilan berasa cokelat.", targetIndex: 68, affection: 10, mood: "Happy" },
            { text: "Makanan yang praktis dan mengenyangkan.", playerDialogue: "Aku tipe yang praktis, apa saja bebas asalkan gurih dan porsinya mengenyangkan.", targetIndex: 83, affection: 2, mood: "Neutral" },
            { text: "Makanan yang super pedas.", playerDialogue: "Aku penikmat makanan pedas. Semakin membakar lidah, semakin meningkatkan selera makanku.", targetIndex: 98, affection: 5, mood: "Surprised" }
        ]
    },
    // Jalur Manis (68-82)
    {
        speaker: "girl",
        mood: "Surprised",
        text: "Wah, serius?! Kamu suka makanan manis? Jarang loh ada cowok yang blak-blakan ngaku suka manis!"
    },
    {
        speaker: "player",
        text: "Apakah itu aneh bagi seorang laki-laki?"
    },
    {
        speaker: "girl",
        mood: "Laughing",
        text: "Enggak aneh sama sekali! Malah menurutku itu imut tahu. Berarti lidah kita samaan, aku penggila makanan manis!"
    },
    {
        speaker: "player",
        text: "Imut... kurasa kata itu tidak cocok untukku."
    },
    {
        speaker: "girl",
        mood: "Happy",
        text: "Cocok kok! Pokoknya nanti kapan-kapan kalau ada waktu senggang, aku wajib tunjukkan kedai wafel madu terbaik di dekat sini!"
    },
    {
        speaker: "player",
        text: "Wafel madu? Kedengarannya menarik. Aku akan memegang janjimu."
    },
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Siap! Tenang saja, Clara kalau soal rekomendasi makanan manis tidak pernah mengecewakan!",
        nextIndex: 113
    },
    // Jalur Praktis/Gurih (83-97)
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Tipikal cowok sekali ya pemikirannya! Yang penting perut kenyang, porsi banyak, urusan rasa nomor dua yang penting gurih."
    },
    {
        speaker: "player",
        text: "Makanan adalah sumber energi. Mengapa harus dipersulit jika yang simpel sudah cukup?"
    },
    {
        speaker: "girl",
        mood: "Laughing",
        text: "Benar juga sih. Logika yang sangat efisien! Kalau begitu, kamu pasti bakal suka sama warung nasi goreng gila di dekat halte depan."
    },
    {
        speaker: "player",
        text: "Nasi goreng gila? Namanya unik."
    },
    {
        speaker: "girl",
        mood: "Happy",
        text: "Iya! Porsinya kuli, toping sosis dan baksonya melimpah, harganya juga ramah di kantong pelajar. Pas banget buat tipe praktis kayak kamu."
    },
    {
        speaker: "player",
        text: "Rekomendasi yang bagus. Aku akan mencobanya suatu hari nanti."
    },
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Harus coba! Nanti kalau kamu bingung jalannya, aku bisa antarkan ke sana. Tenang saja.",
        nextIndex: 113
    },
    // Jalur Pedas (98-112)
    {
        speaker: "girl",
        mood: "Surprised",
        text: "Hah?! Pecinta pedas?! Wah, lambungmu terbuat dari besi ya, Vanitas?!"
    },
    {
        speaker: "player",
        text: "Sensasi panasnya itu justru yang membuat makan jadi bersemangat."
    },
    {
        speaker: "girl",
        mood: "Annoyed",
        text: "Aduh, kalau aku sih langsung nyerah! Bisa-bisa mules seharian di UKS."
    },
    {
        speaker: "player",
        text: "Artinya kamu tidak kuat makan pedas?"
    },
    {
        speaker: "girl",
        mood: "Laughing",
        text: "Sama sekali enggak kuat! Tapi kalau kamu suka pedas, pas di belakang sekolah ada warung ayam geprek level 1-10 yang legendaris loh. Kapan-kapan kuberitahu tempatnya!",
        nextIndex: 113
    },

    // =========================================================================
    // BAGIAN 5: OBROLAN MENDEKATI GEDUNG & ATURAN GURU (3 PILIHAN)
    // =========================================================================
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Eh, lihat deh, beberapa siswa lain udah mulai berjalan menaiki tangga teras depan bangunan utama tuh."
    },
    {
        speaker: "player",
        text: "Iya, langkah kaki mereka tampak agak terburu-buru."
    },
    {
        speaker: "girl",
        mood: "Annoyed",
        text: "Soalnya mereka takut sama guru matematika jam pertama hari ini, Pak Harto. Beliau terkenal killer banget dan gak suka murid telat!"
    },
    {
        speaker: "player",
        text: "Bagaimana tanggapanku tentang guru killer...",
        choices: [
            { text: "Aku tidak masalah dengan guru yang tegas.", playerDialogue: "Selama aku mengikuti aturan dan tidak membuat masalah, guru killer bukan ancaman bagiku.", targetIndex: 117, affection: 5, mood: "Neutral" },
            { text: "Waduh, aku lemah dalam pelajaran matematika.", playerDialogue: "Aduh, sudahlah killer, ditambah matematika lagi. Itu kombinasi terburuk bagiku.", targetIndex: 122, affection: 10, mood: "Surprised" },
            { text: "Sepertinya ini akan jadi hari yang panjang.", playerDialogue: "Baru hari pertama saja tantangannya sudah seberat ini ya. Menarik juga.", targetIndex: 127, affection: 5, mood: "Comfortable" }
        ]
    },
    // Jalur Tegas (117-121)
    {
        speaker: "girl",
        mood: "Surprised",
        text: "Wow... Mental baja sekali! Kamu tidak takut sama sekali mendengarnya?"
    },
    {
        speaker: "player",
        text: "Ketakutan tidak akan mengubah nilai lembar tugas."
    },
    {
        speaker: "girl",
        mood: "Laughing",
        text: "Hahaha! Jawabanmu realistis banget! Tapi serius, Pak Harto itu kalau menatap murid suka bikin merinding tahu.",
        nextIndex: 132
    },
    // Jalur Lemah Matematika (122-126)
    {
        speaker: "girl",
        mood: "Laughing",
        text: "Hahaha! Akhirnya... keluar juga ekspresi manusiawimu! Ternyata seorang Vanitas bisa panik juga ya kalau dengar kata matematika."
    },
    {
        speaker: "player",
        text: "Angka yang rumit dikombinasikan dengan rumus berbelit bukanlah keahlian terbaikku."
    },
    {
        speaker: "girl",
        mood: "Happy",
        text: "Tenang, tenang! Kan ada aku di sini, nilai matematikaku selalu masuk tiga besar kelas kok! Nanti kita bisa belajar bareng.",
        nextIndex: 132
    },
    // Jalur Hari yang Panjang (127-131)
    {
        speaker: "girl",
        mood: "Happy",
        text: "Benar! Tapi pembawaanmu santai begini bikin suasana tegangnya jadi agak berkurang."
    },
    {
        speaker: "player",
        text: "Aku hanya mencoba berdamai dengan keadaan."
    },
    {
        speaker: "girl",
        mood: "Comfortable",
        text: "Bagus, pertahankan sikap optimis itu! Setidaknya hari pertamamu gak akan berjalan datar.",
        nextIndex: 132
    },

    // =========================================================================
    // BAGIAN 6: ENDING EPISODE 1 - DEPAN PINTU UTAMA (3 PILIHAN MUTLAK)
    // =========================================================================
    {
        speaker: "narration",
        text: "Kami akhirnya berjalan meninggalkan taman, menaiki beberapa anak tangga teras, dan kini berdiri tepat di depan pintu masuk gedung utama sekolah."
    },
    {
        speaker: "girl",
        mood: "Neutral",
        text: "Nah, kita sudah berada tepat di depan pintu utama. Begitu kita melangkah lewat pintu ini, petualangan barumu dimulai. Kamu sudah benar-benar siap, Vanitas?"
    },
    {
        speaker: "system",
        text: "Tentukan kalimat terakhirmu untuk menutup Episode 1 (Pilihan 3 Kata):",
        choices: [
            { text: "A. Tentu saja, mari kita mulai ini.", playerDialogue: "Tentu saja. Tidak ada alasan untuk ragu lagi, mari kita hadapi apa yang ada di dalam.", targetIndex: 135, affection: 10, mood: "Happy" },
            { text: "B. Hubungi aku kalau kelasnya mulai membosankan ya.", playerDialogue: "Aku siap. Tapi kalau suasananya mulai membosankan, ingatkan aku tentang janji kulineran tadi ya.", targetIndex: 136, affection: 5, mood: "Laughing" },
            { text: "C. Aku berani karena kamu menemaniku.", playerDialogue: "Aku siap. Lagipula, selama ada ketua kelas yang andal menemaniku di samping, kurasa semua akan baik-baik saja.", targetIndex: 137, affection: 20, mood: "Embarrassed" }
        ]
    },
    // Respon A
    {
        speaker: "girl",
        mood: "Happy",
        text: "Keren! Tegas banget kepribadianmu. Semangat ini yang aku suka!",
        nextIndex: 138
    },
    // Respon B
    {
        speaker: "girl",
        mood: "Laughing",
        text: "Hahaha! Dasar kamu ya, masih sempat-sempatnya memikirkan makanan di situasi tegang begini!",
        nextIndex: 138
    },
    // Respon C
    {
        speaker: "girl",
        mood: "Embarrassed",
        text: "E-eh?! Kenapa kalimatmu tiba-tiba jadi manis begitu... Bikin orang salah tingkah saja pagi-pagi begini.",
        nextIndex: 138
    },
    // Konklusi Episode 1
    {
        speaker: "girl",
        mood: "Happy",
        text: "Mendengar jawabanmu membuatku lega. Baik, mari kita bulatkan tekad kita!"
    },
    {
        speaker: "player",
        text: "Ayo kita masuk."
    }
];
