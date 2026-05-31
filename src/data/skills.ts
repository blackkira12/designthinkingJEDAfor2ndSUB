import { Skill } from '../types';

export const skills: Skill[] = [
  // --- DISCOVER ---
  {
    id: 'survey_mining',
    name: 'Survey Insight Mining',
    phase: 'Discover',
    description: 'Menganalisis hasil survei mentah terkait kebiasaan berutang, judi online, dan stres keuangan untuk menemukan tren tersembunyi.',
    outputs: ['Cluster demografis berisiko', 'Statistik pemicu utama pinjaman']
  },
  {
    id: 'interview_synthesis',
    name: 'Interview Synthesis',
    phase: 'Discover',
    description: 'Menyaring transkrip wawancara mendalam dari korban pinjol/paylater untuk menangkap kutipan emosional dan hambatan mental.',
    outputs: ['Kutipan emas (gold quotes)', 'Identifikasi rasa takut & trauma']
  },
  {
    id: 'extreme_user_mapping',
    name: 'Extreme User Mapping',
    phase: 'Discover',
    description: 'Memetakan perilaku pengguna ekstrem (misal: yang meminjam di 10+ platform sekaligus) untuk memahami batasan sistem saat ini.',
    outputs: ['Profil pengguna ekstrem', 'Skenario stres batas sistem']
  },
  {
    id: 'shame_barrier_detection',
    name: 'Shame & Fear Barrier Detection',
    phase: 'Discover',
    description: 'Mengidentifikasi mengapa korban enggan mencari bantuan karena malu sosial (social stigma) atau ancaman teror debt collector.',
    outputs: ['Daftar penghalang psikologis', 'Rekomendasi taktik pendekatan ramah']
  },
  {
    id: 'pinjol_trigger_mapping',
    name: 'Pinjol Trigger Mapping',
    phase: 'Discover',
    description: 'Memetakan stimulus lingkungan dan digital yang memicu seseorang melakukan pinjaman impulsif (misal: iklan, FOMO, tekanan pertemanan).',
    outputs: ['Peta stimulus pemicu pinjaman', 'Daftar momen kerentanan emosional']
  },

  // --- DEFINE ---
  {
    id: 'root_cause_analysis',
    name: 'Root Cause Analysis',
    phase: 'Define',
    description: 'Menggunakan metode 5 Whys untuk menemukan akar masalah mengapa edukasi literasi keuangan tradisional sering gagal pada kelompok tertekan.',
    outputs: ['Diagram pohon akar masalah', 'Pernyataan masalah inti']
  },
  {
    id: 'problem_refinement',
    name: 'Problem Statement Refinement',
    phase: 'Define',
    description: 'Merumuskan kembali pernyataan masalah agar selaras dengan Problem Statement 1 PIDI Hackathon secara tajam.',
    outputs: ['Refined Problem Statement', 'Klarifikasi batasan solusi']
  },
  {
    id: 'segment_prioritization',
    name: 'User Segment Prioritization',
    phase: 'Define',
    description: 'Menilai dan mengurutkan segmen pengguna mana yang paling mendesak dibantu berdasarkan tingkat kerawanan sosial-ekonomi.',
    outputs: ['Matriks prioritas segmen', 'Profil target sasaran utama']
  },
  {
    id: 'problem_solution_fit',
    name: 'Problem-Solution Fit Mapping',
    phase: 'Define',
    description: 'Memastikan fitur-fitur yang dirancang benar-benar menjawab hambatan psikologis dan kepatuhan yang didefinisikan sebelumnya.',
    outputs: ['Matriks keselarasan masalah-solusi', 'Filter fitur non-esensial']
  },
  {
    id: 'risk_taxonomy_builder',
    name: 'Risk Taxonomy Builder',
    phase: 'Define',
    description: 'Membangun klasifikasi tingkat keparahan stres utang (ringan, sedang, kritis) untuk memandu sistem klasifikasi intervensi.',
    outputs: ['Kategori tingkatan risiko', 'Pemicu perubahan status risiko']
  },

  // --- DEVELOP ---
  {
    id: 'feature_ideation',
    name: 'Feature Ideation',
    phase: 'Develop',
    description: 'Mengembangkan ide fitur intervensi emosional, seperti tombol tunda pinjaman (Impulse Pause Button) dan ruang cerita anonim.',
    outputs: ['Daftar konsep fitur interaktif', 'Sketsa alur interaksi mikro']
  },
  {
    id: 'rice_prioritization',
    name: 'RICE Prioritization',
    phase: 'Develop',
    description: 'Menilai ide fitur berdasarkan Reach, Impact, Confidence, dan Effort untuk menetapkan ruang lingkup MVP hackathon.',
    outputs: ['Tabel peringkat RICE', 'Daftar fitur masuk vs keluar MVP']
  },
  {
    id: 'kano_classification',
    name: 'Kano Feature Classification',
    phase: 'Develop',
    description: 'Mengkategorikan fitur menjadi basic (harus ada), performance (menambah kepuasan), dan excitement (pembeda unik bagi juri).',
    outputs: ['Peta Kano fitur solusi', 'Strategi nilai pembeda (delighters)']
  },
  {
    id: 'service_blueprint',
    name: 'Service Blueprint',
    phase: 'Develop',
    description: 'Memetakan operasional di balik layar, termasuk bagaimana rujukan psikolog atau penasihat keuangan berjalan secara aman.',
    outputs: ['Diagram alur layanan front-to-back stage', 'Identifikasi titik rawan kegagalan']
  },
  {
    id: 'mvp_scope_builder',
    name: 'MVP Scope Builder',
    phase: 'Develop',
    description: 'Memangkas fitur yang terlalu berat diimplementasikan dalam 1 bulan menjadi prototipe yang berdampak tinggi dalam waktu singkat.',
    outputs: ['Definisi spesifikasi MVP', 'Rencana pengembangan bertahap']
  },
  {
    id: 'trust_safety_design',
    name: 'Trust & Safety Design',
    phase: 'Develop',
    description: 'Merancang pola interaksi yang menjamin kerahasiaan identitas pengguna untuk membangun rasa aman yang mutlak.',
    outputs: ['Panduan privasi visual', 'Copywriting persetujuan (consent)']
  },

  // --- DELIVER ---
  {
    id: 'prototype_checklist',
    name: 'Prototype Checklist',
    phase: 'Deliver',
    description: 'Menyusun daftar verifikasi kelayakan prototipe sebelum demo di depan juri (misal: penanganan skenario ekstrem).',
    outputs: ['Checklist kesiapan demo', 'Skenario golden path presentasi']
  },
  {
    id: 'impact_metric_builder',
    name: 'Impact Metric Builder',
    phase: 'Deliver',
    description: 'Mendefinisikan metrik keberhasilan sosial (social impact) dan finansial yang konkret untuk dinilai oleh juri.',
    outputs: ['Metrik jangka pendek & panjang', 'Metodologi pengukuran dampak']
  },
  {
    id: 'business_feasibility',
    name: 'Business Model Feasibility Review',
    phase: 'Deliver',
    description: 'Menguji kelayakan ekonomi dari model enterprise sosial JEDA agar tetap hidup tanpa memeras pengguna.',
    outputs: ['Analisis keberlanjutan biaya', 'Peta kemitraan pendanaan']
  },
  {
    id: 'technical_feasibility',
    name: 'Technical Feasibility Review',
    phase: 'Deliver',
    description: 'Mengevaluasi kesiapan infrastruktur data, kebutuhan enkripsi, dan integrasi API pihak ketiga (misal: hotline krisis).',
    outputs: ['Arsitektur sistem tingkat tinggi', 'Analisis risiko integrasi tech']
  },
  {
    id: 'proposal_scoring',
    name: 'Proposal Rubric Scoring',
    phase: 'Deliver',
    description: 'Menilai draf tulisan proposal terhadap rubrik resmi 2nd Submission PIDI Hackathon untuk mendeteksi kelemahan narasi.',
    outputs: ['Skor simulasi internal', 'Rekomendasi penguatan argumen']
  },
  {
    id: 'pitch_narrative',
    name: 'Pitch Narrative Builder',
    phase: 'Deliver',
    description: 'Menyusun pidato presentasi 3 menit yang memukau juri, memadukan empati masalah manusia dan ketajaman dampak finansial.',
    outputs: ['Naskah pitch deck', 'Kalimat pembuka yang memikat (hooks)']
  }
];
