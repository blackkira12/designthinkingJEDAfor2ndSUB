import React, { useState } from 'react';
import { agents } from '../data/agents';
import { AgentCard } from './AgentCard';
import { Search, Filter } from 'lucide-react';

export const AgentRoster: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [phaseFilter, setPhaseFilter] = useState<'All' | 'Discover' | 'Define' | 'Develop' | 'Deliver'>('All');

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          agent.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          agent.expertise.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPhase = phaseFilter === 'All' || agent.bestPhase === phaseFilter || agent.bestPhase === 'All';
    return matchesSearch && matchesPhase;
  });

  return (
    <div className="space-y-6">
      {/* Description Section */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-2">Daftar Pakar (Agent Roster)</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Kami mempekerjakan 8 agen ahli otonom yang mensimulasikan peran kritis dalam pengembangan produk JEDA. 
          Setiap agen dilengkapi dengan latar belakang pendidikan, keahlian khusus, gaya persona, dan guardrail keselamatan masing-masing 
          untuk memandu langkah tim di seluruh fase Double Diamond.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 border border-slate-100 rounded-xl shadow-xs">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari agen atau keahlian..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-transparent"
          />
        </div>

        {/* Phase Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5" /> Filter Fase:
          </span>
          {(['All', 'Discover', 'Define', 'Develop', 'Deliver'] as const).map((phase) => (
            <button
              key={phase}
              onClick={() => setPhaseFilter(phase)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 shrink-0 ${
                phaseFilter === phase
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60'
              }`}
            >
              {phase === 'All' ? 'Semua' : phase}
            </button>
          ))}
        </div>
      </div>

      {/* Roster Grid */}
      {filteredAgents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-slate-100 text-center">
          <Search className="w-12 h-12 text-slate-300 mb-3" />
          <p className="text-slate-500 font-medium">Tidak ada agen yang cocok dengan pencarian Anda.</p>
          <button 
            onClick={() => { setSearchQuery(''); setPhaseFilter('All'); }}
            className="mt-2 text-teal-600 hover:text-teal-700 text-sm font-semibold"
          >
            Reset filter pencarian
          </button>
        </div>
      )}
    </div>
  );
};
export default AgentRoster;
