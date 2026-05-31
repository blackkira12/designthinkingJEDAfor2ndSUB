import { agents } from '../data/agents';
import { UserSimulationInput, UserRiskResult, InvestorReadinessResult } from '../types';

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
  if (isJudi) pemicu = "adiksi judi online";
  else if (isPinjol) pemicu = "tekanan penagihan dan kekhawatiran pribadi";
  else if (isPaylater) pemicu = "gaya hidup konsumtif dan kemudahan fasilitas cicilan";

  return {
    says: [
      `"Saya cuma butuh sedikit dana cepat untuk nutup lubang hari ini, bulan depan pasti beres."`,
      `"Malu sekali kalau sampai kantor atau keluarga tahu saya dikejar-kejar penagih utang."`,
      isJudi ? `"Satu kemenangan lagi bisa melunasi semuanya, saya yakin."` : `"Saya terpaksa pakai karena tidak ada jaminan dan syaratnya mudah."`
    ],
    thinks: [
      "Bagaimana caranya bertahan hari ini tanpa tekanan debt collector?",
      "Kenapa bunga dan denda bertambah begitu cepat padahal pokoknya kecil?",
      "Apakah saya adalah kegagalan terbesar di keluarga saya?"
    ],
    does: [
      "Mengajukan pinjaman baru di platform lain untuk membayar cicilan lama.",
      "Mematikan nomor ponsel atau mengabaikan nomor tidak dikenal karena panik.",
      "Membatasi pengeluaran makan secara ekstrem dan meminjam uang teman dekat."
    ],
    feels: [
      "Kecemasan akut yang konstan akibat notifikasi tagihan yang menumpuk.",
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
      quote: `"Saya merasa terjebak. Uang gaji habis untuk bayar cicilan judi online, lalu pinjam pinjol untuk bertahan hidup."`,
      profile: "Pekerja kerah biru berpendapatan UMR yang awalnya mencoba taruhan judi online untuk hiburan dan mencari penghasilan tambahan. Terjebak dalam adiksi dan menggunakan beberapa aplikasi pinjol untuk menambal kekalahannya.",
      goals: ["Melunasi total utang Rp12 juta agar bisa tidur tenang.", "Menghentikan kebiasaan taruhan sepenuhnya.", "Memulihkan kepercayaan orang tua."],
      painPoints: ["Dikejar tekanan penagihan di tempat kerja.", "Merasa malu luar biasa sehingga enggan bercerita ke keluarga.", "Tidak tahu cara mengelola keuangan yang tersisa untuk makan."]
    };
  } else if (isPaylater) {
    return {
      name: "Siska (23 tahun)",
      role: "Fresh Graduate / Junior Customer Service",
      quote: `"Paylater itu rasanya bukan utang sampai tagihannya datang bersamaan di akhir bulan."`,
      profile: "Karyawan muda di Jakarta yang aktif di media sosial. Tergiur kemudahan paylater untuk membeli kosmetik, pakaian kerja, dan nongkrong demi tuntutan sosial pertemanan.",
      goals: ["Keluar dari jebakan batas limit paylater.", "Mampu menabung untuk dana darurat secara mandiri.", "Mengurangi perilaku belanja impulsif saat stres."],
      painPoints: ["Gaji bulanan langsung habis hanya untuk membayar minimum payment.", "Adanya dorongan psikologis (FOMO) saat melihat promo aplikasi e-commerce.", "Catatan SLIK OJK memburuk sehingga takut tidak bisa mengajukan kredit formal di masa depan."]
    };
  } else {
    return {
      name: "Budi (34 tahun)",
      role: "Kepala Keluarga / Driver Ojek Online",
      quote: `"Saya meminjam demi susu anak dan bayar kontrakan. Sekarang tagihannya berlipat ganda melebihi pokoknya."`,
      profile: "Bapak dua anak dengan penghasilan harian tidak menentu. Meminjam dari platform pinjol saat anak sakit keras karena proses pencairan yang instan tanpa jaminan.",
      goals: ["Mendapatkan dispensasi waktu pembayaran resmi.", "Memetakan mana utang yang sah secara hukum OJK dan mana yang tidak.", "Meningkatkan pendapatan harian tanpa menambah utang."],
      painPoints: ["Ancaman penyebaran informasi data pribadi ke kontak telepon.", "Bunga harian yang memberatkan jika terlambat.", "Tidak memiliki akses ke pinjaman formal perbankan karena tidak ada slip gaji tetap."]
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
      "Bagaimana kita bisa menciptakan fitur 'Jeda Emosional' (Impulse Pause) yang mendorong pengguna mengambil jeda refleksi sebelum keputusan berisiko?",
      "Bagaimana kita bisa membantu pengguna memetakan kewajiban dan risiko agar dapat berdiskusi dengan pihak profesional/otoritas secara tenang?",
      "Bagaimana kita bisa memitigasi rasa cemas akibat tekanan penagih melalui edukasi hak-hak hukum konsumen yang ramah psikologis?"
    ];
  } else {
    return [
      "Bagaimana kita bisa merancang antarmuka intervensi emosional keuangan yang memicu rasa tenang saat pengguna mengalami panik finansial?",
      "Bagaimana kita bisa memfasilitasi koneksi aman antara korban terlilit utang dengan mentor keuangan independen secara anonim?",
      "Bagaimana kita bisa membantu pengguna menolak tawaran pinjaman baru dengan mengaktifkan pengingat komitmen diri mereka sendiri?"
    ];
  }
}

export function generateFeaturePriority(input: string) {
  // Reference input to avoid unused variable warning in eslint
  if (input) { /* do nothing */ }
  return [
    {
      feature: "Impulse Pause Button (Mendorong Jeda Refleksi)",
      description: "Fitur yang mendorong pengguna mengambil jeda refleksi sebelum keputusan berisiko, dilengkapi dengan panduan relaksasi yang dirancang untuk mengurangi beban kognitif.",
      reach: 4,
      impact: 5,
      confidence: 4,
      effort: 2,
      score: 40,
      status: "Prioritas Utama (Must-Have)",
      reason: "Sangat efektif memutus rantai impulsif panik finansial dengan tingkat kesulitan teknis sedang."
    },
    {
      feature: "Anonymous Debt Priority Map & Planner",
      description: "Membantu pengguna memetakan kewajiban dan risiko agar dapat berdiskusi dengan pihak profesional/otoritas. Prioritas diberikan pada penyedia legal OJK, sementara pinjaman ilegal dicatat sebagai risiko perlindungan konsumen untuk dilaporkan ke otoritas terkait.",
      reach: 5,
      impact: 4,
      confidence: 5,
      effort: 3,
      score: 33,
      status: "Prioritas Utama (Must-Have)",
      reason: "Menghilangkan kebingungan administratif pengguna yang terjerat banyak platform sekaligus."
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
      description: "Komunitas curhat tertutup yang dirancang untuk berbagi keluh kesah secara anonim (rencana MVP) untuk saling menguatkan antar sesama korban.",
      reach: 4,
      impact: 4,
      confidence: 3,
      effort: 4,
      score: 12,
      status: "Daftar Tunggu (Could-Have)",
      reason: "Bagus untuk dukungan sosial, namun membutuhkan moderasi ketat agar tidak disalahgunakan untuk melanggar hukum."
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
      `JEDA (Jaga Emosi dan Dana) hadir sebagai inovasi intervensi emosional keuangan non-komersial pertama di Indonesia. Melalui prototype "Design Thinking Agent Studio", tim merumuskan solusi atas krisis pinjol/judi online yang menargetkan kelompok retail rentan. Kami mendefinisikan JEDA bukan sebagai platform pinjaman atau restrukturisasi utang komersial, melainkan sebagai katup jeda emosional (impulse control) dan panduan tata kelola utang pribadi. Melalui integrasi Impulse Pause Button, Self-Assessment Tingkat Risiko Emosional, dan Safe Storytelling Room, JEDA membantu memutus rantai utang gali lubang tutup lubang untuk mematangkan kesiapan pengguna menjadi calon investor ritel yang sehat secara psikologis dan finansial. Dengan model bisnis sosial berbasis program B2B Corporate Employee Wellness dan kemitraan lembaga akademis, JEDA menargetkan peningkatan ketahanan emosional-keuangan bagi 100.000 pengguna aktif di tahun pertama.`,
    problem_alignment: 
      `Draf untuk diskusi tim (Reviewer: Raka):\n` +
      `Penyelarasan dengan Problem Statement 1 PIDI 2026 berfokus pada ketahanan retail keuangan. JEDA mengidentifikasi bahwa pelemahan ketahanan ekonomi rumah tangga sering kali dipicu oleh ketidakstabilan psikologis konsumen saat mengambil keputusan kredit berisiko tinggi yang menghambat mereka menjadi investor ritel yang produktif. Dengan mengintervensi aspek emosional ("${input || 'kecemasan akibat teror pinjol'}") sebelum transaksi terjadi, JEDA menstabilkan lini pertahanan paling awal dalam ekosistem keuangan retail nasional, mengarahkan mereka kembali ke jalan literasi investasi legal.`,
    problem_validation: 
      `Draf untuk diskusi tim (Reviewer: Dina):\n` +
      `Validasi masalah menunjukkan bahwa kepanikan kognitif (cognitive overload) akibat tekanan penagihan dan adiksi judi online merusak kemampuan berfikir rasional jangka panjang. Data lapangan yang kami kumpulkan mengindikasikan "${input || 'adanya stigma rasa malu sosial yang mendalam'}" sebagai penghambat utama korban mencari pertolongan hukum, sehingga mereka terus berputar dalam siklus pinjaman predator daripada mengalokasikan dana ke pasar modal formal.`,
    problem_solution_mapping: 
      `Draf untuk diskusi tim (Reviewer: Raka):\n` +
      `Kami memetakan secara presisi solusi intervensi emosional untuk menjawab akar masalah krisis finansial. Pemicu kepanikan diredam dengan Impulse Pause Button (tombol jeda refleksi), kebingungan prioritas diselesaikan dengan Debt Priority Map yang membantu memetakan kewajiban dan risiko agar dapat berdiskusi dengan pihak profesional/otoritas yang tepat, dan kebutuhan dukungan sosial anonim dijawab dengan Safe Storytelling Room. Terkait "${input || 'fitur intervensi emosional'}联", pemetaan ini membuktikan bahwa setiap fitur JEDA dikembangkan langsung dari rasa empati yang tervalidasi untuk menyiapkan jalur transisi menuju kesiapan investor ritel (Debt-to-Investor Readiness).`,
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
      `Keberhasilan intervensi JEDA dievaluasi melalui Financial Stress Index (FSI) bulanan dan Transaction Interception Rate (TIR). Kami mengukur kesiapan mereka masuk ke pasar investasi formal menggunakan Debt-to-Investor Readiness Score. Data kuantitatif ini dianalisis secara etis untuk memastikan efektivitas intervensi emosional JEDA terhadap "${input || 'pembatalan transaksi utang berisiko'}" terbukti secara statistik.`,
    system_value_prop: 
      `Draf untuk diskusi tim (Reviewer: Fajar):\n` +
      `Nilai publik yang ditawarkan JEDA adalah penyelamatan kesejahteraan finansial rakyat dari skema pemerasan digital. JEDA berkontribusi pada program literasi keuangan pemerintah dengan mengubah konsumen retail yang terbelit utang menjadi calon investor ritel yang sadar risiko dan patuh hukum. Masukan Anda mengenai "${input || 'penyelamatan kesejahteraan emosional publik'}" mempertegas posisi kami sebagai benteng pelindung konsumen.`,
    system_architecture: 
      `Draf untuk diskusi tim (Reviewer: Bima):\n` +
      `Infrastruktur teknologi JEDA dirancang dengan pendekatan minimalisasi data. Kami memisahkan identitas pribadi (PII) dengan data finansial asesmen menggunakan tokenisasi terenkripsi yang dirancang untuk enkripsi lokal (rencana MVP). Modul intervensi dirancang ringan sehingga mudah diakses via mobile web dalam kondisi sinyal terbatas, dengan fokus pengamanan pada "${input || 'perlindungan data sensitif pengguna dari kebocoran'}".`,
    solution_originality: 
      `Draf untuk diskusi tim (Reviewer: Raka):\n` +
      `Orisinalitas JEDA terletak pada penolakan kami terhadap komersialisasi penderitaan utang. Saat kompetitor lain fokus mengkonsolidasikan utang dengan bunga baru atau menjual jasa mediasi berbayar, JEDA menawarkan intervensi emosional gratis dengan pembiayaan mandiri melalui program B2B Corporate Employee Wellness. Keterkaitan "${input || 'fokus psikologi finansial retail'}" menegaskan keunikan posisi kami di mata juri.`,
    tech_innovation: 
      `Draf untuk diskusi tim (Reviewer: Bima):\n` +
      `Inovasi metode JEDA menggabungkan teori psikologi kognitif perilaku (CBT) dengan deteksi dini pola stres transaksi digital. Sebagai rencana pengembangan masa depan yang membutuhkan persetujuan etis penuh dari pengguna, JEDA merancang algoritma deteksi perilaku mengetik cemas untuk memberikan intervensi instan tepat sebelum transaksi pinjol ilegal terjadi pada aspek "${input || 'deteksi stres transaksi'}".`,
    creativity_implementation: 
      `Draf untuk diskusi tim (Reviewer: Saras):\n` +
      `Kreativitas diwujudkan melalui "Quiet Interface" yang dirancang untuk mengurangi beban kognitif. Kami menggunakan interaksi berbasis mikro-narasi di mana pengguna diajak berkomunikasi secara interaktif dengan asisten virtual yang ramah, menjembatani rasa takut mereka terhadap angka nominal utang yang rumit, khususnya terkait "${input || 'visualisasi beban utang'}".`,
    data_feasibility: 
      `Draf untuk diskusi tim (Reviewer: Bima):\n` +
      `Kelayakan implementasi didukung oleh kemudahan akses data sekunder OJK dan data kualitatif anonim komunitas korban pinjol. Pemanfaatan data difokuskan pada pembentukan pola pemicu finansial ("${input || 'identifikasi pola gali lubang tutup lubang'}") secara etis untuk melatih model self-assessment kami tanpa melanggar privasi pengguna.`,
    security_compliance: 
      `Draf untuk diskusi tim (Reviewer: Maya):\n` +
      `Keamanan data adalah prioritas mutlak demi mematuhi UU PDP No. 27/2022. Platform JEDA dirancang untuk tidak mengumpulkan data nomor telepon kontak darurat, melarang scraping data pribadi, dan menjamin hak pengguna untuk menghapus datanya kapan saja. Masukan Anda perihal "${input || 'kepatuhan privasi data konsumen'}" memperkuat sistem pertahanan hukum kami.`,
    mvp_readiness: 
      `Draf untuk diskusi tim (Reviewer: Raka):\n` +
      `Roadmap MVP JEDA dirancang untuk rilis dalam waktu 4 minggu, mencakup modul Self-Assessment Risiko Emosional, Visualisasi Debt Planner dasar, dan direktori hotline krisis psikologi. Skala prioritas difokuskan untuk mematangkan "${input || 'modul intervensi awal'}" guna membuktikan konsep sebelum diintegrasikan dengan mitra konseling komersial.`,
    problem_market_fit: 
      `Draf untuk diskusi tim (Reviewer: Arman):\n` +
      `Kesesuaian masalah dengan pasar divalidasi oleh besarnya jumlah masyarakat kelas menengah ke bawah yang terjebak dalam ekosistem pinjol akibat minimnya alternatif keuangan formal yang cepat. JEDA masuk sebagai solusi non-finansial ("${input || 'ruang aman intervensi emosi'}") yang menjembatani kebutuhan mendesak masyarakat sebelum mereka terjerumus ke lingkaran setan utang.`,
    value_proposition: 
      `Draf untuk diskusi tim (Reviewer: Raka):\n` +
      `JEDA menawarkan proposisi nilai ganda. Bagi pengguna, kami menyediakan perlindungan psikologis dan pemetaan utang gratis. Bagi mitra korporasi/perbankan, kami menyediakan sarana penyaluran CSR yang efektif, transparan, dan berdampak nyata pada ketahanan ekonomi serta produktivitas masyarakat sasaran, khususnya pada aspek "${input || 'peningkatan kesiapan keuangan retail untuk investasi'}".`,
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
1. Penagihan pinjol ilegal sering kali disertai intimidasi data pribadi. Platform harus dengan tegas mengedukasi hak hukum konsumen untuk melapor ke Kepolisian/OJK melalui jalur resmi tanpa menginstruksikan pengguna untuk wanprestasi secara ilegal.
2. JEDA didesain untuk tidak mengumpulkan daftar kontak telepon pengguna untuk mematuhi UU PDP No. 27/2022.
3. Selalu tampilkan tombol darurat rujukan psikologis karena tingkat stres korban penagihan kasar berkorelasi tinggi dengan kecenderungan krisis mental berat.`;
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
   - Gunakan pendekatan komunikasi visual yang menenangkan (Calm Design) untuk mengurangi beban kognitif.
   - Sediakan tombol anonimitas mutlak agar pengguna merasa aman menceritakan kondisi keuangan tanpa takut dihakimi.

*Catatan Keselamatan: Analisis ini bersifat hipotesis untuk diskusi desain tim, bukan diagnosis klinis.*`;
  } else if (phaseId === 'Define') {
    outputText += `#### Rekomendasi Rumusan Batasan & Masalah Inti:
Berdasarkan input penyelarasan masalah: "${input || 'Pengguna terjebak banyak pinjol ilegal.'}"

1. **Pohon Akar Masalah (5 Whys Analysis):**
   - Masalah: Pengguna meminjam di platform ilegal kedua.
   - Why 1: Untuk membayar bunga pinjol pertama yang jatuh tempo.
   - Why 2: Karena tidak memiliki dana darurat dan gaji sudah habis.
   - Why 3: Karena gaji UMR habis untuk mencicil kebutuhan konsumtif sebelumnya.
   - Why 4: Karena tergoda kemudahan akses paylater e-commerce tanpa sadar batas kemampuan bayar.
   - Why 5 (Akar): Ketidakmampuan menunda kepuasan (impulse control) akibat paparan konstan ekosistem kemudahan berutang digital yang tidak diimbangi pengingat batas risiko keuangan.
2. **Kepatuhan Regulasi OJK & UU PDP (Red Lines):**
   - Platform dilarang memberikan saran restrukturisasi utang komersial tanpa lisensi OJK.
   - Platform dilarang menyarankan tindakan wanprestasi secara ilegal. Pinjaman ilegal dicatat sebagai risiko perlindungan konsumen dan diarahkan ke pelaporan otoritas sah.
3. **Reframing How Might We:**
   - *How Might We* membantu pengguna menunda keputusan berutang baru (mendorong jeda refleksi) saat mereka terdeteksi mengalami kepanikan finansial?

*Catatan Kepatuhan: Analisis ini bertujuan untuk kepatuhan konsep produk, bukan opini hukum resmi.*`;
  } else if (phaseId === 'Develop') {
    outputText += `#### Rekomendasi Konsep Desain & Fitur Solusi:
Berdasarkan input ide fitur: "${input || 'Tombol jeda refleksi dan debt planner.'}"

1. **Alur Interaksi Mikro "Impulse Pause Button":**
   - Pengguna menekan tombol "Saya Ingin Mengambil Pinjaman Baru".
   - Layar mendorong pengguna mengambil jeda refleksi sebelum mengambil pinjaman baru dengan teks: *"JEDA sejenak. Tarik napas. Mari kita petakan bersama apakah ini satu-satunya jalan keluar."*
   - Selama masa tunggu, sistem menyediakan modul *Debt Priority Planner* untuk memetakan kewajiban dan risiko agar dapat berdiskusi dengan pihak profesional/otoritas.
2. **Penerapan Trust-Building UI:**
   - Gunakan skema warna alam seperti hijau sage (#87A987) atau biru senja (#4A607A) untuk mengurangi beban kognitif.
   - Tampilkan pesan jaminan keamanan data: *"Data Anda dirancang untuk disimpan secara terenkripsi lokal di perangkat Anda (rencana MVP). JEDA tidak mengumpulkan nomor HP atau kontak keluarga Anda."*

*Catatan Desain: Konsep ini merupakan draf untuk diuji coba ke calon pengguna, bukan final product specification.*`;
  } else {
    outputText += `#### Rekomendasi Rencana Keberlanjutan & Evaluasi Proposal:
Berdasarkan input draf proposal: "${input || 'Rencana bisnis sosial kemitraan CSR.'}"

1. **Analisis Social Enterprise Business Model:**
   - JEDA tidak boleh memungut biaya dari pengguna terlilit utang. Hal ini bertentangan dengan etika sosial JEDA.
   - Keberlanjutan finansial didorong melalui program B2B Corporate Wellness. Perusahaan manufaktur besar membayar biaya lisensi platform JEDA untuk menjaga produktivitas karyawan mereka dari gangguan stres keuangan.
2. **Definisi Metrik Dampak untuk Juri:**
   - *Primary Social Metric:* Persentase pembatalan transaksi berisiko setelah melalui fitur Jeda (target: 35%).
   - *Secondary Economic Metric:* Peningkatan skor kemandirian finansial dan tingkat kesiapan investasi ritel pengguna.
3. **Penyelarasan Narasi Pitch:**
   - Tekankan kontribusi JEDA terhadap "Stabilitas Keuangan Retail" (Problem Statement 1) melalui pencegahan di tingkat emosional hulu dan persiapan kesiapan calon investor ritel.

*Catatan Kelayakan: Draf ini ditujukan untuk mematangkan proposal hackathon, bukan proyeksi keuangan komersial resmi.*`;
  }

  return outputText;
}

export function generateJudgeSimulation(proposalText: string) {
  const lower = proposalText.toLowerCase();

  const countKeywords = (list: string[]) => list.filter(k => lower.includes(k)).length;

  // Criteria evaluation
  const alignCount = countKeywords(['ketahanan', 'retail', 'keuangan', 'pinjol', 'resilience', 'jeda', 'emosi', 'dana', 'investor', 'investasi', 'readiness']);
  const alignScore = Math.min(5, Math.max(1, Math.round(2 + alignCount * 0.4)));

  const effectCount = countKeywords(['intervensi', 'metrik', 'fsi', 'dampak', 'pengukuran', 'tingkat', 'pause', 'readiness', 'stabilisasi', 'dana darurat']);
  const effectScore = Math.min(5, Math.max(1, Math.round(2 + effectCount * 0.4)));

  const uniqCount = countKeywords(['orisinalitas', 'kreativitas', 'calm ux', 'beda', 'dopamin', 'emosional', 'jeda', 'refleksi', 'pathway']);
  const uniqScore = Math.min(5, Math.max(1, Math.round(2 + uniqCount * 0.4)));

  const techCount = countKeywords(['arsitektur', 'uu pdp', 'enkripsi', 'aes-256', 'keamanan', 'privasi', 'pdp', 'security', 'lokal']);
  const techScore = Math.min(5, Math.max(1, Math.round(2 + techCount * 0.4)));

  const bizCount = countKeywords(['bisnis', 'csr', 'sustainability', 'kemitraan', 'b2b', 'sponsor', 'hibah', 'wellness', 'social']);
  const bizScore = Math.min(5, Math.max(1, Math.round(2 + bizCount * 0.4)));

  const marketCount = countKeywords(['stigma', 'malu', 'teror', 'dc', 'crisis', 'hotline', 'psikolog', 'adiksi', 'judi', 'pendampingan']);
  const marketScore = Math.min(5, Math.max(1, Math.round(2 + marketCount * 0.4)));

  // Scoring Penalties for unsafe/risky/incomplete narratives
  let finalAlignScore = alignScore;
  let finalEffectScore = effectScore;
  let finalTechScore = techScore;
  let finalBizScore = bizScore;

  // Penalty 1: mention pinjol without explaining relation to investor retail readiness
  const hasInvestorBridge = containsAny(lower, ['investor', 'investasi', 'readiness', 'pathway']);
  if (!hasInvestorBridge) {
    finalAlignScore = Math.max(1, finalAlignScore - 2);
  }

  // Penalty 2: claim to provide investment advice
  const hasInvestmentAdviceClaim = containsAny(lower, ['rekomendasi saham', 'rekomendasi portofolio', 'saran investasi personal', 'membelikan saham']);
  if (hasInvestmentAdviceClaim) {
    finalAlignScore = 1;
    finalTechScore = Math.max(1, finalTechScore - 2);
  }

  // Penalty 3: claim to distribute loans
  const hasLendingClaim = containsAny(lower, ['menyalurkan pinjaman', 'memberikan kredit', 'dana pinjaman', 'pinjaman modal']);
  if (hasLendingClaim) {
    finalAlignScore = 1;
    finalBizScore = 1;
  }

  // Penalty 4: ignore privacy/compliance (no UU PDP / privacy by design mention)
  const hasPrivacyMention = containsAny(lower, ['uu pdp', 'privasi', 'minimisasi data', 'privacy-by-design']);
  if (!hasPrivacyMention) {
    finalTechScore = Math.max(1, finalTechScore - 2);
  }

  // Penalty 5: lack impact metrics
  const hasMetrics = containsAny(lower, ['metrik', 'fsi', 'tir', 'fsi bulanan', 'index', 'interception']);
  if (!hasMetrics) {
    finalEffectScore = Math.max(1, finalEffectScore - 1);
  }

  const scores = [
    { name: 'Penyelarasan Masalah', score: finalAlignScore, agent: 'raka' },
    { name: 'Efektivitas & Dampak', score: finalEffectScore, agent: 'bima' },
    { name: 'Orisinalitas & Kreativitas', score: uniqScore, agent: 'saras' },
    { name: 'Kualitas Teknis & Keamanan', score: finalTechScore, agent: 'maya' },
    { name: 'Kelayakan Model Bisnis', score: finalBizScore, agent: 'arman' },
    { name: 'Kebutuhan Pasar & Sensitivitas Krisis', score: marketScore, agent: 'nadira' }
  ];

  scores.sort((a, b) => b.score - a.score);
  const strongest = scores[0];
  const weakest = scores[scores.length - 1];

  let judgeConcern = "Juri akan khawatir apakah platform benar-benar bisa menahan impuls pengguna berutang jika dalam keadaan terdesak kebutuhan perut harian.";
  if (weakest.name === 'Kelayakan Model Bisnis') {
    judgeConcern = "Juri meragukan bagaimana platform ini membiayai operasional jangka panjang (sustainability) tanpa memungut biaya dari pengguna yang sedang terlilit utang.";
  } else if (weakest.name === 'Kualitas Teknis & Keamanan') {
    judgeConcern = "Juri sangat cemas terhadap kebocoran data sensitif pemetaan utang pengguna. Jika data ini bocor, dc dapat memanfaatkannya untuk intimidasi berlipat ganda.";
  } else if (weakest.name === 'Kebutuhan Pasar & Sensitivitas Krisis') {
    judgeConcern = "Juri khawatir platform ini terlalu dingin dan menyamakan korban pinjol ilegal dengan pelaku konsumerisme biasa, padahal banyak korban mengalami tekanan mental.";
  } else if (weakest.name === 'Orisinalitas & Kreativitas') {
    judgeConcern = "Juri menganggap JEDA hanya sebatas aplikasi kalkulator keuangan atau portal literasi pasif biasa yang kurang efektif meredam kepanikan.";
  } else if (weakest.name === 'Penyelarasan Masalah') {
    judgeConcern = "Juri menilai proposal belum menjelaskan secara kuat bagaimana pemulihan dari jerat utang berhubungan langsung dengan peningkatan jumlah investor ritel baru di Indonesia.";
  }

  let recommendedImprovement = "Tambahkan detail bagaimana mekanisme Impulse Pause Button bekerja secara praktis dengan melibatkan validasi emosi.";
  if (weakest.name === 'Kelayakan Model Bisnis') {
    recommendedImprovement = "Perkuat narasi kemitraan B2B Corporate Wellness Program. Jelaskan bahwa stres kerja akibat teror pinjol merugikan efisiensi pabrik, sehingga korporasi bersedia menyubsidi JEDA sebagai benefit karyawan.";
  } else if (weakest.name === 'Kualitas Teknis & Keamanan') {
    recommendedImprovement = "Rinci sistem keamanan data. Tegaskan penerapan rencana enkripsi lokal pada perangkat pengguna, tidak adanya penyimpanan kontak telepon di server, dan kepatuhan penuh terhadap UU PDP No. 27/2022.";
  } else if (weakest.name === 'Kebutuhan Pasar & Sensitivitas Krisis') {
    recommendedImprovement = "Rinci alur penanganan darurat (crisis escalation path) yang menghubungkan pengguna yang mengalami stres tingkat kritis langsung ke hotline psikolog klinis mitra secara gratis.";
  } else if (weakest.name === 'Orisinalitas & Kreativitas') {
    recommendedImprovement = "Tonjolkan keunikan metode intervensi psikologi-keuangan (CBT + Calm UX) dibanding kalkulator finansial biasa yang hanya berisi perhitungan angka.";
  } else if (weakest.name === 'Penyelarasan Masalah') {
    recommendedImprovement = "Elaborasi bagian 'Debt-to-Investor Readiness Pathway'. Jelaskan bahwa menstabilkan utang konsumtif dan emosi impulsif adalah langkah hulu wajib sebelum melatih masyarakat rentan berinvestasi di pasar ritel formal secara aman.";
  }

  return {
    scores: {
      alignment: finalAlignScore,
      effectiveness: finalEffectScore,
      uniqueness: uniqScore,
      technical: finalTechScore,
      business: finalBizScore,
      market: marketScore
    },
    strongest: strongest.name,
    weakest: weakest.name,
    judgeConcern,
    recommendedImprovement,
    recommendedAgentId: weakest.agent
  };
}

export function generateUserRiskSimulation(input: UserSimulationInput): UserRiskResult {
  // Compute risk score
  const debtScore = input.activeDebtsCount * 1.5;
  const collectionScore = input.hasUrgentCollection ? 2.5 : 0;
  const newDebtScore = input.consideringNewDebt ? 2.0 : 0;
  const emergencyScore = input.hasEmergencyFund ? -1.5 : 0;
  
  const totalScore = debtScore + collectionScore + newDebtScore + emergencyScore;
  
  let riskLevel: 'Rendah' | 'Sedang' | 'Tinggi' | 'Kritis' = 'Rendah';
  if (totalScore >= 6) riskLevel = 'Kritis';
  else if (totalScore >= 4) riskLevel = 'Tinggi';
  else if (totalScore >= 2) riskLevel = 'Sedang';

  // Emotional triggers based on condition
  let trigger = "Keinginan impulsif jangka pendek";
  if (input.currentCondition === 'panic') trigger = "Kecemasan akut akibat tekanan penagih";
  else if (input.currentCondition === 'new_loan') trigger = "Kondisi terdesak kebutuhan mendesak atau gali lubang tutup lubang";
  else if (input.currentCondition === 'paylater') trigger = "Faktor FOMO sosial dan kemudahan cicilan bulanan";
  else if (input.currentCondition === 'judi') trigger = "Adiksi sirkuit dopamin judi online dan kepanikan menutup kerugian modal";
  else if (input.currentCondition === 'invest_readiness') trigger = "Keinginan terburu-buru berinvestasi saat cashflow masih minus";

  const sevenDayPlan = generateSevenDayPlan(input.currentCondition, riskLevel);
  const thirtyDayPlan = generateThirtyDayStabilizationPlan(input.currentCondition, riskLevel);

  let nextAction = "Ikuti draf panduan pemulihan harian dan lakukan pemetaan utang di Debt Priority Map.";
  if (riskLevel === 'Kritis') {
    nextAction = "SEGERA HUBUNGI hotline psikolog/psikiater krisis mitra atau Kemenkes 119 ext. 8. Tunda seluruh keputusan keuangan selama 24 jam ke depan.";
  } else if (riskLevel === 'Tinggi') {
    nextAction = "Gunakan Impulse Pause Button untuk meredakan kepanikan emosional, lalu petakan utang legal vs ilegal.";
  }

  let escalationNote = undefined;
  if (riskLevel === 'Kritis' || input.hasUrgentCollection) {
    escalationNote = "Sistem mendeteksi indikasi stres kognitif kritis. Kami merekomendasikan rujukan darurat gratis ke mitra psikolog klinis JEDA untuk meredakan distres psikologis.";
  }

  return {
    riskLevel,
    emotionalTriggerSummary: `Pemicu emosi terdeteksi: ${trigger}. Keadaan emosional dilaporkan sebagai "${input.emotionalState}".`,
    jedaRecommendation: `JEDA merekomendasikan: Mendorong pengguna mengambil jeda refleksi sebelum keputusan berisiko. Tunda pengajuan komitmen kredit baru selama minimal 24 jam untuk menurunkan beban kognitif.`,
    sevenDayPlan,
    thirtyDayPlan,
    nextAction,
    escalationNote
  };
}

export function generateSevenDayPlan(condition: string, riskLevel: string): string[] {
  const defaultPlan = [
    "Hari 1: Tarik napas. Aktifkan tombol Jeda Dulu. Blokir sementara kontak penagih kasar untuk menenangkan emosi.",
    "Hari 2: Catat seluruh daftar nominal pinjaman di kertas secara manual tanpa membuka aplikasi agar tidak terintimidasi.",
    "Hari 3: Klasifikasikan pinjaman OJK (legal) dan non-OJK (ilegal) untuk kesiapan perlindungan konsumen.",
    "Hari 4: Laporkan penagihan kasar ilegal ke portal kepolisian/OJK melalui edukasi panduan sah JEDA.",
    "Hari 5: Fokus kelola pengeluaran pokok harian; abaikan penawaran pinjaman baru (gali lubang).",
    "Hari 6: Cari dukungan psikososial di Anonymous Safe Room JEDA untuk meredakan stigma malu.",
    "Hari 7: Mulai susun rencana pembayaran terstruktur untuk pinjaman legal OJK yang jatuh tempo."
  ];

  if (condition === 'judi') {
    return [
      "Hari 1: Mendorong jeda refleksi diri. Hapus semua aplikasi judi slot dari handphone Anda.",
      "Hari 2: Blokir situs judi di DNS perangkat dan komunikasikan kepada keluarga terdekat tentang kondisi Anda.",
      "Hari 3: Catat beban utang yang diakibatkan judi secara tertulis untuk memecahkan kepanikan angka.",
      "Hari 4: Ikuti grup sharing dukungan pemulihan adiksi di forum dukungan aman anonim JEDA.",
      "Hari 5: Cari kesibukan alternatif non-digital untuk mengalihkan sirkuit dopamin adiktif.",
      "Hari 6: Batasi akses rekening perbankan Anda secara mandiri (minta bantuan kerabat untuk memegang kendali kartu).",
      "Hari 7: Mulai pelajari bahwa kemenangan judi online adalah manipulasi sistem, bukan solusi finansial."
    ];
  }

  if (condition === 'invest_readiness' || riskLevel === 'Rendah') {
    return [
      "Hari 1: Lakukan audit cashflow bulanan secara mendetail.",
      "Hari 2: Petakan rasio utang terhadap pendapatan bersih (DTI harus di bawah 30% sebelum siap investasi).",
      "Hari 3: Mulai kumpulkan dana darurat awal minimal Rp1.000.000 di rekening terpisah non-transaksional.",
      "Hari 4: Edukasi mandiri mengenai perbedaan investasi logis vs skema ponzi/cepat kaya yang beredar.",
      "Hari 5: Pastikan tidak ada utang konsumtif dengan bunga tinggi yang masih berjalan.",
      "Hari 6: Cek legalitas platform investasi yang ingin digunakan melalui database resmi OJK.",
      "Hari 7: Simulasikan pembelian reksa dana pasar uang dasar dengan nominal kecil (e.g. Rp10.000)."
    ];
  }

  return defaultPlan;
}

export function generateThirtyDayStabilizationPlan(condition: string, riskLevel: string): string[] {
  const defaultPlan = [
    "Minggu 1: Pemetaan & Kategorisasi Risiko Utang Legal vs Ilegal.",
    "Minggu 2: Negosiasi restrukturisasi resmi untuk pinjaman legal OJK dan pelaporan hukum pinjol ilegal.",
    "Minggu 3: Pengaktifan kembali pendapatan untuk penataan cashflow harian bebas pinjaman baru.",
    "Minggu 4: Penguatan dana darurat minimum awal dan rekonsiliasi emosional keluarga."
  ];

  if (condition === 'judi') {
    return [
      "Minggu 1: Detoksifikasi digital total dari iklan judi dan pemulihan emosi dari kecemasan kekalahan.",
      "Minggu 2: Penyerahan manajemen keuangan harian kepada wali/keluarga tepercaya.",
      "Minggu 3: Mengikuti konseling adiksi mental dengan bantuan profesional psikolog mitra.",
      "Minggu 4: Mulai pemulihan utang judi secara bertahap dan menjauhi lingkaran pertemanan spekulatif."
    ];
  }

  if (condition === 'invest_readiness' || riskLevel === 'Rendah') {
    return [
      "Minggu 1: Konsolidasi utang konsumtif untuk pelunasan dipercepat (metode bola salju).",
      "Minggu 2: Pembentukan pos dana darurat hingga mencapai 3 kali pengeluaran bulanan.",
      "Minggu 3: Mengikuti kurikulum belajar dasar pasar modal dan literasi reksa dana/obligasi negara.",
      "Minggu 4: Membuka akun di platform investasi legal OJK berbiaya rendah dan memulai investasi berkala."
    ];
  }

  return defaultPlan;
}

export function generateInvestorReadinessResult(checklist: Record<string, boolean>): InvestorReadinessResult {
  const checkedKeys = Object.keys(checklist).filter(k => checklist[k]);
  const count = checkedKeys.length;
  const score = Math.round((count / 8) * 100);

  let readinessLevel: 'Belum Siap' | 'Stabilisasi Dulu' | 'Mulai Edukasi' | 'Siap Belajar Investasi Dasar' = 'Belum Siap';
  let explanation = "";
  let nextStep = "";

  if (count === 8) {
    readinessLevel = 'Siap Belajar Investasi Dasar';
    explanation = "Luar biasa. Anda telah memenuhi semua pilar dasar kesiapan finansial dan emosional. Anda terbebas dari jerat utang konsumtif mendesak, memiliki pemahaman risiko, dan siap melangkah mempelajari instrumen pasar modal formal.";
    nextStep = "Pelajari konsep diversifikasi dan investasi berkala (Dollar Cost Averaging) pada produk berisiko rendah seperti Reksa Dana Pasar Uang legal OJK.";
  } else if (count >= 6) {
    readinessLevel = 'Mulai Edukasi';
    explanation = "Kondisi keuangan Anda hampir stabil. Anda memahami risiko dasar dan tidak tergiur investasi FOMO. Namun, Anda masih memiliki beberapa area dana darurat atau utang kecil yang perlu diselesaikan terlebih dahulu.";
    nextStep = "Fokus amankan dana darurat minimal 3 bulan pengeluaran sebelum menempatkan uang pada produk investasi apa pun.";
  } else if (count >= 4) {
    readinessLevel = 'Stabilisasi Dulu';
    explanation = "Kondisi Anda saat ini masih berada di fase transisi. Anda menyadari risiko utang dan investasi, namun cashflow bulanan Anda masih rentan dan belum memiliki bantalan dana darurat awal.";
    nextStep = "Fokus penuh pada penataan cashflow harian. Jangan berinvestasi terlebih dahulu agar tidak terpaksa mencairkan investasi saat ada kebutuhan mendesak.";
  } else {
    readinessLevel = 'Belum Siap';
    explanation = "Saat ini prioritas utama Anda adalah pemulihan dari jerat utang konsumtif dan stabilisasi regulasi emosi. Berinvestasi saat masih memiliki utang bunga tinggi sangat tidak disarankan karena bunga utang umumnya jauh lebih tinggi daripada imbal hasil investasi.";
    nextStep = "Tunda keinginan berinvestasi. Fokus gunakan JEDA untuk memetakan prioritas kewajiban, kurangi pengeluaran impulsif, dan bangun emosi yang tenang.";
  }

  return {
    readinessLevel,
    score,
    explanation,
    nextStep,
    disclaimer: "Analisis kesiapan ini ditujukan semata-mata untuk edukasi dan refleksi perilaku keuangan mandiri, bukan nasihat investasi personal atau instruksi pembelian produk keuangan komersial."
  };
}

export function generateSurveyInsightSummary(): string {
  return "Ringkasan Hasil Survei: 450 responden mock memvalidasi hipotesis JEDA. Sebanyak 85% menyukai tombol jeda refleksi (Impulse Pause) untuk meredam kepanikan, dan 68% ingin beralih menjadi investor ritel legal setelah beban utang konsumtif mereka berhasil distabilkan.";
}
