import React from 'react';
import { Target, Users, FileText, CheckSquare, Award, ArrowRight, ShieldAlert, Sparkles, Smartphone, TrendingUp, BarChart3, ShieldCheck } from 'lucide-react';
import { SAFETY_DISCLAIMERS } from '../lib/safety';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setActiveTab }) => {
  const quickNav = [
    { label: 'Simulasi Pengguna JEDA', desc: 'Demo perjalanan mandiri & pemulihan', tab: 'user-simulation', icon: Smartphone, color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { label: 'Kesiapan Investasi', desc: 'Pathway transisi utang ke investor ritel', tab: 'investor-readiness', icon: TrendingUp, color: 'bg-teal-50 text-teal-700 border-teal-100' },
    { label: 'Dashboard Survei', desc: 'Validasi pasar & analisis insight survei', tab: 'survey-insight', icon: BarChart3, color: 'bg-blue-50 text-blue-700 border-blue-100' },
    { label: 'Roster Agen Studio', desc: 'Konsultasi dengan 8 pakar interdisipliner', tab: 'roster', icon: Users, color: 'bg-slate-50 text-slate-700 border-slate-100' },
    { label: 'Workspace Riset', desc: 'Olah temuan mentah menjadi Empathy & Persona', tab: 'research', icon: Sparkles, color: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
    { label: 'Penyusun Proposal', desc: 'Susun 20 bagian proposal secara terpadu', tab: 'proposal', icon: FileText, color: 'bg-purple-50 text-purple-700 border-purple-100' },
    { label: 'Simulasi Juri', desc: 'Evaluasi draf proposal terhadap 6 kriteria', tab: 'simulation', icon: CheckSquare, color: 'bg-rose-50 text-rose-700 border-rose-100' }
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
            JEDA: Resiliensi Keuangan & Kontrol Perilaku
          </h1>
          <p className="text-teal-100 text-base md:text-lg leading-relaxed font-medium">
            Platform intervensi perilaku hulu untuk melindungi pengguna dari keputusan pinjol/paylater impulsif dan mempersiapkan transisi menuju investor ritel yang sehat dan berdaya.
          </p>
          <div className="pt-2 text-xs md:text-sm text-teal-200/90 flex flex-wrap gap-x-6 gap-y-2 border-t border-teal-700/50">
            <span><strong>Fokus Kategori:</strong> Penguatan Ketahanan & Inovasi Keuangan Retail</span>
            <span><strong>Sub-masalah:</strong> Manajemen Utang & Persiapan Kesiapan Investor Ritel Baru</span>
          </div>
        </div>
      </div>

      {/* Safety Notice Card */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex flex-col md:flex-row items-start gap-4">
        <ShieldAlert className="w-8 h-8 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-bold text-amber-900 text-sm md:text-base">Pernyataan Batasan & Kepatuhan Platform (Safety Guardrails)</h4>
          <p className="text-xs md:text-sm text-amber-800 leading-relaxed">
            {SAFETY_DISCLAIMERS.isNotLender} {SAFETY_DISCLAIMERS.isNotBroker} {SAFETY_DISCLAIMERS.isNotInvestmentAdvisor} {SAFETY_DISCLAIMERS.isNotProfessionalAdvice} {SAFETY_DISCLAIMERS.emergencyContact} {SAFETY_DISCLAIMERS.anonymizationNotice}
          </p>
        </div>
      </div>

      {/* Core Positioning Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Main Context) */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Masalah yang Diselesaikan */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 text-rose-800 border-b border-slate-100 pb-2">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                <h3 className="font-bold text-sm uppercase tracking-wide">Masalah yang Diselesaikan</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Kepanikan emosional (*cognitive overload*) akibat penagihan kasar dan adiksi judi online merusak pemikiran keuangan rasional jangka panjang. Stigma sosial (rasa malu) yang mendalam mengisolasi korban, memaksa mereka mengambil pinjaman baru (*pinjol/paylater*) secara impulsif untuk menutup utang lama (*gali lubang tutup lubang*).
              </p>
            </div>

            {/* Card 2: Relevansi dengan Investor Ritel */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 text-teal-800 border-b border-slate-100 pb-2">
                <TrendingUp className="w-4 h-4 text-teal-600" />
                <h3 className="font-bold text-sm uppercase tracking-wide">Relevansi Investor Ritel</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pengguna yang memiliki utang konsumtif berbunga tinggi (10-30% per bulan) tidak logis dipaksa berinvestasi, karena beban bunga utang jauh melampaui imbal hasil investasi mana pun. JEDA bertindak sebagai saringan hulu: menstabilkan *cashflow*, meredam impuls berutang, dan membekali literasi agar mereka siap transisi menjadi investor ritel legal yang sadar risiko.
              </p>
            </div>

            {/* Card 3: Solusi Inti JEDA */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 text-emerald-800 border-b border-slate-100 pb-2">
                <Target className="w-4 h-4 text-emerald-600" />
                <h3 className="font-bold text-sm uppercase tracking-wide">Solusi Inti JEDA</h3>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                <li><strong>Impulse Pause Button:</strong> Menunda keputusan berutang impulsif dengan jeda refleksi perilaku.</li>
                <li><strong>Debt Priority Map:</strong> Memetakan kewajiban berdasarkan status legal OJK vs pelaporan ilegal.</li>
                <li><strong>Anonymous Safe Room:</strong> Berbagi cerita anonim untuk mereduksi stigma rasa malu sosial.</li>
                <li><strong>Readiness Pathway:</strong> Modul kesiapan transisi dari beban utang ke pasar investasi formal.</li>
              </ul>
            </div>

            {/* Card 4: Batasan Etis JEDA */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 text-slate-800 border-b border-slate-100 pb-2">
                <ShieldCheck className="w-4 h-4 text-slate-600" />
                <h3 className="font-bold text-sm uppercase tracking-wide">Batasan Etis JEDA</h3>
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                <li><strong>Tidak Menyalurkan Pinjaman:</strong> Bukan penyedia dana talangan atau kredit komersial.</li>
                <li><strong>Bukan Broker Utang:</strong> Tidak menegosiasikan diskon utang secara komersial untuk keuntungan.</li>
                <li><strong>Bukan Penasihat Investasi:</strong> Tidak merekomendasikan produk saham, kripto, atau reksa dana komersial tertentu.</li>
                <li><strong>Privacy-by-Design:</strong> Tidak menyedot kontak telepon, SMS, atau media pribadi.</li>
              </ul>
            </div>

          </div>

          {/* Hackathon Criteria Summary */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
            <div className="flex items-center gap-2 text-teal-800 border-b border-slate-100 pb-3">
              <Award className="w-5 h-5 text-teal-600" />
              <h3 className="font-bold text-base">Keselarasan Solusi dengan Kriteria Juri</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3 border border-slate-100 rounded-xl bg-slate-50/50">
                <span className="font-bold text-slate-800 text-xs block mb-1">Customer Empathy</span>
                <p className="text-[11px] text-slate-500 leading-normal">Mereduksi kecemasan kognitif dan stigma rasa bersalah secara anonim sebelum beranjak ke aspek keuangan.</p>
              </div>
              <div className="p-3 border border-slate-100 rounded-xl bg-slate-50/50">
                <span className="font-bold text-slate-800 text-xs block mb-1">Regulatory Compliance</span>
                <p className="text-[11px] text-slate-500 leading-normal">Mengarahkan aduan dc ilegal ke otoritas resmi, kepatuhan UU PDP No 27/2022 tanpa pengumpulan kontak HP.</p>
              </div>
              <div className="p-3 border border-slate-100 rounded-xl bg-slate-50/50">
                <span className="font-bold text-slate-800 text-xs block mb-1">Financial Inclusivity</span>
                <p className="text-[11px] text-slate-500 leading-normal">Mengubah golongan rentan terjerat utang menjadi calon investor ritel yang bijak dan berliterasi hukum OJK.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column (Navigation Panel) */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
            <h3 className="font-bold text-slate-800 text-base border-b border-slate-100 pb-3">Navigasi Fitur & Simulasi</h3>
            
            <div className="grid grid-cols-1 gap-3">
              {quickNav.map((nav, index) => {
                const IconComponent = nav.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(nav.tab)}
                    className="flex items-center justify-between p-3 border rounded-xl hover:bg-slate-50/80 transition-all text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg border ${nav.color}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-800 text-xs block">{nav.label}</span>
                        <span className="text-[10px] text-slate-400 leading-none block mt-0.5">{nav.desc}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-teal-600 transition-colors shrink-0 ml-2" />
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
