import React, { useState } from 'react';
import { generateJudgeSimulation } from '../lib/generator';
import { agents } from '../data/agents';
import { scanInputSafety } from '../lib/safety';
import { ShieldAlert, Sparkles, HelpCircle, AlertTriangle, AlertCircle, RefreshCw } from 'lucide-react';

interface SimulationResult {
  scores: Record<string, number>;
  strongest: string;
  weakest: string;
  judgeConcern: string;
  recommendedImprovement: string;
  recommendedAgentId: string;
}

export const JudgeSimulation: React.FC = () => {
  const [proposalText, setProposalText] = useState<string>('');
  const [simulationResult, setSimulationResult] = useState<SimulationResult | null>(null);
  const [safetyAlert, setSafetyAlert] = useState<string | null>(null);


  const handlePrefill = () => {
    // Attempt to load from localStorage, otherwise use a fallback
    const saved = localStorage.getItem('jeda_proposal_drafts');
    if (saved) {
      const parsed = JSON.parse(saved);
      const fullText = Object.values(parsed).join('\n\n');
      setProposalText(fullText);
    } else {
      setProposalText(
        `JEDA (Jaga Emosi dan Dana) adalah usaha sosial terpadu untuk perlindungan konsumen keuangan retail dari risiko pinjol ilegal dan kecanduan judi online. Kami menyajikan fitur 'Impulse Pause Button' (penunda transaksi 24 jam berbasis web), 'Debt Priority Map' untuk visualisasi skala pembayaran utang secara hukum, dan 'Safe Storytelling Room' terenkripsi untuk curhat anonim. Kami bekerja sama dengan OJK untuk integrasi aduan serta lembaga psikologi mitra untuk eskalasi krisis kesehatan mental. Arsitektur sistem kami mematuhi UU PDP dengan enkripsi lokal AES-256 tanpa menyimpan kontak telepon pengguna. Model bisnis didukung skema B2B Employee Wellness Program yang disponsori korporasi.`
      );
    }
  };

  const handleSimulate = () => {
    if (!proposalText.trim()) {
      alert("Harap masukkan teks proposal terlebih dahulu!");
      return;
    }

    // Safety scan
    const safetyCheck = scanInputSafety(proposalText);
    if (safetyCheck.alertMessage) {
      setSafetyAlert(safetyCheck.alertMessage);
    } else {
      setSafetyAlert(null);
    }

    const evaluation = generateJudgeSimulation(proposalText);
    setSimulationResult(evaluation);
  };

  const getAgentName = (id: string) => {
    return agents.find(a => a.id === id)?.name || "Pakar Agen";
  };

  const getAgentRole = (id: string) => {
    return agents.find(a => a.id === id)?.role || "";
  };

  const getAgentColor = (id: string) => {
    return agents.find(a => a.id === id)?.avatarColor || "bg-teal-50 text-teal-800";
  };

  const getScoreBadgeColor = (score: number) => {
    if (score >= 4.5) return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    if (score >= 3.5) return 'bg-teal-100 text-teal-800 border-teal-200';
    if (score >= 2.5) return 'bg-amber-100 text-amber-800 border-amber-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  return (
    <div className="space-y-6">
      {/* Description Section */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-teal-600 animate-pulse" />
          <h2 className="text-xl font-bold text-slate-800">Mode Simulasi Juri (Judge Simulation Mode)</h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Uji kelayakan draf proposal lengkap Anda secara objektif. Masukkan teks proposal Anda di bawah, dan sistem 
          akan menjalankan simulasi penilaian juri berdasarkan 6 kriteria utama PIDI Hackathon 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Editor Area */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Teks Proposal Tahap 2</span>
              <div className="flex gap-2">
                <button
                  onClick={handlePrefill}
                  className="text-xs text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Prefill / Muat Draf
                </button>
              </div>
            </div>

            <textarea
              value={proposalText}
              onChange={(e) => setProposalText(e.target.value)}
              rows={12}
              className="w-full p-4 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-600 leading-relaxed font-sans"
              placeholder="Tempel draf proposal Anda atau klik 'Prefill / Muat Draf' untuk menggunakan sampel..."
            />

            <button
              onClick={handleSimulate}
              className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl text-sm transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Mulai Simulasi Evaluasi Juri</span>
            </button>
          </div>

          {/* Safety Alert if detected */}
          {safetyAlert && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-3 text-red-800 text-xs">
              <ShieldAlert className="w-5 h-5 text-red-600 shrink-0" />
              <div>
                <span className="font-bold block mb-0.5">Peringatan Kepatuhan Konsumen (Compliance Warning):</span>
                <p className="leading-relaxed">{safetyAlert}</p>
              </div>
            </div>
          )}
        </div>

        {/* Feedback Area */}
        <div className="lg:col-span-6 space-y-6">
          {simulationResult ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-2xs animate-fade-in">
              <div className="border-b border-slate-100 pb-3 flex justify-between items-center">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" /> Laporan Hasil Simulasi Evaluasi Juri
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase bg-slate-100 py-0.5 px-2 rounded-sm">
                  Status: Draf Diskusi
                </span>
              </div>

              {/* Criterion Scores */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Lembar Skor Simulasi:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { key: 'alignment', name: 'Alignment (Masalah)', label: 'A. Penyelarasan Masalah' },
                    { key: 'effectiveness', name: 'Effectiveness (Dampak)', label: 'B. Efektivitas & Dampak' },
                    { key: 'uniqueness', name: 'Uniqueness (Kreatif)', label: 'C. Orisinalitas & Kreativitas' },
                    { key: 'technical', name: 'Technical (Teknis)', label: 'D. Kualitas Teknis & Keamanan' },
                    { key: 'business', name: 'Business Model (Bisnis)', label: 'E. Kelayakan Model Bisnis' },
                    { key: 'market', name: 'Market Needs (Sensitivitas)', label: 'F. Kebutuhan Pasar' }
                  ].map((crit) => {
                    const score = simulationResult.scores[crit.key];
                    return (
                      <div key={crit.key} className="flex justify-between items-center p-3 bg-slate-50 border border-slate-100 rounded-xl">
                        <span className="text-xs text-slate-700 font-medium truncate pr-1">{crit.label}</span>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 text-xs font-bold rounded-sm border ${getScoreBadgeColor(score)}`}>
                            {score} / 5
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Compliance & Penalty Checklist */}
              <div className="border-t border-slate-100 pt-4 space-y-2">
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider">Verifikasi Kepatuhan & Penghindaran Penalti:</h4>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                    <span className="text-slate-700 font-medium">Jembatan Debt-to-Investor:</span>
                    {proposalText.toLowerCase().match(/(investor|investasi|readiness|pathway)/) ? (
                      <span className="text-emerald-600 font-bold">✓ Terhubung</span>
                    ) : (
                      <span className="text-red-500 font-bold">✗ Penalti: Tidak Terhubung</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                    <span className="text-slate-700 font-medium">Klaim Nasihat Investasi (Saham/Portofolio):</span>
                    {proposalText.toLowerCase().match(/(rekomendasi saham|rekomendasi portofolio|saran investasi personal|membelikan saham)/) ? (
                      <span className="text-red-500 font-bold">✗ Terdeteksi (Penalti!)</span>
                    ) : (
                      <span className="text-emerald-600 font-bold">✓ Aman (Bebas Klaim)</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                    <span className="text-slate-700 font-medium">Klaim Penyaluran Pinjaman/Dana:</span>
                    {proposalText.toLowerCase().match(/(menyalurkan pinjaman|memberikan kredit|dana pinjaman|pinjaman modal)/) ? (
                      <span className="text-red-500 font-bold">✗ Terdeteksi (Penalti!)</span>
                    ) : (
                      <span className="text-emerald-600 font-bold">✓ Aman (Bebas Klaim)</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                    <span className="text-slate-700 font-medium">Kepatuhan Privasi (UU PDP):</span>
                    {proposalText.toLowerCase().match(/(uu pdp|privasi|minimisasi data|privacy-by-design)/) ? (
                      <span className="text-emerald-600 font-bold">✓ Terdeteksi</span>
                    ) : (
                      <span className="text-red-500 font-bold">✗ Penalti: Belum Dicantumkan</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                    <span className="text-slate-700 font-medium">Metrik Dampak (FSI/TIR):</span>
                    {proposalText.toLowerCase().match(/(metrik|fsi|tir|fsi bulanan|index|interception)/) ? (
                      <span className="text-emerald-600 font-bold">✓ Terdeteksi</span>
                    ) : (
                      <span className="text-red-500 font-bold">✗ Penalti: Belum Ada Metrik</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Strongest vs Weakest */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                <div className="bg-emerald-50/40 p-4 border border-emerald-100 rounded-xl space-y-1">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">Bagian Terkuat (Strongest Area)</span>
                  <p className="font-bold text-emerald-950 text-sm">{simulationResult.strongest}</p>
                  <p className="text-[11px] text-emerald-800 leading-normal">
                    Pemaparan bagian ini sangat meyakinkan juri dengan argumentasi terstruktur.
                  </p>
                </div>

                <div className="bg-rose-50/40 p-4 border border-rose-100 rounded-xl space-y-1">
                  <span className="text-[10px] font-bold text-rose-800 uppercase tracking-wider block">Bagian Terlemah (Weakest Area)</span>
                  <p className="font-bold text-rose-950 text-sm">{simulationResult.weakest}</p>
                  <p className="text-[11px] text-rose-800 leading-normal">
                    Bagian ini dinilai juri masih berisiko tinggi dan memerlukan elaborasi.
                  </p>
                </div>
              </div>

              {/* Judge Concern Alert */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 text-amber-900 text-xs">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold block text-amber-950 uppercase tracking-wider text-[10px]">Kekhawatiran Utama Juri (Judge Concern):</span>
                  <p className="leading-relaxed">{simulationResult.judgeConcern}</p>
                </div>
              </div>

              {/* Recommended Improvement */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs space-y-2">
                <span className="font-bold text-slate-800 uppercase tracking-wider text-[10px] block">Rekomendasi Aksi Perbaikan:</span>
                <p className="text-slate-600 leading-relaxed">{simulationResult.recommendedImprovement}</p>
              </div>

              {/* Recommended Agent Consult */}
              <div className={`p-4 rounded-xl border flex items-center gap-3 text-xs ${getAgentColor(simulationResult.recommendedAgentId)}`}>
                <AlertCircle className="w-5 h-5 shrink-0" />
                <div>
                  <p className="font-bold">Rekomendasi Konsultasi Ahli:</p>
                  <p className="mt-0.5">
                    Segera berdiskusi dengan <strong className="underline">{getAgentName(simulationResult.recommendedAgentId)}</strong> ({getAgentRole(simulationResult.recommendedAgentId)}) untuk mengelaborasi bagian ini.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 bg-slate-50 border border-dashed border-slate-200 rounded-2xl text-center text-slate-400 min-h-[400px]">
              <HelpCircle className="w-12 h-12 mb-3 text-slate-300" />
              <p className="text-sm font-medium">Belum ada evaluasi juri yang dijalankan.</p>
              <p className="text-xs mt-1 max-w-sm">Tempel proposal Anda di kolom sebelah kiri lalu klik tombol evaluasi untuk melihat detail analisis.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default JudgeSimulation;
