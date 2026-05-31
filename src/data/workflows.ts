import { WorkflowPhase } from '../types';

export const workflows: WorkflowPhase[] = [
  {
    id: 'Discover',
    name: '1. Discover (Mengeksplorasi Masalah)',
    goal: 'Mengeksplorasi dan memahami lanskap stres utang pinjol, judi online, serta perilaku meminjam impulsif secara mendalam dari sudut pandang korban.',
    recommendedAgents: ['nadira', 'dina'],
    recommendedSkills: ['survey_mining', 'interview_synthesis', 'shame_barrier_detection', 'pinjol_trigger_mapping'],
    requiredInput: 'Temuan survei awal, transkrip wawancara pengguna rentan, atau observasi perilaku penagihan utang.',
    expectedOutput: 'Empathy Map, Persona Pengguna Rentan, Peta Titik Pemicu Stres Emosional.',
    judgeRelevance: 'Juri menilai seberapa dalam pemahaman tim terhadap masalah nyata di masyarakat Indonesia (Customer Empathy & Problem Validation).'
  },
  {
    id: 'Define',
    name: '2. Define (Merumuskan Masalah)',
    goal: 'Menyaring temuan eksploratif menjadi rumusan masalah yang tajam, terukur, dan selaras dengan regulasi perlindungan konsumen OJK.',
    recommendedAgents: ['bima', 'maya', 'raka'],
    recommendedSkills: ['root_cause_analysis', 'problem_refinement', 'segment_prioritization', 'risk_taxonomy_builder'],
    requiredInput: 'Kutipan masalah utama pengguna, batasan kepatuhan regulasi, atau draf pernyataan masalah awal.',
    expectedOutput: 'Akar Masalah (5 Whys), Rumusan "How Might We" (HMW), Dimensi Klasifikasi Risiko Keuangan.',
    judgeRelevance: 'Juri melihat ketajaman definisi masalah dan kemampuan tim membedakan gejala dengan akar penyebab masalah (Root Cause & Regulatory Compliance).'
  },
  {
    id: 'Develop',
    name: '3. Develop (Merancang Solusi)',
    goal: 'Mengembangkan dan memprioritaskan ide fitur intervensi emosional-finansial JEDA yang aman, etis, dan minim hambatan psikologis.',
    recommendedAgents: ['saras', 'arman', 'nadira'],
    recommendedSkills: ['feature_ideation', 'rice_prioritization', 'kano_classification', 'trust_safety_design'],
    requiredInput: 'Daftar ide fitur kasar, target profil pengguna, atau batasan kapasitas pengerjaan tim.',
    expectedOutput: 'Matriks Prioritas Fitur RICE, Rekomendasi Alur Trust & Safety Visual, Rekomendasi Copywriting Non-Judgmental.',
    judgeRelevance: 'Juri menilai kreativitas solusi, keunikan pendekatan intervensi emosional, serta kepatuhan etis dalam antarmuka (Creativity & Safety by Design).'
  },
  {
    id: 'Deliver',
    name: '4. Deliver (Mematangkan Narasi & Kelayakan)',
    goal: 'Mematangkan model kemitraan keberlanjutan, metrik dampak juri, serta menyusun narasi proposal 2nd submission agar kompetitif.',
    recommendedAgents: ['raka', 'fajar', 'arman', 'maya'],
    recommendedSkills: ['impact_metric_builder', 'business_feasibility', 'technical_feasibility', 'proposal_scoring', 'pitch_narrative'],
    requiredInput: 'Rancangan solusi teknis, draf narasi proposal sementara, atau rencana kemitraan B2B/B2G.',
    expectedOutput: 'Draf Proposal Siap Kirim, Metrik Keberhasilan Sosial (Social Impact), Rencana Keberlanjutan Usaha (Business Model Canvas).',
    judgeRelevance: 'Juri mengevaluasi kelayakan bisnis (viabilitas), dampak nyata solusi (impact), kesiapan implementasi, serta kejelasan komunikasi proposal (Feasibility & Scalability).'
  }
];
