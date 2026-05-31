import { SurveyInsightMetric, SurveyThemeCluster } from '../types';

export const surveyMetrics = {
  totalResponden: 450,
  pmfSignal: "82% responden menyatakan 'Sangat Kecewa' jika JEDA tidak lagi tersedia untuk membantu menghentikan pemicu pinjaman mereka.",
  willingnessToPay: "B2C gratis selamanya; B2B program employee wellness disukai oleh 74% perwakilan HRD perusahaan manufaktur yang kami wawancarai."
};

export const mainSegments: SurveyInsightMetric[] = [
  { label: "Pekerja Gig & Kerah Biru", value: "42%", description: "Pendapatan harian tidak stabil, sering meminjam untuk kebutuhan pokok dan terjerat pinjol akibat literasi regulasi yang minim." },
  { label: "Karyawan Muda (Fresh Graduate)", value: "35%", description: "Terjerat cicilan paylater konsumtif karena FOMO belanja digital dan kurang memahami akumulasi denda tersembunyi." },
  { label: "Mahasiswa / Pelajar", value: "15%", description: "Meminjam modal lewat pinjol ilegal untuk game online atau tergiur investasi bodong / judi slot gacor." },
  { label: "Sektor Lainnya", value: "8%", description: "Ibu rumah tangga atau wirausaha mikro yang terkena krisis arus kas jangka pendek." }
];

export const topPainPoints: SurveyInsightMetric[] = [
  { label: "Tekanan & Teror Debt Collector", value: "88%", description: "Menjadi pemicu kecemasan utama yang melumpuhkan kemampuan rasional." },
  { label: "Bunga & Denda Tak Masuk Akal", value: "76%", description: "Mengakibatkan utang membengkak 3x lipat dalam waktu kurang dari 90 hari." },
  { label: "Stigma Malu Sosial (Social Shame)", value: "72%", description: "Membuat korban menyembunyikan masalah dari keluarga terdekat hingga terlambat." }
];

export const topTriggers: SurveyInsightMetric[] = [
  { label: "Kepanikan Finansial Instan", value: "65%", description: "Keputusan meminjam diambil dalam kondisi terdesak (kurang dari 1 jam)." },
  { label: "Adiksi Judi Online / Game", value: "48%", description: "Menggunakan pinjol/paylater sebagai modal spekulatif berisiko." },
  { label: " FOMO & Tekanan Teman Sebaya", value: "32%", description: "Dorongan membeli barang sekunder menggunakan cicilan limit paylater." }
];

export const wantedFeatures: SurveyInsightMetric[] = [
  { label: "Tombol Jeda Penunda Keputusan", value: "85%", description: "Mekanisme yang memberikan jeda refleksi emosi sebelum mengklik ajukan pinjaman." },
  { label: "Peta Utang Visual (Debt Priority)", value: "79%", description: "Visualisasi pemetaan utang agar tidak cemas melihat akumulasi angka tagihan." },
  { label: "Safe Space Anonim (Storytelling)", value: "74%", description: "Ruang berbagi keluh kesah tanpa takut identitas asli terbongkar." }
];

export const surveyThemeClusters: SurveyThemeCluster[] = [
  {
    theme: "Kebutuhan Jeda Refleksi Keuangan",
    percentage: 85,
    featureSolution: "Impulse Pause Button (Mendorong Jeda Refleksi)"
  },
  {
    theme: "Kebingungan Urutan Pelunasan Utang",
    percentage: 79,
    featureSolution: "Debt Priority Map (Pemetaan Risiko & Otoritas Sah)"
  },
  {
    theme: "Ketakutan Stigma Sosial & Kesehatan Mental",
    percentage: 74,
    featureSolution: "Safe Storytelling Room (Dukungan Anonim)"
  },
  {
    theme: "Keinginan Investasi tapi Terhambat Beban Utang",
    percentage: 68,
    featureSolution: "Debt-to-Investor Readiness Pathway (Edukasi Transisi)"
  }
];

export const insightToFeatureMapping = [
  {
    trigger: "Panik & Impulsivitas Finansial",
    feature: "Jeda Dulu (Impulse Pause Mechanism)",
    explanation: "Membantu menstabilkan emosi pengguna dengan menunda keputusan kredit berisiko 24 jam."
  },
  {
    trigger: "Kebingungan & Stres Akumulasi Angka",
    feature: "Debt Priority Map (Pemeta Kewajiban)",
    explanation: "Membantu memetakan kewajiban utang berdasarkan risiko legalitas OJK/ilegal untuk dilaporkan secara tepat."
  },
  {
    trigger: "Malu Sosial & Teror Psikologis",
    feature: "Anonymous Safe Room (Storytelling)",
    explanation: "Memberikan ruang aman bercerita secara anonim untuk memulihkan regulasi emosi diri."
  },
  {
    trigger: "Kekhawatiran Penyalahgunaan Data Kontak",
    feature: "Privacy-by-Design (Rencana MVP)",
    explanation: "Tidak mengumpulkan kontak HP atau SMS pengguna; data dienkripsi lokal di perangkat."
  },
  {
    trigger: " FOMO & Ketidaktahuan Investasi Legal",
    feature: "Debt-to-Investor Readiness Pathway",
    explanation: "Edukasi kesiapan finansial dan filter platform investasi legal sebelum membeli produk."
  }
];
