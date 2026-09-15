import React from 'react';
import { X, Printer, Download, CheckCircle2, AlertTriangle, Layers, FileText } from 'lucide-react';

interface ExecutiveReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveReportModal: React.FC<ExecutiveReportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Executive Briefing & Strategic Solution Dossier</h3>
              <p className="text-xs text-slate-400">COMPFEST Business IT Case &bull; ServeNow Technologies</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
              title="Print Document"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Content / Printable Document */}
        <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-xs text-slate-300 leading-relaxed font-sans">
          {/* Document Title Header */}
          <div className="border-b border-slate-800 pb-4 text-center">
            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-800">
              SOLUSI KOMPREHENSIF STUDI KASUS BISNIS IT
            </span>
            <h1 className="text-2xl font-black text-white mt-3">
              Pelanggan ke-120, Tanpa Karyawan ke-223
            </h1>
            <p className="text-xs text-slate-400 mt-1 max-w-xl mx-auto">
              Memutus Hubungan Linear Antara Pertumbuhan Pelanggan dan Pertumbuhan Biaya Melalui S.E.R.V.E. the Engine & N.O.W. the Market
            </p>
          </div>

          {/* Section 1: Executive Summary */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
              1. Ringkasan Eksekutif (Executive Summary)
            </h4>
            <p>
              ServeNow Technologies menghadapi <strong>paradoks pertumbuhan</strong>: selama 2 tahun terakhir omset melesat +93% dari Rp8,2 Miliar ke Rp15,8 Miliar, namun laba per karyawan anjlok -44,5% dan net margin tergerus dari 5,0% ke 2,5%. 
              Penyebab fundamentalnya adalah <strong>rasio karyawan per pelanggan yang membeku di angka 1,86</strong>. Apabila ServeNow mengejar target 120 pelanggan tanpa transformasi sistem, perusahaan akan menampung 223 karyawan dengan beban gaji Rp42,8 Miliar (melampaui revenue) dan menderita kerugian bersih <strong>-Rp7,3 Miliar</strong>.
            </p>
            <p>
              Solusi yang dihadirkan adalah transformasi menyeluruh dua sayap: <strong>S.E.R.V.E. the Engine</strong> untuk merekayasa keunggulan operasional internal, dan <strong>N.O.W. the Market</strong> untuk menguasai pangsa pasar dan parit persaingan regulasi lokal. Solusi ini berhasil memotong rasio karyawan/pelanggan ke <strong>1,15</strong> (hanya 138 staf), melipatgandakan revenue ke <strong>Rp45 Miliar</strong> dengan net margin <strong>17,5%</strong> (laba bersih Rp7,86 Miliar, melonjak 20 kali lipat).
            </p>
          </div>

          {/* Section 2: Priority Problem & Root Cause Analysis */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
              2. Analisis Masalah Prioritas & Rantai Kausalitas
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-bold text-rose-400 block mb-1">Span of Control 26:1</span>
                <p className="text-[11px] text-slate-400">
                  Ketiadaan manajemen menengah membuat 3 direksi merangkap 18 fungsi teknis/operasional, menyebabkan kelumpuhan pengambilan keputusan harian.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-bold text-rose-400 block mb-1">Ketidakdisiplinan Berbiaya Rp811 Jt</span>
                <p className="text-[11px] text-slate-400">
                  Tidak adanya kaitan antara absensi, target, dan kualitas menghasilkan 43 keluhan kritis per tahun yang menghabiskan biaya pemadaman Rp774 Juta.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-bold text-rose-400 block mb-1">Implementasi Molor 19 Minggu</span>
                <p className="text-[11px] text-slate-400">
                  Kustomisasi ad-hoc tanpa batas nominal memicu 70% churn B2B SaaS terjadi pada fase onboarding 90 hari pertama (churn tahunan mencapai 16,7%).
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Strategic Solution Architecture (SERVE & NOW) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
              3. Kerangka Kerja Solusi: S.E.R.V.E. & N.O.W.
            </h4>
            
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-bold text-white block mb-0.5">S.E.R.V.E. — Memperbaiki Mesin Internal:</span>
                <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-400">
                  <li><strong>Structure:</strong> Promosi 6 Lead internal dalam 2 bulan (biaya Rp150 jt) memangkas span of control dari 26:1 ke 8,3:1; dilanjutkan perekrutan 6 Head bertahap.</li>
                  <li><strong>Empower:</strong> Pengesahan Matriks DOA bernominal (Diskon &le;10% Head, OPEX &le;Rp10 jt Head) dan Delegation Ladder (L0–L4) menurunkan eskalasi direksi ke &lt;10%.</li>
                  <li><strong>Routinize:</strong> 8 SOP Prioritas tertanam di software kerja, 3 Paket Implementasi baku (Standard, Advanced, Enterprise) memangkas delivery dari 19 ke 8 minggu.</li>
                  <li><strong>Visualize:</strong> ServeNow OS mengintegrasikan 5 sistem rekaman (CRM, Tiket, Delivery, HRIS, Knowledge) ke dalam 1 tampilan dasbor 3 tingkat.</li>
                  <li><strong>Evaluate:</strong> Scorecard 4 Dimensi berbobot (Output 40%, Kualitas 30%, Disiplin 20%, Dev 10%) dengan audit 7 kategori akar masalah lembur.</li>
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-bold text-white block mb-0.5">N.O.W. — Memenangkan Pasar:</span>
                <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-400">
                  <li><strong>Nail Reliability:</strong> Klasifikasi tiket otomatis, CSAT real-time, menaikkan SLA dari 78% ke 96% dan menekan keluhan kritis dari 43 ke &le;4/kuartal.</li>
                  <li><strong>Own the Local Moat:</strong> Lapis Kepatuhan AI (14 PM) berstandar Tata Kelola AI Perbankan OJK 2025 & UU PDP No. 27/2022 (Data Masking, Jejak Audit SHA256, Residensi Server Jakarta). Membuka sektor BFSI bernilai 22,7% pasar CRM dengan add-on Rp6 jt/bln.</li>
                  <li><strong>Widen the Reach:</strong> Pipeline 8 tahap terpusat, pemisahan peran SDR dan AE (kuota 6,5 deal/thn), serta mitra regional luar Jabodetabek (target &ge;40% porsi omset).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4: Target Verification Table */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
              4. Rekapitulasi Pembuktian Finansial & Target
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[11px] border-collapse bg-slate-950 rounded-xl overflow-hidden">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 bg-slate-900/60">
                    <th className="py-2.5 px-3">Metrik Transformasi</th>
                    <th className="py-2.5 px-3">Kondisi Awal (Th.3)</th>
                    <th className="py-2.5 px-3 text-rose-400">Status Quo 120 Klien</th>
                    <th className="py-2.5 px-3 text-emerald-400 font-bold">Target Model S.E.R.V.E</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-medium">
                  <tr>
                    <td className="py-2 px-3 text-white">Pendapatan (Revenue)</td>
                    <td className="py-2 px-3">Rp 15,8 Miliar</td>
                    <td className="py-2 px-3">Rp 45,0 Miliar</td>
                    <td className="py-2 px-3 font-bold text-emerald-400">Rp 45,0 Miliar</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-white">Rasio Karyawan / Pelanggan</td>
                    <td className="py-2 px-3">1,86 (78 staf)</td>
                    <td className="py-2 px-3 text-rose-400">1,86 (223 staf)</td>
                    <td className="py-2 px-3 font-bold text-emerald-400">1,15 (138 staf)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-white">Beban Gaji SDM</td>
                    <td className="py-2 px-3">Rp 11,3 Miliar</td>
                    <td className="py-2 px-3 text-rose-400">Rp 42,8 Miliar</td>
                    <td className="py-2 px-3 font-bold text-emerald-400">Rp 26,5 Miliar</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-white">Laba Bersih (Net Profit)</td>
                    <td className="py-2 px-3">Rp 395 Juta (2,5%)</td>
                    <td className="py-2 px-3 text-rose-400 font-bold">-Rp 7,3 Miliar (-10,5%)</td>
                    <td className="py-2 px-3 font-bold text-emerald-400">Rp 7,86 Miliar (17,5%)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-white">Durasi Delivery</td>
                    <td className="py-2 px-3">19 Minggu</td>
                    <td className="py-2 px-3 text-rose-400">19 Minggu (Stagnan)</td>
                    <td className="py-2 px-3 font-bold text-emerald-400">8 Minggu</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-white">Pencapaian SLA</td>
                    <td className="py-2 px-3">78%</td>
                    <td className="py-2 px-3">78%</td>
                    <td className="py-2 px-3 font-bold text-emerald-400">&ge; 96%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-white">Tingkat Churn</td>
                    <td className="py-2 px-3">16,7%</td>
                    <td className="py-2 px-3">16,7%</td>
                    <td className="py-2 px-3 font-bold text-emerald-400">&lt; 5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/80">
          <span className="text-[11px] text-slate-400">
            ServeNow OS Governance Framework &bull; PT ServeNow Technologies
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition shadow-md shadow-blue-600/25"
          >
            Tutup Ringkasan
          </button>
        </div>
      </div>
    </div>
  );
};
