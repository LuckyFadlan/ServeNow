import React, { useState } from 'react';
import { SALES_DEALS } from '../data/mockData';
import { SalesDeal } from '../types';
import { 
  TrendingUp, 
  Target, 
  MapPin, 
  Users, 
  Filter, 
  CheckCircle2, 
  DollarSign, 
  ArrowRight,
  Sparkles,
  BarChart,
  Layers,
  Award
} from 'lucide-react';

export const SalesPipeline: React.FC = () => {
  const [deals, setDeals] = useState<SalesDeal[]>(SALES_DEALS);
  const [filterRegion, setFilterRegion] = useState<'ALL' | 'OUTSIDE' | 'JABODETABEK'>('ALL');

  const filteredDeals = filterRegion === 'ALL'
    ? deals
    : filterRegion === 'OUTSIDE'
    ? deals.filter(d => d.isOutsideJabodetabek)
    : deals.filter(d => !d.isOutsideJabodetabek);

  const totalPipelineMillion = deals.reduce((acc, d) => acc + d.dealSizeMillion, 0);
  const outsideJabodetabekCount = deals.filter(d => d.isOutsideJabodetabek).length;
  const outsidePercent = Math.round((outsideJabodetabekCount / deals.length) * 100);

  const funnelStages = [
    { stage: '1. Lead Mentah', count: '1.733', conversion: '30% ke SDR', note: 'Outbound SDR 50%, Inbound 30%, Partner/Referral 20%' },
    { stage: '2. Terkualifikasi (SDR)', count: '520', conversion: '50% ke Peluang', note: 'Kriteria BANT terpenuhi (>5 user, multi-kanal, sistem siap integrasi)' },
    { stage: '3. Peluang Terbuka (AE)', count: '260', conversion: '60% ke Proposal', note: 'Account Executive mendemonstrasikan Template Industri' },
    { stage: '4. Proposal & Demo', count: '156', conversion: '25% Win Rate', note: 'Penawaran 3 Paket Implementasi Terstandarisasi' },
    { stage: '5. Closed-Won (Menang)', count: '39 Deal/Thn', conversion: 'Target Tercapai', note: 'Kuota 6 AE x 6,5 deal/tahun (Sangat Konservatif)' }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
            Pilar W: Widen the Reach • Mesin Penjualan Sistematis
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            CRM 8-Tahap, Pemisahan SDR/AE & Ekspansi Regional
          </h1>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Menghilangkan ketergantungan pada relasi pribadi pendiri dengan membangun <strong>mesin penjualan tersentralisasi</strong>. 
            Melalui pemisahan peran SDR (kualifikasi prospek) dan AE (penutupan kesepakatan), serta skema mitra regional untuk mengangkat porsi pendapatan luar Jabodetabek dari <strong>12% menjadi &ge;40%</strong>.
          </p>
        </div>
      </div>

      {/* Sales Metrics Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Target Kuota per AE</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-white">6,5 Deal</span>
            <span className="text-xs text-slate-400">/ tahun</span>
          </div>
          <p className="text-[11px] text-emerald-400 font-semibold mt-2">Sangat konservatif (Benchmark mid-market 6–12)</p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Porsi Revenue Luar Jabodetabek</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-rose-400">12%</span>
            <span className="text-slate-500">&rarr;</span>
            <span className="text-2xl font-black text-emerald-400">&ge; 40%</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Didukung delivery jarak jauh berbasis template</p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Nilai Kontrak Rata-rata (ARPU)</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-white">Rp 376 Jt</span>
            <span className="text-xs text-slate-400">/ pelanggan</span>
          </div>
          <p className="text-[11px] text-blue-400 font-semibold mt-2">11x lebih tinggi dari kompetitor UMKM</p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Cakupan Pipeline Aktif</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-emerald-400">3,5x</span>
            <span className="text-xs text-slate-400">Rasio Pipeline</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Rp 54 Miliar total potensi nilai deal dalam funnel</p>
        </div>
      </div>

      {/* SDR to AE Funnel Breakdown (Slide 11) */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <BarChart className="w-5 h-5 text-blue-400" />
              Corong Konversi Penjualan Tahun ke-3 (SDR & AE Engine)
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              ServeNow hanya membutuhkan 39 deal baru per tahun untuk mencapai Rp 45 Miliar. Penjualan bukan kendala utama; yang terpenting adalah kapasitas delivery dan retensi.
            </p>
          </div>
          <span className="text-xs font-mono bg-blue-950 text-blue-300 px-3 py-1 rounded-lg border border-blue-800 font-bold">
            Target 39 Won / Thn
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {funnelStages.map((stg, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 relative space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-semibold">{stg.stage}</span>
                <span className="w-5 h-5 rounded-full bg-blue-600/20 text-blue-300 text-[10px] font-bold flex items-center justify-center border border-blue-500/30">
                  {idx + 1}
                </span>
              </div>
              <div className="text-2xl font-black text-white">{stg.count}</div>
              <div className="text-[11px] font-bold text-emerald-400">{stg.conversion}</div>
              <p className="text-[10px] text-slate-400 leading-tight pt-2 border-t border-slate-800">{stg.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Live Active Deals in Pipeline */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-800 gap-3 mb-6">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-400" />
              Pipeline Kesepakatan Terpusat (Active Mid-Market CRM)
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Data terintegrasi satu pintu, mengakhiri era pencatatan tercecer di WhatsApp dan spreadsheet pribadi.
            </p>
          </div>

          <div className="flex items-center space-x-1.5 text-xs bg-slate-900 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setFilterRegion('ALL')}
              className={`px-3 py-1 rounded font-medium transition ${
                filterRegion === 'ALL' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Semua Wilayah ({deals.length})
            </button>
            <button
              onClick={() => setFilterRegion('OUTSIDE')}
              className={`px-3 py-1 rounded font-medium transition ${
                filterRegion === 'OUTSIDE' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Luar Jabodetabek ({outsideJabodetabekCount})
            </button>
            <button
              onClick={() => setFilterRegion('JABODETABEK')}
              className={`px-3 py-1 rounded font-medium transition ${
                filterRegion === 'JABODETABEK' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Jabodetabek
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] font-semibold bg-slate-900/50">
                <th className="py-3 px-4">Nama Perusahaan Klien</th>
                <th className="py-3 px-4">Kota & Wilayah</th>
                <th className="py-3 px-4">Sektor Industri</th>
                <th className="py-3 px-4">Estimasi Kontrak</th>
                <th className="py-3 px-4">Tahap Pipeline</th>
                <th className="py-3 px-4">SDR & AE Penanggung Jawab</th>
                <th className="py-3 px-4">Win Prob.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-medium">
              {filteredDeals.map((deal) => (
                <tr key={deal.id} className="hover:bg-slate-900/40 transition">
                  <td className="py-3.5 px-4 font-bold text-white">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span>{deal.clientName}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-300">
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{deal.city}</span>
                      {deal.isOutsideJabodetabek && (
                        <span className="text-[9px] bg-blue-950 text-blue-300 px-1.5 py-0.2 rounded border border-blue-800">
                          Non-Jabodetabek
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">{deal.sector}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-emerald-400">
                    Rp {deal.dealSizeMillion} Juta
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                      deal.stage === 'Menang (Closed-Won)'
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                        : deal.stage === 'Negosiasi Legal'
                        ? 'bg-indigo-950 text-indigo-300 border-indigo-800'
                        : 'bg-slate-900 text-slate-300 border-slate-700'
                    }`}>
                      {deal.stage}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-300 text-[11px]">
                    SDR: {deal.ownerSdr} &bull; AE: {deal.ownerAe}
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-white">
                    {deal.winProbability}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
