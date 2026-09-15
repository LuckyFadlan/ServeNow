import React, { useState } from 'react';
import { COMPLIANCE_CONTROLS } from '../data/mockData';
import { maskSensitiveDataIndonesian, MaskResult } from '../utils/piiMasker';
import { 
  ShieldCheck, 
  Lock, 
  FileCode, 
  Server, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  ArrowRight,
  Database,
  Building,
  Scale,
  RefreshCw
} from 'lucide-react';

export const ComplianceMoat: React.FC = () => {
  const [sampleInput, setSampleInput] = useState<string>(
    'Halo ServeNow Bank Mega, saya ingin komplain transaksi debit ATM dengan nomor kartu 4512-8921-3829-9182 atas nama NIK 3174082201940005. Nomor HP saya 081298765432. Mohon segera dicek karena dana Rp 1.500.000 terdebet dua kali saat bayar obat di apotek.'
  );
  const [maskActive, setMaskActive] = useState<boolean>(true);
  const [humanOversightRequired, setHumanOversightRequired] = useState<boolean>(true);
  const [auditLogActive, setAuditLogActive] = useState<boolean>(true);

  const maskResult: MaskResult = maskSensitiveDataIndonesian(sampleInput);

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Pilar O: Own the Local Moat • Arsitektur Kepatuhan Regulasi
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            Lapis Kepatuhan AI: Membuka Sektor Bernilai 22,7% Pasar CRM
          </h1>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Dibangun dengan investasi <strong>14 Person-Month</strong> mengikuti 3 prinsip Tata Kelola AI Perbankan OJK 2025 dan UU PDP No. 27/2022. 
            Menjadi <em>parit pertahanan kompetitif (moat)</em> yang tidak dapat ditiru oleh vendor global (karena mengabaikan spesifikasi lokal) maupun kompetitor lokal UMKM (karena keterbatasan arsitektur keamanan tingkat lanjut).
          </p>
        </div>
      </div>

      {/* Sektor yang Terbuka & Model Bisnis */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Sektor Jasa Keuangan (BFSI)</span>
            <span className="text-blue-400 font-bold bg-blue-950 px-2 py-0.5 rounded">Porsi 22,7% CRM</span>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-white">OJK Ready</span>
            <span className="text-xs text-emerald-400 font-semibold">Tersertifikasi</span>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Audit trail 6 tahap, mandatory human-in-the-loop, dan model drift guard.
          </p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Kesehatan & RS (UU PDP)</span>
            <span className="text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded">CAGR 12,87%</span>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-white">Data Medis Aman</span>
            <span className="text-xs text-emerald-400 font-semibold">Edge Masking</span>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Penyamaran otomatis NIK, rekam medis, dan data sensitif pasien sebelum inferensi.
          </p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-emerald-500/30 bg-emerald-950/10">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Model Bisnis Tambahan (Add-On)</span>
            <span className="text-emerald-300 font-bold bg-emerald-900/60 px-2 py-0.5 rounded">High Margin</span>
          </div>
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-black text-emerald-400">Rp 6 Jt</span>
            <span className="text-xs text-slate-300">/ bulan / klien (Rp 72 Jt/thn)</span>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Menciptakan biaya berpindah (*switching cost*) tinggi setelah lolos audit bank.
          </p>
        </div>
      </div>

      {/* Interactive UU PDP & OJK Compliance Sandbox */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-md bg-blue-600/20 text-blue-400 text-xs font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Live Interactive PDP & AI Governance Sandbox
            </div>
            <h2 className="text-xl font-bold text-white">
              Simulasi Penyamaran Data Sensitif & Audit Trail AI
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Coba ketik atau ubah pesan berisikan NIK KTP, nomor kartu debit, atau nomor telepon di bawah ini.
            </p>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <button
              onClick={() => setMaskActive(!maskActive)}
              className={`px-3 py-1.5 rounded-xl font-bold transition flex items-center space-x-1.5 ${
                maskActive
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              {maskActive ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{maskActive ? 'Masking UU PDP: AKTIF' : 'Masking: NONAKTIF'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Raw Input Box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-blue-400" />
                Input Pesan Percakapan Klien (Raw Payload)
              </label>
              <button
                onClick={() => setSampleInput('Halo ServeNow Bank Mega, saya ingin komplain transaksi debit ATM dengan nomor kartu 4512-8921-3829-9182 atas nama NIK 3174082201940005. Nomor HP saya 081298765432. Mohon segera dicek karena dana Rp 1.500.000 terdebet dua kali saat bayar obat di apotek.')}
                className="text-[11px] text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" /> Reset Contoh
              </button>
            </div>
            <textarea
              value={sampleInput}
              onChange={(e) => setSampleInput(e.target.value)}
              rows={5}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-100 font-mono focus:outline-none focus:border-blue-500 leading-relaxed"
            ></textarea>

            {/* Detected Sensitive Tokens */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
              <span className="text-[11px] font-semibold text-slate-400 block mb-1.5">
                Entitas Sensitif Terdeteksi Sistem Edge Scrubber ({maskResult.detectedItems.length}):
              </span>
              <div className="flex flex-wrap gap-2">
                {maskResult.detectedItems.map((item, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-rose-950/80 text-rose-300 border border-rose-800/60 text-[11px] font-mono">
                    {item.type}: {item.original}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Processed & Masked Output Box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                Payload Setelah Melewati Edge Scrubber (Aman untuk LLM)
              </label>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800 font-semibold">
                UU PDP Compliant
              </span>
            </div>
            <div className="w-full h-[120px] bg-slate-950 border border-emerald-500/30 rounded-xl p-3.5 text-xs font-mono text-emerald-300 leading-relaxed overflow-y-auto">
              {maskActive ? maskResult.maskedText : sampleInput}
            </div>

            {/* Automated OJK Ledger & Guardrail Status */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-blue-400" />
                  Kedaulatan & Residensi Data Lokal:
                </span>
                <span className="text-emerald-400 font-mono font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Jakarta IDC Tier-IV (Non-Export)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-indigo-400" />
                  Mandatory Human-in-the-Loop:
                </span>
                <span className="text-blue-400 font-mono font-bold">
                  TERKUNCI (Wajib Otorisasi Agen Perbankan)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <FileCode className="w-3.5 h-3.5 text-amber-400" />
                  Audit Trail Hash:
                </span>
                <span className="text-slate-400 font-mono text-[10px]">
                  SHA256: 9b2d8f...3a89e (Immutable)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Core Components of Compliance Control (Slide 10) */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Enam Komponen Kontrol Tata Kelola AI OJK & UU PDP
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Standar arsitektural yang tertanam pada jalur pemrosesan, menciptakan perlindungan hukum berkelanjutan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMPLIANCE_CONTROLS.map((ctrl) => (
            <div key={ctrl.id} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-blue-400 font-bold bg-blue-950 px-2 py-0.5 rounded border border-blue-900">
                  {ctrl.code}
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  {ctrl.status}
                </span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">{ctrl.title}</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">{ctrl.description}</p>
              
              <div className="pt-2 border-t border-slate-800 text-[10px] space-y-1">
                <div className="text-slate-300">
                  <span className="text-slate-500">Penegakan Teknis: </span>
                  {ctrl.technicalEnforcement}
                </div>
                <div className="text-emerald-400 font-semibold font-mono">
                  <span className="text-slate-500 font-sans">Metrik: </span>
                  {ctrl.metrics}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
