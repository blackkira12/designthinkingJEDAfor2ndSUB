import React, { useState } from 'react';
import { Copy, ShieldCheck, TrendingUp, BarChart3, Smartphone, ShieldAlert, Printer } from 'lucide-react';
import { appendDisclaimer } from '../lib/safety';

export const CanvasExportPreview: React.FC = () => {
  const [proposalData] = useState<Record<string, string>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jeda_proposal_drafts');
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  // Helper to extract text or fall back to defaults
  const getFieldText = (key: string, fallback: string) => {
    if (!proposalData[key]) return fallback;
    // Strip reviewer disclaimer
    return proposalData[key].replace(/Draf untuk diskusi tim \(Reviewer: \w+ \w+\):\n/, '').trim();
  };

  const canvasData = {
    problemStatement: getFieldText('problem_alignment', 'Ketahanan retail keuangan terancam oleh pinjol ilegal dan kecanduan judi online yang dipicu oleh kecemasan kognitif akut.'),
    userSegment: getFieldText('problem_validation', 'Masyarakat menengah ke bawah, pekerja sektor informal, serta mahasiswa yang rentan secara finansial dan mengalami stigma rasa malu sosial.'),
    painPoints: 'Intimidasi debt collector kasar, bunga harian yang melipat ganda secara tidak masuk akal, dan pengasingan diri karena stigma malu sosial.',
    rootCauses: 'Ketidakmampuan menunda impuls pinjaman baru (impulse control) akibat stres kognitif penagihan, diperparah ekosistem kemudahan pinjaman tanpa validasi psikologis keuangan.',
    hmwStatements: [
      'Bagaimana kita bisa membantu pengguna menunda keputusan berutang baru selama 24 jam saat panik?',
      'Bagaimana kita bisa memetakan utang secara visual berdasarkan tingkat keamanan hukum tanpa mengintimidasi?',
      'Bagaimana kita bisa merancang antarmuka penenang emosi (Calm UX) untuk mereduksi beban kognitif?'
    ],
    proposedSolution: getFieldText('executive_summary', 'JEDA: Platform intervensi emosional keuangan non-komersial pertama di Indonesia sebagai katup penyelamat emosi dan pemeta utang visual.'),
    mvpFeatures: 'Impulse Pause Button, Self-Assessment Index Kesejahteraan Emosional, dan Debt Priority Map (visual pohon utang prioritas OJK vs Ilegal).',
    impactMetrics: getFieldText('impact_measurement', 'Financial Stress Index (FSI) rata-rata pengguna bulanan dan Transaction Interception Rate (TIR) sebesar 35% pembatalan transaksi berisiko.'),
    businessModel: getFieldText('business_model', 'Model Enterprise Sosial dengan subsidi silang melalui program B2B Corporate Employee Wellness untuk perusahaan padat karya.'),
    riskCompliance: getFieldText('security_compliance', 'Kepatuhan penuh UU PDP No. 27/2022 dengan penyimpanan lokal terenkripsi AES-256 tanpa pengumpulan data nomor telepon kontak darurat.'),
    
    // New sections for JEDA resilience positioning
    investorReadiness: 'JEDA memetakan 8 tahapan transisi finansial-emosional guna memastikan kesiapan mental sebelum pengguna memasuki platform investasi ritel legal OJK.',
    surveyInsight: 'Ringkasan dari 450 responden mock: 85% menyukai fitur Impulse Pause, 79% butuh Debt Priority Map, dan 68% siap belajar investasi setelah utang stabil.',
    userSimulation: 'Asesmen perilaku mandiri yang menghasilkan tingkat risiko (Rendah s/d Kritis), panduan pemulihan 7-hari, stabilisasi 30-hari, serta eskalasi medis jika kritis.',
    trustSafety: 'Privacy-by-Design: data diproses lokal di perangkat (rencana MVP), zero contact/SMS scraping. JEDA tidak menyalurkan pinjaman, tidak menjual produk investasi, dan bukan agen penagihan.'
  };

  const getMarkdownOutput = () => {
    let md = `# DESIGN THINKING CANVAS - JEDA (Jaga Emosi & Dana)\n\n`;
    md += `### 1. Problem Statement (Pernyataan Masalah)\n${canvasData.problemStatement}\n\n`;
    md += `### 2. User Segment (Segmen Pengguna)\n${canvasData.userSegment}\n\n`;
    md += `### 3. Core Pain Points (Titik Pusing Utama)\n${canvasData.painPoints}\n\n`;
    md += `### 4. Root Causes (Akar Masalah)\n${canvasData.rootCauses}\n\n`;
    md += `### 5. How Might We Statements (Pernyataan HMW)\n${canvasData.hmwStatements.map(s => `- ${s}`).join('\n')}\n\n`;
    md += `### 6. Proposed Solution (Usulan Solusi)\n${canvasData.proposedSolution}\n\n`;
    md += `### 7. MVP Features (Fitur MVP)\n${canvasData.mvpFeatures}\n\n`;
    md += `### 8. Impact Metrics (Metrik Dampak)\n${canvasData.impactMetrics}\n\n`;
    md += `### 9. Business Model Hypothesis (Hipotesis Model Bisnis)\n${canvasData.businessModel}\n\n`;
    md += `### 10. Risk & Compliance Notes (Catatan Risiko & Kepatuhan)\n${canvasData.riskCompliance}\n\n`;
    md += `### 11. Debt-to-Investor Readiness Pathway\n${canvasData.investorReadiness}\n\n`;
    md += `### 12. Survey Insight Summary\n${canvasData.surveyInsight}\n\n`;
    md += `### 13. User Simulation Workflow\n${canvasData.userSimulation}\n\n`;
    md += `### 14. Trust & Safety Principles\n${canvasData.trustSafety}\n\n`;
    return appendDisclaimer(md);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getMarkdownOutput());
    alert("Markdown Design Thinking Canvas berhasil disalin ke clipboard!");
  };

  return (
    <div className="space-y-6 print:hidden">
      {/* Description Section */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex justify-between items-center flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Pratinjau Ekspor Kanvas Design Thinking (DT Canvas Export Preview)</h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
            Di bawah ini adalah kompilasi data perencanaan strategis JEDA yang diekstrak dari draf proposal Anda. 
            Pratinjau ini berformat bersih dan siap disalin untuk presentasi tim atau bahan pengisi slide pitch deck juri.
          </p>
        </div>
        <div className="flex gap-2 ml-auto">
          <button
            onClick={handleCopy}
            className="px-4 py-2.5 bg-teal-600 text-white text-xs font-semibold rounded-lg hover:bg-teal-700 shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Salin Markdown Kanvas</span>
          </button>
          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-200 border border-slate-200 flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak Kanvas</span>
          </button>
        </div>
      </div>

      {/* Grid Canvas Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Problem */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">1. Problem Statement</span>
          <h4 className="font-bold text-slate-800 text-sm">Pernyataan Masalah</h4>
          <p className="text-xs text-slate-600 leading-relaxed pt-1">{canvasData.problemStatement}</p>
        </div>

        {/* Card 2: User Segment */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">2. User Segment</span>
          <h4 className="font-bold text-slate-800 text-sm">Segmen Pengguna Rentan</h4>
          <p className="text-xs text-slate-600 leading-relaxed pt-1">{canvasData.userSegment}</p>
        </div>

        {/* Card 3: Pain Points */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">3. Core Pain Points</span>
          <h4 className="font-bold text-slate-800 text-sm">Titik Pusing Utama</h4>
          <p className="text-xs text-slate-600 leading-relaxed pt-1">{canvasData.painPoints}</p>
        </div>

        {/* Card 4: Root Causes */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">4. Root Causes</span>
          <h4 className="font-bold text-slate-800 text-sm">Akar Masalah Utama</h4>
          <p className="text-xs text-slate-600 leading-relaxed pt-1">{canvasData.rootCauses}</p>
        </div>

        {/* Card 5: HMW */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">5. How Might We</span>
          <h4 className="font-bold text-slate-800 text-sm">Pernyataan HMW (Ideasi)</h4>
          <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1 pt-1 leading-normal">
            {canvasData.hmwStatements.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>

        {/* Card 6: Solution */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">6. Proposed Solution</span>
          <h4 className="font-bold text-slate-800 text-sm">Usulan Pendekatan Solusi</h4>
          <p className="text-xs text-slate-600 leading-relaxed pt-1">{canvasData.proposedSolution}</p>
        </div>

        {/* Card 7: MVP Features */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">7. MVP Features</span>
          <h4 className="font-bold text-slate-800 text-sm">Fitur Skala MVP</h4>
          <p className="text-xs text-slate-600 leading-relaxed pt-1">{canvasData.mvpFeatures}</p>
        </div>

        {/* Card 8: Impact Metrics */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">8. Impact Metrics</span>
          <h4 className="font-bold text-slate-800 text-sm">Metrik Pengukuran Dampak</h4>
          <p className="text-xs text-slate-600 leading-relaxed pt-1">{canvasData.impactMetrics}</p>
        </div>

        {/* Card 9: Business Model */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">9. Business Model</span>
          <h4 className="font-bold text-slate-800 text-sm">Model Bisnis Sosial</h4>
          <p className="text-xs text-slate-600 leading-relaxed pt-1">{canvasData.businessModel}</p>
        </div>

        {/* Card 10: Investor Readiness */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2">
          <span className="text-[10px] font-bold text-teal-500 uppercase tracking-wider block flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> 10. Investor Readiness
          </span>
          <h4 className="font-bold text-slate-800 text-sm">Kesiapan Ritel Investor</h4>
          <p className="text-xs text-slate-600 leading-relaxed pt-1">{canvasData.investorReadiness}</p>
        </div>

        {/* Card 11: Survey Insight */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2">
          <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider block flex items-center gap-1">
            <BarChart3 className="w-3.5 h-3.5" /> 11. Survey Insights
          </span>
          <h4 className="font-bold text-slate-800 text-sm">Analisis Survei Lapangan</h4>
          <p className="text-xs text-slate-600 leading-relaxed pt-1">{canvasData.surveyInsight}</p>
        </div>

        {/* Card 12: User Simulation */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2">
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider block flex items-center gap-1">
            <Smartphone className="w-3.5 h-3.5" /> 12. User Simulation
          </span>
          <h4 className="font-bold text-slate-800 text-sm">Alur Asesmen Mandiri</h4>
          <p className="text-xs text-slate-600 leading-relaxed pt-1">{canvasData.userSimulation}</p>
        </div>

        {/* Card 13: Trust & Safety */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2 lg:col-span-2">
          <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider block flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5" /> 13. Trust & Safety
          </span>
          <h4 className="font-bold text-slate-800 text-sm">Prinsip Batasan Hukum & UU PDP</h4>
          <p className="text-xs text-slate-600 leading-relaxed pt-1">{canvasData.trustSafety}</p>
        </div>

        {/* Card 14: Risk & Compliance */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-2xs space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">14. Compliance Notes</span>
          <h4 className="font-bold text-slate-800 text-sm">Kepatuhan Hukum OJK</h4>
          <p className="text-xs text-slate-600 leading-relaxed pt-1">{canvasData.riskCompliance}</p>
        </div>

      </div>

      {/* Safety Notice block */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex gap-3 text-[11px] text-slate-500">
        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          Seluruh data di atas disinkronkan langsung dari panel Penyusun Proposal di web ini. Data disimpan secara lokal di browser Anda (Local Storage) dan tidak dikirimkan ke server eksternal apa pun untuk menjamin keamanan privasi data (Privacy by Design).
        </p>
      </div>

      {/* Print-only Canvas View */}
      <div className="hidden print:block font-serif text-slate-900 leading-relaxed text-sm max-w-4xl mx-auto space-y-4">
        <div className="text-center space-y-1.5 border-b border-slate-300 pb-3 mb-5">
          <h1 className="text-xl font-bold uppercase">Design Thinking Canvas: JEDA</h1>
          <p className="text-xs italic text-slate-500">Platform Resiliensi Keuangan & Kontrol Perilaku Finansial Hulu</p>
        </div>
        <div className="space-y-4">
          <div className="break-inside-avoid">
            <h2 className="text-xs font-bold border-b border-slate-200 pb-0.5 text-slate-950 uppercase tracking-wide">1. Problem Statement</h2>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">{canvasData.problemStatement}</p>
          </div>
          <div className="break-inside-avoid">
            <h2 className="text-xs font-bold border-b border-slate-200 pb-0.5 text-slate-950 uppercase tracking-wide">2. User Segment</h2>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">{canvasData.userSegment}</p>
          </div>
          <div className="break-inside-avoid">
            <h2 className="text-xs font-bold border-b border-slate-200 pb-0.5 text-slate-950 uppercase tracking-wide">3. Core Pain Points</h2>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">{canvasData.painPoints}</p>
          </div>
          <div className="break-inside-avoid">
            <h2 className="text-xs font-bold border-b border-slate-200 pb-0.5 text-slate-950 uppercase tracking-wide">4. Root Causes</h2>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">{canvasData.rootCauses}</p>
          </div>
          <div className="break-inside-avoid">
            <h2 className="text-xs font-bold border-b border-slate-200 pb-0.5 text-slate-950 uppercase tracking-wide">5. How Might We</h2>
            <ul className="list-disc pl-4 text-xs text-slate-700 mt-1 space-y-0.5 leading-relaxed">
              {canvasData.hmwStatements.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          <div className="break-inside-avoid">
            <h2 className="text-xs font-bold border-b border-slate-200 pb-0.5 text-slate-950 uppercase tracking-wide">6. Proposed Solution</h2>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">{canvasData.proposedSolution}</p>
          </div>
          <div className="break-inside-avoid">
            <h2 className="text-xs font-bold border-b border-slate-200 pb-0.5 text-slate-950 uppercase tracking-wide">7. MVP Features</h2>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">{canvasData.mvpFeatures}</p>
          </div>
          <div className="break-inside-avoid">
            <h2 className="text-xs font-bold border-b border-slate-200 pb-0.5 text-slate-950 uppercase tracking-wide">8. Impact Metrics</h2>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">{canvasData.impactMetrics}</p>
          </div>
          <div className="break-inside-avoid">
            <h2 className="text-xs font-bold border-b border-slate-200 pb-0.5 text-slate-950 uppercase tracking-wide">9. Business Model</h2>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">{canvasData.businessModel}</p>
          </div>
          <div className="break-inside-avoid">
            <h2 className="text-xs font-bold border-b border-slate-200 pb-0.5 text-slate-950 uppercase tracking-wide">10. Investor Readiness</h2>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">{canvasData.investorReadiness}</p>
          </div>
          <div className="break-inside-avoid">
            <h2 className="text-xs font-bold border-b border-slate-200 pb-0.5 text-slate-950 uppercase tracking-wide">11. Survey Insights</h2>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">{canvasData.surveyInsight}</p>
          </div>
          <div className="break-inside-avoid">
            <h2 className="text-xs font-bold border-b border-slate-200 pb-0.5 text-slate-950 uppercase tracking-wide">12. User Simulation</h2>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">{canvasData.userSimulation}</p>
          </div>
          <div className="break-inside-avoid">
            <h2 className="text-xs font-bold border-b border-slate-200 pb-0.5 text-slate-950 uppercase tracking-wide">13. Trust & Safety</h2>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">{canvasData.trustSafety}</p>
          </div>
          <div className="break-inside-avoid">
            <h2 className="text-xs font-bold border-b border-slate-200 pb-0.5 text-slate-950 uppercase tracking-wide">14. Compliance Notes</h2>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">{canvasData.riskCompliance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasExportPreview;
