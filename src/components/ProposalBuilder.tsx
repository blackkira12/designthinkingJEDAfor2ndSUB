import React, { useState } from 'react';
import { proposalSections } from '../data/proposalSections';
import { agents } from '../data/agents';
import { generateProposalDraft } from '../lib/generator';
import { Save, CheckCircle, AlertTriangle, User, Copy, BookOpen, Printer } from 'lucide-react';
import { appendDisclaimer } from '../lib/safety';

export const ProposalBuilder: React.FC = () => {
  const sections = proposalSections;
  const [activeSectionId, setActiveSectionId] = useState(proposalSections[0].id);
  const [saveStatus, setSaveStatus] = useState<string>('');


  const [draftContents, setDraftContents] = useState<Record<string, string>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('jeda_proposal_drafts');
      if (saved) return JSON.parse(saved);
    }
    const initial: Record<string, string> = {};
    proposalSections.forEach(s => {
      initial[s.id] = s.templateContent;
    });
    return initial;
  });


  const activeSection = sections.find(s => s.id === activeSectionId)!;
  const helperAgent = agents.find(a => a.id === activeSection.helperAgentId)!;

  const handleTextChange = (text: string) => {
    const updated = { ...draftContents, [activeSectionId]: text };
    setDraftContents(updated);
  };

  const handleGenerateTemplate = () => {
    const generated = generateProposalDraft(activeSectionId, draftContents[activeSectionId] || '');
    // Clean up disclaimer markers if regenerated
    const cleaned = generated.replace(/Draf untuk diskusi tim \(Reviewer: \w+ \w+\):\n/, '').replace(/\n\n---\n\*⚠️ DISCLAIMER:.*/g, '');
    handleTextChange(cleaned);
  };

  const handleSave = () => {
    localStorage.setItem('jeda_proposal_drafts', JSON.stringify(draftContents));
    setSaveStatus('Draf proposal berhasil disimpan secara lokal!');
    setTimeout(() => setSaveStatus(''), 3000);
  };

  const handleCopyFullProposal = () => {
    let fullText = `# PROPOSAL JEDA - HACKATHON 2026\n\n`;
    sections.forEach(s => {
      fullText += `## ${s.title}\n\n${draftContents[s.id] || ''}\n\n`;
    });
    navigator.clipboard.writeText(appendDisclaimer(fullText));
    alert("Seluruh draf proposal disalin ke clipboard!");
  };

  // Word count helper
  const getWordCount = (text: string) => {
    if (!text || text.trim() === '') return 0;
    return text.trim().split(/\s+/).length;
  };

  const currentWordCount = getWordCount(draftContents[activeSectionId] || '');
  const isOverLimit = currentWordCount > activeSection.maxWords;

  return (
    <div className="space-y-6 print:hidden">
      {/* Description Section */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex justify-between items-center flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Penyusun Proposal 2nd Submission (Proposal Builder)</h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
            Tulis dan sunting draf 20 bagian penting proposal kualifikasi tahap kedua. 
            Gunakan panduan ekspektasi juri dan bantuan Agen Ahli untuk menghasilkan fondasi paragraf secara otomatis.
          </p>
        </div>
        <div className="flex gap-2 print:hidden">
          <button
            onClick={handleSave}
            className="px-4 py-2.5 bg-teal-600 text-white text-xs font-semibold rounded-lg hover:bg-teal-700 shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Simpan Lokal</span>
          </button>
          <button
            onClick={handleCopyFullProposal}
            className="px-4 py-2.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-200 border border-slate-200 flex items-center gap-1.5 cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Salin Semua</span>
          </button>
          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-200 border border-slate-200 flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Cetak Proposal</span>
          </button>
        </div>
      </div>

      {saveStatus && (
        <div className="bg-teal-50 border border-teal-200 text-teal-800 rounded-xl p-3 text-xs flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-teal-600" />
          <span>{saveStatus}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sections Checklist Sidebar */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-4 max-h-[600px] overflow-y-auto shadow-2xs space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-2 mb-2">Daftar Bab Proposal:</span>
          {sections.map((s, idx) => {
            const wordCount = getWordCount(draftContents[s.id] || '');
            const isSectionOver = wordCount > s.maxWords;
            const hasDraft = wordCount > 0;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSectionId(s.id)}
                className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between border transition-all ${
                  activeSectionId === s.id
                    ? 'bg-teal-50 border-teal-300 text-teal-900 font-semibold'
                    : 'bg-white border-transparent text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2 truncate pr-2">
                  <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center text-[9px] shrink-0">
                    {idx + 1}
                  </span>
                  <span className="truncate">{s.title}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {hasDraft && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-sm font-medium ${
                      isSectionOver ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {wordCount}/{s.maxWords} k
                    </span>
                  )}
                  {hasDraft && !isSectionOver && (
                    <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                  )}
                  {isSectionOver && (
                    <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Section Editor */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-3 gap-4">
              <div>
                <h3 className="font-bold text-slate-900 text-lg leading-tight">{activeSection.title}</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Batas maksimum: <strong className="text-slate-600">{activeSection.maxWords} kata</strong> (Saran: Ringkas & Padat)
                </p>
              </div>
              <button
                onClick={handleGenerateTemplate}
                className="py-1.5 px-3 bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-semibold rounded-lg border border-teal-100 transition-all flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Isi Draf Template</span>
              </button>
            </div>

            {/* Judging Criteria Badge */}
            {activeSection.judgingCriteria && (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Kriteria Penilaian:</span>
                <span className="bg-teal-50 text-teal-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-teal-200/60">
                  {activeSection.judgingCriteria}
                </span>
              </div>
            )}

            {/* Judge Expectation */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs leading-normal">
              <span className="font-bold text-slate-800 uppercase block mb-1">Ekspektasi Juri (Fokus Evaluasi):</span>
              <p className="text-slate-600">{activeSection.judgeFocus}</p>
            </div>

            {/* Helper Agent Bio */}
            <div className="flex items-center gap-3 bg-teal-50/20 p-3 rounded-xl border border-teal-100/40 text-xs">
              <div className="p-1.5 rounded-full bg-teal-600 text-white font-bold shrink-0">
                <User className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-slate-700">
                  <span className="font-semibold">Konsultan Agen Terkait:</span> {helperAgent.name} ({helperAgent.role})
                </p>
                <p className="text-slate-500 italic mt-0.5">Keahlian: {helperAgent.skills.slice(0, 2).join(', ')}</p>
              </div>
            </div>

            {/* Editor Textarea */}
            <div className="space-y-2">
              <textarea
                value={draftContents[activeSectionId] || ''}
                onChange={(e) => handleTextChange(e.target.value)}
                rows={10}
                className="w-full p-4 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-600 leading-relaxed"
                placeholder="Tulis draf proposal Anda di sini..."
              />
            </div>

            {/* Word Count Indicator and Validation alerts */}
            <div className="flex items-center justify-between text-xs border-t border-slate-100 pt-3">
              <div className="flex items-center gap-1">
                {isOverLimit ? (
                  <span className="text-red-600 font-semibold flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" /> Over limit! {currentWordCount} / {activeSection.maxWords} kata
                  </span>
                ) : (
                  <span className="text-slate-500">
                    Kapasitas kata: <strong className="text-slate-700">{currentWordCount} / {activeSection.maxWords}</strong>
                  </span>
                )}
              </div>
              <span className="text-[10px] text-slate-400 italic">
                *Simpan draf secara berkala menggunakan tombol simpan lokal.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Print-only Proposal View */}
      <div className="hidden print:block font-serif text-slate-900 leading-relaxed text-sm max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2 border-b border-slate-300 pb-4 mb-6">
          <h1 className="text-2xl font-bold uppercase">Proposal JEDA - PIDI Hackathon 2026</h1>
          <p className="text-xs italic text-slate-500">Platform Resiliensi Keuangan & Kontrol Perilaku Finansial Hulu</p>
        </div>
        {sections.map((s, idx) => (
          <div key={s.id} className="space-y-2 break-inside-avoid pt-2">
            <h2 className="text-sm font-bold border-b border-slate-200 pb-1 text-slate-900">{idx + 1}. {s.title}</h2>
            <p className="whitespace-pre-wrap text-justify text-xs text-slate-700 leading-relaxed">{draftContents[s.id] || s.templateContent}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProposalBuilder;
