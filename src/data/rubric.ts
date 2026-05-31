import { RubricCriterion } from '../types';

export const rubricCriteria: Omit<RubricCriterion, 'score' | 'explanation' | 'improvement'>[] = [
  {
    id: 'alignment',
    name: 'Penyelarasan Masalah (Alignment with Problem Statement)',
    redFlags: [
      'Solusi malah bertindak sebagai pemberi pinjaman baru.',
      'Narasi tidak berfokus pada ketahanan retail keuangan.'
    ],
    recommendedAgentId: 'raka'
  },
  {
    id: 'effectiveness',
    name: 'Efektivitas & Dampak (Effectiveness & Impact)',
    redFlags: [
      'Metrik dampak terlalu abstrak (misal: "menjadikan masyarakat sejahtera").',
      'Tidak ada mekanisme kontrol intervensi yang konkret.'
    ],
    recommendedAgentId: 'bima'
  },
  {
    id: 'uniqueness',
    name: 'Orisinalitas / Kreativitas (Uniqueness & Creativity)',
    redFlags: [
      'Hanya meniru kalkulator finansial excel biasa.',
      'Tidak memiliki keunikan intervensi emosi dibanding produk yang ada.'
    ],
    recommendedAgentId: 'saras'
  },
  {
    id: 'technical',
    name: 'Kualitas Teknis (Technical Quality & Security)',
    redFlags: [
      'Menyimpan data sensitif kontak darurat tanpa enkripsi.',
      'Desain arsitektur tidak mempertimbangkan kepatuhan UU PDP.'
    ],
    recommendedAgentId: 'maya'
  },
  {
    id: 'business',
    name: 'Kelayakan Model Bisnis (Business Model Feasibility)',
    redFlags: [
      'Memeras uang (biaya langganan) dari pengguna yang sedang terlilit utang.',
      'Sangat bergantung pada donasi tanpa model bisnis mandiri yang jelas.'
    ],
    recommendedAgentId: 'arman'
  },
  {
    id: 'market',
    name: 'Kebutuhan Pasar (Market Needs & Crisis Sensitivity)',
    redFlags: [
      'Copywriting platform bernada mengancam, menghakimi, atau menakut-nakuti.',
      'Tidak memiliki jalur penanganan krisis mental darurat (hotline).'
    ],
    recommendedAgentId: 'nadira'
  }
];
