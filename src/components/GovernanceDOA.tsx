import React, { useState } from 'react';
import { DOA_RULES, INITIAL_APPROVAL_REQUESTS } from '../data/mockData';
import { DOAItem, ApprovalRequest } from '../types';
import { 
  GitBranch, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Send, 
  TrendingDown, 
  Layers,
  ArrowRight,
  UserCheck
} from 'lucide-react';

export const GovernanceDOA: React.FC = () => {
  const [requests, setRequests] = useState<ApprovalRequest[]>(INITIAL_APPROVAL_REQUESTS);
  const [selectedRuleCategory, setSelectedRuleCategory] = useState<string>(DOA_RULES[0].category);

  // Form states for test simulation
  const [applicantName, setApplicantName] = useState('Bambang Sudirgo');
  const [requestType, setRequestType] = useState<ApprovalRequest['type']>('diskon');
  const [requestTitle, setRequestTitle] = useState('Diskon Pelanggan Baru PT Semen Nusantara');
  const [inputValue, setInputValue] = useState<number>(14);
  const [justification, setJustification] = useState('Komitmen kontrak multi-tahun 36 bulan dengan 65 user.');

  // Calculate required approver based on DOA Matrix logic
  const calculateApprover = (type: ApprovalRequest['type'], value: number): 'Head' | 'Direktur' | 'Direktur Utama' => {
    switch (type) {
      case 'diskon': // <=10% Head, 10-20% Direktur, >20% Dirut
        if (value <= 10) return 'Head';
        if (value <= 20) return 'Direktur';
        return 'Direktur Utama';
      case 'pengeluaran': // <=10jt Head, 10-50jt Direktur, >50jt Dirut
        if (value <= 10) return 'Head';
        if (value <= 50) return 'Direktur';
        return 'Direktur Utama';
      case 'perubahan_lingkup': // <=5% Head, 5-15% Direktur, >15% Dirut
        if (value <= 5) return 'Head';
        if (value <= 15) return 'Direktur';
        return 'Direktur Utama';
      case 'proposal': // <=300jt Head, 300-1000jt Direktur, >1000jt Dirut
        if (value <= 300) return 'Head';
        if (value <= 1000) return 'Direktur';
        return 'Direktur Utama';
      default:
        return 'Head';
    }
  };

  const calculatedApprover = calculateApprover(requestType, inputValue);

  const handleCreateRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const newReq: ApprovalRequest = {
      id: `REQ-${Date.now().toString().slice(-4)}`,
      applicant: applicantName,
      role: 'Operations Lead',
      type: requestType,
      title: requestTitle,
      nominalValue: inputValue,
      unit: requestType === 'diskon' || requestType === 'perubahan_lingkup' ? '%' : 'Juta IDR',
      assignedApprover: calculatedApprover,
      status: 'Pending',
      timestamp: 'Baru saja',
      justification: justification
    };

    setRequests([newReq, ...requests]);
    alert(`Permintaan berhasil disimulasikan! Berdasarkan DOA Matrix bernominal, permintaan ini dialihkan ke: ${calculatedApprover}`);
  };

  const handleApprove = (id: string) => {
    setRequests(requests.map(r => r.id === id ? { ...r, status: 'Approved' } : r));
  };

  const handleReject = (id: string) => {
    setRequests(requests.map(r => r.id === id ? { ...r, status: 'Rejected' } : r));
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <GitBranch className="w-3.5 h-3.5 text-blue-400" />
            Pilar S & E: Structure & Empower
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            Tata Kelola, Matriks DOA & Rekayasa Lapisan Manajerial
          </h1>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Menghilangkan rangkap 18 fungsi pada 3 direktur dengan membentuk lapisan manajemen menengah (6 Lead Internal + 6 Head). 
            Dilengkapi dengan <strong>DOA Matrix bernominal</strong> dan <strong>Delegation Ladder (L0–L4)</strong> agar keputusan operasional tuntas di level Head dan eskalasi direksi ditekan hingga di bawah 10%.
          </p>
        </div>
      </div>

      {/* Span of Control & Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Span of Control Direksi</span>
            <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">Riset Ideal: 5–8</span>
          </div>
          <div className="flex items-baseline space-x-3">
            <span className="text-3xl font-black text-rose-400">26:1</span>
            <ArrowRight className="w-5 h-5 text-slate-500" />
            <span className="text-3xl font-black text-emerald-400">8,3:1</span>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Tercapai dalam 2 bulan lewat promosi 6 Lead Internal dengan anggaran efisien <strong>Rp 150 Juta/tahun</strong>.
          </p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Director Escalation Rate</span>
            <span className="text-blue-400 font-bold bg-blue-950/60 px-2 py-0.5 rounded">KPI Target: &lt;10%</span>
          </div>
          <div className="flex items-baseline space-x-3">
            <span className="text-3xl font-black text-rose-400">100%</span>
            <ArrowRight className="w-5 h-5 text-slate-500" />
            <span className="text-3xl font-black text-blue-400">8,4%</span>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Hanya keputusan bernominal tinggi atau krisis severity 1 &gt;4 jam yang naik ke meja direksi.
          </p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Waktu Strategis Direktur</span>
            <span className="text-indigo-400 font-bold bg-indigo-950/60 px-2 py-0.5 rounded">Bebas Bottleneck</span>
          </div>
          <div className="flex items-baseline space-x-3">
            <span className="text-3xl font-black text-rose-400">15%</span>
            <ArrowRight className="w-5 h-5 text-slate-500" />
            <span className="text-3xl font-black text-emerald-400">&gt; 70%</span>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Direksi kembali fokus pada ekspansi pasar, aliansi perbankan, dan roadmap inovasi.
          </p>
        </div>
      </div>

      {/* Interactive DOA Matrix Explorer */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-md bg-blue-600/20 text-blue-400 text-xs font-semibold mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Batas Wewenang Bernominal (Slide 6)
            </div>
            <h2 className="text-xl font-bold text-white">
              Katalog Batas Otoritas Finansial & Operasional (DOA Matrix)
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Batas nominal membatasi kerugian maksimum bila keputusan keliru tanpa mematikan kecepatan eksekusi tim.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] font-semibold bg-slate-900/50">
                <th className="py-3 px-4">Jenis Keputusan</th>
                <th className="py-3 px-4 text-blue-300">Wewenang Head (Level 1)</th>
                <th className="py-3 px-4 text-indigo-300">Wewenang Direktur (Level 2)</th>
                <th className="py-3 px-4 text-emerald-300">Wewenang Direktur Utama</th>
                <th className="py-3 px-4">Rasional Pengendalian Risiko</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-medium">
              {DOA_RULES.map((rule) => (
                <tr key={rule.id} className="hover:bg-slate-900/30 transition">
                  <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    {rule.category}
                  </td>
                  <td className="py-3.5 px-4 text-blue-400 font-bold bg-blue-950/10">{rule.headLimit}</td>
                  <td className="py-3.5 px-4 text-indigo-300 font-bold bg-indigo-950/10">{rule.directorLimit}</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-bold bg-emerald-950/10">{rule.dirutLimit}</td>
                  <td className="py-3.5 px-4 text-slate-400 text-[11px] max-w-xs leading-relaxed">{rule.rationale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Live Approval Simulation & Queue Center */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Simulator Form */}
        <div className="lg:col-span-5 glass-card rounded-2xl p-6 border border-slate-800">
          <div className="flex items-center space-x-2 text-sm font-bold text-white mb-4">
            <Send className="w-4 h-4 text-blue-400" />
            <h3>Simulator Pengajuan Otoritas DOA</h3>
          </div>
          <p className="text-xs text-slate-400 mb-4">
            Coba masukkan nominal keputusan untuk melihat perutean otomatis ke tingkat wewenang yang tepat.
          </p>

          <form onSubmit={handleCreateRequest} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Nama Pemohon</label>
              <input
                type="text"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Kategori Keputusan</label>
              <select
                value={requestType}
                onChange={(e) => {
                  const val = e.target.value as ApprovalRequest['type'];
                  setRequestType(val);
                  if (val === 'diskon') setInputValue(12);
                  if (val === 'pengeluaran') setInputValue(35);
                  if (val === 'perubahan_lingkup') setInputValue(8);
                  if (val === 'proposal') setInputValue(650);
                }}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-blue-500"
              >
                <option value="diskon">Diskon Harga Penjualan (%)</option>
                <option value="pengeluaran">Pengeluaran Operasional (Juta IDR)</option>
                <option value="perubahan_lingkup">Perubahan Lingkup Proyek (%)</option>
                <option value="proposal">Persetujuan Nilai Proposal (Juta IDR)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Judul / Perihal</label>
              <input
                type="text"
                value={requestTitle}
                onChange={(e) => setRequestTitle(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Besaran Nilai: {requestType === 'diskon' || requestType === 'perubahan_lingkup' ? `${inputValue}%` : `Rp ${inputValue} Juta`}
              </label>
              <input
                type="number"
                min="1"
                max={requestType === 'proposal' ? 2500 : 100}
                value={inputValue}
                onChange={(e) => setInputValue(parseFloat(e.target.value) || 0)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-100 font-mono font-bold focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Calculated Route Preview */}
            <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-500/40 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-blue-300 uppercase tracking-wider font-semibold block">Rute Otorisasi Berdasarkan DOA:</span>
                <span className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Wajib Disetujui: <strong className="text-blue-300">{calculatedApprover}</strong>
                </span>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-blue-900/60 text-blue-200 border border-blue-700/50 font-mono">
                Automated Route
              </span>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Justifikasi Bisnis</label>
              <textarea
                value={justification}
                onChange={(e) => setJustification(e.target.value)}
                rows={2}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-slate-100 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/30"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Simulasikan Kirim Pengajuan</span>
            </button>
          </form>
        </div>

        {/* Live Approval Queue */}
        <div className="lg:col-span-7 glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <h3 className="text-sm font-bold text-white">Antrean Persetujuan & Log Keputusan</h3>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                {requests.filter(r => r.status === 'Pending').length} Permintaan Menunggu
              </span>
            </div>

            <div className="space-y-3 max-h-[440px] overflow-y-auto pr-1">
              {requests.map((req) => (
                <div
                  key={req.id}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-950 px-1.5 py-0.5 rounded border border-blue-900">
                          {req.id}
                        </span>
                        <span className="text-xs font-bold text-white">{req.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Pemohon: <span className="text-slate-200">{req.applicant}</span> ({req.role}) • {req.timestamp}
                      </p>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border shrink-0 ${
                      req.status === 'Approved'
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/50'
                        : req.status === 'Rejected'
                        ? 'bg-rose-950/80 text-rose-300 border-rose-700/50'
                        : 'bg-amber-950/80 text-amber-300 border-amber-700/50 animate-pulse'
                    }`}>
                      {req.status}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Nilai Diajukan:</span>
                      <strong className="text-white font-mono">
                        {req.nominalValue} {req.unit}
                      </strong>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-400 block text-[10px]">Tingkat Approver:</span>
                      <strong className="text-indigo-400 font-semibold">{req.assignedApprover}</strong>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 italic">
                    "{req.justification}"
                  </p>

                  {/* Actions */}
                  {req.status === 'Pending' && (
                    <div className="flex items-center justify-end space-x-2 pt-2 border-t border-slate-800/60">
                      <button
                        onClick={() => handleReject(req.id)}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-rose-900/60 text-slate-300 hover:text-rose-200 border border-slate-700 transition"
                      >
                        Tolak
                      </button>
                      <button
                        onClick={() => handleApprove(req.id)}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        Setujui (Otorisasi)
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
            <span>Delegation Ladder: L0 (Lapor) &rarr; L1 (Usul) &rarr; L2 (Putus & Lapor) &rarr; L4 (Otonom)</span>
            <span className="text-emerald-400 font-semibold">TMO Audit Log Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};
