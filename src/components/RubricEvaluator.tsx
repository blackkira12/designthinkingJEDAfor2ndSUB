import React, { useState } from 'react';
import { evaluateScores } from '../lib/scoring';
import { agents } from '../data/agents';
import { ShieldAlert, User } from 'lucide-react';


export const RubricEvaluator: React.FC = () => {
  const [scores, setScores] = useState<Record<string, number>>({
    alignment: 3,
    effectiveness: 3,
    uniqueness: 3,
    technical: 3,
    business: 3,
    market: 3
  });

  const criteria = evaluateScores(scores);

  const handleScoreChange = (id: string, score: number) => {
    setScores(prev => ({ ...prev, [id]: score }));
  };

  const getAgentName = (id: string) => {
    return agents.find(a => a.id === id)?.name || "Pakar Agen";
  };

  const getAgentRole = (id: string) => {
    return agents.find(a => a.id === id)?.role || "";
  };

  // Calculations
  const averageScore = (Object.values(scores).reduce((a, b) => a + b, 0) / 6).toFixed(1);

  // Status mapping
  const getStatusText = (avg: number) => {
    if (avg >= 4.5) return { text: "Sangat Kompetitif (Potensi Juara)", color: "text-emerald-700 bg-emerald-50 border-emerald-200" };
    if (avg >= 3.5) return { text: "Lolos Kualifikasi Menengah (Aman)", color: "text-teal-700 bg-teal-50 border-teal-200" };
    if (avg >= 2.5) return { text: "Perlu Banyak Perbaikan (Riskan)", color: "text-amber-700 bg-amber-50 border-amber-200" };
    return { text: "Belum Siap Kirim (Red Flag)", color: "text-red-700 bg-red-50 border-red-200" };
  };

  const status = getStatusText(parseFloat(averageScore));

  return (
    <div className="space-y-6">
      {/* Description Section */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-2">Evaluator Rubrik Mandiri (Rubric Evaluator)</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Lakukan asesmen mandiri terhadap kualitas draf ide dan tulisan proposal Anda. 
          Gunakan skor 1 hingga 5 untuk melihat evaluasi kelayakan juri, peringatan red flag, dan saran perbaikan spesifik.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Scoring & Criteria List */}
        <div className="lg:col-span-8 space-y-6">
          {criteria.map((item) => {
            const agentName = getAgentName(item.recommendedAgentId);
            const agentRole = getAgentRole(item.recommendedAgentId);
            
            return (
              <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                  <h3 className="font-bold text-slate-800 text-sm md:text-base leading-snug">
                    {item.name}
                  </h3>
                  
                  {/* Slider or Stars Selector */}
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-slate-400 font-semibold mr-2">Skor:</span>
                    {[1, 2, 3, 4, 5].map((val) => (
                      <button
                        key={val}
                        onClick={() => handleScoreChange(item.id, val)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          scores[item.id] === val
                            ? 'bg-teal-600 text-white shadow-xs'
                            : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                        }`}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Explanation */}
                <div className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  <strong className="text-slate-800">Status Penilaian:</strong> {item.explanation}
                </div>

                {/* Red Flags Checklist */}
                <div className="bg-rose-50/40 p-3.5 rounded-xl border border-rose-100/60 text-xs">
                  <div className="flex items-center gap-1.5 text-rose-800 font-bold mb-1.5">
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    <span>Red Flags Juri OJK & Hackathon (Hindari Hal Ini!):</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-rose-700 leading-relaxed">
                    {item.redFlags.map((flag, idx) => <li key={idx}>{flag}</li>)}
                  </ul>
                </div>

                {/* Recommended Improvement */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs leading-normal">
                  <span className="font-bold text-slate-700 block mb-1">Rencana Perbaikan:</span>
                  <p className="text-slate-600">{item.improvement}</p>
                </div>

                {/* Consult Agent */}
                <div className="flex items-center gap-2 text-xs bg-teal-50/30 p-2.5 rounded-lg border border-teal-100/40">
                  <User className="w-3.5 h-3.5 text-teal-600" />
                  <span className="text-slate-600">
                    Saran konsultasi agen: <strong className="text-slate-800">{agentName}</strong> ({agentRole})
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dashboard Aggregate Score Gauge */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center space-y-4 shadow-2xs sticky top-6">
            <h3 className="font-bold text-slate-800 text-lg border-b border-slate-100 pb-3">Status Kelayakan Kirim</h3>
            
            {/* Score Ring */}
            <div className="relative inline-flex items-center justify-center p-8 bg-slate-50 rounded-full border border-slate-100">
              <div className="text-center">
                <span className="text-5xl font-black text-teal-600">{averageScore}</span>
                <span className="text-xs text-slate-400 block mt-1">rata-rata / 5.0</span>
              </div>
            </div>

            {/* Performance status banner */}
            <div className={`p-3 rounded-xl border font-semibold text-xs leading-relaxed ${status.color}`}>
              {status.text}
            </div>

            <div className="space-y-2 pt-2 text-left">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Ringkasan Skor:</span>
              <div className="space-y-1.5 text-xs text-slate-600">
                {criteria.map(c => (
                  <div key={c.id} className="flex justify-between items-center py-1 border-b border-slate-50">
                    <span className="truncate pr-2">{c.name.split(' (')[0]}</span>
                    <span className="font-bold text-slate-800 shrink-0">{scores[c.id]}/5</span>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-[10px] text-slate-400 italic">
              *Tingkatkan skor Anda dengan meminta masukan dari agen ahli di Papan Alur Kerja, lalu menulis draf di Penyusun Proposal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RubricEvaluator;
