import { RubricCriterion } from '../types';
import { rubricCriteria } from '../data/rubric';

export function evaluateScores(currentScores: Record<string, number>): RubricCriterion[] {
  const getExplanation = (id: string, score: number): string => {
    switch (score) {
      case 5:
        return "Sangat Baik. Aspek ini dijelaskan secara lengkap, objektif, didukung data kuat, dan siap dipresentasikan di depan dewan juri.";
      case 4:
        return "Baik. Penjelasan sudah terarah dan logis, namun memerlukan sedikit penajaman data pendukung untuk meyakinkan juri.";
      case 3:
        return "Cukup. Kerangka kerja dasar sudah terbentuk, tetapi masih terlalu normatif dan belum menonjolkan inovasi spesifik JEDA.";
      case 2:
        return "Kurang. Penjelasan masih sangat mendasar, minim analisis mendalam, atau terdapat salah satu red flag yang terdeteksi.";
      case 1:
      default:
        return "Sangat Kurang. Bagian ini belum dibahas, sangat pendek, atau melanggar prinsip kepatuhan etis perlindungan konsumen.";
    }
  };

  const getImprovement = (id: string, score: number): string => {
    if (score >= 5) return "Pertahankan kualitas penulisan ini dan siapkan visualisasi pendukung untuk slide dek pitch.";

    switch (id) {
      case 'alignment':
        return "Hubungkan secara eksplisit dengan sub-topik Ketahanan Retail Keuangan di Problem Statement 1 PIDI. Perjelas bahwa JEDA bukan penyalur pinjaman melainkan pengaman emosi retail.";
      case 'effectiveness':
        return "Tentukan metrik kuantitatif konkrit seperti Financial Stress Index (FSI) atau Transaction Interception Rate (TIR) yang dihitung secara berkala.";
      case 'uniqueness':
        return "Rinci mekanisme 'Impulse Pause Button' (Jeda Emosional 24 Jam) dan 'Quiet Interface' yang membedakannya secara radikal dari aplikasi literasi keuangan pasif biasa.";
      case 'technical':
        return "Jelaskan arsitektur keamanan data lokal (AES-256), kebijakan minimisasi data (tidak menyimpan nomor kontak), dan keselarasan dengan UU PDP No. 27/2022.";
      case 'business':
        return "Perkuat logika model bisnis sosial. Jelaskan skema Employee Financial Wellness B2B untuk korporasi besar dan bagaimana hal itu menyubsidi silang layanan gratis bagi masyarakat miskin.";
      case 'market':
      default:
        return "Gunakan tone copywriting yang berempati dan tidak menghakimi (non-judgmental). Rinci jalur eskalasi darurat medis/psikologis bila terjadi ancaman keselamatan jiwa.";
    }
  };

  return rubricCriteria.map(item => {
    const score = currentScores[item.id] || 3;
    return {
      ...item,
      score,
      explanation: getExplanation(item.id, score),
      improvement: getImprovement(item.id, score)
    } as RubricCriterion;
  });
}
