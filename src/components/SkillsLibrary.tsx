import React, { useState } from 'react';
import { skills } from '../data/skills';
import { CheckSquare, Wrench } from 'lucide-react';

export const SkillsLibrary: React.FC = () => {
  const [activePhase, setActivePhase] = useState<'All' | 'Discover' | 'Define' | 'Develop' | 'Deliver'>('All');

  const phases: { id: 'All' | 'Discover' | 'Define' | 'Develop' | 'Deliver'; name: string }[] = [
    { id: 'All', name: 'Semua Keterampilan' },
    { id: 'Discover', name: 'Discover (Eksplorasi)' },
    { id: 'Define', name: 'Define (Rumusan)' },
    { id: 'Develop', name: 'Develop (Solusi)' },
    { id: 'Deliver', name: 'Deliver (Kelayakan)' }
  ];


  const filteredSkills = activePhase === 'All' 
    ? skills 
    : skills.filter(s => s.phase === activePhase);

  const getPhaseBadgeColor = (phase: string) => {
    switch (phase) {
      case 'Discover': return 'bg-teal-50 text-teal-700 border-teal-200';
      case 'Define': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Develop': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Deliver': return 'bg-purple-50 text-purple-700 border-purple-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Description Section */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <Wrench className="w-5 h-5 text-teal-600" />
          <h2 className="text-xl font-bold text-slate-800">Pustaka Keterampilan Agen (Skills Library)</h2>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Keterampilan ini adalah modul analisis terstandarisasi yang dapat dijalankan oleh Agen Ahli. 
          Setiap keterampilan berfokus pada penyelesaian tugas metodologis tertentu dalam proses inovasi keuangan retail.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto pb-px">
        {phases.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePhase(p.id)}
            className={`px-4 py-2 text-sm font-semibold border-b-2 transition-all duration-200 shrink-0 ${
              activePhase === p.id
                ? 'border-teal-600 text-teal-600'
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <div key={skill.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-xs transition-shadow duration-200">
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-semibold text-slate-800 text-base">{skill.name}</h3>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${getPhaseBadgeColor(skill.phase)}`}>
                  {skill.phase}
                </span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                {skill.description}
              </p>
            </div>

            {/* Expected Outputs */}
            <div className="pt-3 border-t border-slate-100 bg-slate-50/50 p-3 rounded-xl">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">Hasil Output Terkait:</span>
              <div className="space-y-1">
                {skill.outputs.map((out, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                    <CheckSquare className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SkillsLibrary;
