import React, { useState } from 'react';
import { 
  HISTORICAL_FINANCIALS, 
  TRANSFORMATION_TARGETS 
} from '../data/mockData';
import { calculateFinancialScenario } from '../utils/financialCalculators';
import { 
  TrendingUp, 
  Users, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldAlert, 
  Clock, 
  Target,
  Sparkles,
  BarChart3,
  Calendar,
  Layers,
  ChevronRight,
  Info
} from 'lucide-react';

export const ExecutiveCockpit: React.FC = () => {
  // State for interactive ratio slider (default is 1.15 target)
  const [currentRatio, setCurrentRatio] = useState<number>(1.15);
  const [activeRoadmapPhase, setActiveRoadmapPhase] = useState<number>(1);

  const simulation = calculateFinancialScenario(currentRatio, 120, 45.0);

  const roadmapPhases = [
    {
      phase: 1,
      title: 'Fase 1: Ukur (Bulan 1–3)',
      tagline: 'Membangun Lapisan Manajerial & Baseline',
      focus: 'Tunjuk 6 Lead Internal, Sahkan RACI + DOA, Rekrut TMO, Audit 42 implementasi masa lalu, Pasang CRM 8 tahap.',
      deliverable: 'Seluruh KPI punya baseline terukur. Span of Control turun dari 26:1 ke 8,3:1.',
      gate: 'Titik Evaluasi Bulan 6: SLA ≥ 85%, Pilot implementasi ≤ 14 mgg. Bila meleset: tunda ekspansi sales 1 kuartal.'
    },
    {
      phase: 2,
      title: 'Fase 2: Standarisasi (Bulan 4–6)',
      tagline: 'Produktivisasi Layanan & 8 SOP Kunci',
      focus: 'Rilis 8 SOP Prioritas, Terbitkan 3 Paket Implementasi terstandar, Bangun Template Industri (Retail, BFSI), Mulai ServeNow OS Lapis 1 & 2.',
      deliverable: 'Durasi implementasi pangkas ke 12–14 mgg, SLA tembus 88%, 2 Head baru direkrut.',
      gate: 'Audit konsistensi proses & uji integrasi konektor siap pakai.'
    },
    {
      phase: 3,
      title: 'Fase 3: Sistematisasi (Bulan 7–12)',
      tagline: 'Penetapan Budaya Kinerja & Peluncuran AI Compliance',
      focus: 'Scorecard 4 Dimensi berjalan penuh, Penegakan Working Agreement (Core Hours 10-16 WIB), Rilis Lapis Kepatuhan AI (UU PDP & OJK).',
      deliverable: 'SLA 92%, Churn ditekan ke <14%, implementasi 8–10 minggu, Customer Success mandiri.',
      gate: 'Titik Evaluasi Bulan 12: Rasio ≤ 1,55, Churn ≤ 14%. Bila rasio > 1,55, turunkan target dari 120 ke 100 klien.'
    },
    {
      phase: 4,
      title: 'Fase 4: Skala (Tahun 2–3 / Bulan 13–36)',
      tagline: 'Dominasi Pasar Luar Jabodetabek & Sektor Regulasi',
      focus: 'Penetrasi luar Jabodetabek (Target ≥40%), Penetrasi BFSI & Rumah Sakit berlisensi kepatuhan AI, Otomasi penuh ticket classification.',
      deliverable: '120 pelanggan aktif, Revenue Rp45 M, ARR Rp32 M, Margin 17,5%, Churn <5%.',
      gate: 'Titik Evaluasi Bulan 18: Lapis Kepatuhan AI aktif di ≥3 bank/RS tier 1.'
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner: Core Transformation Thesis */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/60 via-slate-900/90 to-indigo-950/70 border border-blue-500/30 p-6 md:p-8 shadow-xl">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Executive Strategy • Scale the System, Not the Headcount
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Pelanggan ke-120, Tanpa Karyawan ke-223
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed font-normal">
            Memutus hubungan linear antara penambahan pelanggan dan pembengkakan biaya di <strong className="text-white font-semibold">ServeNow Technologies</strong>. 
            Melalui orkestrasi internal <span className="text-blue-400 font-semibold">S.E.R.V.E.</span> dan dominasi pasar <span className="text-indigo-400 font-semibold">N.O.W.</span>, 
            perusahaan menggandakan revenue menjadi <span className="text-emerald-400 font-semibold">Rp 45 Miliar</span> dengan margin laba <span className="text-emerald-400 font-semibold">17,5%</span> (laba bersih naik 20x lipat).
          </p>
        </div>
      </div>

      {/* Target Transformation Metric Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-400" />
            Matriks Target Transformasi (Tahun ke-3)
          </h2>
          <span className="text-xs text-slate-400">Baseline Kasus vs Target Model Final</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Revenue */}
          <div className="glass-card rounded-xl p-5 border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Total Pendapatan (Revenue)</span>
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold">3 Tahun</span>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-black text-white">Rp 45,0 M</span>
              <span className="text-xs font-semibold text-emerald-400 flex items-center">
                <ArrowUpRight className="w-3.5 h-3.5" /> +185%
              </span>
            </div>
            <div className="mt-2 text-xs text-slate-400 flex justify-between border-t border-slate-800/80 pt-2">
              <span>Kondisi Awal: <strong className="text-slate-200">Rp 15,8 M</strong></span>
              <span className="text-blue-400 font-medium">ARR: Rp 32 M (71%)</span>
            </div>
          </div>

          {/* Card 2: Net Margin */}
          <div className="glass-card rounded-xl p-5 border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Margin & Laba Bersih</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">20x Laba</span>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-black text-emerald-400">17,5%</span>
              <span className="text-xs font-semibold text-slate-200">
                (Rp 7,86 M)
              </span>
            </div>
            <div className="mt-2 text-xs text-slate-400 flex justify-between border-t border-slate-800/80 pt-2">
              <span>Kondisi Awal: <strong className="text-rose-400">2,5% (Rp395 jt)</strong></span>
              <span className="text-emerald-400 font-medium">+15,0 Poin</span>
            </div>
          </div>

          {/* Card 3: Pelanggan & Headcount */}
          <div className="glass-card rounded-xl p-5 border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Pelanggan vs Karyawan</span>
              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-bold">Rasio 1,15</span>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-black text-white">120 Klien</span>
              <span className="text-xs font-medium text-slate-400">/ 138 Staf</span>
            </div>
            <div className="mt-2 text-xs text-slate-400 flex justify-between border-t border-slate-800/80 pt-2">
              <span>Cegah 223 Karyawan:</span>
              <span className="text-emerald-400 font-semibold">Hemat Rp 16,3 M</span>
            </div>
          </div>

          {/* Card 4: SLA & Churn */}
          <div className="glass-card rounded-xl p-5 border border-slate-800 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Pencapaian SLA & Churn</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">Reliability</span>
            </div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-black text-white">SLA 96%</span>
              <span className="text-xs font-semibold text-emerald-400">
                Churn &lt;5%
              </span>
            </div>
            <div className="mt-2 text-xs text-slate-400 flex justify-between border-t border-slate-800/80 pt-2">
              <span>Kondisi Awal: <strong className="text-rose-400">78% (Churn 16,7%)</strong></span>
              <span className="text-blue-400 font-medium">8 Wk Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* HERO SECTION: Financial Ratio & Headcount Decoupling Simulator */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800 relative shadow-2xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-md bg-blue-600/20 text-blue-400 text-xs font-semibold mb-2">
              <BarChart3 className="w-3.5 h-3.5" />
              Interactive Financial Engine (Slide 4 & 13)
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              Simulator Rasio Karyawan per Pelanggan
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-2xl">
              Uji bagaimana perubahan rasio karyawan terhadap 120 pelanggan secara radikal menentukan apakah ServeNow merugi <span className="text-rose-400 font-medium">-Rp 7,3 Miliar</span> atau mendulang laba bersih <span className="text-emerald-400 font-medium">+Rp 7,86 Miliar</span>.
            </p>
          </div>

          {/* Presets */}
          <div className="flex items-center space-x-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 self-stretch sm:self-auto">
            <button
              onClick={() => setCurrentRatio(1.86)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                currentRatio === 1.86
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1,86 (Status Quo)
            </button>
            <button
              onClick={() => setCurrentRatio(1.50)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                currentRatio === 1.50
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1,50 (Tanggung)
            </button>
            <button
              onClick={() => setCurrentRatio(1.15)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                currentRatio === 1.15
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1,15 (Target Model)
            </button>
          </div>
        </div>

        {/* Interactive Slider */}
        <div className="my-6 p-5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              Geser Nilai Rasio Karyawan/Pelanggan:
            </span>
            <span className="text-lg font-black font-mono text-blue-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
              {currentRatio.toFixed(2)}
            </span>
          </div>
          <input
            type="range"
            min="1.00"
            max="2.00"
            step="0.01"
            value={currentRatio}
            onChange={(e) => setCurrentRatio(parseFloat(e.target.value))}
            className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
            <span>1.00 (Efisiensi Tinggi)</span>
            <span className="text-emerald-400 font-bold">1.15 (Target Transformasi)</span>
            <span className="text-amber-400">1.50 (Titik Kritis)</span>
            <span className="text-rose-400 font-bold">1.86 (Baseline Awal)</span>
            <span>2.00</span>
          </div>
        </div>

        {/* Live Simulation Results Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 block mb-1">Target Pelanggan</span>
            <span className="text-xl font-bold text-white">120</span>
            <span className="text-[10px] text-slate-500 block">Klien Aktif</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 block mb-1">Jumlah Karyawan</span>
            <span className="text-xl font-black text-blue-400">{simulation.employees}</span>
            <span className="text-[10px] text-slate-500 block">Orang</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 block mb-1">Biaya SDM (Gaji)</span>
            <span className="text-lg font-bold text-slate-200">Rp {simulation.salaryCost} M</span>
            <span className="text-[10px] text-slate-500 block">@Rp 192 Jt/thn</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 block mb-1">Total Biaya (SDM+Ops)</span>
            <span className="text-lg font-bold text-slate-200">Rp {simulation.totalCost} M</span>
            <span className="text-[10px] text-slate-500 block">Ops Rp 9,5 M</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
            <span className="text-[11px] text-slate-400 block mb-1">Net Margin</span>
            <span className={`text-xl font-black ${simulation.netMargin >= 15 ? 'text-emerald-400' : simulation.netMargin > 0 ? 'text-amber-400' : 'text-rose-400'}`}>
              {simulation.netMargin}%
            </span>
            <span className="text-[10px] text-slate-500 block">Target: 15–20%</span>
          </div>

          <div className={`p-3.5 rounded-xl border text-center ${
            simulation.netProfit >= 6 
              ? 'bg-emerald-950/40 border-emerald-500/40' 
              : simulation.netProfit > 0 
              ? 'bg-amber-950/40 border-amber-500/40' 
              : 'bg-rose-950/40 border-rose-500/40'
          }`}>
            <span className="text-[11px] text-slate-300 block mb-1">Laba Bersih (Net Profit)</span>
            <span className={`text-xl font-black ${
              simulation.netProfit >= 6 ? 'text-emerald-400' : simulation.netProfit > 0 ? 'text-amber-400' : 'text-rose-400'
            }`}>
              Rp {simulation.netProfit} M
            </span>
            <span className="text-[10px] text-slate-400 block">
              {simulation.netProfit < 0 ? 'Defisit / Rugi' : 'Surplus Laba'}
            </span>
          </div>
        </div>

        {/* Dynamic Warning / Recommendation Banner */}
        <div className={`p-4 rounded-xl border flex items-start space-x-3.5 ${
          simulation.isViable
            ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
            : currentRatio >= 1.7
            ? 'bg-rose-950/30 border-rose-500/30 text-rose-200'
            : 'bg-amber-950/30 border-amber-500/30 text-amber-200'
        }`}>
          {simulation.isViable ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          )}
          <div className="text-xs leading-relaxed">
            <p className="font-semibold text-sm mb-0.5">
              {simulation.isViable ? 'Simulasi Terverifikasi & Menguntungkan' : 'Peringatan Viabilitas Bisnis'}
            </p>
            <p>{simulation.notes}</p>
          </div>
        </div>

        {/* 3 Benchmark Scenarios Comparison */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-rose-400 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" /> Skenario A (Rasio 1,86)
              </span>
              <span className="text-[10px] bg-rose-950/80 text-rose-300 px-2 py-0.5 rounded border border-rose-800/40">Status Quo</span>
            </div>
            <p className="text-xs text-slate-400 mb-2">
              Melayani 120 pelanggan butuh <strong className="text-white">223 karyawan</strong>. Biaya gaji Rp 42,8 M melahap hampir 100% omset Rp 45 M.
            </p>
            <div className="text-xs font-mono bg-slate-950 p-2 rounded text-rose-300">
              Laba: -Rp 7,3 Miliar (Margin -10,5%)
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                <Info className="w-3.5 h-3.5" /> Skenario B (Rasio 1,50)
              </span>
              <span className="text-[10px] bg-amber-950/80 text-amber-300 px-2 py-0.5 rounded border border-amber-800/40">Setengah Jalan</span>
            </div>
            <p className="text-xs text-slate-400 mb-2">
              Melayani 120 pelanggan butuh <strong className="text-white">180 karyawan</strong>. Membayar seluruh biaya transformasi tanpa hasil signifikan.
            </p>
            <div className="text-xs font-mono bg-slate-950 p-2 rounded text-amber-300">
              Laba: +Rp 1,65 Miliar (Margin 3,7%)
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-emerald-500/30 bg-emerald-950/10 hover:border-emerald-500/50 transition">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Skenario C (Rasio 1,15)
              </span>
              <span className="text-[10px] bg-emerald-950/80 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800/40">Target Solusi</span>
            </div>
            <p className="text-xs text-slate-400 mb-2">
              Hanya butuh <strong className="text-white">138 karyawan</strong> untuk 120 pelanggan. Satu karyawan melayani banyak klien berkat template & OS.
            </p>
            <div className="text-xs font-mono bg-slate-950 p-2 rounded text-emerald-300 font-bold">
              Laba: +Rp 7,86 Miliar (Margin 17,5%)
            </div>
          </div>
        </div>
      </div>

      {/* Historical Business Evolution (Year 1 - Year 3 Problem Context) */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              Rekonstruksi Kinerja 3 Tahun Terakhir: Paradox Pertumbuhan
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Data kasus nyata: Revenue tumbuh +93% dalam 2 tahun, tetapi laba per karyawan anjlok -44,5%!
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] font-semibold bg-slate-900/40">
                <th className="py-3 px-4">Indikator Kinerja</th>
                <th className="py-3 px-4">Tahun ke-1</th>
                <th className="py-3 px-4">Tahun ke-2</th>
                <th className="py-3 px-4">Tahun ke-3 (Kasus)</th>
                <th className="py-3 px-4 text-emerald-400 font-bold bg-emerald-950/20">Target Transformasi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-medium">
              <tr>
                <td className="py-3 px-4 text-slate-200 font-semibold">Pendapatan (Revenue)</td>
                <td className="py-3 px-4 text-slate-300">Rp 8,2 Miliar</td>
                <td className="py-3 px-4 text-slate-300">Rp 11,5 Miliar (+40%)</td>
                <td className="py-3 px-4 text-slate-100 font-bold">Rp 15,8 Miliar (+37%)</td>
                <td className="py-3 px-4 text-emerald-400 font-bold bg-emerald-950/10">Rp 45,0 Miliar</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-200">Recurring Revenue (ARR)</td>
                <td className="py-3 px-4 text-slate-400">Rp 4,5 M (54,8%)</td>
                <td className="py-3 px-4 text-slate-400">Rp 6,7 M (58,2%)</td>
                <td className="py-3 px-4 text-slate-300">Rp 9,4 M (59,5%)</td>
                <td className="py-3 px-4 text-emerald-400 font-semibold bg-emerald-950/10">Rp 32,0 M (71,1%)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-200">Pelanggan Aktif</td>
                <td className="py-3 px-4 text-slate-400">24 Klien</td>
                <td className="py-3 px-4 text-slate-400">33 Klien</td>
                <td className="py-3 px-4 text-slate-300">42 Klien</td>
                <td className="py-3 px-4 text-emerald-400 font-semibold bg-emerald-950/10">120 Klien</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-200">Jumlah Karyawan</td>
                <td className="py-3 px-4 text-slate-400">45 Orang</td>
                <td className="py-3 px-4 text-slate-400">61 Orang</td>
                <td className="py-3 px-4 text-rose-400 font-bold">78 Orang (Rasio 1,86)</td>
                <td className="py-3 px-4 text-emerald-400 font-bold bg-emerald-950/10">138 Orang (Rasio 1,15)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-200 font-semibold">Laba Bersih & Margin</td>
                <td className="py-3 px-4 text-slate-300">Rp 410 Jt (5,0%)</td>
                <td className="py-3 px-4 text-slate-300">Rp 460 Jt (4,0%)</td>
                <td className="py-3 px-4 text-rose-400 font-bold">Rp 395 Jt (2,5%) ⚠️</td>
                <td className="py-3 px-4 text-emerald-400 font-black bg-emerald-950/10">Rp 7,86 M (17,5%)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-200">Laba per Karyawan</td>
                <td className="py-3 px-4 text-slate-400">Rp 9,11 Juta</td>
                <td className="py-3 px-4 text-slate-400">Rp 7,54 Juta</td>
                <td className="py-3 px-4 text-rose-400 font-semibold">Rp 5,06 Juta (-44,5%!)</td>
                <td className="py-3 px-4 text-emerald-400 font-bold bg-emerald-950/10">Rp 56,9 Juta (+11x)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-200">Pelanggan Berhenti (Churn)</td>
                <td className="py-3 px-4 text-slate-400">2 klien (8,3%)</td>
                <td className="py-3 px-4 text-slate-400">4 klien (12,1%)</td>
                <td className="py-3 px-4 text-rose-400">7 klien (16,7%)</td>
                <td className="py-3 px-4 text-emerald-400 font-semibold bg-emerald-950/10">&lt; 5% per tahun</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-200">Keluhan Layanan Kritis</td>
                <td className="py-3 px-4 text-slate-400">14 kasus</td>
                <td className="py-3 px-4 text-slate-400">25 kasus</td>
                <td className="py-3 px-4 text-rose-400 font-bold">43 kasus</td>
                <td className="py-3 px-4 text-emerald-400 font-semibold bg-emerald-950/10">≤ 4 kasus / kuartal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 36-Month Strategic Roadmap & Decision Gates */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              Roadmap Transformasi 36 Bulan (4 Fase & 3 Decision Gates)
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Setiap fase menyelesaikan target prasyarat fase berikutnya; terdapat 3 titik evaluasi yang boleh menurunkan target bila tidak terpenuhi.
            </p>
          </div>

          <div className="flex items-center space-x-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
            {[1, 2, 3, 4].map((phaseNum) => (
              <button
                key={phaseNum}
                onClick={() => setActiveRoadmapPhase(phaseNum)}
                className={`px-2.5 py-1 rounded font-semibold transition ${
                  activeRoadmapPhase === phaseNum
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Fase {phaseNum}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Roadmap Phase Detail Card */}
        {(() => {
          const selected = roadmapPhases.find(p => p.phase === activeRoadmapPhase) || roadmapPhases[0];
          return (
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800/80 gap-2">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{selected.title}</span>
                  <h3 className="text-base font-bold text-white mt-0.5">{selected.tagline}</h3>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Tahap Kunci S.E.R.V.E
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 font-semibold block mb-1">Aktivitas Utama Workstream:</span>
                  <p className="text-slate-200 leading-relaxed">{selected.focus}</p>
                </div>
                <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-emerald-400 font-semibold block mb-1">Target Output Terukur:</span>
                  <p className="text-slate-200 leading-relaxed">{selected.deliverable}</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs flex items-start space-x-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-300">Decision Gate & Aturan Penurunan Target:</span>
                  <p className="mt-0.5 text-amber-200/90">{selected.gate}</p>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};
