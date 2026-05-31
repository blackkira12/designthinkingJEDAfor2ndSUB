import React from 'react';
import { Agent } from '../types';
import { ShieldAlert, BookOpen, Heart, CheckCircle2 } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
  onSelect?: () => void;
  isSelected?: boolean;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent, onSelect, isSelected }) => {
  return (
    <div 
      onClick={onSelect}
      className={`flex flex-col h-full rounded-2xl border bg-white p-6 shadow-xs transition-all duration-300 ${
        onSelect ? 'cursor-pointer hover:shadow-md hover:border-slate-300' : ''
      } ${
        isSelected ? 'ring-2 ring-teal-600 border-teal-600 shadow-sm' : 'border-slate-200'
      }`}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg border ${agent.avatarColor}`}>
          {agent.name.split(' ')[0][0] || 'A'}
        </div>
        <div>
          <h3 className="font-semibold text-slate-900 text-lg leading-tight">{agent.name}</h3>
          <p className="text-sm font-medium text-teal-600 mt-1">{agent.role}</p>
        </div>
      </div>

      {/* Badges / Best Phase */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-800">
          Fase: {agent.bestPhase === 'All' ? 'Semua Fase' : agent.bestPhase}
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
          Pakar Keuangan Retail
        </span>
      </div>

      <div className="space-y-4 flex-1 text-sm text-slate-600">
        {/* Education & Persona */}
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <BookOpen className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <p>
              <strong className="text-slate-700">Pendidikan:</strong> {agent.education}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Heart className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
            <p>
              <strong className="text-slate-700">Persona:</strong> {agent.persona}
            </p>
          </div>
        </div>

        {/* Expertise */}
        <div className="pt-3 border-t border-slate-100">
          <p className="text-slate-700 font-semibold mb-1">Keahlian Utama:</p>
          <p className="text-slate-600 leading-relaxed">{agent.expertise}</p>
        </div>

        {/* Skills */}
        <div className="pt-3 border-t border-slate-100">
          <p className="text-slate-700 font-semibold mb-1">Keterampilan Agen:</p>
          <ul className="grid grid-cols-1 gap-1 pl-4 list-disc text-slate-600">
            {agent.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Outputs */}
        <div className="pt-3 border-t border-slate-100">
          <p className="text-slate-700 font-semibold mb-1">Output yang Dihasilkan:</p>
          <div className="space-y-1.5">
            {agent.outputs.map((output, index) => (
              <div key={index} className="flex items-center gap-1.5 text-xs bg-slate-50 text-slate-700 py-1 px-2.5 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span>{output}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guardrails / Blind Spots */}
        <div className="pt-3 border-t border-slate-100 bg-rose-50/40 p-3 rounded-xl border border-rose-100/60">
          <div className="flex items-center gap-1.5 text-rose-800 font-semibold mb-1">
            <ShieldAlert className="w-4 h-4" />
            <span>Batasan & Blind Spot</span>
          </div>
          <ul className="space-y-1 text-xs text-rose-700 list-disc pl-4">
            {agent.guardrails.map((guard, index) => (
              <li key={index} className="leading-normal">{guard}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AgentCard;
