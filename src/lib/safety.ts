export const SAFETY_DISCLAIMERS = {
  isNotLender: "JEDA bukan aplikasi pinjaman, tidak menyalurkan pinjaman, dan tidak memfasilitasi pendanaan dalam bentuk apa pun.",
  isNotBroker: "JEDA bukan broker keuangan, bukan perantara mediasi komersial, bukan agen penagihan (debt collector), dan tidak memediasi utang secara komersial.",
  isNotInvestmentAdvisor: "JEDA bukan penasihat investasi berlisensi dan tidak memberikan rekomendasi portofolio investasi, produk saham, reksa dana, kripto, atau produk finansial komersial lainnya.",
  isNotProfessionalAdvice: "JEDA tidak menggantikan nasihat hukum, keuangan profesional bersertifikat, psikolog klinis, atau psikiater.",
  emergencyContact: "Jika Anda mengalami tekanan berat, pikiran menyakiti diri, atau krisis psikologis akut, segera hubungi layanan darurat Hotline Kesehatan Jiwa Kemenkes (119 ext. 8) atau tenaga medis profesional terdekat.",
  privacyPolicy: "JEDA dirancang dengan prinsip Privacy-by-Design. Modul ini tidak mengumpulkan data nomor HP, daftar kontak, isi SMS, atau isi galeri foto. Seluruh data diproses secara anonim secara lokal di perangkat pengguna melalui browser.",
  anonymizationNotice: "Data pribadi sensitif sebaiknya tidak dimasukkan atau dianonimkan terlebih dahulu saat diinput ke dalam sistem simulasi."
};

/**
 * Scans input text for sensitive keywords like self-harm or debt collection harassment,
 * returning alert flags and crisis escalation advice.
 */
export function scanInputSafety(text: string) {
  const lower = text.toLowerCase();
  const selfHarmKeywords = ['bunuh diri', 'akhiri hidup', 'menyerah saja', 'mati saja', 'gak kuat lagi', 'lompat', 'ingin mati'];
  const illegalEscalationKeywords = ['kabur', 'pukul', 'balas dendam', 'tipu', 'manipulasi data', 'joki pinjol', 'hack dc', 'serang dc'];

  const hasSelfHarm = selfHarmKeywords.some(keyword => lower.includes(keyword));
  const hasIllegalEscalation = illegalEscalationKeywords.some(keyword => lower.includes(keyword));

  return {
    hasSelfHarm,
    hasIllegalEscalation,
    alertMessage: hasSelfHarm 
      ? `SISTEM MENDETEKSI TINGKAT KRISIS TINGGI: ${SAFETY_DISCLAIMERS.emergencyContact}` 
      : hasIllegalEscalation 
        ? "PERINGATAN KEPATUHAN HUKUM: JEDA mendidik pengguna untuk menyelesaikan masalah keuangan melalui jalur hukum resmi dan mediasi legal OJK. Kami tidak mendukung tindakan manipulasi data, penipuan, atau perusakan fisik."
        : null
  };
}

/**
 * Appends standard disclaimer box content to generated text
 */
export function appendDisclaimer(text: string): string {
  return `${text}\n\n---\n*⚠️ Draf untuk diskusi dan edukasi tim JEDA, bukan nasihat profesional. JEDA tidak menyalurkan pinjaman, tidak memberikan rekomendasi investasi personal, dan tidak mengumpulkan kontak HP pengguna.*`;
}
