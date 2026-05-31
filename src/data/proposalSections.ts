import { ProposalSection } from '../types';

export const proposalSections: ProposalSection[] = [
  {
    id: 'team_identity',
    title: 'Identitas Tim & Nilai Core',
    maxWords: 150,
    judgeFocus: 'Menilai latar belakang keahlian tim dan apakah susunan tim relevan dengan kompleksitas masalah yang diselesaikan.',
    helperAgentId: 'raka',
    judgingCriteria: 'Alignment with Problem Statement',
    templateContent: 'Tim JEDA terdiri dari gabungan pakar kedokteran jiwa, ahli hukum regulasi fintech, analis data, desainer layanan inklusif, dan ahli produk. Keanekaragaman ini memastikan JEDA dibangun dengan basis empati psikologis, keamanan hukum yang ketat, dan skalabilitas teknologi.'
  },
  {
    id: 'executive_summary',
    title: 'Ringkasan Eksekutif (Executive Summary)',
    maxWords: 250,
    judgeFocus: 'Menyajikan secara padat masalah pinjol/judi online di Indonesia, solusi intervensi emosional JEDA, keunikan model bisnis sosial, dan dampak utama.',
    helperAgentId: 'fajar',
    judgingCriteria: 'Alignment with Problem Statement',
    templateContent: 'JEDA (Jaga Emosi dan Dana) hadir sebagai inovasi intervensi emosional keuangan non-komersial pertama di Indonesia. Menjawab tingginya pemicu impulsif pinjol dan judi online yang berujung pada distres psikologis berat, JEDA hadir bukan sebagai penyalur pinjaman atau penasihat keuangan berlisensi, melainkan sebagai penengah emosional (impulse control) dan pemeta utang yang tidak menghakimi. Melalui integrasi Impulse Pause Button, Self-Assessment Tingkat Risiko Emosional, dan Safe Storytelling Room, JEDA membantu memutus rantai utang gali lubang tutup lubang untuk mematangkan kesiapan pengguna menjadi calon investor ritel yang sehat secara psikologis dan finansial. Dengan model bisnis sosial berbasis program B2B Corporate Employee Wellness dan kemitraan lembaga akademis, JEDA menargetkan peningkatan ketahanan emosional-keuangan bagi 100.000 pengguna aktif di tahun pertama.'
  },
  {
    id: 'problem_alignment',
    title: 'Penyelarasan Masalah (Problem Alignment & Refinement)',
    maxWords: 300,
    judgeFocus: 'Seberapa selaras masalah yang diangkat dengan Problem Statement 1 PIDI Hackathon (Ketahanan & Inovasi Keuangan Retail).',
    helperAgentId: 'raka',
    judgingCriteria: 'Alignment with Problem Statement',
    templateContent: 'Penyelarasan dengan Problem Statement 1 PIDI 2026 berfokus pada ketahanan retail keuangan. JEDA mengidentifikasi bahwa pelemahan ketahanan ekonomi rumah tangga sering kali dipicu oleh ketidakstabilan psikologis konsumen saat mengambil keputusan kredit berisiko tinggi yang menghambat mereka menjadi investor ritel yang produktif. Dengan mengintervensi aspek emosional sebelum transaksi terjadi, JEDA menstabilkan lini pertahanan paling awal dalam ekosistem keuangan retail nasional, mengarahkan mereka kembali ke jalan literasi investasi legal.'
  },
  {
    id: 'problem_validation',
    title: 'Validasi Masalah (Problem Validation)',
    maxWords: 350,
    judgeFocus: 'Bukti empiris berupa data survei, statistik korban pinjol, riset psikologi utang, dan analisis kesenjangan regulasi saat ini.',
    helperAgentId: 'dina',
    judgingCriteria: 'Market Needs',
    templateContent: 'Hasil survei awal menunjukkan bahwa 78% pengguna pinjol mengambil keputusan pinjaman baru untuk membayar pinjaman lama (gali lubang tutup lubang) di bawah pengaruh kecemasan tinggi akibat intimidasi penagih. Wawancara mendalam mengungkapkan adanya "stigma malu sosial" yang membuat korban menutup diri dari keluarga dan mencari jalan pintas yang merusak. Validasi dari psikiater mengonfirmasi keputusan finansial yang buruk berkorelasi kuat dengan penurunan fungsi otak bagian prefrontal cortex akibat stres akut.'
  },
  {
    id: 'problem_solution_mapping',
    title: 'Pemetaan Masalah-Solusi (Problem-Solution Mapping)',
    maxWords: 300,
    judgeFocus: 'Kesesuaian fitur utama JEDA dalam menyelesaikan akar masalah psikologis, sosial, dan administratif.',
    helperAgentId: 'raka',
    judgingCriteria: 'Effectiveness & Impact',
    templateContent: 'Kami memetakan secara presisi solusi intervensi emosional untuk menjawab akar masalah krisis finansial. Pemicu kepanikan diredam dengan Impulse Pause Button (tombol jeda refleksi), kebingungan prioritas diselesaikan dengan Debt Priority Map yang membantu memetakan kewajiban dan risiko agar dapat berdiskusi dengan pihak profesional/otoritas yang tepat, dan kebutuhan dukungan sosial anonim dijawab dengan Safe Storytelling Room. Pemetaan ini membuktikan bahwa setiap fitur JEDA dikembangkan langsung dari rasa empati yang tervalidasi untuk menyiapkan jalur transisi menuju kesiapan investor ritel (Debt-to-Investor Readiness Pathway).'
  },
  {
    id: 'ecosystem_alignment',
    title: 'Keselarasan Ekosistem (Ecosystem Alignment)',
    maxWords: 250,
    judgeFocus: 'Bagaimana solusi berintegrasi dengan pihak lain seperti OJK, AFPI, konselor psikologis, dan perbankan formal.',
    helperAgentId: 'maya',
    judgingCriteria: 'Business Model Feasibility',
    templateContent: 'JEDA beroperasi sebagai "jembatan netral" dalam ekosistem keuangan. Kami bekerja sama dengan asosiasi fintech (AFPI) dan OJK untuk merujuk pengguna ke alternatif restrukturisasi utang yang sah, berkolaborasi dengan asosiasi psikologi/psikiatri untuk penanganan krisis mental, serta bersinergi dengan lembaga keuangan formal untuk menyalurkan pengguna yang sudah pulih kesehatannya ke instrumen tabungan aman.'
  },
  {
    id: 'solution_mechanism',
    title: 'Mekanisme Pendekatan Solusi (Solution Approach)',
    maxWords: 350,
    judgeFocus: 'Langkah operasional dan pengalaman pengguna (user journey) saat menggunakan platform JEDA.',
    helperAgentId: 'saras',
    judgingCriteria: 'Effectiveness & Impact',
    templateContent: 'Pengguna masuk ke platform dalam kondisi cemas atau impulsif. Antarmuka JEDA menyambut dengan warna tenang (calm UI) dan disclaimers yang ramah. Pengguna melakukan *Self-Assessment* tingkat stres keuangan secara gratis. Sistem mengelompokkan tingkat risiko (ringan, sedang, kritis). Jika berada pada tingkat kritis, pengguna langsung diarahkan ke tombol darurat konsultasi psikolog mitra. Jika sedang, mereka dibimbing menggunakan *Debt Planner* untuk memetakan utang dan diberikan latihan pernapasan penurunan stres sebelum mengambil keputusan finansial.'
  },
  {
    id: 'impact_scale',
    title: 'Skala & Target Dampak (Impact Scale & Targets)',
    maxWords: 250,
    judgeFocus: 'Target kuantitatif penerima manfaat sosial-ekonomi di Indonesia dalam 1-3 tahun ke depan.',
    helperAgentId: 'arman',
    judgingCriteria: 'Effectiveness & Impact',
    templateContent: 'Target JEDA dalam 12 bulan pertama adalah menjangkau 50.000 pengguna aktif dengan target penurunan perilaku pinjaman impulsif sebesar 40% pada kelompok pengguna aktif. Dalam 3 tahun, JEDA menargetkan dapat mengurangi kepanikan keuangan retail pada 500.000 masyarakat berpendapatan rendah-menengah, serta berkontribusi langsung pada penurunan rasio TWP90 (kredit macet) nasional.'
  },
  {
    id: 'impact_measurement',
    title: 'Pengukuran Dampak (Impact Measurement)',
    maxWords: 250,
    judgeFocus: 'Metodologi evaluasi dampak keberhasilan solusi secara ilmiah dan dapat dipertanggungjawabkan.',
    helperAgentId: 'bima',
    judgingCriteria: 'Effectiveness & Impact',
    templateContent: 'Keberhasilan intervensi JEDA dievaluasi melalui Financial Stress Index (FSI) bulanan dan Transaction Interception Rate (TIR). Kami juga mengukur kesiapan mereka masuk ke pasar investasi formal menggunakan Debt-to-Investor Readiness Score. Data kuantitatif ini dianalisis secara etis untuk memastikan efektivitas intervensi emosional JEDA terhadap pembatalan transaksi utang berisiko.'
  },
  {
    id: 'system_value_prop',
    title: 'Sistem & Nilai Publik (Public Value Proposition)',
    maxWords: 300,
    judgeFocus: 'Manfaat publik non-komersial dan penguatan ketahanan ekonomi nasional.',
    helperAgentId: 'fajar',
    judgingCriteria: 'Alignment with Problem Statement',
    templateContent: 'Nilai publik utama JEDA adalah pengembalian martabat kemanusiaan dan kesehatan mental masyarakat yang terjerat utang. JEDA berkontribusi pada program literasi keuangan pemerintah dengan mengubah konsumen retail yang terbelit utang menjadi calon investor ritel yang sadar risiko dan patuh hukum. Dengan mendidik masyarakat menjauh dari skema predatory lending, JEDA membangun modal sosial yang kuat serta menjaga daya beli retail masyarakat bawah yang menjadi pilar ekonomi nasional.'
  },
  {
    id: 'system_architecture',
    title: 'Arsitektur Sistem (System Architecture)',
    maxWords: 300,
    judgeFocus: 'Rancangan teknologi yang aman, skalabel, menjaga kerahasiaan data (UU PDP), dan andal.',
    helperAgentId: 'bima',
    judgingCriteria: 'Technical Quality',
    templateContent: 'Arsitektur JEDA dirancang untuk pendekatan Privacy-by-Design. Sebagai rencana MVP, data identitas pengguna (PII) dirancang untuk didekatkan pada penyimpanan lokal di perangkat pengguna melalui tokenisasi terenkripsi, terpisah dari data catatan pemetaan utang. Server menggunakan arsitektur microservices berbasis cloud lokal Indonesia untuk menjamin kedaulatan data sesuai regulasi pemerintah. Seluruh komunikasi data dilindungi protokol HTTPS/TLS 1.3.'
  },
  {
    id: 'solution_originality',
    title: 'Orisinalitas Solusi (Originality)',
    maxWords: 250,
    judgeFocus: 'Apa perbedaan mendasar JEDA dengan aplikasi fintech lending, konsolidasi utang komersial, atau kalkulator finansial biasa.',
    helperAgentId: 'raka',
    judgingCriteria: 'Uniqueness / Creativity',
    templateContent: 'JEDA adalah pelopor platform *Emotional-Financial Intervention* di Indonesia. Berbeda dari kalkulator finansial biasa yang dingin dan hanya fokus pada rumus matematika, JEDA memprioritaskan pemulihan regulasi emosi pengguna terlebih dahulu. Kami juga menentang keras model komersial yang membebankan biaya jasa pada orang yang sedang kesusahan uang, melainkan mengalihkan pembiayaan ke sponsor korporat/CSR.'
  },
  {
    id: 'tech_innovation',
    title: 'Inovasi Teknologi & Metode',
    maxWords: 250,
    judgeFocus: 'Inovasi dalam metodologi intervensi perilaku atau pemanfaatan teknologi kecerdasan buatan yang etis.',
    helperAgentId: 'bima',
    judgingCriteria: 'Technical Quality',
    templateContent: 'Inovasi JEDA terletak pada metode *Impulse Pause Mechanism* yang dirancang untuk mendorong pengguna mengambil jeda refleksi sebelum keputusan berisiko. Sebagai rencana pengembangan masa depan yang membutuhkan persetujuan etis penuh dari pengguna dan peninjauan kepatuhan privasi (ethics review), kami merancang algoritma opsional deteksi perilaku mengetik cemas untuk memberikan intervensi instan sebelum transaksi berisiko tinggi terjadi.'
  },
  {
    id: 'creativity_implementation',
    title: 'Kreativitas Implementasi',
    maxWords: 250,
    judgeFocus: 'Kreativitas taktik komunikasi dan desain antarmuka yang sensitif terhadap stigma sosial.',
    helperAgentId: 'saras',
    judgingCriteria: 'Uniqueness / Creativity',
    templateContent: 'JEDA menggunakan pendekatan visual "Calm Space" dengan warna-warna pastel redup dan animasi lambat yang dirancang untuk mengurangi beban kognitif pengguna yang sedang panik. Kami juga menggunakan maskot empati yang interaktif untuk mendampingi pengguna melewati pertanyaan sulit tentang utang tanpa membuat mereka merasa diinterogasi.'
  },
  {
    id: 'data_feasibility',
    title: 'Kelayakan Data (Data & Feasibility)',
    maxWords: 300,
    judgeFocus: 'Ketersediaan data sekunder pendukung dan kemudahan memperoleh data primer secara aman.',
    helperAgentId: 'bima',
    judgingCriteria: 'Technical Quality',
    templateContent: 'Kelayakan data JEDA didukung oleh ketersediaan data makro dari OJK mengenai statistik kredit macet regional, serta kerja sama dengan komunitas pendamping korban pinjol untuk memperoleh data primer perilaku berutang secara anonim. Prototipe JEDA diuji secara terbatas menggunakan data sintetis (mock data) untuk memvalidasi performa model klasifikasi risiko sebelum diuji coba secara luas.'
  },
  {
    id: 'security_compliance',
    title: 'Keamanan & Kepatuhan (Security & Compliance)',
    maxWords: 300,
    judgeFocus: 'Kepatuhan terhadap regulasi OJK (POJK Perlindungan Konsumen) dan UU Pelindungan Data Pribadi (PDP).',
    helperAgentId: 'maya',
    judgingCriteria: 'Technical Quality',
    templateContent: 'JEDA menerapkan kepatuhan terhadap POJK Perlindungan Konsumen Sektor Jasa Keuangan dan UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi. Kami tidak mengumpulkan nomor kontak ponsel, data KTP, isi galeri, atau isi SMS. Kami membantu pengguna memetakan kewajiban dan risiko agar dapat berdiskusi dengan pihak profesional/otoritas yang tepat. Pinjaman ilegal dicatat sebagai risiko perlindungan konsumen untuk diarahkan ke pelaporan resmi, bukan sebagai saran default bayar.'
  },
  {
    id: 'mvp_readiness',
    title: 'Kesiapan Implementasi & MVP',
    maxWords: 250,
    judgeFocus: 'Ruang lingkup MVP yang realistis diselesaikan dalam periode inkubasi hackathon.',
    helperAgentId: 'raka',
    judgingCriteria: 'Technical Quality',
    templateContent: 'Ruang lingkup MVP JEDA berfokus pada tiga modul utama: (1) *Self-Assessment Stres Finansial* berbasis web, (2) *Debt Priority Planner* manual yang membantu mengurutkan utang secara visual, dan (3) *Safe Storyboard* sederhana untuk meluapkan keluhan secara anonim. MVP ini dapat diselesaikan penuh dalam waktu 4 minggu oleh tim pengembang inti kami.'
  },
  {
    id: 'problem_market_fit',
    title: 'Problem-Market Fit',
    maxWords: 250,
    judgeFocus: 'Seberapa besar solusi dibutuhkan oleh pasar sasaran (demand validation).',
    helperAgentId: 'arman',
    judgingCriteria: 'Market Needs',
    templateContent: 'Kesesuaian masalah dengan pasar divalidasi oleh besarnya jumlah masyarakat kelas menengah ke bawah yang terjebak dalam ekosistem pinjol akibat minimnya alternatif keuangan formal yang cepat. JEDA masuk sebagai solusi non-finansial yang menjembatani kebutuhan mendesak masyarakat sebelum mereka terjerumus ke lingkaran setan utang. Validasi pasar menunjukkan adanya keinginan kuat dari pengguna untuk beralih menjadi investor ritel legal setelah beban utang konsumtif mereka berhasil distabilkan.'
  },
  {
    id: 'value_proposition',
    title: 'Proposisi Nilai (Value Proposition)',
    maxWords: 250,
    judgeFocus: 'Keuntungan eksklusif bagi pengguna akhir dan mitra ekosistem.',
    helperAgentId: 'raka',
    judgingCriteria: 'Business Model Feasibility',
    templateContent: 'Bagi pengguna akhir: JEDA menawarkan ruang aman tanpa teror, pembimbingan emosi, dan pemetaan utang terstruktur agar kembali produktif. Bagi korporasi/donatur: JEDA memberikan instrumen penyaluran dana CSR kemanusiaan yang terukur dampaknya terhadap pengentasan kemiskinan dan pemulihan kesehatan mental tenaga kerja Indonesia.'
  },
  {
    id: 'business_model',
    title: 'Model Bisnis & Skalabilitas',
    maxWords: 300,
    judgeFocus: 'Strategi pembiayaan berkelanjutan, kemitraan sponsor, dan proyeksi perluasan skala solusi (social business scale).',
    helperAgentId: 'arman',
    judgingCriteria: 'Business Model Feasibility',
    templateContent: 'Sebagai usaha sosial (social enterprise), JEDA mengadopsi model *B2B-B2C Hybrid*. Platform gratis diakses penuh oleh pengguna retail. Sumber pendapatan diperoleh dari: (1) Program B2B Kesejahteraan Karyawan (Employee Financial Wellness) yang disponsori perusahaan besar untuk karyawannya guna meningkatkan produktivitas, (2) Pendanaan CSR dari institusi perbankan untuk program penguatan inklusi keuangan & edukasi kesiapan investasi ritel, dan (3) Hibah (grant) pembangunan sosial dari pemerintah atau yayasan filantropi.'
  }
];
