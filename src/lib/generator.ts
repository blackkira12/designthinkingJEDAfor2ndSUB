import { agents } from '../data/agents';

// Helper to check keywords
function containsAny(text: string, keywords: string[]): boolean {
  const lower = text.toLowerCase();
  return keywords.some(k => lower.includes(k.toLowerCase()));
}

export function generateEmpathyMap(input: string) {
  const isJudi = containsAny(input, ['judi', 'judol', 'slot', 'gacor']);
  const isPinjol = containsAny(input, ['pinjol', 'dc', 'kolektor', 'teror', 'sebar data']);
  const isPaylater = containsAny(input, ['paylater', 'belanja', 'shopee', 'tokopedia', 'gopay']);

  let pemicu = "kebutuhan hidup mendesak";
  if (isJudi) pemicu = "adiksi kemenangan judi online";
  else if (isPinjol) pemicu = "ancaman penagihan kasar dan intimidasi";
  else if (isPaylater) pemicu = "gaya hidup impulsif dan konsumerisme instan";

  return {
    says: [
      `"Saya cuma butuh sedikit dana cepat untuk nutup lubang hari ini, bulan depan pasti beres."`,
      `"Malu sekali kalau sampai kantor atau keluarga tahu saya dikejar-kejar penagih utang."`,
      isJudi ? `"Satu kemenangan lagi bisa melunasi semuanya, saya yakin."` : `"Saya terpaksa pakai karena tidak ada jaminan dan syaratnya cuma KTP."`
    ],
    thinks: [
      "Bagaimana caranya bertahan hari ini tanpa diteror debt collector?",
      "Kenapa bunga dan denda bertambah begitu cepat padahal pokoknya kecil?",
      "Apakah saya adalah kegagalan terbesar di keluarga saya?"
    ],
    does: [
      "Mengajukan pinjaman baru di aplikasi lain untuk membayar cicilan lama.",
      "Mematikan nomor ponsel atau mengabaikan nomor tidak dikenal karena panik.",
      "Membatasi pengeluaran makan secara ekstrem dan meminjam uang teman dekat."
    ],
    feels: [
      "Kecemasan akut yang konstan (denyut jantung cepat setiap mendengar notifikasi HP).",
      "Rasa bersalah dan rasa malu yang mendalam terhadap lingkaran sosial.",
      "Keputusasaan karena merasa terjebak dalam lingkaran setan tanpa jalan keluar."
    ],
    analisis: `Berdasarkan masukan: "${input.substring(0, 80)}...", pemicu utama diidentifikasi sebagai ${pemicu}. Pengguna mengalami distres kognitif tingkat tinggi yang menghambat pengambilan keputusan rasional.`
  };
}

export function generatePersona(input: string) {
  const isJudi = containsAny(input, ['judi', 'judol', 'slot']);
  const isPaylater = containsAny(input, ['paylater', 'konsumtif', 'belanja']);

  if (isJudi) {
    return {
      name: "Rian (26 tahun)",
      role: "Staf Logistik Swasta",
      quote: `"Saya merasa terjebak. Uang gaji habis untuk bayar cicilan slot, lalu pinjam pinjol untuk bertahan hidup."`,
      profile: "Pekerja kerah biru berpendapatan UMR yang awalnya mencoba judi slot untuk hiburan dan mencari penghasilan tambahan. Terjebak dalam adiksi dan menggunakan 4 aplikasi pinjol untuk menambal kekalahannya.",
      goals: ["Melunasi total utang Rp12 juta agar bisa tidur tenang.", "Menghentikan kebiasaan judi slot sepenuhnya.", "Memulihkan kepercayaan orang tua."],
      painPoints: ["Dikejar teror penagihan di tempat kerja.", "Merasa malu luar biasa sehingga enggan bercerita ke keluarga.", "Tidak tahu cara mengelola keuangan yang tersisa untuk makan."]
    };
  } else if (isPaylater) {
    return {
      name: "Siska (23 tahun)",
      role: "Fresh Graduate / Junior Customer Service",
      quote: `"Paylater itu rasanya bukan utang sampai tagihannya datang bersamaan di akhir bulan."`,
      profile: "Karyawan muda di Jakarta yang aktif di media sosial. Tergiur kemudahan paylater untuk membeli kosmetik, pakaian kerja, dan nongkrong demi tuntutan sosial pertemanan.",
      goals: ["Keluar dari jebakan batas limit paylater.", "Mampu menabung untuk dana darurat secara mandiri.", "Mengurangi perilaku belanja impulsif saat stres."],
      painPoints: ["Gaji bulanan langsung habis hanya untuk membayar minimum payment.", "Adanya dorongan psikologis (FOMO) saat melihat promo aplikasi e-commerce.", "Catatan SLIK OJK memburuk sehingga takut tidak bisa mengajukan KPR di masa depan."]
    };
  } else {
    return {
      name: "Budi (34 tahun)",
      role: "Kepala Keluarga / Driver Ojek Online",
      quote: `"Saya meminjam demi susu anak dan bayar kontrakan. Sekarang bunganya berlipat ganda melebihi pokoknya."`,
      profile: "Bapak dua anak dengan penghasilan harian tidak menentu. Meminjam dari pinjol ilegal saat anak sakit keras karena proses pencairan yang instan tanpa jaminan.",
      goals: ["Mendapatkan dispensasi waktu pembayaran tanpa teror.", "Memetakan mana utang yang sah secara hukum OJK dan mana yang ilegal.", "Meningkatkan pendapatan harian tanpa menambah utang."],
      painPoints: ["Ancaman penyebaran data pribadi ke seluruh kontak telepon.", "Bunga harian yang tidak masuk akal (mencapai 1% per hari).", "Tidak memiliki akses ke pinjaman formal perbankan karena tidak ada slip gaji tetap."]
    };
  }
}

export function generateHMW(input: string) {
  const isJudi = containsAny(input, ['judi', 'judol', 'slot']);
  const isPinjol = containsAny(input, ['pinjol', 'dc', 'kolektor', 'teror']);

  if (isJudi) {
    return [
      "Bagaimana kita bisa membantu pengguna mengalihkan impuls adiksi judi online saat mereka merasa terdesak uang?",
      "Bagaimana kita bisa merancang antarmuka penilai risiko emosional yang menyadarkan pengguna tentang kerugian kumulatif judi tanpa memicu rasa defensif?",
      "Bagaimana kita bisa menyediakan ruang cerita anonim yang membebaskan mereka dari stigma rasa bersalah untuk mencari pertolongan awal?"
    ];
  } else if (isPinjol) {
    return [
      "Bagaimana kita bisa menciptakan fitur 'Jeda Emosional' (Impulse Pause) yang efektif menahan pengguna meminjam lagi saat dikejar kepanikan penagihan?",
      "Bagaimana kita bisa memvisualisasikan peta utang secara sederhana agar pengguna memahami prioritas pelunasan tanpa merasa terintimidasi oleh angka?",
      "Bagaimana kita bisa memitigasi rasa cemas akibat ancaman debt collector melalui edukasi hukum hak-hak konsumen yang ramah psikologis?"
    ];
  } else {
    return [
      "Bagaimana kita bisa merancang antarmuka intervensi emosional keuangan yang memicu rasa tenang saat pengguna mengalami panik finansial?",
      "Bagaimana kita bisa memfasilitasi koneksi aman antara korban terlilit utang dengan mentor keuangan independen secara anonim?",
      "Bagaimana kita bisa membantu pengguna menolak tawaran pinjaman baru dengan mengaktifkan pengingat janji masa depan diri mereka sendiri (future-self commitment)?"
    ];
  }
}

export function generateFeaturePriority(_input: string) {
  return [
    {
      feature: "Impulse Pause Button (Jeda Emosional 24 Jam)",
      description: "Fitur yang memaksa pengguna menunggu 24 jam sebelum mengajukan komitmen pinjaman baru, dilengkapi latihan pernapasan penurun kecemasan.",
      reach: 4, // 1-5
      impact: 5,
      confidence: 4,
      effort: 2,
      score: 40, // (R * I * C) / E
      status: "Prioritas Utama (Must-Have)",
      reason: "Sangat efektif memutus rantai impulsif panik finansial dengan tingkat kesulitan teknis sedang."
    },
    {
      feature: "Anonymous Debt Priority Map & Tracker",
      description: "Visualisasi interaktif berbentuk pohon utang yang mengurutkan kewajiban bayar berdasarkan tingkat keamanan hukum (prioritas OJK dulu, abaikan ilegal).",
      reach: 5,
      impact: 4,
      confidence: 5,
      effort: 3,
      score: 33,
      status: "Prioritas Utama (Must-Have)",
      reason: "Menghilangkan kebingungan administratif pengguna yang terjerat banyak aplikasi sekaligus."
    },
    {
      feature: "Crisis Helpline & Mental Health Escalation",
      description: "Integrasi tombol darurat yang menghubungkan pengguna dengan psikolog atau hotline pencegahan bunuh diri saat mendeteksi indikasi distres kritis.",
      reach: 3,
      impact: 5,
      confidence: 5,
      effort: 1,
      score: 75,
      status: "Krusial Keselamatan (Crucial)",
      reason: "Penyelamat nyawa bagi pengguna yang mengalami tekanan ekstrim dari penagih utang."
    },
    {
      feature: "Self-Assessment Index Kesejahteraan Emosional",
      description: "Kuesioner singkat berbasis psikologi untuk mengetahui level kesehatan mental keuangan tanpa mengumpulkan data pribadi.",
      reach: 5,
      impact: 3,
      confidence: 4,
      effort: 2,
      score: 30,
      status: "Pembangun Kepercayaan (Should-Have)",
      reason: "Membantu validasi diri pengguna sebelum memulai pemetaan keuangan."
    },
    {
      feature: "Safe Storytelling Room (Curhat Anonim)",
      description: "Komunitas curhat tertutup terenkripsi tanpa identitas untuk saling menguatkan antar sesama korban pinjol.",
      reach: 4,
      impact: 4,
      confidence: 3,
      effort: 4,
      score: 12,
      status: "Daftar Tunggu (Could-Have)",
      reason: "Bagus untuk dukungan sosial, namun membutuhkan moderasi ketat agar tidak disalahgunakan untuk berbagi trik curang (galbay)."
    }
  ];
}

export function generateProposalDraft(sectionId: string, input: string): string {
  const defaultDrafts: Record<string, string> = {
    team_identity: 
      `Draf untuk diskusi tim (Reviewer: Raka):\n` +
      `Proposal kami mengajukan tim multidisiplin JEDA yang menggabungkan kepakaran psikologi krisis (Dr. Nadira), kepatuhan hukum fintech (Maya Kartika), dan rekayasa data keuangan (Bima Aditya). Pendekatan terpadu ini sengaja dirancang untuk merespon permasalahan multi-dimensi pinjol di Indonesia yang menyentuh aspek psikologis korban, kepatuhan OJK, dan model mitigasi data. Masukan Anda mengenai "${input || 'komposisi keahlian'}" telah diintegrasikan guna mematangkan pembagian tugas penulisan proposal.`,
    executive_summary: 
      `Draf untuk diskusi tim (Reviewer: Fajar):\n` +
      `JEDA (Jaga Emosi dan Dana) hadir sebagai inovasi intervensi emosional keuangan non-komersial pertama di Indonesia. Melalui prototype "Design Thinking Agent Studio", tim merumuskan solusi atas krisis pinjol/judi online yang menargetkan kelompok retail rentan. Kami mendefinisikan JEDA bukan sebagai platform pinjaman atau restrukturisasi utang komersial, melainkan sebagai katup penyelamat emosi (impulse control) dan panduan tata kelola utang pribadi. Dengan fokus pada aspek "${input || 'pencegahan gali lubang tutup lubang'}", solusi ini bertujuan memperkuat ketahanan finansial retail nasional dengan target merangkul 100.000 pengguna aktif secara aman.`,
    problem_alignment: 
      `Draf untuk diskusi tim (Reviewer: Raka):\n` +
      `Penyelarasan dengan Problem Statement 1 PIDI 2026 berfokus pada ketahanan retail keuangan. JEDA mengidentifikasi bahwa pelemahan ketahanan ekonomi rumah tangga sering kali dipicu oleh ketidakstabilan psikologis konsumen saat mengambil keputusan kredit berisiko tinggi. Dengan mengintervensi aspek emosional ("${input || 'kecemasan akibat teror pinjol'}") sebelum transaksi terjadi, JEDA menstabilkan lini pertahanan paling awal dalam ekosistem keuangan retail nasional.`,
    problem_validation: 
      `Draf untuk diskusi tim (Reviewer: Dina):\n` +
      `Validasi masalah menunjukkan bahwa kepanikan kognitif (cognitive overload) akibat teror pinjol dan adiksi judi online merusak kemampuan berfikir rasional jangka panjang. Data lapangan yang kami kumpulkan mengindikasikan "${input || 'adanya stigma rasa malu sosial yang mendalam'}" sebagai penghambat utama korban mencari pertolongan hukum, sehingga mereka terus berputar dalam siklus pinjaman predator.`,
    problem_solution_mapping: 
      `Draf untuk diskusi tim (Reviewer: Raka):\n` +
      `Kami memetakan secara presisi solusi intervensi emosional untuk menjawab akar masalah krisis finansial. Pemicu kepanikan diredam dengan Impulse Pause Button, kebingungan prioritas diselesaikan dengan Debt Priority Map, dan kebutuhan dukungan sosial anonim dijawab dengan Safe Storytelling Room. Terkait "${input || 'fitur intervensi emosional'}", pemetaan ini membuktikan bahwa setiap fitur JEDA dikembangkan langsung dari rasa empati yang tervalidasi.`,
    ecosystem_alignment: 
      `Draf untuk diskusi tim (Reviewer: Maya):\n` +
      `JEDA tidak berdiri sendiri melainkan bertindak sebagai sistem intervensi awal yang menyalurkan pengguna secara aman ke instansi berwenang. Kemitraan strategis dirancang bersama AFPI untuk penyelarasan aduan penagihan etis, lembaga psikologi untuk penanganan depresi berat, serta perbankan formal untuk edukasi penempatan dana darurat. Masukan Anda tentang "${input || 'kemitraan ekosistem formal'}" memperkuat kelayakan operasional platform.`,
    solution_mechanism: 
      `Draf untuk diskusi tim (Reviewer: Saras):\n` +
      `Mekanisme solusi JEDA mengedepankan Calm UX. Ketika mendeteksi kata kunci kepanikan atau pemicu finansial ("${input || 'ingin berutang cepat'}"), sistem memandu pengguna untuk masuk ke dalam visualisasi relaksasi mental sebelum membuka modul perencanaan utang. Alur ini menjamin martabat pengguna tetap terjaga tanpa adanya penghakiman visual atau verbal.`,
    impact_scale: 
      `Draf untuk diskusi tim (Reviewer: Arman):\n` +
      `Target dampak JEDA difokuskan pada pemulihan kesehatan finansial retail. Kami menargetkan penurunan tingkat kepanikan finansial dan adiksi pinjol sebesar 45% dalam 12 bulan pertama pengoperasian. Dengan menjangkau sektor rentan seperti "${input || 'pekerja informal dan mahasiswa'}", skala dampak sosial platform ini secara langsung berkontribusi pada penurunan rasio NPL/TWP90 nasional.`,
    impact_measurement: 
      `Draf untuk diskusi tim (Reviewer: Bima):\n` +
      `Keberhasilan intervensi JEDA dievaluasi melalui Financial Stress Index (FSI) bulanan dan Transaction Interception Rate (TIR). Data kuantitatif ini dianalisis menggunakan metode explainable AI untuk memastikan efektivitas intervensi emosional JEDA terhadap "${input || 'pembatalan transaksi utang berisiko'}" terbukti secara statistik.`,
    system_value_prop: 
      `Draf untuk diskusi tim (Reviewer: Fajar):\n` +
      `Nilai publik yang ditawarkan JEDA adalah penyelamatan kesejahteraan finansial rakyat dari skema pemerasan digital. Dibandingkan aplikasi edukasi pasif, JEDA memberikan pendampingan aktif pada titik krusial pengambilan keputusan. Masukan Anda mengenai "${input || 'penyelamatan kesejahteraan emosional publik'}" mempertegas posisi kami sebagai benteng pelindung konsumen.`,
    system_architecture: 
      `Draf untuk diskusi tim (Reviewer: Bima):\n` +
      `Infrastruktur teknologi JEDA dirancang dengan pendekatan minimalisasi data. Kami memisahkan identitas pribadi (PII) dengan data finansial asesmen menggunakan tokenisasi terenkripsi. Modul intervensi dirancang ringan sehingga mudah diakses via mobile web dalam kondisi sinyal terbatas, dengan fokus pengamanan pada "${input || 'perlindungan data sensitif pengguna dari kebocoran'}".`,
    solution_originality: 
      `Draf untuk diskusi tim (Reviewer: Raka):\n` +
      `Orisinalitas JEDA terletak pada penolakan kami terhadap komersialisasi penderitaan utang. Saat kompetitor lain fokus mengkonsolidasikan utang dengan bunga baru atau menjual jasa mediasi berbayar, JEDA menawarkan intervensi emosional gratis dengan pembiayaan mandiri melalui sponsor korporasi. Keterkaitan "${input || 'fokus psikologi finansial retail'}" menegaskan keunikan posisi kami di mata juri.`,
    tech_innovation: 
      `Draf untuk diskusi tim (Reviewer: Bima):\n` +
      `Inovasi metode JEDA menggabungkan teori psikologi kognitif perilaku (CBT) dengan deteksi dini pola stres transaksi digital. Kami merancang algoritma non-invasif untuk mendeteksi impulsivitas pengguna berdasarkan akselerasi interaksi layar, memberikan intervensi instan tepat sebelum transaksi pinjol ilegal terjadi pada aspek "${input || 'deteksi stres transaksi'}".`,
    creativity_implementation: 
      `Draf untuk diskusi tim (Reviewer: Saras):\n` +
      `Kreativitas diwujudkan melalui "Quiet Interface" yang menurunkan distraksi kognitif. Kami menggunakan interaksi berbasis mikro-narasi di mana pengguna diajak berkomunikasi secara interaktif dengan asisten virtual yang ramah, menjembatani rasa takut mereka terhadap angka nominal utang yang rumit, khususnya terkait "${input || 'visualisasi beban utang'}".`,
    data_feasibility: 
      `Draf untuk diskusi tim (Reviewer: Bima):\n` +
      `Kelayakan implementasi didukung oleh kemudahan akses data sekunder OJK dan data kualitatif anonim komunitas korban pinjol. Pemanfaatan data difokuskan pada pembentukan pola pemicu finansial ("${input || 'identifikasi pola gali lubang tutup lubang'}") secara etis untuk melatih model self-assessment kami tanpa melanggar privasi pengguna.`,
    security_compliance: 
      `Draf untuk diskusi tim (Reviewer: Maya):\n` +
      `Keamanan data adalah prioritas mutlak demi mematuhi UU PDP No. 27/2022. Platform JEDA tidak mengumpulkan data nomor telepon kontak darurat, melarang scraping data pribadi, dan menjamin hak pengguna untuk menghapus datanya kapan saja. Masukan Anda perihal "${input || 'kepatuhan privasi data konsumen'}" memperkuat sistem pertahanan hukum kami.`,
    mvp_readiness: 
      `Draf untuk diskusi tim (Reviewer: Raka):\n` +
      `Roadmap MVP JEDA dirancang untuk rilis dalam waktu 4 minggu, mencakup modul Self-Assessment Risiko Emosional, Visualisasi Debt Planner dasar, dan direktori hotline krisis psikologi. Skala prioritas difokuskan untuk mematangkan "${input || 'modul intervensi awal'}" guna membuktikan konsep sebelum diintegrasikan dengan mitra konseling komersial.`,
    problem_market_fit: 
      `Draf untuk diskusi tim (Reviewer: Arman):\n` +
      `Kesesuaian masalah dengan pasar divalidasi oleh besarnya jumlah masyarakat kelas menengah ke bawah yang terjebak dalam ekosistem pinjol akibat minimnya alternatif keuangan formal yang cepat. JEDA masuk sebagai solusi non-finansial ("${input || 'ruang aman intervensi emosi'}") yang menjembatani kebutuhan mendesak masyarakat sebelum mereka terjerumus ke lingkaran setan utang.`,
    value_proposition: 
      `Draf untuk diskusi tim (Reviewer: Raka):\n` +
      `JEDA menawarkan proposisi nilai ganda. Bagi pengguna, kami menyediakan perlindungan psikologis dan pemetaan utang gratis. Bagi mitra korporasi/perbankan, kami menyediakan sarana penyaluran CSR yang efektif, transparan, dan berdampak nyata pada ketahanan ekonomi serta produktivitas masyarakat sasaran, khususnya pada aspek "${input || 'peningkatan kesejahteraan finansial'}".`,
    business_model: 
      `Draf untuk diskusi tim (Reviewer: Arman):\n` +
      `Model bisnis keberlanjutan sosial JEDA mengandalkan subsidi silang B2B. Pendapatan utama bersumber dari lisensi Employee Financial Wellness Program untuk korporasi padat karya guna menurunkan stres karyawan akibat pinjol, serta dana sponsor inklusi keuangan dari perbankan nasional. Terkait "${input || 'keberlanjutan biaya operasional'}", model ini menjamin platform tetap gratis bagi korban utang.`
  };

  return defaultDrafts[sectionId] || `Draf untuk diskusi tim:\nBagian proposal ini akan fokus pada pembahasan mengenai "${input || 'ide dan implikasi solusi'}" dengan penekanan pada aspek keselarasan masalah, metodologi intervensi etis, serta kepatuhan penuh terhadap prinsip perlindungan konsumen retail keuangan.`;
}

export function generateRiskWarning(input: string): string {
  const isJudi = containsAny(input, ['judi', 'judol', 'slot']);
  const isPinjol = containsAny(input, ['pinjol', 'dc', 'kolektor', 'teror']);
  const isIllegal = containsAny(input, ['ilegal', 'kasar', 'ancaman']);

  let warn = "";
  if (isJudi) {
    warn = `**Peringatan Kepatuhan Psikologis & Hukum (Dr. Nadira & Maya):**
1. Perilaku judi online melibatkan sirkuit dopamin otak yang mirip dengan adiksi zat. Fitur edukasi biasa tidak akan efektif tanpa adanya intervensi pembatasan stimulus (stimulus control).
2. Hindari copywriting yang terkesan menceramahi atau menyalahkan pengguna karena akan memicu penolakan psikologis seketika (defensiveness).
3. Pastikan platform tidak memberikan ruang atau membagikan taktik spekulasi modal untuk memulihkan kekalahan.`;
  } else if (isPinjol || isIllegal) {
    warn = `**Analisis Batasan Risiko Penagihan & Privasi (Maya & Dr. Nadira):**
1. Penagihan pinjol ilegal sering kali disertai ancaman fisik atau penyebaran data pribadi. Platform harus dengan tegas mengedukasi hak hukum konsumen untuk melapor ke Kepolisian/OJK tanpa memprovokasi pengguna untuk melakukan tindakan melanggar hukum (seperti pengrusakan atau kekerasan fisik).
2. Pastikan JEDA tidak mengumpulkan daftar kontak telepon pengguna untuk menghindari risiko tuduhan pelanggaran privasi data pribadi (UU PDP).
3. Selalu tampilkan tombol darurat rujukan psikologis karena tingkat stres korban teror pinjol berkorelasi tinggi dengan kecenderungan menyakiti diri sendiri.`;
  } else {
    warn = `**Analisis Kepatuhan & Risiko Desain Umum (Maya & Raka):**
1. JEDA harus memposisikan diri secara jelas di mata publik dan OJK sebagai media edukasi dan intervensi emosional keuangan, bukan lembaga mediasi utang atau pemberi pinjaman talangan.
2. Setiap fitur asesmen keuangan harus memiliki label disclaimer bahwa hasil penilaian bukan merupakan nasihat perencanaan keuangan bersertifikat.
3. Batasi pengumpulan data keuangan pengguna hanya pada nominal kasar tanpa nomor rekening atau nama bank untuk menjaga prinsip minimisasi data.`;
  }

  return warn;
}

export function generateWorkflowOutput(phaseId: string, agentId: string, skillId: string, input: string): string {
  const agent = agents.find(a => a.id === agentId);
  const agentName = agent ? agent.name : "Expert Agent";
  const timestamp = new Date().toLocaleTimeString('id-ID');

  let outputText = `### Draf Hasil Analisis Studio untuk Diskusi Tim
*Dihasilkan oleh: ${agentName} (${agent?.role})*
*Pukul: ${timestamp} | Metode: ${skillId}*

`;

  if (phaseId === 'Discover') {
    outputText += `#### Rekomendasi Hasil Eksplorasi Masalah:
Berdasarkan input riset lapangan: "${input || 'Banyak pengguna pinjol mengambil keputusan saat panik terdesak.'}"

1. **Identifikasi Hambatan Emosional (Shame Factor):**
   Pengguna mengalami rasa malu sosial yang mendalam (social stigma) sehingga mengisolasi diri. Tindakan gali lubang tutup lubang adalah upaya putus asa menyembunyikan masalah dari keluarga.
2. **Pola Pemicu Digital (Digital Triggers):**
   Iklan pinjol mikro-kredit dengan copywriting manipulatif ("Cair 5 menit, tanpa jaminan") masuk pada jam-jam stres tinggi (tengah malam atau tanggal tua).
3. **Rekomendasi Intervensi Awal:**
   - Gunakan pendekatan komunikasi visual yang menenangkan (Calm Design) untuk meminimalisir kepanikan kognitif.
   - Sediakan tombol anonimitas mutlak agar pengguna merasa aman menceritakan kondisi keuangan tanpa takut dihakimi.

*Catatan Keselamatan: Analisis ini bersifat hipotesis untuk diskusi desain tim, bukan diagnosis klinis.*`;
  } else if (phaseId === 'Define') {
    outputText += `#### Rekomendasi Rumusan Batasan & Masalah Inti:
Berdasarkan input penyelarasan masalah: "${input || 'Pengguna terjebak banyak pinjol ilegal.'}"

1. **Pohon Akar Masalah (5 Whys Analysis):**
   - Masalah: Pengguna meminjam di pinjol ilegal kedua.
   - Why 1: Untuk membayar bunga pinjol pertama yang jatuh tempo.
   - Why 2: Karena tidak memiliki dana darurat dan gaji sudah habis.
   - Why 3: Karena gaji UMR habis untuk mencicil kebutuhan konsumtif sebelumnya.
   - Why 4: Karena tergoda kemudahan akses paylater e-commerce tanpa sadar batas kemampuan bayar.
   - Why 5 (Akar): Ketidakmampuan menunda kepuasan (impulse control) akibat paparan konstan ekosistem kemudahan berutang digital yang tidak diimbangi pengingat batas risiko keuangan.
2. **Kepatuhan Regulasi OJK & UU PDP (Red Lines):**
   - Platform dilarang memberikan saran restrukturisasi utang komersial tanpa lisensi OJK.
   - Platform dilarang menyarankan tindakan wanprestasi (sengaja gagal bayar) secara ilegal.
3. **Reframing How Might We:**
   - *How Might We* membantu pengguna menunda keputusan berutang baru selama 24 jam saat mereka terdeteksi mengalami kepanikan finansial?

*Catatan Kepatuhan: Analisis ini bertujuan untuk kepatuhan konsep produk, bukan opini hukum resmi.*`;
  } else if (phaseId === 'Develop') {
    outputText += `#### Rekomendasi Konsep Desain & Fitur Solusi:
Berdasarkan input ide fitur: "${input || 'Tombol tunda pinjaman dan debt planner.'}"

1. **Alur Interaksi Mikro "Impulse Pause Button":**
   - Pengguna menekan tombol "Saya Butuh Pinjol Baru".
   - Layar tidak langsung memproses, melainkan menampilkan hitung mundur 24 jam dengan teks: *"JEDA sejenak. Tarik napas. Mari kita petakan bersama apakah ini satu-satunya jalan keluar."*
   - Selama masa tunggu, sistem menyediakan modul *Debt Priority Planner* untuk menunjukkan alternatif solusi non-pinjaman (seperti bantuan sosial, negosiasi bunga, atau dana darurat komunitas).
2. **Penerapan Trust-Building UI:**
   - Gunakan skema warna alam seperti hijau sage (#87A987) atau biru senja (#4A607A) untuk meredam denyut nadi kecemasan.
   - Tampilkan pesan jaminan keamanan data: *"Data Anda terenkripsi lokal. JEDA tidak mengumpulkan nomor HP atau kontak keluarga Anda."*

*Catatan Desain: Konsep ini merupakan draf untuk diuji coba ke calon pengguna, bukan final product specification.*`;
  } else {
    outputText += `#### Rekomendasi Rencana Keberlanjutan & Evaluasi Proposal:
Berdasarkan input draf proposal: "${input || 'Rencana bisnis sosial kemitraan CSR.'}"

1. **Analisis Social Enterprise Business Model:**
   - JEDA tidak boleh memungut biaya dari pengguna terlilit utang. Hal ini bertentangan dengan etika sosial dan memperburuk masalah keuangan mereka.
   - Keberlanjutan finansial didorong melalui program B2B Corporate Wellness. Perusahaan manufaktur besar membayar biaya lisensi platform JEDA untuk menjaga produktivitas karyawan mereka dari gangguan stres penagihan pinjol.
2. **Definisi Metrik Dampak untuk Juri:**
   - *Primary Social Metric:* Persentase pembatalan transaksi berisiko setelah melalui fitur Jeda (target: 35%).
   - *Secondary Economic Metric:* Peningkatan skor kemandirian finansial pengguna setelah 3 bulan pendampingan.
3. **Penyelarasan Narasi Pitch:**
   - Tekankan kontribusi JEDA terhadap "Stabilitas Keuangan Retail" (Problem Statement 1) melalui pencegahan di tingkat emosional hulu, bukan penyelesaian sengketa di hilir.

*Catatan Kelayakan: Draf ini ditujukan untuk mematangkan proposal hackathon, bukan proyeksi keuangan komersial resmi.*`;
  }

  return outputText;
}

export function generateJudgeSimulation(proposalText: string) {
  // Simple heuristic scoring based on presence of keywords
  const lower = proposalText.toLowerCase();

  const countKeywords = (list: string[]) => list.filter(k => lower.includes(k)).length;

  // Criteria evaluation
  // 1. Alignment: "ketahanan", "retail", "keuangan", "pinjol", "resilience"
  const alignCount = countKeywords(['ketahanan', 'retail', 'keuangan', 'pinjol', 'resilience', 'jeda', 'emosi', 'dana']);
  const alignScore = Math.min(5, Math.max(2, Math.round(2 + alignCount * 0.5)));

  // 2. Effectiveness: "intervensi", "metrik", "fsi", "dampak", "pengukuran", "tingkat", "pause"
  const effectCount = countKeywords(['intervensi', 'metrik', 'dampak', 'pengukuran', 'pause', 'stress', 'evaluasi']);
  const effectScore = Math.min(5, Math.max(2, Math.round(2 + effectCount * 0.5)));

  // 3. Uniqueness: "orisinalitas", "kreativitas", "calm ux", "beda", "dopamin", "emosional", "jeda"
  const uniqCount = countKeywords(['orisinalitas', 'kreativitas', 'calm ux', 'beda', 'dopamin', 'emosional', 'jeda', 'pause']);
  const uniqScore = Math.min(5, Math.max(2, Math.round(2 + uniqCount * 0.5)));

  // 4. Technical: "arsitektur", "uu pdp", "enkripsi", "aes-256", "data", "keamanan", "privasi"
  const techCount = countKeywords(['arsitektur', 'uu pdp', 'enkripsi', 'aes-256', 'keamanan', 'privasi', 'pdp', 'security']);
  const techScore = Math.min(5, Math.max(2, Math.round(2 + techCount * 0.5)));

  // 5. Business Model: "bisnis", "csr", "sustainability", "kemitraan", "b2b", "sponsor", "hibah"
  const bizCount = countKeywords(['bisnis', 'csr', 'sustainability', 'kemitraan', 'b2b', 'sponsor', 'hibah', 'revenue']);
  const bizScore = Math.min(5, Math.max(2, Math.round(2 + bizCount * 0.5)));

  // 6. Market Needs: "stigma", "malu", "teror", "dc", "crisis", "hotline", "psikolog", "adiksi"
  const marketCount = countKeywords(['stigma', 'malu', 'teror', 'dc', 'crisis', 'hotline', 'psikolog', 'adiksi', 'judi']);
  const marketScore = Math.min(5, Math.max(2, Math.round(2 + marketCount * 0.5)));

  // Determine strongest and weakest
  const scores = [
    { name: 'Penyelarasan Masalah', score: alignScore, agent: 'raka' },
    { name: 'Efektivitas & Dampak', score: effectScore, agent: 'bima' },
    { name: 'Orisinalitas & Kreativitas', score: uniqScore, agent: 'saras' },
    { name: 'Kualitas Teknis & Keamanan', score: techScore, agent: 'maya' },
    { name: 'Kelayakan Model Bisnis', score: bizScore, agent: 'arman' },
    { name: 'Kebutuhan Pasar & Sensitivitas Krisis', score: marketScore, agent: 'nadira' }
  ];

  scores.sort((a, b) => b.score - a.score);
  const strongest = scores[0];
  const weakest = scores[scores.length - 1];

  let judgeConcern = "Juri akan khawatir apakah platform benar-benar bisa menahan impuls pengguna berutang jika dalam keadaan terdesak kebutuhan perut harian.";
  if (weakest.name === 'Kelayakan Model Bisnis') {
    judgeConcern = "Juri meragukan bagaimana platform ini membiayai operasional jangka panjang (sustainability) tanpa memungut biaya dari pengguna yang sedang terlilit utang.";
  } else if (weakest.name === 'Kualitas Teknis & Keamanan') {
    judgeConcern = "Juri sangat cemas terhadap kebocoran data sensitif pemetaan utang pengguna. Jika data ini bocor, debt collector komersial dapat memanfaatkannya untuk intimidasi berlipat ganda.";
  } else if (weakest.name === 'Kebutuhan Pasar & Sensitivitas Krisis') {
    judgeConcern = "Juri khawatir platform ini terlalu dingin dan menyamakan korban pinjol ilegal dengan pelaku konsumerisme biasa, padahal banyak korban mengalami ancaman keselamatan fisik.";
  } else if (weakest.name === 'Orisinalitas & Kreativitas') {
    judgeConcern = "Juri menganggap JEDA hanya sebatas aplikasi kalkulator keuangan atau portal literasi pasif biasa yang sudah banyak dibuat namun kurang efektif meredam kepanikan.";
  }

  let recommendedImprovement = "Tambahkan detail bagaimana mekanisme Impulse Pause Button bekerja secara praktis dengan melibatkan validasi emosi dan pernapasan.";
  if (weakest.name === 'Kelayakan Model Bisnis') {
    recommendedImprovement = "Perkuat narasi kemitraan B2B Corporate Wellness Program. Jelaskan bahwa stres kerja akibat teror pinjol merugikan efisiensi pabrik/perusahaan, sehingga perusahaan bersedia mendanai JEDA sebagai benefit karyawan.";
  } else if (weakest.name === 'Kualitas Teknis & Keamanan') {
    recommendedImprovement = "Rinci sistem keamanan data. Tegaskan penerapan enkripsi AES-256 lokal pada perangkat pengguna, tidak adanya penyimpanan kontak telepon di server, dan kepatuhan penuh terhadap UU PDP No. 27/2022.";
  } else if (weakest.name === 'Kebutuhan Pasar & Sensitivitas Krisis') {
    recommendedImprovement = "Rinci alur penanganan darurat (crisis escalation path) yang menghubungkan pengguna yang mengalami stres tingkat kritis langsung ke hotline psikolog klinis mitra secara gratis.";
  } else if (weakest.name === 'Orisinalitas & Kreativitas') {
    recommendedImprovement = "Tonjolkan keunikan metode intervensi psikologi-keuangan (CBT + Calm UX) dibanding kalkulator finansial biasa yang hanya berisi perhitungan angka.";
  }

  return {
    scores: {
      alignment: alignScore,
      effectiveness: effectScore,
      uniqueness: uniqScore,
      technical: techScore,
      business: bizScore,
      market: marketScore
    },
    strongest: strongest.name,
    weakest: weakest.name,
    judgeConcern,
    recommendedImprovement,
    recommendedAgentId: weakest.agent
  };
}
