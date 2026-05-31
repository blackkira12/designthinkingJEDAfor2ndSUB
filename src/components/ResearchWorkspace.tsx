import React, { useState } from 'react';
import { generateEmpathyMap, generatePersona, generateHMW, generateFeaturePriority, generateProposalDraft, generateRiskWarning } from '../lib/generator';
import { scanInputSafety, appendDisclaimer } from '../lib/safety';
import { Sparkles, RefreshCw, FileText, UserCheck, HelpCircle, ListFilter, AlertTriangle, ShieldCheck } from 'lucide-react';

interface EmpathyMapData {
  says: string[];
  thinks: string[];
  does: string[];
  feels: string[];
  analisis: string;
}

interface PersonaData {
  name: string;
  role: string;
  quote: string;
  profile: string;
  goals: string[];
  painPoints: string[];
}

interface FeaturePriorityItem {
  feature: string;
  description: string;
  reach: number;
  impact: number;
  confidence: number;
  effort: number;
  score: number;
  status: string;
  reason: string;
}

export const ResearchWorkspace: React.FC = () => {
  const defaultText = `Banyak pengguna pinjol/paylater bukan tidak tahu risiko, tetapi mengambil keputusan saat panik, malu, terdesak, atau butuh dana cepat. Mereka membutuhkan pendampingan yang tidak menghakimi, pemetaan utang, prioritas pembayaran, dan fitur jeda sebelum mengambil pinjaman baru.`;
  const [inputText, setInputText] = useState(defaultText);
  const [activeResult, setActiveResult] = useState<{
    type: 'empathy' | 'persona' | 'hmw' | 'priority' | 'proposal' | 'risk' | '';
    data: EmpathyMapData | PersonaData | string[] | FeaturePriorityItem[] | string | null;
  }>({ type: '', data: null });
  const [safetyAlert, setSafetyAlert] = useState<string | null>(null);


  const handleGenerate = (type: 'empathy' | 'persona' | 'hmw' | 'priority' | 'proposal' | 'risk') => {
    // Safety check first
    const safetyCheck = scanInputSafety(inputText);
    if (safetyCheck.alertMessage) {
      setSafetyAlert(safetyCheck.alertMessage);
    } else {
      setSafetyAlert(null);
    }

    let resultData;
    switch (type) {
      case 'empathy':
        resultData = generateEmpathyMap(inputText);
        break;
      case 'persona':
        resultData = generatePersona(inputText);
        break;
      case 'hmw':
        resultData = generateHMW(inputText);
        break;
      case 'priority':
        resultData = generateFeaturePriority(inputText);
        break;
      case 'proposal':
        resultData = generateProposalDraft('executive_summary', inputText);
        break;
      case 'risk':
        resultData = generateRiskWarning(inputText);
        break;
    }

    setActiveResult({ type, data: resultData });
  };

  return (
    <div className="space-y-6">
      {/* Description Section */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-2">Workspace Masukan Riset (Research Input Workspace)</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Salin dan tempel temuan survei, transkrip wawancara, catatan psikiater, atau gagasan fitur kasar ke dalam workspace di bawah. 
          Gunakan tombol pintas sintesis untuk secara instan menghasilkan draf artefak Design Thinking untuk diskusi tim.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Input & Action Panel */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider text-[11px] text-slate-400">
                Data Input Riset
              </h3>
              <button 
                onClick={() => setInputText('')} 
                className="text-[11px] text-slate-400 hover:text-slate-600 flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" /> Bersihkan
              </button>
            </div>

            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={8}
              className="w-full p-3 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-600"
              placeholder="Tempel catatan wawancara, transkrip curhat, atau hasil FGD..."
            />

            {/* Quick Synthesis Buttons */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Sintesis Artefak:</span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleGenerate('empathy')}
                  className="py-2.5 px-3 bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-semibold rounded-lg border border-teal-100 transition-all flex items-center gap-1.5 justify-center"
                >
                  <ListFilter className="w-3.5 h-3.5" />
                  <span>Empathy Map</span>
                </button>
                <button
                  onClick={() => handleGenerate('persona')}
                  className="py-2.5 px-3 bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-semibold rounded-lg border border-blue-100 transition-all flex items-center gap-1.5 justify-center"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>User Persona</span>
                </button>
                <button
                  onClick={() => handleGenerate('hmw')}
                  className="py-2.5 px-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-lg border border-indigo-100 transition-all flex items-center gap-1.5 justify-center"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>HMW Statements</span>
                </button>
                <button
                  onClick={() => handleGenerate('priority')}
                  className="py-2.5 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-lg border border-emerald-100 transition-all flex items-center gap-1.5 justify-center"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Skala RICE</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => handleGenerate('proposal')}
                  className="py-2.5 px-3 bg-purple-50 hover:bg-purple-100 text-purple-800 text-xs font-semibold rounded-lg border border-purple-100 transition-all flex items-center gap-1.5 justify-center"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Draft Proposal</span>
                </button>
                <button
                  onClick={() => handleGenerate('risk')}
                  className="py-2.5 px-3 bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-semibold rounded-lg border border-rose-100 transition-all flex items-center gap-1.5 justify-center"
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Pindai Kepatuhan</span>
                </button>
              </div>
            </div>
          </div>

          {/* Safety Alert Box */}
          {safetyAlert && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-3 text-red-800 text-xs shadow-2xs">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
              <div>
                <span className="font-bold block mb-0.5">Notifikasi Keselamatan Deteksi Krisis:</span>
                <p className="leading-relaxed">{safetyAlert}</p>
              </div>
            </div>
          )}
        </div>

        {/* Synthesis Results Display */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 min-h-[400px] flex flex-col shadow-2xs">
          {activeResult.type ? (
            <div className="flex-1 flex flex-col justify-between space-y-6">
              {/* Result Header */}
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="font-bold text-slate-800 text-base flex items-center gap-1.5">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                  <span>
                    {activeResult.type === 'empathy' && 'Sintesis Empathy Map'}
                    {activeResult.type === 'persona' && 'Sintesis User Persona'}
                    {activeResult.type === 'hmw' && 'Sintesis Pertanyaan How Might We'}
                    {activeResult.type === 'priority' && 'Prioritisasi Fitur MVP (Metode RICE)'}
                    {activeResult.type === 'proposal' && 'Draft Paragraf Proposal'}
                    {activeResult.type === 'risk' && 'Pindai Kepatuhan & Risiko Etis'}
                  </span>
                </h3>
                <button
                  onClick={() => {
                    const text = typeof activeResult.data === 'string' 
                      ? activeResult.data 
                      : JSON.stringify(activeResult.data, null, 2);
                    navigator.clipboard.writeText(appendDisclaimer(text));
                    alert("Hasil disalin ke clipboard!");
                  }}
                  className="text-xs text-teal-600 hover:text-teal-700 font-semibold"
                >
                  Salin Hasil
                </button>
              </div>

              {/* Render Empathy Map */}
              {activeResult.type === 'empathy' && (() => {
                const empathyData = activeResult.data as EmpathyMapData;
                return (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-500 italic mb-2">{empathyData.analisis}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-teal-50/50 rounded-xl border border-teal-100/60">
                        <span className="font-bold text-teal-900 text-xs block mb-1.5 uppercase">Apa yang Dikatakan (Says)</span>
                        <ul className="text-xs text-slate-700 space-y-1 pl-4 list-disc">
                          {empathyData.says.map((s: string, i: number) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>
                      <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100/60">
                        <span className="font-bold text-blue-900 text-xs block mb-1.5 uppercase">Apa yang Dipikirkan (Thinks)</span>
                        <ul className="text-xs text-slate-700 space-y-1 pl-4 list-disc">
                          {empathyData.thinks.map((t: string, i: number) => <li key={i}>{t}</li>)}
                        </ul>
                      </div>
                      <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100/60">
                        <span className="font-bold text-emerald-900 text-xs block mb-1.5 uppercase">Apa yang Dilakukan (Does)</span>
                        <ul className="text-xs text-slate-700 space-y-1 pl-4 list-disc">
                          {empathyData.does.map((d: string, i: number) => <li key={i}>{d}</li>)}
                        </ul>
                      </div>
                      <div className="p-4 bg-rose-50/50 rounded-xl border border-rose-100/60">
                        <span className="font-bold text-rose-900 text-xs block mb-1.5 uppercase">Apa yang Dirasakan (Feels)</span>
                        <ul className="text-xs text-slate-700 space-y-1 pl-4 list-disc">
                          {empathyData.feels.map((f: string, i: number) => <li key={i}>{f}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Render User Persona */}
              {activeResult.type === 'persona' && (() => {
                const personaData = activeResult.data as PersonaData;
                return (
                  <div className="space-y-4 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3 border-b border-slate-200/60 pb-3">
                      <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg">
                        {personaData.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{personaData.name}</h4>
                        <p className="text-xs text-teal-600 font-semibold">{personaData.role}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium italic text-slate-600">
                      {personaData.quote}
                    </p>
                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="font-bold text-slate-800 block mb-0.5">Biografi & Deskripsi Perilaku:</span>
                        <p className="text-slate-600 leading-relaxed">{personaData.profile}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="font-bold text-slate-800 block mb-1">Tujuan & Motivasi:</span>
                          <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                            {personaData.goals.map((g: string, i: number) => <li key={i}>{g}</li>)}
                          </ul>
                        </div>
                        <div>
                          <span className="font-bold text-slate-800 block mb-1">Titik Sakit (Pain Points) & Stigma:</span>
                          <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                            {personaData.painPoints.map((p: string, i: number) => <li key={i}>{p}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Render HMW Statements */}
              {activeResult.type === 'hmw' && (() => {
                const hmwData = activeResult.data as string[];
                return (
                  <div className="space-y-4">
                    <p className="text-xs text-slate-500">How Might We (HMW) membantu mendefinisikan peluang desain dari wawasan pengguna:</p>
                    <div className="space-y-3">
                      {hmwData.map((hmw: string, idx: number) => (
                        <div key={idx} className="flex gap-3 p-4 bg-indigo-50/40 border border-indigo-100 rounded-xl items-start">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xs shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-sm font-medium text-indigo-950 leading-relaxed">
                            {hmw}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Render Feature Priorities Table */}
              {activeResult.type === 'priority' && (() => {
                const priorityData = activeResult.data as FeaturePriorityItem[];
                return (
                  <div className="space-y-4 overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 text-slate-400 bg-slate-50/50">
                          <th className="p-3 font-semibold uppercase">Nama Fitur</th>
                          <th className="p-3 font-semibold uppercase text-center">Reach</th>
                          <th className="p-3 font-semibold uppercase text-center">Impact</th>
                          <th className="p-3 font-semibold uppercase text-center">Conf.</th>
                          <th className="p-3 font-semibold uppercase text-center">Effort</th>
                          <th className="p-3 font-semibold uppercase text-center">Skor RICE</th>
                          <th className="p-3 font-semibold uppercase text-right">Prioritas</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        {priorityData.map((f: FeaturePriorityItem, i: number) => (
                          <tr key={i} className="hover:bg-slate-50/40">
                            <td className="p-3">
                              <span className="font-bold text-slate-900 block">{f.feature}</span>
                              <span className="text-[10px] text-slate-500 line-clamp-1">{f.description}</span>
                            </td>
                            <td className="p-3 text-center font-medium">{f.reach}</td>
                            <td className="p-3 text-center font-medium">{f.impact}</td>
                            <td className="p-3 text-center font-medium">{f.confidence}</td>
                            <td className="p-3 text-center font-medium">{f.effort}</td>
                            <td className="p-3 text-center font-bold text-teal-600">{f.score}</td>
                            <td className="p-3 text-right">
                              <span className={`inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold border ${
                                f.status.includes('Utang') || f.status.includes('Krusial')
                                  ? 'bg-red-50 text-red-700 border-red-100'
                                  : f.status.includes('Utama')
                                    ? 'bg-teal-50 text-teal-700 border-teal-100'
                                    : 'bg-slate-100 text-slate-600 border-slate-200'
                              }`}>
                                {f.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-[10px] text-slate-400 italic mt-2">
                      *Formula Skor RICE = (Reach * Impact * Confidence) / Effort. Skor lebih tinggi menunjukkan kelayakan implementasi lebih optimal.
                    </p>
                  </div>
                );
              })()}

              {/* Render Proposal Paragraph */}
              {activeResult.type === 'proposal' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-500">Hasil draf tulisan proposal siap dimasukkan ke Proposal Builder:</p>
                  <div className="p-4 bg-purple-50/40 border border-purple-100 rounded-xl text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                    {activeResult.data as string}
                  </div>
                </div>
              )}

              {/* Render Compliance Scanning */}
              {activeResult.type === 'risk' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-500">Pakar hukum dan psikologi krisis memetakan risiko etis atas input:</p>
                  <div className="p-4 bg-rose-50/50 border border-rose-100 rounded-xl text-sm text-slate-800 leading-relaxed whitespace-pre-wrap font-mono text-xs">
                    {activeResult.data as string}
                  </div>
                </div>
              )}

              {/* Disclaimer Box */}
              <div className="pt-4 border-t border-slate-100 bg-slate-50/60 p-3 rounded-lg flex items-start gap-2 text-[10px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p>
                  Draf buatan sistem JEDA Agent Studio untuk diskusi internal tim. Seluruh data sensitif dalam prototype ini disimulasikan secara anonim untuk menjaga kerahasiaan konsumen retail.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center text-slate-400 text-center">
              <HelpCircle className="w-16 h-16 mb-4 text-slate-300" />
              <h4 className="font-bold text-slate-700 text-sm">Workspace Hasil Sintesis</h4>
              <p className="text-xs mt-1 max-w-sm">Pilih salah satu tindakan sintesis di panel kiri untuk menghasilkan output visual secara instan.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ResearchWorkspace;
