import React, { useState } from 'react';
import { IMPLEMENTATION_PACKAGES, INDUSTRY_TEMPLATES } from '../data/mockData';
import { ImplementationPackage, IndustryTemplate } from '../types';
import { 
  Clock, 
  CheckCircle2, 
  Zap, 
  Layers, 
  ShoppingBag, 
  ShieldCheck, 
  Activity, 
  GraduationCap, 
  Building2, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  FileCheck2
} from 'lucide-react';

export const DeliveryEngine: React.FC = () => {
  const [selectedPkg, setSelectedPkg] = useState<string>(IMPLEMENTATION_PACKAGES[0].id);
  const [selectedTemplate, setSelectedTemplate] = useState<IndustryTemplate | null>(INDUSTRY_TEMPLATES[0]);

  const getTemplateIcon = (name: string) => {
    switch (name) {
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-rose-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-blue-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-indigo-400" />;
      default: return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  const standardTimeline = [
    { week: 'Minggu 1', title: 'Penggalian Kebutuhan', desc: 'Wawancara terstruktur dengan 40 pertanyaan baku terverifikasi (menggantikan diskusi informal berlarut-larut).' },
    { week: 'Minggu 2–3', title: 'Konfigurasi Sistem', desc: 'Aktivasi berbasis Template Industri (rule ticketing, SLA tag, routing omnichannel siap pakai).' },
    { week: 'Minggu 4–5', title: 'Penyambungan Sistem', desc: 'Integrasi plug-and-play menggunakan Konektor Siap Pakai (REST API, Webhook marketplace/ERP).' },
    { week: 'Minggu 6', title: 'Uji Coba Pengguna (UAT)', desc: 'Eksekusi skrip pengujian standar per skenario bisnis industri klien.' },
    { week: 'Minggu 7', title: 'Pelatihan & Migrasi Data', desc: 'Berjalan paralel (bukan berurutan), pelatihan tim agen & migrasi kontak pelanggan.' },
    { week: 'Minggu 8', title: 'Go-Live & Hypercare', desc: 'Peluncuran live 24/7 dan serah terima terstruktur ke tim Customer Success.' }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            Pilar R: Routinize • Delivery Engine
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            Memangkas Implementasi dari 19 ke 8 Minggu
          </h1>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Menghapus beban kustomisasi tanpa batas yang memicu 70% churn B2B SaaS di 90 hari pertama. 
            Dengan mengaudit 42 proyek terdahulu, ServeNow membakukan proses ke dalam <strong>3 Paket Implementasi</strong>, 
            <strong>Template Industri Siap Pakai</strong>, dan <strong>Konektor Terpadu</strong>. Kapasitas naik <strong>2,4x lipat</strong> (16 &rarr; 39 proyek/tahun) tanpa menambah 1 pun orang programmer!
          </p>
        </div>
      </div>

      {/* Delivery Capacity Multiplier Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Durasi Rata-rata Proyek</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-rose-400">19 Mgg</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
            <span className="text-2xl font-black text-emerald-400">8 Mgg</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Pangkas 58% waktu tunggu & cegah frustrasi klien</p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Kapasitas Proyek / Tahun</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-slate-400">16 Proyek</span>
            <ArrowRight className="w-4 h-4 text-slate-500" />
            <span className="text-2xl font-black text-blue-400">39 Proyek</span>
          </div>
          <p className="text-[11px] text-emerald-400 font-semibold mt-2">Naik 2,4x Lipat dari tim yang sama (17 staf)</p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Kapasitas Terbuang Diselamatkan</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-emerald-400">Rp 1,33 M</span>
            <span className="text-xs text-slate-400">/ tahun</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">9,8 orang-tahun kapasitas yang sebelumnya hangus</p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Biaya Internal Per Proyek</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-emerald-400">-58%</span>
            <span className="text-xs text-slate-400">Turun</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Margin delivery terkunci aman di 48%–50%</p>
        </div>
      </div>

      {/* 3 Standardized Implementation Packages */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              Tiga Paket Implementasi Terstandarisasi
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Paket baku dengan estimasi biaya dan durasi pasti mencegah penambahan lingkup tak bertagih (Scope Creep).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {IMPLEMENTATION_PACKAGES.map((pkg) => {
            const isSelected = selectedPkg === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPkg(pkg.id)}
                className={`rounded-2xl p-6 border cursor-pointer transition-all duration-200 relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-blue-950/60 to-slate-900 border-blue-500 shadow-xl shadow-blue-500/10 ring-1 ring-blue-500'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-600 text-white shadow-md">
                    Volume Tertinggi (60%)
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                    <span className="text-xs font-bold text-blue-400 bg-blue-950 px-2.5 py-1 rounded-lg border border-blue-800">
                      {pkg.durationWeeks} Minggu
                    </span>
                  </div>

                  <div className="flex items-baseline space-x-1 mb-2">
                    <span className="text-3xl font-black text-white">Rp {pkg.priceMillion}</span>
                    <span className="text-xs text-slate-400">Juta / paket</span>
                  </div>

                  <p className="text-xs text-slate-400 mb-4 pb-4 border-b border-slate-800">
                    Target Segmen: <strong className="text-slate-200">{pkg.targetSegment}</strong>
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-semibold text-slate-300 block">Spesifikasi Delivery:</span>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-auto">
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Tenaga Kerja:</span>
                    <span className="text-slate-200 font-semibold">{pkg.manWeeks} orang-mgg</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Alokasi Tim:</span>
                    <span className="text-blue-300 font-semibold truncate max-w-[170px]">{pkg.staffing}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Target Gross Margin:</span>
                    <span className="text-emerald-400 font-bold">{pkg.marginPercent}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 8-Week Standard Implementation Roadmap Visualizer */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              Linimasa Baku 8 Minggu (Standar Delivery Baru)
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Menggantikan siklus 19 minggu tidak terstruktur dengan metodologi sprint 6 tahapan teruji.
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800">
            Churn 90-Hari Terlindungi
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {standardTimeline.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider font-mono">
                  {item.week}
                </span>
                <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-300 text-[10px] font-bold flex items-center justify-center border border-blue-500/40">
                  {idx + 1}
                </span>
              </div>
              <h4 className="text-xs font-bold text-white mb-1.5">{item.title}</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Templates Catalog (Slide 8) */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-3">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-emerald-400" />
              Katalog Template Industri Siap Pakai
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              3 aset yang dibangun sekali dan dipakai berulang: Template Industri (6 PM), Konektor Siap Pakai (1-2 PM), Portal Onboarding Mandiri (3 PM).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Template List */}
          <div className="lg:col-span-5 space-y-2.5">
            {INDUSTRY_TEMPLATES.map((tpl) => {
              const isSelected = selectedTemplate?.id === tpl.id;
              return (
                <div
                  key={tpl.id}
                  onClick={() => setSelectedTemplate(tpl)}
                  className={`p-4 rounded-xl border cursor-pointer transition flex items-center space-x-3.5 ${
                    isSelected
                      ? 'bg-blue-950/40 border-blue-500 text-white shadow-md'
                      : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                    {getTemplateIcon(tpl.iconName)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">{tpl.industry}</span>
                      <span className="text-[10px] text-emerald-400 font-semibold">{tpl.timeReduction.split(' ')[2]} Mgg</span>
                    </div>
                    <h4 className="text-xs font-bold text-white truncate mt-0.5">{tpl.title}</h4>
                    <p className="text-[11px] text-slate-400 truncate">Klien Referensi: {tpl.sampleClient}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Template Detail Preview */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            {selectedTemplate ? (
              <div className="space-y-4">
                <div className="flex items-start justify-between pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400">{selectedTemplate.industry}</span>
                    <h3 className="text-base font-bold text-white mt-1">{selectedTemplate.title}</h3>
                    <p className="text-xs text-emerald-400 font-semibold mt-0.5">{selectedTemplate.timeReduction}</p>
                  </div>
                  <span className="text-xs font-mono bg-slate-950 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-800">
                    Ready to Deploy
                  </span>
                </div>

                <div>
                  <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    Alur Kerja Otomatis Bawaan (Pre-configured):
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedTemplate.keyWorkflows.map((flow, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300 flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{flow}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    Konektor Siap Pakai (Plug-and-Play Connectors):
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedTemplate.prebuiltConnectors.map((conn, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-slate-800 text-blue-300 border border-slate-700 text-xs font-mono font-medium">
                        {conn}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/30 text-xs text-slate-300">
                  <p className="font-semibold text-white mb-0.5">Dampak Finansial & Operasional:</p>
                  <p className="text-slate-400 leading-relaxed">
                    Template ini mengeliminasi 60% kebutuhan coding khusus. Staf implementasi non-programmer dapat langsung mengaktifkan sistem dalam hitungan hari.
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
