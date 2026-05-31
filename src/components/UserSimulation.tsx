"use client";

import React, { useState } from 'react';
import { generateUserRiskSimulation } from '../lib/generator';
import { UserSimulationInput, UserRiskResult } from '../types';
import { ShieldAlert, RefreshCw, CheckCircle, Info, HeartHandshake, AlertTriangle } from 'lucide-react';

export default function UserSimulation() {
  const [step, setStep] = useState<'welcome' | 'form' | 'result'>('welcome');
  const [input, setInput] = useState<UserSimulationInput>({
    currentCondition: 'panic',
    emotionalState: 'Sangat panik dan cemas',
    activeDebtsCount: 2,
    hasUrgentCollection: true,
    hasEmergencyFund: false,
    consideringNewDebt: true,
  });
  
  const [result, setResult] = useState<UserRiskResult | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate generation delay for realistic agentic feel
    setTimeout(() => {
      const simResult = generateUserRiskSimulation(input);
      setResult(simResult);
      setIsGenerating(false);
      setStep('result');
    }, 800);
  };

  const handleReset = () => {
    setInput({
      currentCondition: 'panic',
      emotionalState: 'Sangat panik dan cemas',
      activeDebtsCount: 2,
      hasUrgentCollection: true,
      hasEmergencyFund: false,
      consideringNewDebt: true,
    });
    setResult(null);
    setStep('form');
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Kritis': return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'Tinggi': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Sedang': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'Rendah': return 'bg-teal-50 text-teal-700 border-teal-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getRiskBadgeColor = (level: string) => {
    switch (level) {
      case 'Kritis': return 'bg-rose-600 text-white';
      case 'Tinggi': return 'bg-amber-500 text-white';
      case 'Sedang': return 'bg-yellow-500 text-slate-950';
      case 'Rendah': return 'bg-teal-600 text-white';
      default: return 'bg-slate-600 text-white';
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs max-w-4xl mx-auto">
      {/* Tab Header */}
      <div className="border-b border-slate-100 pb-4 mb-6">
        <h2 className="text-lg font-bold text-slate-900">Simulasi Pengguna JEDA (Demo Resiliensi Finansial)</h2>
        <p className="text-xs text-slate-500 mt-1">
          Modul simulasi intervensi perilaku keuangan untuk melihat bagaimana JEDA merespons kondisi kritis pengguna secara non-judgmental dan edukatif.
        </p>
      </div>

      {/* Safety Notice Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 flex gap-3 text-xs text-slate-600">
        <Info className="w-5 h-5 text-teal-600 shrink-0" />
        <div className="space-y-1">
          <p className="font-bold text-slate-800">Prinsip Asesmen JEDA:</p>
          <p className="leading-relaxed">
            Data dikumpulkan secara mandiri (manual debt input) dan dienkripsi secara lokal (rencana MVP). Kami tidak meminta kontak HP atau SMS pengguna. Analisis ini bersifat edukatif dan bukan nasihat hukum, medis, atau keuangan profesional.
          </p>
        </div>
      </div>

      {/* Welcome Screen */}
      {step === 'welcome' && (
        <div className="text-center py-8 px-4 max-w-xl mx-auto space-y-6">
          <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto">
            <HeartHandshake className="w-8 h-8 text-teal-600" />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900">Selamat datang di Simulasi Alur JEDA</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Di sini, Anda dapat melakukan simulasi perjalanan seorang pengguna yang mengalami tekanan utang pinjol, paylater, judi online, atau ingin mulai investasi namun terkendala arus kas.
            </p>
          </div>
          <button
            onClick={() => setStep('form')}
            className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold py-2.5 px-6 rounded-xl transition-all duration-200"
          >
            Mulai Self-Check Simulasi
          </button>
        </div>
      )}

      {/* Form Screen */}
      {step === 'form' && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left: Primary Condition */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  1. Pilih Kondisi Saat Ini yang Dialami
                </label>
                <select
                  value={input.currentCondition}
                  onChange={(e) => setInput({ ...input, currentCondition: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-hidden text-slate-700"
                >
                  <option value="panic">Saya sedang panik karena tagihan & penagih utang</option>
                  <option value="new_loan">Saya ingin mengambil pinjol baru (gali lubang tutup lubang)</option>
                  <option value="paylater">Saya kesulitan membayar cicilan paylater</option>
                  <option value="judi">Saya terkena dampak judi online / slot</option>
                  <option value="invest_readiness">Saya ingin mulai investasi, tapi masih punya utang konsumtif</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  2. Apa yang Anda rasakan secara emosional saat ini?
                </label>
                <input
                  type="text"
                  value={input.emotionalState}
                  onChange={(e) => setInput({ ...input, emotionalState: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-hidden text-slate-700"
                  placeholder="Misalnya: Takut nomor disebar, pusing tujuh keliling, pasrah..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  3. Jumlah Aplikasi Pinjaman/Paylater Aktif: <span className="text-teal-600 font-bold">{input.activeDebtsCount}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={input.activeDebtsCount}
                  onChange={(e) => setInput({ ...input, activeDebtsCount: parseInt(e.target.value) })}
                  className="w-full accent-teal-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>0 (Bebas Utang)</span>
                  <span>5</span>
                  <span>10+ (Kritis)</span>
                </div>
              </div>
            </div>

            {/* Right: Boolean Questions */}
            <div className="space-y-4 bg-slate-50/50 p-4 border border-slate-100 rounded-xl">
              <span className="text-xs font-bold text-slate-700 block mb-2">Asesmen Cepat Perilaku Keuangan:</span>
              
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={input.hasUrgentCollection}
                    onChange={(e) => setInput({ ...input, hasUrgentCollection: e.target.checked })}
                    className="mt-0.5 rounded-sm border-slate-300 text-teal-600 focus:ring-teal-500"
                  />
                  <div>
                    <span className="text-xs font-semibold text-slate-700 block">Ada Penagihan Mendesak / Kasar</span>
                    <span className="text-[10px] text-slate-500 block">Saya sedang diteror, diancam sebar data, atau didatangi kolektor lapangan.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={input.consideringNewDebt}
                    onChange={(e) => setInput({ ...input, consideringNewDebt: e.target.checked })}
                    className="mt-0.5 rounded-sm border-slate-300 text-teal-600 focus:ring-teal-500"
                  />
                  <div>
                    <span className="text-xs font-semibold text-slate-700 block">Mempertimbangkan Pinjaman Baru</span>
                    <span className="text-[10px] text-slate-500 block">Saya sedang bersiap mengajukan pinjaman di tempat lain untuk membayar tagihan ini.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={input.hasEmergencyFund}
                    onChange={(e) => setInput({ ...input, hasEmergencyFund: e.target.checked })}
                    className="mt-0.5 rounded-sm border-slate-300 text-teal-600 focus:ring-teal-500"
                  />
                  <div>
                    <span className="text-xs font-semibold text-slate-700 block">Memiliki Dana Darurat Awal</span>
                    <span className="text-[10px] text-slate-500 block">Saya memiliki simpanan dana cair minimal Rp1.000.000 di luar kebutuhan sehari-hari.</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setStep('welcome')}
              className="px-4 py-2 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-600"
            >
              Kembali
            </button>
            <button
              type="submit"
              disabled={isGenerating}
              className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold py-2.5 px-6 rounded-xl transition-all duration-200 flex items-center gap-2"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Sedang Menganalisis...</span>
                </>
              ) : (
                <span>Kirim & Jalankan Analisis JEDA</span>
              )}
            </button>
          </div>
        </form>
      )}

      {/* Result Screen */}
      {step === 'result' && result && (
        <div className="space-y-6">
          
          {/* Header Result: Risk Score & Trigger Summary */}
          <div className={`border rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 ${getRiskColor(result.riskLevel)}`}>
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${getRiskBadgeColor(result.riskLevel)}`}>
                  RISIKO: {result.riskLevel.toUpperCase()}
                </span>
                <span className="text-[10px] font-bold text-slate-500">Hasil Deteksi Sistem</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mt-2">{result.emotionalTriggerSummary}</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {result.jedaRecommendation}
              </p>
            </div>
            
            {result.riskLevel === 'Kritis' && (
              <div className="bg-rose-600 text-white p-3 rounded-lg flex items-center gap-2 shrink-0 md:max-w-xs">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <span className="text-[10px] leading-snug font-bold">
                  Butuh Bantuan Segera? Hubungi Hotline Kemenkes 119 Ext. 8 secara gratis.
                </span>
              </div>
            )}
          </div>

          {/* Escalation note if severe */}
          {result.escalationNote && (
            <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-xl p-4 flex gap-3 text-xs leading-relaxed">
              <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <p className="font-bold">Eskalasi Pendampingan Mental:</p>
                <p className="mt-0.5">{result.escalationNote}</p>
              </div>
            </div>
          )}

          {/* Tabular/Grid: 7-Day Recovery & 30-Day Stabilization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 7-Day Plan */}
            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-3">
                <span className="w-5 h-5 bg-teal-50 text-teal-600 text-xs font-black rounded-full flex items-center justify-center">7</span>
                <h4 className="text-xs font-bold text-slate-900">Rencana Pemulihan 7 Hari Pertama</h4>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                {result.sevenDayPlan.map((stepText, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <span className="text-teal-600 shrink-0 font-bold">•</span>
                    <span className="leading-relaxed">{stepText}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 30-Day Plan */}
            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-3">
                <span className="w-5 h-5 bg-teal-50 text-teal-600 text-xs font-black rounded-full flex items-center justify-center">30</span>
                <h4 className="text-xs font-bold text-slate-900">Rencana Stabilisasi 30 Hari</h4>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600">
                {result.thirtyDayPlan.map((stepText, idx) => (
                  <li key={idx} className="flex gap-2 items-start">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{stepText}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Next Action & Final Safety Notes */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Langkah Selanjutnya</span>
              <p className="text-xs font-bold text-slate-800 mt-0.5">{result.nextAction}</p>
            </div>
            
            <div className="text-[10px] text-slate-500 border-t border-slate-200/60 pt-3 leading-relaxed space-y-1">
              <p className="font-semibold text-slate-600">Catatan Kepatuhan Regulasi & Edukasi JEDA:</p>
              <p>• JEDA membantu pengguna memetakan kewajiban dan risiko agar dapat berdiskusi dengan pihak profesional/otoritas yang tepat.</p>
              <p>• Kami mencatat pinjaman ilegal sebagai risiko perlindungan konsumen untuk diarahkan ke pelaporan resmi, bukan sebagai instruksi untuk menghindari kewajiban legal.</p>
              <p>• JEDA tidak menyalurkan pinjaman dan tidak memberikan rekomendasi investasi berlisensi.</p>
              <p className="italic text-teal-600 font-semibold">Hasil simulasi ini adalah draf panduan awal untuk diskusi dan edukasi, bukan nasihat profesional.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              onClick={() => setStep('form')}
              className="px-4 py-2 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-bold text-slate-600"
            >
              Ubah Parameter Input
            </button>
            <button
              onClick={handleReset}
              className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold py-2.5 px-6 rounded-xl transition-all duration-200 flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Simulasi Ulang</span>
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
