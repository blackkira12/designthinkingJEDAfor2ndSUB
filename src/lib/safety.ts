export const SAFETY_DISCLAIMERS = {
  isNotLender: "JEDA bukan aplikasi pinjaman dan tidak menyalurkan pinjaman.",
  isNotProfessionalAdvice: "JEDA tidak menggantikan nasihat hukum, keuangan profesional, psikolog, atau psikiater.",
  emergencyContact: "Jika Anda mengalami tekanan berat, pikiran menyakiti diri, atau krisis psikologis, segera hubungi layanan darurat atau tenaga profesional.",
  anonymizationNotice: "Data sensitif sebaiknya dianonimkan saat digunakan dalam prototype."
};

/**
 * Scans input text for sensitive keywords like self-harm or debt collection harassment,
 * returning alert flags and crisis escalation advice.
 */
export function scanInputSafety(text: string) {
  const lower = text.toLowerCase();
  const selfHarmKeywords = ['bunuh diri', 'akhiri hidup', 'menyerah saja', 'mati saja', 'gak kuat lagi', 'lompat'];
  const illegalEscalationKeywords = ['kabur', 'pukul', 'balas dendam', 'tipu', 'manipulasi data', 'joki pinjol'];

  const hasSelfHarm = selfHarmKeywords.some(keyword => lower.includes(keyword));
  const hasIllegalEscalation = illegalEscalationKeywords.some(keyword => lower.includes(keyword));

  return {
    hasSelfHarm,
    hasIllegalEscalation,
    alertMessage: hasSelfHarm 
      ? "Sistem mendeteksi tingkat kepanikan kritis dengan indikasi distres berat. Pengguna harus segera diarahkan ke Hotline Kesehatan Mental Kementerian Kesehatan (119 ext. 8) atau mitra Psikolog Klinis." 
      : hasIllegalEscalation 
        ? "Sistem mendeteksi indikasi tindakan ilegal atau berisiko tinggi. Platform mendidik pengguna untuk menghindari tindakan penipuan atau penghindaran hukum."
        : null
  };
}

/**
 * Appends standard disclaimer box content to generated text
 */
export function appendDisclaimer(text: string): string {
  return `${text}\n\n---\n*⚠️ DISCLAIMER: Hasil ini adalah draf buatan sistem JEDA Agent Studio untuk diskusi internal tim. JEDA bukan aplikasi pinjaman. JEDA tidak menggantikan nasihat medis, hukum, atau keuangan profesional.*`;
}
