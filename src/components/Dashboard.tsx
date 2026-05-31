import React from 'react';
import { Target, Users, BookOpen, FileText, CheckSquare, Award, ArrowRight, ShieldAlert, Sparkles, LayoutGrid } from 'lucide-react';
import { SAFETY_DISCLAIMERS } from '../lib/safety';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setActiveTab }) => {
  const quickNav = [
    { label: 'Roster Agen', desc: 'Konsultasi dengan 8 pakar interdisipliner', tab: 'roster', icon: Users, color: 'bg-teal-50 text-teal-700 border-teal-100' },
    { label: 'Pustaka Skill', desc: '24 modul analisis agen dari Discover ke Deliver', tab: 'skills', icon: BookOpen, color: 'bg-blue-50 text-blue-700 border-blue-100' },
    { label: 'Alur Kerja Diamond', desc: 'Jalankan simulasi langkah demi langkah', tab: 'workflows', icon: Award, color: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
    { label: 'Workspace Riset', desc: 'Olah temuan mentah menjadi Empathy & Persona', tab: 'research', icon: Sparkles, color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { label: 'Draf Proposal', desc: 'Susun 20 bagian 2nd submission secara terpadu', tab: 'proposal', icon: FileText, color: 'bg-purple-50 text-purple-700 border-purple-100' },
    { label: 'Simulasi Juri', desc: 'Uji draf proposal Anda terhadap 6 rubrik penilai', tab: 'simulation', icon: CheckSquare, color: 'bg-rose-50 text-rose-700 border-rose-100' }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-teal-800 to-emerald-900 p-8 md:p-12 text-white shadow-md">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-teal-700 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-emerald-600 rounded-full opacity-10 blur-xl"></div>
        
        <div className="relative z-10 space-y-4 max-w-4xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-200 border border-teal-400/30">
            <Sparkles className="w-3.5 h-3.5" /> PIDI Hackathon x Digdaya 2026
          </span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            JEDA Design Thinking Agent Studio
          </h1>
          <p className="text-teal-100 text-base md:text-lg leading-relaxed font-medium">
            Agentic Design Thinking Workspace for Pinjol, Paylater, Judi Online, and Debt-Stress Intervention in Indonesia
          </p>
          <div className="pt-2 text-xs md:text-sm text-teal-200/90 flex flex-wrap gap-x-6 gap-y-2 border-t border-teal-700/50">
            <span><strong>Fokus:</strong> Ketahanan & Inovasi Keuangan Retail</span>
            <span><strong>Tim:</strong> Jaga Emosi dan Dana (JEDA)</span>
          </div>
        </div>
      </div>

      {/* Safety Notice Card */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex flex-col md:flex-row items-start gap-4">
        <ShieldAlert className="w-8 h-8 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-bold text-amber-900 text-sm md:text-base">Pernyataan Keselamatan & Batasan Platform (Safety Guardrails)</h4>
          <p className="text-xs md:text-sm text-amber-800 leading-relaxed">
            {SAFETY_DISCLAIMERS.isNotLender} {SAFETY_DISCLAIMERS.isNotProfessionalAdvice} {SAFETY_DISCLAIMERS.emergencyContact} {SAFETY_DISCLAIMERS.anonymizationNotice}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Project Context & Objectives */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
            <div className="flex items-center gap-2 text-teal-800 border-b border-slate-100 pb-3">
              <Target className="w-5 h-5 text-teal-600" />
              <h3 className="font-bold text-lg">Ringkasan Konseptual JEDA</h3>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              JEDA adalah sebuah platform intervensi krisis dan pendampingan psikologis keuangan. 
              Platform ini ditujukan bagi individu yang terjerat pinjol (pinjaman online) ilegal/legal, paylater, 
              serta adiksi judi online. JEDA membantu pengguna menurunkan tingkat kepanikan, memetakan kewajiban utang 
              berdasarkan prioritas keamanan hukum, dan menyediakan ruang cerita anonim untuk melepas stigma sosial.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-800 text-xs uppercase tracking-wider block mb-1">Apa itu JEDA?</span>
                <ul className="text-xs text-slate-600 space-y-1 pl-4 list-disc">
                  <li>Tombol Jeda Refleksi (Impulse Pause)</li>
                  <li>Pemetaan Utang Visual yang Tidak Menghakimi</li>
                  <li>Ruang Cerita Anonim Terenkripsi (Safe Room)</li>
                  <li>Hotline Eskalasi ke Pakar Psikiatri & Hukum</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-800 text-xs uppercase tracking-wider block mb-1">Bukan Layanan Apa?</span>
                <ul className="text-xs text-slate-600 space-y-1 pl-4 list-disc">
                  <li>Bukan penyalur pinjaman / koperasi</li>
                  <li>Bukan broker / mediator negosiasi berbayar</li>
                  <li>Bukan pengumpul utang (debt collector)</li>
                  <li>Bukan sarana menghindari utang yang sah</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hackathon Criteria */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
            <div className="flex items-center gap-2 text-teal-800 border-b border-slate-100 pb-3">
              <LayoutGrid className="w-5 h-5 text-teal-600" />
              <h3 className="font-bold text-lg">Kriteria Penilaian Utama Hackathon</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3 border border-slate-100 rounded-xl bg-slate-50/50">
                <span className="font-bold text-slate-800 text-sm block mb-1">1. Customer Empathy</span>
                <p className="text-[11px] text-slate-500 leading-normal">Seberapa dalam tim memahami hambatan rasa bersalah & trauma pengguna retail Indonesia.</p>
              </div>
              <div className="p-3 border border-slate-100 rounded-xl bg-slate-50/50">
                <span className="font-bold text-slate-800 text-sm block mb-1">2. Regulatory Safety</span>
                <p className="text-[11px] text-slate-500 leading-normal">Kesesuaian rancangan dengan POJK Perlindungan Konsumen & pematuhan UU Pelindungan Data Pribadi.</p>
              </div>
              <div className="p-3 border border-slate-100 rounded-xl bg-slate-50/50">
                <span className="font-bold text-slate-800 text-sm block mb-1">3. Social Enterprise Biz</span>
                <p className="text-[11px] text-slate-500 leading-normal">Keberlanjutan finansial tanpa membebankan biaya jasa pada orang yang berutang (B2B Employee Wellness).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Navigation Panel */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
            <h3 className="font-bold text-slate-800 text-lg border-b border-slate-100 pb-3">Navigasi Studio Agen</h3>
            
            <div className="grid grid-cols-1 gap-3">
              {quickNav.map((nav, index) => {
                const IconComponent = nav.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(nav.tab)}
                    className="flex items-center justify-between p-3.5 border rounded-xl hover:bg-slate-50/80 transition-all text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg border ${nav.color}`}>
                        <IconComponent className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-800 text-xs md:text-sm block">{nav.label}</span>
                        <span className="text-[11px] text-slate-400 leading-none">{nav.desc}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-teal-600 transition-colors shrink-0 ml-2" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
