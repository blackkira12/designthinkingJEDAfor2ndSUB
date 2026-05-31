"use client";

import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import AgentRoster from '../components/AgentRoster';
import SkillsLibrary from '../components/SkillsLibrary';
import WorkflowBoard from '../components/WorkflowBoard';
import ResearchWorkspace from '../components/ResearchWorkspace';
import ProposalBuilder from '../components/ProposalBuilder';
import RubricEvaluator from '../components/RubricEvaluator';
import JudgeSimulation from '../components/JudgeSimulation';
import CanvasExportPreview from '../components/CanvasExportPreview';
import UserSimulation from '../components/UserSimulation';
import InvestorReadinessPathway from '../components/InvestorReadinessPathway';
import SurveyInsightDashboard from '../components/SurveyInsightDashboard';
import JudgeQASimulator from '../components/JudgeQASimulator';
import { SAFETY_DISCLAIMERS } from '../lib/safety';
import { LayoutGrid, Users, Wrench, Award, Sparkles, FileText, CheckSquare, ShieldAlert, Copy, ClipboardList, Smartphone, TrendingUp, BarChart3, MessageSquare } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'user-simulation', label: 'Simulasi Pengguna', icon: Smartphone },
    { id: 'investor-readiness', label: 'Kesiapan Investasi', icon: TrendingUp },
    { id: 'survey-insight', label: 'Dashboard Survei', icon: BarChart3 },
    { id: 'qa-simulator', label: 'Tanya Jawab Juri', icon: MessageSquare },
    { id: 'roster', label: 'Roster Agen', icon: Users },
    { id: 'skills', label: 'Pustaka Skill', icon: Wrench },
    { id: 'workflows', label: 'Alur Diamond', icon: Award },
    { id: 'research', label: 'Workspace Riset', icon: Sparkles },
    { id: 'proposal', label: 'Penyusun Proposal', icon: FileText },
    { id: 'rubric', label: 'Evaluator Rubrik', icon: ClipboardList },
    { id: 'simulation', label: 'Simulasi Juri', icon: CheckSquare },
    { id: 'canvas', label: 'Kanvas DT', icon: Copy }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans print:bg-white print:text-black">
      {/* Global Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 px-6 py-4 shadow-2xs print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-teal-600 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                JEDA STUDIO
              </span>
              <span className="text-[11px] font-semibold text-slate-400">v1.0.0</span>
            </div>
            <h1 className="text-xl font-bold text-slate-900 mt-1">JEDA Design Thinking Agent Studio</h1>
            <p className="text-xs text-slate-500 font-medium">
              Agentic Design Thinking Workspace for Pinjol, Paylater, Judi Online, and Debt-Stress Intervention
            </p>
          </div>
          
          {/* Hackathon Project Tag */}
          <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 py-1.5 px-3 rounded-lg self-start md:self-auto shrink-0">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping"></span>
            <span className="text-xs font-bold text-slate-600">PIDI x Digdaya 2026</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 py-8 flex-1 flex flex-col lg:flex-row gap-8 print:py-0 print:px-0 print:gap-0">
        
        {/* Navigation Sidebar */}
        <aside className="lg:w-64 shrink-0 print:hidden">
          <nav className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1.5 shadow-2xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-3 mb-2">Workspace Menu</span>
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 text-left ${
                    activeTab === item.id
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <IconComponent className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Workspace Display Area */}
        <main className="flex-1 flex flex-col min-w-0">
          {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} />}
          {activeTab === 'user-simulation' && <UserSimulation />}
          {activeTab === 'investor-readiness' && <InvestorReadinessPathway />}
          {activeTab === 'survey-insight' && <SurveyInsightDashboard />}
          {activeTab === 'qa-simulator' && <JudgeQASimulator />}
          {activeTab === 'roster' && <AgentRoster />}
          {activeTab === 'skills' && <SkillsLibrary />}
          {activeTab === 'workflows' && <WorkflowBoard />}
          {activeTab === 'research' && <ResearchWorkspace />}
          {activeTab === 'proposal' && <ProposalBuilder />}
          {activeTab === 'rubric' && <RubricEvaluator />}
          {activeTab === 'simulation' && <JudgeSimulation />}
          {activeTab === 'canvas' && <CanvasExportPreview />}
        </main>

      </div>

      {/* Persistent Safety Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-6 px-6 mt-12 text-xs print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div className="space-y-1 max-w-4xl">
            <div className="flex items-center gap-1.5 text-amber-500 font-bold mb-1">
              <ShieldAlert className="w-4 h-4" />
              <span>PERINGATAN DAN BATASAN HUKUM:</span>
            </div>
            <p className="leading-relaxed">
              JEDA adalah platform dukungan sosial dan metodologi perancangan produk. {SAFETY_DISCLAIMERS.isNotLender}{' '}
              {SAFETY_DISCLAIMERS.isNotProfessionalAdvice} {SAFETY_DISCLAIMERS.emergencyContact}{' '}
              {SAFETY_DISCLAIMERS.anonymizationNotice}
            </p>
          </div>
          <div className="shrink-0 text-slate-500 text-[10px] md:text-right border-t border-slate-800 md:border-t-0 pt-4 md:pt-0 w-full md:w-auto">
            <span>© 2026 Tim JEDA. Dibuat khusus untuk PIDI Hackathon 2026.</span>
            <span className="block mt-0.5">Semua hak cipta terpelihara.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
