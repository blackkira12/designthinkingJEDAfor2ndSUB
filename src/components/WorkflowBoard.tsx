import React, { useState } from 'react';
import { workflows } from '../data/workflows';
import { agents } from '../data/agents';
import { skills } from '../data/skills';
import { generateWorkflowOutput } from '../lib/generator';
import { appendDisclaimer, scanInputSafety } from '../lib/safety';
import { Play, Sparkles, User, Wrench, FileText, HelpCircle, ShieldAlert } from 'lucide-react';

export const WorkflowBoard: React.FC = () => {
  const [selectedPhaseId, setSelectedPhaseId] = useState<'Discover' | 'Define' | 'Develop' | 'Deliver'>('Discover');
  const [selectedAgentId, setSelectedAgentId] = useState<string>('');
  const [selectedSkillId, setSelectedSkillId] = useState<string>('');
  const [inputText, setInputText] = useState<string>('Banyak pengguna pinjol mengambil keputusan saat panik terdesak, sehingga butuh jeda waktu berpikir agar emosinya stabil.');
  const [simulationOutput, setSimulationOutput] = useState<string>('');
  const [safetyAlert, setSafetyAlert] = useState<string | null>(null);

  const activePhase = workflows.find(w => w.id === selectedPhaseId)!;

  // Filter agents and skills based on current phase recommendations
  const phaseAgents = agents.filter(a => activePhase.recommendedAgents.includes(a.id) || a.bestPhase === 'All');
  const phaseSkills = skills.filter(s => activePhase.recommendedSkills.includes(s.id) || s.phase === selectedPhaseId);

  // Handle phase change
  const handlePhaseChange = (phaseId: 'Discover' | 'Define' | 'Develop' | 'Deliver') => {
    setSelectedPhaseId(phaseId);
    setSelectedAgentId('');
    setSelectedSkillId('');
    setSimulationOutput('');
    setSafetyAlert(null);
  };

  const handleRunSimulation = () => {
    if (!selectedAgentId || !selectedSkillId) {
      alert("Harap pilih Agen dan Keterampilan terlebih dahulu!");
      return;
    }

    // Safety scan
    const safetyCheck = scanInputSafety(inputText);
    if (safetyCheck.alertMessage) {
      setSafetyAlert(safetyCheck.alertMessage);
    } else {
      setSafetyAlert(null);
    }

    // Generate output
    const rawOutput = generateWorkflowOutput(selectedPhaseId, selectedAgentId, selectedSkillId, inputText);
    const safeOutput = appendDisclaimer(rawOutput);
    setSimulationOutput(safeOutput);
  };

  return (
    <div className="space-y-8">
      {/* Introduction Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-2">Papan Alur Kerja Double Diamond (Workflow Board)</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Simulasikan tahapan perancangan produk JEDA melalui empat fase terstruktur. 
          Pilih salah satu fase di bawah untuk melihat fokus juri, memilih agen pendamping yang direkomendasikan, 
          dan menjalankan keterampilan khusus mereka terhadap ide atau data riset Anda.
        </p>
      </div>

      {/* Double Diamond Navigation Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
        {workflows.map((w) => (
          <button
            key={w.id}
            onClick={() => handlePhaseChange(w.id)}
            className={`p-4 rounded-xl border text-left transition-all duration-300 ${
              selectedPhaseId === w.id
                ? 'bg-teal-600 text-white border-teal-600 shadow-md ring-2 ring-teal-500/20'
                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
            }`}
          >
            <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${selectedPhaseId === w.id ? 'text-teal-200' : 'text-slate-400'}`}>
              Fase Double Diamond
            </span>
            <span className="font-bold text-sm block">{w.id}</span>
            <span className={`text-xs mt-1 block line-clamp-1 ${selectedPhaseId === w.id ? 'text-teal-100' : 'text-slate-500'}`}>
              {w.goal}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Phase Details & Configuration */}
        <div className="lg:col-span-1 space-y-6">
          {/* Objective & Metadata */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
            <h3 className="font-bold text-slate-800 text-base border-b border-slate-100 pb-3 uppercase tracking-wider text-[11px] text-slate-400">
              Detail Parameter Fase
            </h3>
            
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-semibold text-slate-700 block mb-0.5">Tujuan Fase:</span>
                <p className="text-slate-600 leading-relaxed text-xs">{activePhase.goal}</p>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <span className="font-semibold text-slate-700 block mb-0.5">Relevansi Bagi Juri:</span>
                <p className="text-slate-600 leading-relaxed text-xs">{activePhase.judgeRelevance}</p>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <span className="font-semibold text-slate-700 block mb-0.5">Format Input yang Dibutuhkan:</span>
                <p className="text-slate-500 text-xs italic">&quot;{activePhase.requiredInput}&quot;</p>
              </div>
            </div>
          </div>

          {/* Interactive Configurator */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
            <div className="flex items-center gap-1.5 text-teal-800 border-b border-slate-100 pb-3">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <h3 className="font-bold text-sm">Konfigurasi Simulasi Agen</h3>
            </div>

            {/* Select Agent */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-slate-400" /> Pilih Agen Ahli:
              </label>
              <select
                value={selectedAgentId}
                onChange={(e) => setSelectedAgentId(e.target.value)}
                className="w-full text-xs p-2.5 border border-slate-200 rounded-lg text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-teal-600"
              >
                <option value="">-- Pilih Agen --</option>
                {phaseAgents.map(a => (
                  <option key={a.id} value={a.id}>{a.name} ({a.role.split(' ')[0]})</option>
                ))}
              </select>
            </div>

            {/* Select Skill */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <Wrench className="w-3.5 h-3.5 text-slate-400" /> Pilih Keterampilan Agen:
              </label>
              <select
                value={selectedSkillId}
                onChange={(e) => setSelectedSkillId(e.target.value)}
                className="w-full text-xs p-2.5 border border-slate-200 rounded-lg text-slate-700 focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                disabled={!selectedAgentId}
              >
                <option value="">-- Pilih Keterampilan --</option>
                {phaseSkills.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Input & Output Workspace */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
            <h3 className="font-bold text-slate-800 text-base border-b border-slate-100 pb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-teal-600" />
              <span>Workspace Eksekusi Alur Kerja</span>
            </h3>

            {/* Input Textarea */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700">
                Pernyataan Wawasan, Asumsi, atau Data Lapangan:
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={4}
                className="w-full p-3 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                placeholder="Masukkan temuan atau gagasan Anda di sini..."
              />
            </div>

            {/* Run Button */}
            <button
              onClick={handleRunSimulation}
              disabled={!selectedAgentId || !selectedSkillId}
              className={`w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                selectedAgentId && selectedSkillId
                  ? 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-md cursor-pointer'
                  : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
              }`}
            >
              <Play className="w-4 h-4" />
              <span>Jalankan Simulasi Analisis Agen</span>
            </button>
          </div>

          {/* Safety Alert if detected */}
          {safetyAlert && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex gap-3 text-red-800 text-xs">
              <ShieldAlert className="w-5 h-5 text-red-600 shrink-0" />
              <div>
                <span className="font-bold block mb-0.5">Notifikasi Keamanan Sistem (Safety Alert):</span>
                <p className="leading-relaxed">{safetyAlert}</p>
              </div>
            </div>
          )}

          {/* Simulation Output */}
          {simulationOutput ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs animate-fade-in">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Output Agen Berhasil Dihasilkan
                </span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(simulationOutput);
                    alert("Output disalin ke clipboard!");
                  }}
                  className="text-xs text-teal-600 hover:text-teal-700 font-semibold"
                >
                  Salin Hasil
                </button>
              </div>

              {/* Render Output Content */}
              <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-sans bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                {simulationOutput}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 bg-slate-50 border border-dashed border-slate-200 rounded-2xl text-center text-slate-400">
              <HelpCircle className="w-12 h-12 mb-3 text-slate-300" />
              <p className="text-sm font-medium">Belum ada simulasi yang dijalankan.</p>
              <p className="text-xs mt-1 max-w-sm">Pilih Agen, Keterampilan, lalu klik tombol &quot;Jalankan Simulasi&quot; untuk memproses ide Anda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default WorkflowBoard;
