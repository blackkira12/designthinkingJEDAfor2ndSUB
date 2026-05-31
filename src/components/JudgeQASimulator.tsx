"use client";

import React, { useState } from 'react';
import { Award, RefreshCw, ChevronRight, User, CheckCircle } from 'lucide-react';

interface JudgePersona {
  id: string;
  name: string;
  role: string;
  focus: string;
  avatarColor: string;
  question: string;
  keywords: string[];
  suggestedAnswer: string;
}

export default function JudgeQASimulator() {
  const [activeJudgeId, setActiveJudgeId] = useState<string | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [evaluation, setEvaluation] = useState<{
    score: number;
    feedback: string;
    metricsFound: string[];
    missingMetrics: string[];
  } | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const judgePersonas: JudgePersona[] = [
    {
      id: 'regulator',
      name: 'Ibu Maya Kartika',
      role: 'Regulator & Compliance Judge',
      focus: 'Kepatuhan hukum OJK, UU PDP, status non-lender, serta keamanan privasi kontak ponsel.',
      avatarColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      question: 'Bagaimana Anda menjamin JEDA tidak melanggar ketentuan perizinan OJK terkait penasihat investasi atau penyalur kredit? Dan bagaimana platform Anda mematuhi UU PDP dalam menangani data sensitif utang pengguna?',
      keywords: ['ojk', 'pdp', 'lokal', 'kontak', 'sms', 'non-transaksional', 'bukan penasihat', 'bukan penyalur', 'minimisasi data'],
      suggestedAnswer: 'JEDA menegaskan posisinya sebagai platform edukasi non-transaksional. Kami tidak menyalurkan pinjaman dan tidak memberikan rekomendasi portofolio investasi berlisensi. Kami tidak melakukan scraping data sensitif seperti daftar kontak telepon, isi SMS, atau galeri foto pengguna. Seluruh data diproses secara anonim di peramban klien secara lokal sebagai rencana MVP enkripsi lokal, meminimalisir risiko kebocoran sesuai prinsip minimisasi data UU PDP No. 27/2022.'
    },
    {
      id: 'business',
      name: 'Bapak Arman Wijaya',
      role: 'Business Model Judge',
      focus: 'Keberlanjutan finansial usaha sosial, program B2B Corporate Wellness, dan penolakan monetisasi korban utang.',
      avatarColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      question: 'Mengapa korporasi manufaktur atau retail bersedia membayar program B2B Employee Wellness JEDA untuk karyawan mereka? Apa proposisi nilai bisnis sosial yang membuat model bisnis ini berkelanjutan tanpa membebani korban utang?',
      keywords: ['wellness', 'b2b', 'produktivitas', 'karyawan', 'gratis', 'subsidi', 'csr', 'sustainability', 'sosial'],
      suggestedAnswer: 'Stres keuangan akibat teror penagih utang menurunkan produktivitas karyawan secara signifikan di lantai pabrik dan kantor. Dengan melisensi JEDA Employee Wellness, perusahaan menghemat biaya akibat absensi, kecelakaan kerja, dan penurunan performa kerja. JEDA tetap gratis 100% untuk korban secara B2C, didanai penuh oleh subsidi silang korporasi (B2B) dan hibah/sponsor inklusi keuangan CSR perbankan.'
    },
    {
      id: 'technical',
      name: 'Bapak Bima Aditya',
      role: 'Technical Feasibility Judge',
      focus: 'Keterbatasan client-side, minimalisasi data server, rencana enkripsi lokal, dan aksesibilitas mobile-first.',
      avatarColor: 'bg-blue-50 text-blue-700 border-blue-200',
      question: 'Platform Anda berjalan tanpa database backend di MVP. Bagaimana cara Anda menjaga data sensitif utang pengguna tetap aman dan bisa diakses berulang kali? Mengapa memilih client-side?',
      keywords: ['klien', 'client', 'browser', 'enkripsi', 'pribadi', 'local', 'minimisasi', 'anonymize', 'manual', 'tanpa backend'],
      suggestedAnswer: 'Untuk prototipe awal, data diproses murni di sisi peramban klien tanpa API eksternal guna memitigasi risiko kebocoran data di server. Untuk penyimpanan jangka panjang, kami merencanakan enkripsi WebCrypto lokal (local AES MVP) pada perangkat pengguna. Ini menjamin pengguna memegang kontrol penuh atas data mereka secara mandiri tanpa risiko server-side breach.'
    },
    {
      id: 'behavioral',
      name: 'Dr. Nadira',
      role: 'Behavioral & Psychology Judge',
      focus: 'Penggunaan hambatan perilaku positif (behavioral friction), jeda reflektif, pengurangan beban kognitif, dan non-clinical self-check.',
      avatarColor: 'bg-rose-50 text-rose-700 border-rose-200',
      question: 'Bagaimana platform JEDA membuktikan bahwa intervensi "Jeda Dulu" Anda efektif meredam keputusan kredit impulsif pengguna? Apakah ini sekadar kalkulator keuangan biasa?',
      keywords: ['friction', 'pause', 'reflective', 'cognitive', 'impulse', 'self-check', 'non-klinis', 'beban kognitif', 'refleksi'],
      suggestedAnswer: 'JEDA bukan kalkulator keuangan biasa, melainkan media intervensi perilaku hulu. Kami menerapkan behavioral friction (hambatan perilaku positif) berupa tombol Impulse Pause dan panduan non-clinical self-check. Ini memberikan reflective pause untuk meredakan kepanikan kognitif (cognitive load reduction) dan memutus impulse-risk penagihan utang baru secara instan.'
    },
    {
      id: 'market',
      name: 'Ibu Dina Lestari',
      role: 'Market Validation Judge',
      focus: 'Kebutuhan pasar riil, stigma malu sosial, dan penanganan rasa bersalah pengguna lewat Anonymous Safe Room.',
      avatarColor: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      question: 'Bagaimana JEDA memvalidasi bahwa pasar pengguna rentan benar-benar mau bercerita di platform Anda? Banyak orang menyembunyikan masalah pinjol karena rasa malu yang mendalam.',
      keywords: ['malu', 'stigma', 'anonim', 'safe room', 'survei', 'responden', 'validasi', 'curhat', 'cerita'],
      suggestedAnswer: 'Validasi pasar JEDA membuktikan bahwa 72% korban menyembunyikan utang karena stigma malu sosial. Untuk mendobrak hambatan ini, JEDA menyediakan Anonymous Safe Room di mana pengguna bisa bercerita dan memetakan kewajiban mereka tanpa mencantumkan identitas asli (nama, email, nomor HP). Hasil kuesioner dari 450 responden mock mengonfirmasi 74% sangat terbantu dengan ruang aman anonim ini.'
    },
    {
      id: 'impact',
      name: 'Bapak Raka',
      role: 'Impact Measurement Judge',
      focus: 'Kuantifikasi metrik dampak sosial, evaluasi Financial Stress Index (FSI), dan Transaction Interception Rate (TIR).',
      avatarColor: 'bg-purple-50 text-purple-700 border-purple-200',
      question: 'Bagaimana Anda mengukur efektivitas dampak sosial platform JEDA secara kuantitatif? Metrik apa saja yang Anda gunakan untuk membuktikan keberhasilan sebelum mereka siap berinvestasi?',
      keywords: ['fsi', 'tir', 'interception', 'stress index', 'readiness', 'dana darurat', 'metrik', 'utang', 'investasi'],
      suggestedAnswer: 'Dampak JEDA diukur secara ilmiah menggunakan dua metrik utama: (1) Financial Stress Index (FSI) bulanan untuk mengukur tingkat penurunan kecemasan kognitif keuangan, dan (2) Transaction Interception Rate (TIR) dengan target awal membatalkan 35% rencana pinjaman impulsif. Kesiapan mereka menjadi investor ritel diukur secara terstruktur menggunakan Investor Readiness Score berdasarkan rasio utang dan ketersediaan dana darurat hulu.'
    }
  ];

  const handleSelectJudge = (judgeId: string) => {
    setActiveJudgeId(judgeId);
    setUserAnswer('');
    setEvaluation(null);
  };

  const handleEvaluate = () => {
    if (!userAnswer.trim()) {
      alert("Harap tulis jawaban Anda terlebih dahulu!");
      return;
    }

    setIsEvaluating(true);

    setTimeout(() => {
      const activeJudge = judgePersonas.find(j => j.id === activeJudgeId)!;
      const lowerAnswer = userAnswer.toLowerCase();
      
      const found: string[] = [];
      const missing: string[] = [];

      activeJudge.keywords.forEach(kw => {
        if (lowerAnswer.includes(kw)) {
          found.push(kw);
        } else {
          missing.push(kw);
        }
      });

      // Simple keyword coverage scoring (capped at 100)
      const keywordScore = Math.round((found.length / activeJudge.keywords.length) * 80);
      
      // Clarity score based on word count (target 25-100 words for optimal elevator pitch response)
      const words = userAnswer.trim().split(/\s+/).length;
      let clarityScore = 0;
      if (words >= 30 && words <= 120) clarityScore = 20;
      else if (words > 10 && words < 200) clarityScore = 12;
      else clarityScore = 5;

      const totalScore = keywordScore + clarityScore;

      // Constructive critique generator
      let feedback = "";
      if (totalScore >= 85) {
        feedback = "Luar biasa! Jawaban Anda sangat taktis, menyentuh seluruh kepatuhan hukum/metrik yang dicari juri, dan disampaikan dengan porsi kata yang pas. Pertahanan pitch yang sangat solid.";
      } else if (totalScore >= 60) {
        feedback = "Cukup baik. Jawaban Anda sudah menyentuh logika dasar solusi. Namun, Anda masih kekurangan beberapa kata kunci bukti empiris atau kepatuhan yang dicari juri. Perkuat dengan mengacu pada daftar kata kunci di bawah.";
      } else {
        feedback = "Kurang meyakinkan. Jawaban Anda terlalu pendek atau kurang spesifik mengenai regulasi, model bisnis, atau metrik JEDA. Juri akan menganggap proposal Anda kurang matang secara operasional.";
      }

      setEvaluation({
        score: totalScore,
        feedback,
        metricsFound: found,
        missingMetrics: missing
      });

      setIsEvaluating(false);
    }, 800);
  };

  const activeJudge = judgePersonas.find(j => j.id === activeJudgeId);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs max-w-4xl mx-auto space-y-6 print:border-none print:shadow-none">
      
      {/* Header */}
      <div className="border-b border-slate-100 pb-4 print:pb-2">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-teal-600" />
          <h2 className="text-lg font-bold text-slate-900">Simulasi Tanya Jawab Juri (Pitch Defense Simulator)</h2>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Latih kemampuan Anda mempertahankan konsep JEDA di hadapan dewan juri dengan 6 keahlian evaluasi yang berbeda.
        </p>
      </div>

      {!activeJudgeId ? (
        /* Judge Selection Dashboard */
        <div className="space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Pilih Juri Penanya:</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {judgePersonas.map((judge) => (
              <button
                key={judge.id}
                onClick={() => handleSelectJudge(judge.id)}
                className="border border-slate-200 hover:border-teal-500 rounded-2xl p-4 text-left hover:bg-slate-50/50 transition-all flex gap-4 group"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold border ${judge.avatarColor}`}>
                  <User className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 group-hover:text-teal-700">{judge.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-teal-600 transition-transform" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider leading-none">{judge.role}</span>
                  <p className="text-[11px] text-slate-500 leading-normal pt-1">{judge.focus}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* QA Session Screen */
        <div className="space-y-6">
          {/* Judge Header */}
          <div className={`border rounded-xl p-4 flex gap-4 items-start ${activeJudge?.avatarColor}`}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold bg-white border border-current">
              <User className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold block">{activeJudge?.name}</span>
              <span className="text-[10px] uppercase font-bold tracking-wider leading-none block opacity-80">{activeJudge?.role}</span>
              <p className="text-xs font-semibold mt-2 border-t border-current/20 pt-2 leading-relaxed">
                &ldquo;{activeJudge?.question}&rdquo;
              </p>
            </div>
          </div>

          {/* User Answer Panel */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <label className="font-bold text-slate-700">Tulis Jawaban Pertahanan Pitch Anda:</label>
              <span className="text-slate-400 font-medium">Saran: Jawab dengan ringkas dan sertakan data/kepatuhan.</span>
            </div>
            
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              rows={6}
              disabled={isEvaluating}
              className="w-full p-4 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-teal-600 leading-relaxed font-sans"
              placeholder="Tulis tanggapan Anda untuk meyakinkan juri..."
            />

            <div className="flex justify-between items-center text-[10px] text-slate-400">
              <span>Jumlah kata: {userAnswer.trim() === '' ? 0 : userAnswer.trim().split(/\s+/).length} kata</span>
              <span>Min. 30 kata untuk hasil optimal.</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-3 border-t border-slate-100 print:hidden">
            <button
              onClick={() => setActiveJudgeId(null)}
              className="px-4 py-2 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-600"
            >
              Kembali ke Menu Juri
            </button>
            <button
              onClick={handleEvaluate}
              disabled={isEvaluating}
              className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold py-2.5 px-6 rounded-xl transition-all duration-200 flex items-center gap-2"
            >
              {isEvaluating ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Sedang Mengevaluasi...</span>
                </>
              ) : (
                <span>Evaluasi Jawaban Saya</span>
              )}
            </button>
          </div>

          {/* Evaluation Results Card */}
          {evaluation && (
            <div className="border border-slate-200 rounded-xl p-5 space-y-5 bg-slate-50/30 animate-fade-in print:border-none print:p-0">
              
              {/* Score bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Skor Kelayakan Defisit</span>
                  <div className="text-xl font-black text-slate-900 mt-0.5">{evaluation.score} / 100</div>
                </div>
                
                <div className="flex-1 max-w-xs bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-300 ${
                      evaluation.score >= 80 ? 'bg-emerald-500' : evaluation.score >= 55 ? 'bg-teal-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${evaluation.score}%` }}
                  ></div>
                </div>
              </div>

              {/* General Feedback Text */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Kritik & Masukan Juri</span>
                <p className="text-xs text-slate-700 leading-relaxed font-semibold">{evaluation.feedback}</p>
              </div>

              {/* Keywords check list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">Kata Kunci Terdeteksi ({evaluation.metricsFound.length}):</span>
                  {evaluation.metricsFound.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {evaluation.metricsFound.map((kw, i) => (
                        <span key={i} className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-md border border-emerald-100">
                          {kw}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-slate-400 italic block">Tidak ada kata kunci terdeteksi.</span>
                  )}
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-rose-700 uppercase tracking-wider block">Kata Kunci Kurang ({evaluation.missingMetrics.length}):</span>
                  {evaluation.missingMetrics.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {evaluation.missingMetrics.map((kw, i) => (
                        <span key={i} className="bg-rose-50 text-rose-800 text-[10px] font-bold px-2 py-0.5 rounded-md border border-rose-100">
                          {kw}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-emerald-600 font-bold block">Sempurna! Semua kata kunci terjawab.</span>
                  )}
                </div>

              </div>

              {/* Stronger Suggested Answer */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-1.5 text-teal-800 border-b border-slate-100 pb-2">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-bold uppercase tracking-wider">Rekomendasi Jawaban Pertahanan Lebih Kuat</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  &ldquo;{activeJudge?.suggestedAnswer}&rdquo;
                </p>
                <div className="text-[10px] text-slate-400 leading-relaxed border-t border-slate-100 pt-2">
                  <strong>Catatan Desain:</strong> Jawaban ini menyertakan istilah penanganan resiliensi perilaku finansial hulu secara bersih tanpa melakukan overclaiming aspek medis.
                </div>
              </div>

            </div>
          )}
        </div>
      )}

    </div>
  );
}
