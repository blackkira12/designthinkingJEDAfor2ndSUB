"use client";

import React, { useState, useRef } from 'react';
import { surveyMetrics, mainSegments, topPainPoints, topTriggers, wantedFeatures, surveyThemeClusters, insightToFeatureMapping } from '../data/surveyMockData';
import { parseCSV, analyzeSurveyData, generateSampleCSVString } from '../lib/surveyParser';
import { BarChart3, AlertTriangle, ShieldCheck, Upload, RefreshCw, Download, FileSpreadsheet, Check } from 'lucide-react';

export default function SurveyInsightDashboard() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const defaultState = {
    metrics: {
      totalResponden: surveyMetrics.totalResponden,
      pmfSignal: surveyMetrics.pmfSignal,
      willingnessToPay: surveyMetrics.willingnessToPay,
      privacyNotes: "72% responden khawatir data kontak pribadi disalahgunakan oleh penagih."
    },
    segments: mainSegments,
    painPoints: topPainPoints,
    triggers: topTriggers,
    wantedFeatures: wantedFeatures,
    themeClusters: surveyThemeClusters,
    source: 'Simulasi Bawaan JEDA (Mock Data)'
  };

  const [surveyData, setSurveyData] = useState(defaultState);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleCSVParse = (csvText: string, fileName: string) => {
    try {
      const parsedRows = parseCSV(csvText);
      const analysis = analyzeSurveyData(parsedRows);
      
      if (!analysis) {
        setUploadError("File CSV kosong atau format baris data tidak terdeteksi.");
        return;
      }

      setSurveyData({
        metrics: analysis.metrics,
        segments: analysis.segments,
        painPoints: analysis.painPoints,
        triggers: analysis.triggers,
        wantedFeatures: analysis.wantedFeatures,
        themeClusters: analysis.themeClusters,
        source: `File CSV Diunggah: ${fileName}`
      });
      
      setSuccessMsg(`Berhasil mengimpor ${analysis.metrics.totalResponden} baris responden!`);
      setUploadError(null);
      
      setTimeout(() => setSuccessMsg(null), 4000);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Format tidak dikenali';
      setUploadError(`Gagal membaca berkas CSV: ${errorMessage}`);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (evt) => {
      const text = evt.target?.result as string;
      handleCSVParse(text, file.name);
    };
    reader.readAsText(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === "text/csv") {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const text = evt.target?.result as string;
        handleCSVParse(text, file.name);
      };
      reader.readAsText(file);
    } else {
      setUploadError("Harap unggah file dengan format CSV (.csv) saja.");
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleDownloadTemplate = () => {
    const csvContent = generateSampleCSVString();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "jeda_survey_template.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    setSurveyData(defaultState);
    setUploadError(null);
    setSuccessMsg(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs max-w-4xl mx-auto space-y-8 print:border-none print:shadow-none">
      
      {/* Header */}
      <div className="border-b border-slate-100 pb-4 print:pb-2">
        <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-teal-600" />
          <span>Survey Insight Dashboard (Simulasi Validasi Pasar)</span>
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Analisis hasil survei kebutuhan pengguna kelas retail rentan Indonesia mengenai stres keuangan, pinjol, judi online, dan kesiapan investasi.
        </p>
      </div>

      {/* CSV Controls & Privacy Warnings */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 print:hidden">
        
        {/* Upload Box */}
        <div className="md:col-span-8 space-y-3">
          <label className="block text-xs font-bold text-slate-700">Unggah Data Kuesioner (Google Form CSV)</label>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={triggerFileInput}
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-2 ${
              isDragOver 
                ? 'border-teal-500 bg-teal-50/30' 
                : 'border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50'
            }`}
          >
            <Upload className="w-8 h-8 text-slate-400" />
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-700">Tarik & Lepas file CSV di sini, atau klik untuk memilih file</p>
              <p className="text-[10px] text-slate-400">Hanya menerima format file .csv (Pemisah Koma)</p>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".csv"
              className="hidden"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-between items-center text-[10px]">
            <button
              onClick={handleDownloadTemplate}
              className="text-teal-600 hover:text-teal-700 font-bold flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" /> Unduh Template CSV Sampel
            </button>
            
            {surveyData.source !== defaultState.source && (
              <button
                onClick={handleReset}
                className="text-slate-500 hover:text-slate-700 font-bold flex items-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Reset ke Data Bawaan
              </button>
            )}
          </div>
        </div>

        {/* Warning Box */}
        <div className="md:col-span-4 bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 flex gap-3 text-xs leading-relaxed text-amber-800">
          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-amber-950">Kontrol Privasi Data & Anonimitas:</p>
            <p className="text-[10.5px]">
              Harap hapus atau samarkan kolom identitas pribadi sensitif seperti <strong>nama lengkap, alamat email, nomor telepon, KTP</strong>, atau media dari berkas CSV Anda sebelum diunggah demi mematuhi UU PDP.
            </p>
            <p className="text-[9.5px] italic text-amber-900 border-t border-amber-200/50 pt-1.5 mt-2">
              JEDA memproses berkas CSV secara lokal sepenuhnya di dalam peramban Anda. Tidak ada data yang dikirimkan ke server luar.
            </p>
          </div>
        </div>

      </div>

      {/* Notifications */}
      {uploadError && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-3 text-xs flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <span>{uploadError}</span>
        </div>
      )}

      {successMsg && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl p-3 text-xs flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Source Info Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg py-2 px-4 flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>Sumber Data Aktif: <strong className="text-slate-800">{surveyData.source}</strong></span>
        <span className="text-[10px] uppercase font-bold text-slate-400">Local Parsing</span>
      </div>

      {/* Top Level Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Total Responden Terbaca</span>
          <div className="text-2xl font-black text-slate-900 mt-1 flex items-center gap-2">
            <FileSpreadsheet className="w-6 h-6 text-teal-600 shrink-0" />
            <span>{surveyData.metrics.totalResponden} orang</span>
          </div>
          <p className="text-[10px] text-slate-500 mt-1">Ukuran sampel dari CSV / kuesioner.</p>
        </div>

        <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Product-Market Fit (PMF) Signal</span>
          <div className="text-xs font-semibold text-slate-800 mt-1.5 leading-snug">{surveyData.metrics.pmfSignal}</div>
        </div>

        <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/50">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Kelayakan Model Bisnis</span>
          <div className="text-xs font-semibold text-slate-800 mt-1.5 leading-snug">{surveyData.metrics.willingnessToPay}</div>
        </div>

      </div>

      {/* 2-Column Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* User Segments */}
        <div className="border border-slate-200 rounded-xl p-4 space-y-4">
          <span className="text-xs font-bold text-slate-700 block border-b border-slate-100 pb-2">Segmentasi Responden Pengguna</span>
          <div className="space-y-3">
            {surveyData.segments.map((segment, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-800">{segment.label}</span>
                  <span className="font-bold text-teal-600">{segment.value}</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-teal-600 h-full transition-all duration-500" style={{ width: segment.value }}></div>
                </div>
                <p className="text-[10px] text-slate-400">{segment.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pain Points */}
        <div className="border border-slate-200 rounded-xl p-4 space-y-4">
          <span className="text-xs font-bold text-slate-700 block border-b border-slate-100 pb-2">Titik Masalah Utama (Top Pain Points)</span>
          <div className="space-y-3">
            {surveyData.painPoints.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-800">{item.label}</span>
                  <span className="font-bold text-rose-600">{item.value}</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full transition-all duration-500" style={{ width: item.value }}></div>
                </div>
                <p className="text-[10px] text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Top Triggers */}
        <div className="border border-slate-200 rounded-xl p-4 space-y-4">
          <span className="text-xs font-bold text-slate-700 block border-b border-slate-100 pb-2">Pemicu Keputusan Keuangan Impulsif</span>
          <div className="space-y-3">
            {surveyData.triggers.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-800">{item.label}</span>
                  <span className="font-bold text-amber-600">{item.value}</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full transition-all duration-500" style={{ width: item.value }}></div>
                </div>
                <p className="text-[10px] text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Wanted Features */}
        <div className="border border-slate-200 rounded-xl p-4 space-y-4">
          <span className="text-xs font-bold text-slate-700 block border-b border-slate-100 pb-2">Fitur Paling Diinginkan Responden</span>
          <div className="space-y-3">
            {surveyData.wantedFeatures.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-800">{item.label}</span>
                  <span className="font-bold text-emerald-600">{item.value}</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full transition-all duration-500" style={{ width: item.value }}></div>
                </div>
                <p className="text-[10px] text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Theme Clusters */}
      <div className="border border-slate-200 rounded-xl p-5 bg-slate-50/50 space-y-4">
        <span className="text-xs font-bold text-slate-700 block">Kluster Tema Masalah Terbuka & Solusi Fitur JEDA</span>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {surveyData.themeClusters.map((cluster, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-lg p-3 space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-800 leading-tight">{cluster.theme}</span>
                <span className="text-xs font-bold text-teal-600 shrink-0 ml-2">{cluster.percentage}%</span>
              </div>
              <p className="text-[10px] text-slate-500">
                Solusi JEDA: <span className="font-semibold text-slate-700">{cluster.featureSolution}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Insight-to-Feature Mapping Table */}
      <div className="space-y-3 print:break-inside-avoid">
        <span className="text-xs font-bold text-slate-700 block">Pemetaan Masalah Pengguna ke Solusi Desain JEDA</span>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-200 text-xs">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold text-left">
                <th className="p-2.5 border border-slate-200">Akar Pemicu / Kecemasan</th>
                <th className="p-2.5 border border-slate-200">Solusi Fitur JEDA</th>
                <th className="p-2.5 border border-slate-200">Mekanisme Kerja Desain</th>
              </tr>
            </thead>
            <tbody className="text-slate-600 divide-y divide-slate-200">
              {insightToFeatureMapping.map((map, idx) => (
                <tr key={idx} className="hover:bg-slate-50/55">
                  <td className="p-2.5 border border-slate-200 font-medium text-slate-800">{map.trigger}</td>
                  <td className="p-2.5 border border-slate-200 text-teal-700 font-semibold">{map.feature}</td>
                  <td className="p-2.5 border border-slate-200 leading-relaxed text-[11px]">{map.explanation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 flex gap-3 text-xs leading-relaxed text-slate-700">
        <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
        <div>
          <p className="font-bold text-teal-900">Implikasi Desain:</p>
          <p className="mt-0.5">
            Hasil kuesioner memvalidasi arah pengembangan JEDA: Intervensi hulu penundaan keputusan (Impulse Pause) dan visualisasi pemetaan kewajiban (Debt Priority Map) terbukti menjadi solusi yang paling dibutuhkan oleh target audiens sebelum mereka dapat distabilkan menjadi investor ritel baru.
          </p>
        </div>
      </div>

    </div>
  );
}
