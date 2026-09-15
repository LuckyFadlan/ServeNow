import React, { useState } from 'react';
import { EMPLOYEE_SCORECARDS } from '../data/mockData';
import { EmployeeScorecard } from '../types';
import { 
  Award, 
  AlertTriangle, 
  Clock, 
  CheckCircle2, 
  FileSpreadsheet, 
  Users, 
  ShieldAlert, 
  TrendingDown, 
  Layers,
  HelpCircle,
  BarChart3
} from 'lucide-react';

export const WorkforceScorecard: React.FC = () => {
  const [scorecards, setScorecards] = useState<EmployeeScorecard[]>(EMPLOYEE_SCORECARDS);
  const [selectedEmpId, setSelectedEmpId] = useState<string>(EMPLOYEE_SCORECARDS[0].id);

  const selectedEmp = scorecards.find(e => e.id === selectedEmpId) || scorecards[0];

  const rootCauses = [
    { name: 'Perilaku', count: '12%', desc: 'Keterlambatan personal, absen rapat tanpa kabar, sulit dihubungi saat jam inti.' },
    { name: 'Perencanaan', count: '28%', desc: 'Jadwal sprint tidak realistis, deadline bertumpuk di akhir sprint karena alokasi tugas tidak merata.' },
    { name: 'Dependensi Tim', count: '18%', desc: 'Menunggu review kode arsitek atau persetujuan direktur yang tersendat di pucuk.' },
    { name: 'Klien', count: '16%', desc: 'Perubahan requirement sepihak di tengah jalan tanpa approval perubahan ruang lingkup (scope creep).' },
    { name: 'Resource', count: '10%', desc: 'Ketiadaan lisensi tools atau server pengujian lokal yang memadai.' },
    { name: 'Requirement', count: '9%', desc: 'Instruksi awal tidak lengkap akibat tidak digunakannya 40 kuesioner baku.' },
    { name: 'Teknis', count: '7%', desc: 'Bug sistemik atau downtime infrastruktur pihak ketiga.' }
  ];

  const eightPrioritySOPs = [
    { id: 1, title: 'Eskalasi & Manajemen Insiden (Severity 1–4)', owner: 'Head of Support', solvedProblem: 'SLA 78%, 43 keluhan kritis/thn' },
    { id: 2, title: 'Pengambilan Keputusan & DOA Persetujuan', owner: 'Direktur Operasional', solvedProblem: 'Ketergantungan direksi 26:1' },
    { id: 3, title: 'Implementasi Pelanggan per Paket (Std/Adv/Ent)', owner: 'Head of Implementation', solvedProblem: 'Implementasi molor 16–22 minggu' },
    { id: 4, title: 'Permintaan Perubahan & Kontrol Lingkup Proyek', owner: 'Head of Implementation', solvedProblem: 'Kebocoran margin delivery (-1,51%)' },
    { id: 5, title: 'Proses Penjualan Terstandarisasi (8-Tahap CRM)', owner: 'Head of Sales', solvedProblem: 'Sales sporadis tanpa forecast' },
    { id: 6, title: 'Onboarding Karyawan Baru & Knowledge Base', owner: 'Head of People & Finance', solvedProblem: '60 karyawan baru tanpa transfer ilmu' },
    { id: 7, title: 'Post-Mortem Insiden & Analisis Akar Masalah', owner: 'Head of Support', solvedProblem: 'Kesalahan operasional berulang' },
    { id: 8, title: 'Serah Terima Delivery ke Customer Success', owner: 'Head of CS', solvedProblem: 'Churn 16,7% di 90 hari pertama' }
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            Pilar E: Evaluate • Sistem Kinerja & Working Agreement
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            Scorecard Individu 4-Dimensi & Eliminasi Pemborosan Rp811 Juta
          </h1>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Menghilangkan budaya kerja tanpa akuntabilitas yang merugikan perusahaan <strong>Rp 811 Juta/tahun</strong> (2x lipat laba bersih!). 
            ServeNow menghubungkan absensi, target, kualitas kerja, dan tanggung jawab individu melalui <strong>Scorecard 4 Dimensi Berbobot</strong> dan <strong>Working Agreement (Core Hours 10.00–16.00 WIB)</strong>.
          </p>
        </div>
      </div>

      {/* The Rp811M Cost of Indiscipline Breakdown (Slide 7) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="glass-card rounded-xl p-5 border border-rose-500/30 bg-rose-950/10">
          <div className="flex items-center justify-between text-xs text-rose-300 mb-2">
            <span>Biaya Pemborosan Indisipliner</span>
            <span className="text-rose-400 font-bold bg-rose-950 px-2 py-0.5 rounded border border-rose-800">Selisih Biaya</span>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-rose-400">Rp 811 Juta</span>
            <span className="text-xs text-slate-400">/ tahun</span>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            2x lipat dari laba bersih perusahaan tahun ke-3 (Rp 395 juta) yang menguap sia-sia.
          </p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Validasi Silang Penanganan Insiden</span>
            <span className="text-blue-400 font-bold bg-blue-950 px-2 py-0.5 rounded">Riset Nyata</span>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-white">Rp 774 Juta</span>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            43 keluhan kritis &times; 120 jam pemadam kebakaran &times; Rp 150rb blended rate teknisi.
          </p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-emerald-500/30 bg-emerald-950/10">
          <div className="flex items-center justify-between text-xs text-emerald-300 mb-2">
            <span>Prinsip Lembur Baru</span>
            <span className="text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded">SOP Working Agrmt</span>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-emerald-400">Lembur = KPI Head</span>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Lembur dinilai sebagai sinyal perencanaan buruk atau beban timpang, bukan loyalitas.
          </p>
        </div>
      </div>

      {/* 4-Dimension Weighted Scorecard Detail */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-3">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-400" />
              Scorecard Kinerja Individu Terotomasi (Data dari Sistem Langsung)
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Objektif & otomatis: data diambil dari Jira/Proyek (Target), Quality Monitoring (Kualitas), dan Sistem Tiket (Disiplin).
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Employee Selection */}
          <div className="lg:col-span-5 space-y-2.5">
            {scorecards.map((emp) => {
              const isSelected = selectedEmpId === emp.id;
              return (
                <div
                  key={emp.id}
                  onClick={() => setSelectedEmpId(emp.id)}
                  className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                    isSelected
                      ? 'bg-blue-950/40 border-blue-500 shadow-md ring-1 ring-blue-500'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-950 px-1.5 py-0.2 rounded border border-blue-900">
                        {emp.id}
                      </span>
                      <h4 className="text-xs font-bold text-white">{emp.name}</h4>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">{emp.role}</p>
                    <p className="text-[10px] text-slate-500">{emp.department}</p>
                  </div>

                  <div className="text-right">
                    <span className={`text-sm font-black font-mono block ${
                      emp.totalScore >= 90 ? 'text-emerald-400' : emp.totalScore >= 80 ? 'text-blue-400' : 'text-rose-400'
                    }`}>
                      {emp.totalScore}
                    </span>
                    <span className="text-[10px] text-slate-400">Total Score</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Employee 4-Dimension Breakdown */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
            <div className="flex items-start justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-base font-extrabold text-white">{selectedEmp.name}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{selectedEmp.role} &bull; {selectedEmp.department}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Kepatuhan Core Hours</span>
                <span className="text-sm font-bold text-emerald-400 font-mono">{selectedEmp.coreHoursCompliance}%</span>
              </div>
            </div>

            {/* 4 Dimension Meters */}
            <div className="space-y-3.5">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 font-semibold">1. Target & Output (Bobot 40%) - Ketepatan Waktu Delivery</span>
                  <span className="text-blue-400 font-bold font-mono">{selectedEmp.targetOutputScore} / 100</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${selectedEmp.targetOutputScore}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 font-semibold">2. Kualitas Pekerjaan (Bobot 30%) - Bebas Rework & Kepatuhan SLA</span>
                  <span className="text-emerald-400 font-bold font-mono">{selectedEmp.qualitySlaScore} / 100</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${selectedEmp.qualitySlaScore}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 font-semibold">3. Disiplin & Kolaborasi (Bobot 20%) - Core Hours & Responsivitas</span>
                  <span className="text-indigo-400 font-bold font-mono">{selectedEmp.disciplineScore} / 100</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${selectedEmp.disciplineScore}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 font-semibold">4. Pengembangan & Efisiensi (Bobot 10%) - Kendali Lembur</span>
                  <span className="text-amber-400 font-bold font-mono">{selectedEmp.developmentScore} / 100</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${selectedEmp.developmentScore}%` }}></div>
                </div>
              </div>
            </div>

            {/* Overtime Analysis Box */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Jam Lembur Terakumulasi:</span>
                <span className="text-base font-bold text-white font-mono">{selectedEmp.overtimeHours} Jam</span>
              </div>
              <div className="text-right">
                <span className="text-slate-400 block text-[11px]">Akar Penyebab Utama:</span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-950/80 text-amber-300 border border-amber-800 font-semibold">
                  {selectedEmp.overtimeRootCause}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7 Root Causes of Overtime & 8 Priority SOPs (Slide 7) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 7 Root Causes */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center space-x-2 text-sm font-bold text-white">
            <BarChart3 className="w-4 h-4 text-amber-400" />
            <h3>Analisis 7 Kategori Akar Masalah Keterlambatan</h3>
          </div>
          <p className="text-xs text-slate-400">
            Sebelum tindakan disiplin dikenakan, akar masalah wajib diklasifikasikan ke dalam 7 kategori ini agar solusi tepat sasaran:
          </p>

          <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
            {rootCauses.map((rc, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-white block mb-0.5">{rc.name}</span>
                  <p className="text-[11px] text-slate-400">{rc.desc}</p>
                </div>
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800 shrink-0">
                  {rc.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 8 Priority SOPs */}
        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
          <div className="flex items-center space-x-2 text-sm font-bold text-white">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <h3>8 Standar Operasional Prosedur (SOP) Prioritas</h3>
          </div>
          <p className="text-xs text-slate-400">
            SOP tertanam langsung di aplikasi kerja (bukan sekadar dokumen PDF berdebu) sebagai gerbang wajib (*mandatory gating*):
          </p>

          <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
            {eightPrioritySOPs.map((sop) => (
              <div key={sop.id} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start justify-between gap-2 text-xs">
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-4 h-4 rounded-full bg-blue-600/30 text-blue-300 text-[10px] font-bold flex items-center justify-center border border-blue-500/40 shrink-0">
                      {sop.id}
                    </span>
                    <span className="font-bold text-white">{sop.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Mengatasi Masalah: <strong className="text-rose-400">{sop.solvedProblem}</strong></p>
                </div>
                <span className="text-[10px] font-medium text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 shrink-0">
                  {sop.owner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
