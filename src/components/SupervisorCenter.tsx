import React, { useState } from 'react';
import { 
  Users, 
  Activity, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  Phone, 
  MessageSquare, 
  Award, 
  Play, 
  Pause, 
  Sliders, 
  Send, 
  ShieldCheck,
  TrendingUp,
  BarChart2,
  Headphones,
  UserCheck,
  UserX,
  Coffee,
  Volume2
} from 'lucide-react';

interface AgentLiveStatus {
  id: string;
  name: string;
  role: string;
  status: 'AVAILABLE' | 'ON_CALL' | 'IN_CHAT' | 'AFTER_CALL_WORK' | 'BREAK';
  activeClient: string;
  activeChannel: 'Voice' | 'WhatsApp' | 'Live Chat' | 'None';
  duration: string;
  chatsCount: number;
  slaAchievement: number;
  qmScore: number;
  avatar: string;
}

export const SupervisorCenter: React.FC = () => {
  const [agents, setAgents] = useState<AgentLiveStatus[]>([
    {
      id: 'AG-01',
      name: 'Budi Santoso',
      role: 'Senior CS Agent (BFSI Specialist)',
      status: 'IN_CHAT',
      activeClient: 'Bank Mega Pratama Syariah',
      activeChannel: 'WhatsApp',
      duration: '06:14',
      chatsCount: 3,
      slaAchievement: 98.4,
      qmScore: 95,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
    },
    {
      id: 'AG-02',
      name: 'Sarah Maharani',
      role: 'Implementation & Support Specialist',
      status: 'ON_CALL',
      activeClient: 'Siloam Prima Hospital Group',
      activeChannel: 'Voice',
      duration: '03:45',
      chatsCount: 1,
      slaAchievement: 96.8,
      qmScore: 92,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80'
    },
    {
      id: 'AG-03',
      name: 'Doni Pratama',
      role: 'Junior Support Officer',
      status: 'AVAILABLE',
      activeClient: 'Menunggu Alokasi Tiket',
      activeChannel: 'None',
      duration: '01:20',
      chatsCount: 0,
      slaAchievement: 82.5,
      qmScore: 78,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80'
    },
    {
      id: 'AG-04',
      name: 'Cindy Clarissa',
      role: 'Retail Omnichannel Specialist',
      status: 'AFTER_CALL_WORK',
      activeClient: 'Surabaya Mega Retailindo',
      activeChannel: 'Live Chat',
      duration: '01:45',
      chatsCount: 1,
      slaAchievement: 94.0,
      qmScore: 89,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80'
    },
    {
      id: 'AG-05',
      name: 'Ferry Andrian',
      role: 'Technical Integration Agent',
      status: 'BREAK',
      activeClient: 'Istirahat Siang',
      activeChannel: 'None',
      duration: '15:20',
      chatsCount: 0,
      slaAchievement: 97.1,
      qmScore: 94,
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80'
    }
  ]);

  const [selectedAgentForQm, setSelectedAgentForQm] = useState<AgentLiveStatus>(agents[0]);
  const [qmGreeting, setQmGreeting] = useState<number>(25); // max 25
  const [qmDiagnosis, setQmDiagnosis] = useState<number>(24); // max 25
  const [qmResolution, setQmResolution] = useState<number>(28); // max 30
  const [qmEtiquette, setQmEtiquette] = useState<number>(19); // max 20
  const [coachingNote, setCoachingNote] = useState<string>(
    'Verifikasi kode switch ISO 8583 sangat cepat dan sesuai SOP-01 OJK. Pertahankan penjelasan ramah kepada nasabah prioritas.'
  );

  const totalQm = qmGreeting + qmDiagnosis + qmResolution + qmEtiquette;

  const handleUpdateAgentStatus = (agentId: string, newStatus: AgentLiveStatus['status']) => {
    setAgents(agents.map(a => a.id === agentId ? { ...a, status: newStatus } : a));
  };

  const handleSaveQmEvaluation = (e: React.FormEvent) => {
    e.preventDefault();
    setAgents(agents.map(a => a.id === selectedAgentForQm.id ? { ...a, qmScore: totalQm } : a));
    alert(`Evaluasi Quality Monitoring (QM) untuk ${selectedAgentForQm.name} berhasil disimpan! Total Skor: ${totalQm}/100.`);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-blue-400" />
            BOX 8 &bull; SUPERVISOR WORKSPACE
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            Supervisor Command Center & Quality Monitoring
          </h1>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Dashboard pemantauan operasional *real-time*: antrean panggilan/chat masuk, manajemen status agen (Available, Busy, ACW, Break), 
            pengawasan SLA &amp; AHT, serta <strong>Quality Monitoring &amp; Coaching</strong> terpadu untuk menjamin konsistensi pelayanan.
          </p>
        </div>
      </div>

      {/* Real-Time Operational Telemetry (Box 8) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Antrean Masuk (Waiting Queue)</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-white">4 Klien</span>
            <span className="text-xs text-amber-400 font-medium font-mono">ASA: 18 detik</span>
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-slate-400 border-t border-slate-800 pt-2">
            <span>WhatsApp: <strong className="text-emerald-400">3</strong></span>
            <span>Voice: <strong className="text-amber-400">1</strong></span>
            <span>Web Chat: <strong className="text-blue-400">0</strong></span>
          </div>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Status Agen Aktif (Headcount)</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-emerald-400">
              {agents.filter(a => a.status === 'AVAILABLE' || a.status === 'IN_CHAT' || a.status === 'ON_CALL').length} / {agents.length}
            </span>
            <span className="text-xs text-slate-400">Online</span>
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-slate-400 border-t border-slate-800 pt-2">
            <span>In-Call: 1</span>
            <span>In-Chat: 2</span>
            <span>Break: 1</span>
          </div>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Rata-rata Pencapaian SLA</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-blue-400">96,4%</span>
            <span className="text-xs text-emerald-400 font-semibold">+18,4 Poin</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2 border-t border-slate-800 pt-2">
            Target transformasi minimal 96% terpenuhi
          </p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Quality Monitoring (QM) Rata-rata</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-emerald-400">91,6</span>
            <span className="text-xs text-slate-400">/ 100</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2 border-t border-slate-800 pt-2">
            Evaluasi kepatuhan etiket &amp; SOP perbankan
          </p>
        </div>
      </div>

      {/* Live Agent Monitoring Grid (Box 8: Team Management & Assignment) */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-400" />
              Live Agent Status Board &amp; Real-Time Assignment
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Pantau status agen secara langsung, durasi interaksi berjalan, dan ganti alokasi status operasional.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((ag) => (
            <div
              key={ag.id}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={ag.avatar}
                    alt={ag.name}
                    className="w-10 h-10 rounded-xl object-cover ring-1 ring-slate-700"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">{ag.name}</h4>
                    <p className="text-[10px] text-slate-400">{ag.role}</p>
                  </div>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                  ag.status === 'AVAILABLE' ? 'bg-emerald-950 text-emerald-300 border-emerald-800' :
                  ag.status === 'ON_CALL' ? 'bg-amber-950 text-amber-300 border-amber-800 animate-pulse' :
                  ag.status === 'IN_CHAT' ? 'bg-blue-950 text-blue-300 border-blue-800' :
                  ag.status === 'AFTER_CALL_WORK' ? 'bg-purple-950 text-purple-300 border-purple-800' :
                  'bg-slate-800 text-slate-400 border-slate-700'
                }`}>
                  {ag.status.replace(/_/g, ' ')}
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">Klien Aktif:</span>
                  <strong className="text-slate-200 truncate max-w-[150px]">{ag.activeClient}</strong>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">Durasi Sesi:</span>
                  <span className="font-mono text-amber-400 font-bold">{ag.duration}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">SLA Achievement:</span>
                  <span className="font-mono text-emerald-400 font-bold">{ag.slaAchievement}%</span>
                </div>
              </div>

              {/* Status Change Buttons */}
              <div className="flex items-center justify-between pt-1 text-[10px]">
                <button
                  onClick={() => setSelectedAgentForQm(ag)}
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  &rarr; Nilai QM ({ag.qmScore})
                </button>

                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => handleUpdateAgentStatus(ag.id, 'AVAILABLE')}
                    className="p-1 rounded bg-slate-800 hover:bg-emerald-950 text-slate-300 hover:text-emerald-300"
                    title="Set Available"
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleUpdateAgentStatus(ag.id, 'BREAK')}
                    className="p-1 rounded bg-slate-800 hover:bg-amber-950 text-slate-300 hover:text-amber-300"
                    title="Set Break"
                  >
                    <Coffee className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Monitoring (QM) & Coaching Rubric (Box 8) */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-3">
          <div>
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-md bg-blue-600/20 text-blue-400 text-xs font-semibold mb-1">
              <Award className="w-3.5 h-3.5" />
              Quality Monitoring &amp; Coaching (Slide 5 &amp; Page 2)
            </div>
            <h2 className="text-xl font-bold text-white">
              Audit Kualitas Pelayanan &amp; Lembar Penilaian Coaching
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Supervisor mengevaluasi rekaman percakapan agen berdasarkan 4 parameter baku dengan bobot penilaian terukur.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <span className="text-slate-400">Agen Dievaluasi:</span>
            <span className="font-bold text-white bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              {selectedAgentForQm.name}
            </span>
          </div>
        </div>

        <form onSubmit={handleSaveQmEvaluation} className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Rubric Sliders */}
          <div className="lg:col-span-7 space-y-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-300">1. Pembukaan &amp; Verifikasi Identitas (Greeting &amp; KYC)</span>
                <span className="text-blue-400 font-mono font-bold">{qmGreeting} / 25 Poin</span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                value={qmGreeting}
                onChange={(e) => setQmGreeting(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <p className="text-[10px] text-slate-500">
                Memastikan agen menyapa sesuai standar perusahaan dan memverifikasi data NIK/KTP secara aman (UU PDP).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-300">2. Diagnosa Masalah &amp; Kepatuhan SOP (Problem Diagnosis)</span>
                <span className="text-emerald-400 font-mono font-bold">{qmDiagnosis} / 25 Poin</span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                value={qmDiagnosis}
                onChange={(e) => setQmDiagnosis(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <p className="text-[10px] text-slate-500">
                Mengikuti 8 SOP prioritas tanpa mengambil keputusan di luar batas kewenangan DOA.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-300">3. Ketepatan Solusi &amp; Resolusi Cepat (Solution Accuracy)</span>
                <span className="text-indigo-400 font-mono font-bold">{qmResolution} / 30 Poin</span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                value={qmResolution}
                onChange={(e) => setQmResolution(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <p className="text-[10px] text-slate-500">
                Menyelesaikan tiket dalam kontak pertama (FCR) atau membuat tiket Tier 2 dengan data lengkap.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex justify-between font-semibold">
                <span className="text-slate-300">4. Penutupan, Etiket &amp; CSAT Trigger (Closing Etiquette)</span>
                <span className="text-amber-400 font-mono font-bold">{qmEtiquette} / 20 Poin</span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                value={qmEtiquette}
                onChange={(e) => setQmEtiquette(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <p className="text-[10px] text-slate-500">
                Menawarkan bantuan tambahan dan mengirimkan survei kepuasan pelanggan WhatsApp secara teratur.
              </p>
            </div>
          </div>

          {/* Total QM Score & Coaching Notes Box */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center mb-4">
                <span className="text-xs text-slate-400 block mb-1">Total Skor Kualitas (QM Score)</span>
                <span className={`text-4xl font-black font-mono ${
                  totalQm >= 90 ? 'text-emerald-400' : totalQm >= 75 ? 'text-blue-400' : 'text-rose-400'
                }`}>
                  {totalQm} <span className="text-sm text-slate-500">/ 100</span>
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">
                  Status: {totalQm >= 90 ? 'Sangat Baik (Lolos Audit Bank)' : 'Perlu Coaching Pendampingan'}
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Catatan Coaching Supervisor (Feedback Langsung ke Scorecard):
                </label>
                <textarea
                  value={coachingNote}
                  onChange={(e) => setCoachingNote(e.target.value)}
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-100 focus:outline-none focus:border-blue-500 leading-relaxed"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition flex items-center justify-center gap-2 text-xs shadow-lg shadow-blue-600/25"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Simpan Evaluasi &amp; Kirim Catatan Coaching</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
