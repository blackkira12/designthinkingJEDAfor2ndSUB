"use client";

import React, { useState } from 'react';
import { generateInvestorReadinessResult } from '../lib/generator';
import { InvestorReadinessResult } from '../types';
import { CheckSquare, Square, TrendingUp, Info, ShieldAlert, Award } from 'lucide-react';

export default function InvestorReadinessPathway() {
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    debtClear: false,
    dueDateKnown: false,
    noRefinancing: false,
    emergencyFund: false,
    riskAwareness: false,
    platformVerification: false,
    noFomo: false,
    literacyFirst: false,
  });

  const checklistItems = [
    { id: 'debtClear', label: 'Saya punya catatan utang yang jelas', category: 'Awareness' },
    { id: 'dueDateKnown', label: 'Saya tahu tanggal jatuh tempo utama seluruh kewajiban saya', category: 'Awareness' },
    { id: 'noRefinancing', label: 'Saya tidak sedang mengambil pinjaman baru untuk membayar pinjaman lama', category: 'Stabilization' },
    { id: 'emergencyFund', label: 'Saya punya dana darurat minimal awal (misal: Rp1.000.000 atau setara)', category: 'Buffer' },
    { id: 'riskAwareness', label: 'Saya paham investasi memiliki risiko dan modal bisa berkurang', category: 'Behavior' },
    { id: 'platformVerification', label: 'Saya tahu cara mengecek legalitas platform investasi di OJK', category: 'Literacy' },
    { id: 'noFomo', label: 'Saya tidak berinvestasi karena FOMO atau ingin menutup kerugian judi/trading sebelumnya', category: 'Behavior' },
    { id: 'literacyFirst', label: 'Saya siap belajar investasi dasar sebelum membeli produk apa pun', category: 'Literacy' },
  ];

  const handleToggle = (id: string) => {
    setChecklist(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSelectAll = () => {
    const allChecked = Object.values(checklist).every(v => v);
    const newChecklist = { ...checklist };
    Object.keys(newChecklist).forEach(key => {
      newChecklist[key] = !allChecked;
    });
    setChecklist(newChecklist);
  };

  const result: InvestorReadinessResult = generateInvestorReadinessResult(checklist);

  const getReadinessBgColor = (level: string) => {
    switch (level) {
      case 'Siap Belajar Investasi Dasar': return 'bg-emerald-50 border-emerald-200 text-emerald-800';
      case 'Mulai Edukasi': return 'bg-teal-50 border-teal-200 text-teal-800';
      case 'Stabilisasi Dulu': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'Belum Siap': return 'bg-slate-50 border-slate-200 text-slate-700';
      default: return 'bg-slate-50 border-slate-200 text-slate-700';
    }
  };

  const getReadinessBadgeColor = (level: string) => {
    switch (level) {
      case 'Siap Belajar Investasi Dasar': return 'bg-emerald-600 text-white';
      case 'Mulai Edukasi': return 'bg-teal-600 text-white';
      case 'Stabilisasi Dulu': return 'bg-yellow-500 text-slate-900';
      case 'Belum Siap': return 'bg-slate-500 text-white';
      default: return 'bg-slate-500 text-white';
    }
  };

  const stages = [
    { num: 1, title: "Debt Awareness", desc: "Mendata utang & risiko legal" },
    { num: 2, title: "Cashflow Stabilization", desc: "Arus kas bulanan surplus" },
    { num: 3, title: "Emergency Buffer", desc: "Dana darurat minimal awal" },
    { num: 4, title: "High-Risk Debt Reduction", desc: "Melunasi utang bunga tinggi" },
    { num: 5, title: "Behavioral Reset", desc: "Menghapus impulsivitas & FOMO" },
    { num: 6, title: "Retail Investor Literacy", desc: "Paham risiko & hak investor" },
    { num: 7, title: "Legal Platform Awareness", desc: "Validasi registrasi OJK" },
    { num: 8, title: "Investment Check", desc: "Mulai belajar reksa dana pasar uang" }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs max-w-4xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-teal-600" />
          <span>Debt-to-Investor Readiness Pathway</span>
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Bagaimana JEDA menjembatani pengguna dari kerentanan utang konsumtif menuju kesiapan perilaku sebagai calon investor ritel yang bijak dan berdaya.
        </p>
      </div>

      {/* Positioning Statement */}
      <div className="bg-teal-50/50 border border-teal-100 rounded-xl p-4 flex gap-3 text-xs leading-relaxed text-slate-700">
        <Info className="w-5 h-5 text-teal-600 shrink-0" />
        <div className="space-y-1">
          <p className="font-bold text-teal-900">Pernyataan Batasan Edukasi JEDA:</p>
          <p>
            JEDA **tidak menjual produk investasi**, tidak terafiliasi dengan sekuritas komersial mana pun, dan tidak memberikan saran pemilihan saham/portofolio. JEDA fokus pada intervensi perilaku hulu: membantu pengguna menstabilkan mental dan keuangan agar tidak impulsif sebelum memasuki pasar modal ritel.
          </p>
        </div>
      </div>

      {/* Visual Roadmap Stages */}
      <div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-4">8 Tahapan Transisi Resiliensi Finansial JEDA</span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stages.map((stage) => {
            // Count checked items in categories to highlight stage if applicable
            const isCompleted = 
              (stage.num === 1 && checklist.debtClear && checklist.dueDateKnown) ||
              (stage.num === 2 && checklist.noRefinancing) ||
              (stage.num === 3 && checklist.emergencyFund) ||
              (stage.num === 5 && checklist.noFomo && checklist.riskAwareness) ||
              (stage.num === 7 && checklist.platformVerification) ||
              (stage.num === 8 && Object.values(checklist).every(v => v));

            return (
              <div 
                key={stage.num} 
                className={`border rounded-xl p-3 text-left transition-all duration-200 ${
                  isCompleted 
                    ? 'border-teal-200 bg-teal-50/30' 
                    : 'border-slate-100 bg-slate-50/30'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-sm ${
                    isCompleted ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    Tahap {stage.num}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-800 leading-snug">{stage.title}</h4>
                <p className="text-[9px] text-slate-400 mt-0.5">{stage.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Checklist & Calculator */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: Checklist */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-700">Checklist Mandiri Perilaku Keuangan:</span>
            <button
              onClick={handleSelectAll}
              className="text-[10px] font-bold text-teal-600 hover:text-teal-700"
            >
              {Object.values(checklist).every(v => v) ? "Hapus Semua" : "Pilih Semua"}
            </button>
          </div>

          <div className="space-y-2.5">
            {checklistItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleToggle(item.id)}
                className={`w-full flex items-start gap-3 p-3 border rounded-xl text-left transition-all duration-150 ${
                  checklist[item.id] 
                    ? 'border-teal-200 bg-teal-50/20 text-slate-900 shadow-2xs' 
                    : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50 text-slate-600'
                }`}
              >
                <span className="mt-0.5 shrink-0">
                  {checklist[item.id] ? (
                    <CheckSquare className="w-4 h-4 text-teal-600" />
                  ) : (
                    <Square className="w-4 h-4 text-slate-300" />
                  )}
                </span>
                <div className="space-y-0.5">
                  <span className="text-xs font-semibold leading-relaxed block">{item.label}</span>
                  <span className="text-[9px] text-slate-400 font-medium tracking-wider uppercase">{item.category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right 1 Column: Result Scoreboard */}
        <div className="space-y-4">
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 space-y-4">
            <span className="text-xs font-bold text-slate-700 block">Status Kesiapan Investasi</span>
            
            {/* Score circle/bar */}
            <div className="text-center py-2">
              <div className="text-3xl font-black text-slate-900">{result.score}%</div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Skor Kesiapan Finansial</span>
              
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mt-3">
                <div 
                  className="bg-teal-600 h-full transition-all duration-300" 
                  style={{ width: `${result.score}%` }}
                ></div>
              </div>
            </div>

            {/* Level Badge & Text */}
            <div className={`border rounded-lg p-3 text-xs leading-relaxed ${getReadinessBgColor(result.readinessLevel)}`}>
              <div className="flex items-center gap-1.5 font-bold mb-1">
                <Award className="w-4 h-4 shrink-0" />
                <span className="text-[10px] uppercase tracking-wide">Level:</span>
              </div>
              <span className={`text-[10px] font-black px-2 py-0.5 rounded-full inline-block mb-2 ${getReadinessBadgeColor(result.readinessLevel)}`}>
                {result.readinessLevel}
              </span>
              <p className="text-[11px] text-slate-700 leading-normal">{result.explanation}</p>
            </div>

            {/* Next step recommendation */}
            <div className="space-y-1">
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Rekomendasi Langkah Berikutnya:</span>
              <p className="text-xs font-bold text-slate-800 leading-relaxed">{result.nextStep}</p>
            </div>

          </div>

          {/* Compliance & Risk Notice */}
          <div className="bg-amber-50 border border-amber-200/60 rounded-xl p-4 flex gap-2.5 text-[10px] text-amber-800 leading-relaxed">
            <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Disclaimer Hukum Pengguna:</p>
              <p className="mt-0.5">{result.disclaimer}</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
