import React, { useState, useEffect } from 'react';
import { 
  Headphones, 
  MessageSquare, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  Send, 
  Bot, 
  User, 
  FileText, 
  CreditCard, 
  Activity, 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  Share2, 
  Star, 
  Play, 
  Pause, 
  Volume2, 
  ChevronRight, 
  Search, 
  Filter, 
  RefreshCw,
  ExternalLink,
  ThumbsUp,
  Sliders,
  Check
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'customer' | 'agent' | 'bot' | 'system';
  text: string;
  time: string;
  channel?: string;
  masked?: boolean;
}

interface InteractionEvent {
  id: string;
  date: string;
  time: string;
  channel: 'Voice / Call' | 'WhatsApp' | 'Email' | 'Chatbot' | 'Customer Portal' | 'Live Chat';
  subject: string;
  agent: string;
  outcome: string;
  csat?: number;
}

interface Customer360Data {
  id: string;
  name: string;
  nik: string;
  phone: string;
  email: string;
  company: string;
  tier: 'VIP Enterprise' | 'Platinum Corporate' | 'Gold Business';
  channel: 'WhatsApp' | 'Voice' | 'Live Chat' | 'Email';
  avatar: string;
  policy: {
    number: string;
    plan: string;
    status: 'ACTIVE' | 'PENDING' | 'EXPIRED';
    premium: string;
    validUntil: string;
  };
  billing: {
    outstanding: string;
    status: 'LUNAS' | 'MENUNGGU PEMBAYARAN' | 'JATUH TEMPO';
    dueDate: string;
    invoiceNo: string;
  };
  claim: {
    number: string;
    status: 'IN PROGRESS' | 'VERIFIKASI' | 'RESOLVED';
    category: string;
    reportedDate: string;
  };
  ticket: {
    number: string;
    priority: 'CRITICAL' | 'HIGH' | 'MEDIUM';
    slaHoursRemaining: number;
    tat: string;
    category: string;
  };
  timeline: InteractionEvent[];
  messages: ChatMessage[];
  voiceAudio?: {
    duration: string;
    currentSeconds: number;
    totalSeconds: number;
    transcriptSnippet: string;
  };
}

export const Customer360AgentWorkspace: React.FC = () => {
  // Sample Customers mapping exactly to the Page 2 & Case Study
  const initialCustomers: Customer360Data[] = [
    {
      id: 'CUST-001',
      name: 'Budi Santoso',
      nik: '3174092801820003',
      phone: '+62 812-9876-5432',
      email: 'budi.santoso@bankmega.co.id',
      company: 'Bank Mega Pratama Syariah',
      tier: 'VIP Enterprise',
      channel: 'WhatsApp',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      policy: {
        number: 'POL-ID-882910',
        plan: 'Omnichannel Enterprise 24/7 SLA 99.9%',
        status: 'ACTIVE',
        premium: 'Rp 14.500.000 / bln',
        validUntil: '31 Des 2027'
      },
      billing: {
        outstanding: 'Rp 250.000',
        status: 'MENUNGGU PEMBAYARAN',
        dueDate: '25 Sept 2026',
        invoiceNo: 'INV/2026/09/0812'
      },
      claim: {
        number: 'CLM-TAT-4019',
        status: 'IN PROGRESS',
        category: 'Dispute Transaksi BI-Fast Gantung',
        reportedDate: '15 Sept 2026, 09:30 WIB'
      },
      ticket: {
        number: 'TAT-0192',
        priority: 'CRITICAL',
        slaHoursRemaining: 1.4,
        tat: 'Target Resolusi: < 2 Jam',
        category: 'Billing & Transaksi Finansial'
      },
      timeline: [
        {
          id: 'TL-1',
          date: '15 Sept 2026',
          time: '09:30 WIB',
          channel: 'WhatsApp',
          subject: 'Komplain dana terdebet Rp 2.500.000 via BI-Fast namun status pending',
          agent: 'Budi Santoso (Agent)',
          outcome: 'Tiket TAT-0192 dibuat, verifikasi log mutasi'
        },
        {
          id: 'TL-2',
          date: '12 Sept 2026',
          time: '14:20 WIB',
          channel: 'Voice / Call',
          subject: 'Permintaan penambahan 10 user agent kantor cabang Surabaya',
          agent: 'Sarah Maharani',
          outcome: 'Penawaran add-on lisensi dikirimkan ke PIC procurement',
          csat: 5
        },
        {
          id: 'TL-3',
          date: '03 Sept 2026',
          time: '11:05 WIB',
          channel: 'Email',
          subject: 'Pemberitahuan pembaruan sertifikat SSL domain custom',
          agent: 'Sistem Otomatis',
          outcome: 'Sertifikat SSL sukses diperbarui'
        },
        {
          id: 'TL-4',
          date: '28 Agu 2026',
          time: '16:45 WIB',
          channel: 'Chatbot',
          subject: 'Pengecekan panduan integrasi webhook WhatsApp Cloud API',
          agent: 'ServeNow AI Bot',
          outcome: 'Self-service teratasi via Knowledge Base',
          csat: 4
        }
      ],
      messages: [
        {
          id: 'm1',
          sender: 'customer',
          text: 'Halo selamat pagi ServeNow Support, saya Budi dari Bank Mega Pratama. Mohon bantuan darurat.',
          time: '09:28 WIB',
          channel: 'WhatsApp'
        },
        {
          id: 'm2',
          sender: 'customer',
          text: 'Barusan nasabah prioritas transfer Rp 2.500.000 via BI-Fast nomor referensi BIF-991823, di rekening kami sudah terpotong tapi di bank tujuan status gantung.',
          time: '09:30 WIB',
          channel: 'WhatsApp'
        },
        {
          id: 'm3',
          sender: 'bot',
          text: '⚡ [AI Smart Recognition]: Akun terverifikasi Bank Mega Pratama Syariah (VIP Enterprise). Tiket TAT-0192 dibuka dengan SLA Prioritas 2 Jam. Routing ke Tim Spesialis Perbankan.',
          time: '09:30 WIB',
          channel: 'System'
        },
        {
          id: 'm4',
          sender: 'agent',
          text: 'Selamat pagi Pak Budi. Terima kasih telah menghubungi ServeNow Priority Desk. Saya Budi Santoso sedang melakukan tracing pada gateway switch ISO 8583 kami.',
          time: '09:32 WIB',
          channel: 'WhatsApp'
        },
        {
          id: 'm5',
          sender: 'customer',
          text: 'Baik, mohon dipercepat ya pak karena nasabah ada di depan customer service kantor cabang. Apakah perlu form sanggahan debet?',
          time: '09:34 WIB',
          channel: 'WhatsApp'
        }
      ]
    },
    {
      id: 'CUST-002',
      name: 'dr. Melinda Sianipar',
      nik: '1271028391020004',
      phone: '+62 821-4455-6677',
      email: 'melinda.s@siloamhospitals.com',
      company: 'Siloam Prima Hospital Group',
      tier: 'Platinum Corporate',
      channel: 'Voice',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
      policy: {
        number: 'POL-ID-772911',
        plan: 'Healthcare Connect & Telemedicine Suite',
        status: 'ACTIVE',
        premium: 'Rp 22.000.000 / bln',
        validUntil: '15 Okt 2027'
      },
      billing: {
        outstanding: 'Rp 0',
        status: 'LUNAS',
        dueDate: '10 Okt 2026',
        invoiceNo: 'INV/2026/09/0421'
      },
      claim: {
        number: 'CLM-HLT-9921',
        status: 'VERIFIKASI',
        category: 'Integrasi Webhook SatuSehat BPJS',
        reportedDate: '15 Sept 2026, 08:15 WIB'
      },
      ticket: {
        number: 'TAT-0198',
        priority: 'HIGH',
        slaHoursRemaining: 3.8,
        tat: 'Target Resolusi: < 4 Jam',
        category: 'Integrasi API SIMRS'
      },
      timeline: [
        {
          id: 'TL-10',
          date: '15 Sept 2026',
          time: '08:15 WIB',
          channel: 'Voice / Call',
          subject: 'Panggilan masuk terkait latency sinkronisasi antrean poliklinik',
          agent: 'Budi Santoso (Agent)',
          outcome: 'Pengecekan node server lokal Jakarta IDC'
        }
      ],
      messages: [
        {
          id: 'm10',
          sender: 'customer',
          text: 'Pagi tim ServeNow, ada keterlambatan notifikasi WhatsApp pengingat janji poli dokter spesialis pagi ini.',
          time: '08:16 WIB'
        }
      ],
      voiceAudio: {
        duration: '04:12',
        currentSeconds: 94,
        totalSeconds: 252,
        transcriptSnippet: 'dr. Melinda: "Kami mendapati antrean pendaftaran WhatsApp poli mata agak lambat sekitar 2 menit dari biasanya..." Agent: "Baik dok, kami sedang menaikkan alokasi thread gateway khusus rumah sakit."'
      }
    },
    {
      id: 'CUST-003',
      name: 'Johan Santoso',
      nik: '3578019283740008',
      phone: '+62 813-2233-4455',
      email: 'johan@surabayaretailindo.co.id',
      company: 'Surabaya Mega Retailindo',
      tier: 'Gold Business',
      channel: 'Live Chat',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
      policy: {
        number: 'POL-ID-663812',
        plan: 'Fast-Commerce Retail Standard',
        status: 'ACTIVE',
        premium: 'Rp 7.500.000 / bln',
        validUntil: '20 Nov 2026'
      },
      billing: {
        outstanding: 'Rp 7.500.000',
        status: 'JATUH TEMPO',
        dueDate: '10 Sept 2026',
        invoiceNo: 'INV/2026/09/0112'
      },
      claim: {
        number: 'CLM-RET-3310',
        status: 'IN PROGRESS',
        category: 'Kendala Auto-Responder Promo 9.9',
        reportedDate: '14 Sept 2026, 17:00 WIB'
      },
      ticket: {
        number: 'TAT-0205',
        priority: 'MEDIUM',
        slaHoursRemaining: 6.2,
        tat: 'Target Resolusi: < 8 Jam',
        category: 'Katalog & Bot Pengiriman'
      },
      timeline: [
        {
          id: 'TL-20',
          date: '14 Sept 2026',
          time: '17:00 WIB',
          channel: 'Live Chat',
          subject: 'Pengaturan ulang auto-reply campaign diskon weekend',
          agent: 'Doni Pratama',
          outcome: 'Bot rule disesuaikan'
        }
      ],
      messages: [
        {
          id: 'm20',
          sender: 'customer',
          text: 'Halo, apakah tagihan kami yang jatuh tempo tanggal 10 sudah masuk rekonsiliasi transfer virtual account BCA?',
          time: '10:02 WIB'
        }
      ]
    }
  ];

  const [customers, setCustomers] = useState<Customer360Data[]>(initialCustomers);
  const [selectedCustId, setSelectedCustId] = useState<string>('CUST-001');
  const [inputText, setInputText] = useState<string>('');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [activeDispositionModal, setActiveDispositionModal] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [channelFilter, setChannelFilter] = useState<string>('ALL');
  const [surveyScore, setSurveyScore] = useState<number>(5);
  const [escalateReason, setEscalateReason] = useState<string>('Dispute nominal >Rp 2 Juta memerlukan otorisasi Supervisor Ops.');
  const [fcrCounter, setFcrCounter] = useState<number>(84); // First Contact Resolution Metric

  const currentCust = customers.find(c => c.id === selectedCustId) || customers[0];

  // Send message
  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'agent',
      text: inputText,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB',
      channel: currentCust.channel
    };

    setCustomers(customers.map(c => {
      if (c.id === currentCust.id) {
        return {
          ...c,
          messages: [...c.messages, newMsg]
        };
      }
      return c;
    }));

    setInputText('');
  };

  // AI Quick suggestions
  const handleApplyAiSuggestion = (suggestion: string) => {
    setInputText(suggestion);
  };

  // Execute Disposition (The 6 Actions in Page 2 Diagram!)
  const handleExecuteDisposition = (actionType: string) => {
    const timestamp = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB';
    const dateStr = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

    if (actionType === 'resolve') {
      // 1. Resolve (Solve in 1st contact)
      setFcrCounter(prev => prev + 1);
      const newEvent: InteractionEvent = {
        id: `TL-${Date.now()}`,
        date: dateStr,
        time: timestamp,
        channel: currentCust.channel === 'Voice' ? 'Voice / Call' : 'WhatsApp',
        subject: `Tiket ${currentCust.ticket.number} Selesai pada Kontak Pertama (FCR)`,
        agent: 'Budi Santoso (Agent)',
        outcome: 'Problem solved in 1st interaction, SLA terpenuhi 100%'
      };

      setCustomers(customers.map(c => {
        if (c.id === currentCust.id) {
          return {
            ...c,
            claim: { ...c.claim, status: 'RESOLVED' },
            timeline: [newEvent, ...c.timeline],
            messages: [
              ...c.messages,
              {
                id: `sys-${Date.now()}`,
                sender: 'system',
                text: `✅ [DISPOSITION RESOLVED]: Tiket ${c.ticket.number} ditandai tuntas (First Contact Resolution). Notifikasi pemulihan dikirim ke nasabah.`,
                time: timestamp
              }
            ]
          };
        }
        return c;
      }));
      setActiveDispositionModal(null);
      alert(`Sukses: Tiket ${currentCust.ticket.number} berhasil diselesaikan pada kontak pertama! FCR rate meningkat.`);
    } else if (actionType === 'escalate') {
      // 2. Escalate to Supervisor / Tier 2
      const newEvent: InteractionEvent = {
        id: `TL-${Date.now()}`,
        date: dateStr,
        time: timestamp,
        channel: 'WhatsApp',
        subject: `Eskalasi ke Supervisor Ops: ${escalateReason}`,
        agent: 'Budi Santoso (Agent) -> Dian Paramita (Head)',
        outcome: 'Eskalasi sesuai DOA Matrix wewenang tingkat 1'
      };

      setCustomers(customers.map(c => {
        if (c.id === currentCust.id) {
          return {
            ...c,
            ticket: { ...c.ticket, priority: 'CRITICAL' },
            timeline: [newEvent, ...c.timeline],
            messages: [
              ...c.messages,
              {
                id: `sys-${Date.now()}`,
                sender: 'system',
                text: `⚠️ [ESKALASI TIER 2 / SUPERVISOR]: Tiket dialihkan ke antrean Supervisor Ops dengan catatan: "${escalateReason}".`,
                time: timestamp
              }
            ]
          };
        }
        return c;
      }));
      setActiveDispositionModal(null);
      alert(`Eskalasi berhasil dikirim ke Supervisor Workspace sesuai protokol DOA Matrix.`);
    } else if (actionType === 'survey') {
      // 3. Send CSAT Survey
      const newEvent: InteractionEvent = {
        id: `TL-${Date.now()}`,
        date: dateStr,
        time: timestamp,
        channel: 'WhatsApp',
        subject: `Survei Kepuasan Pelanggan (CSAT) Dikirimkan: Skor ${surveyScore}/5 Bintang`,
        agent: 'Automated CSAT Trigger',
        outcome: `Nasabah memberikan rating ${surveyScore} dari 5 bintang`,
        csat: surveyScore
      };

      setCustomers(customers.map(c => {
        if (c.id === currentCust.id) {
          return {
            ...c,
            timeline: [newEvent, ...c.timeline],
            messages: [
              ...c.messages,
              {
                id: `sys-${Date.now()}`,
                sender: 'bot',
                text: `⭐ [SURVEY CSAT TERKIRIM]: Pesan otomatis telah dikirim via WhatsApp: "Terima kasih atas interaksi bersama ServeNow. Berikan penilaian Anda dari 1-5 bintang." [Rating Tercatat: ${surveyScore}/5 ⭐]`,
                time: timestamp
              }
            ]
          };
        }
        return c;
      }));
      setActiveDispositionModal(null);
      alert(`Survei kepuasan layanan (CSAT) berhasil dikirim dan dicatat ke riwayat interaksi pelanggan!`);
    } else if (actionType === 'callback') {
      // 4. Callback / Follow-up
      const newEvent: InteractionEvent = {
        id: `TL-${Date.now()}`,
        date: dateStr,
        time: timestamp,
        channel: 'Voice / Call',
        subject: 'Jadwal Callback Kontak Ulang: Besok 10:00 WIB',
        agent: 'Budi Santoso',
        outcome: 'Pengingat otomatis masuk ke kalender agen'
      };
      setCustomers(customers.map(c => {
        if (c.id === currentCust.id) {
          return {
            ...c,
            timeline: [newEvent, ...c.timeline],
            messages: [
              ...c.messages,
              {
                id: `sys-${Date.now()}`,
                sender: 'system',
                text: `📅 [CALLBACK SCHEDULED]: Kontak tindak lanjut dijadwalkan pada hari kerja berikutnya pukul 10:00 WIB.`,
                time: timestamp
              }
            ]
          };
        }
        return c;
      }));
      setActiveDispositionModal(null);
      alert(`Jadwal kontak ulang (Callback) telah disimpan di sistem kalender.`);
    } else if (actionType === 'sales') {
      // 5. Refer to Sales
      const newEvent: InteractionEvent = {
        id: `TL-${Date.now()}`,
        date: dateStr,
        time: timestamp,
        channel: 'Customer Portal',
        subject: 'Lead Referral: Pelanggan menanyakan upgrade paket Enterprise Multi-Branch',
        agent: 'Budi Santoso -> Tim SDR Sales',
        outcome: 'Lead terkirim ke Pipeline CRM 8-Tahap'
      };
      setCustomers(customers.map(c => {
        if (c.id === currentCust.id) {
          return {
            ...c,
            timeline: [newEvent, ...c.timeline],
            messages: [
              ...c.messages,
              {
                id: `sys-${Date.now()}`,
                sender: 'system',
                text: `💼 [SALES REFERRAL]: Minat ekspansi pelanggan telah diteruskan ke Account Executive (AE) di pipeline CRM.`,
                time: timestamp
              }
            ]
          };
        }
        return c;
      }));
      setActiveDispositionModal(null);
      alert(`Prospek ekspansi telah diteruskan ke pipeline penjualan Account Executive.`);
    }
  };

  const filteredCustomers = customers.filter(c => {
    const matchName = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                      c.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchChannel = channelFilter === 'ALL' || c.channel === channelFilter;
    return matchName && matchChannel;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Top Banner: Intelligent Inbound Customer Service Desk */}
      <div className="glass-card rounded-2xl p-5 md:p-6 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="p-3 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
            <Headphones className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded border border-blue-700/50">
                BOX 4 • SINGLE SCREEN WORKSPACE
              </span>
              <span className="text-xs text-slate-400 font-mono">Agent: Budi Santoso</span>
            </div>
            <h1 className="text-xl md:text-2xl font-black text-white mt-1">
              Customer 360 Agent Workspace
            </h1>
            <p className="text-xs text-slate-300">
              Customer Recognition &bull; Smart Routing &bull; Customer 360 &bull; Faster Resolution &bull; Better Experience
            </p>
          </div>
        </div>

        {/* Live Operational Metrics (FCR & SLA) */}
        <div className="flex items-center space-x-3 self-stretch md:self-auto">
          <div className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-center flex-1 md:flex-none">
            <span className="text-[10px] text-slate-400 block">First Contact Resolution (FCR)</span>
            <span className="text-base font-black text-emerald-400 font-mono">{fcrCounter}%</span>
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-center flex-1 md:flex-none">
            <span className="text-[10px] text-slate-400 block">Kepatuhan SLA Berjalan</span>
            <span className="text-base font-black text-blue-400 font-mono">98,2%</span>
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-center flex-1 md:flex-none">
            <span className="text-[10px] text-slate-400 block">Avg Handling Time (AHT)</span>
            <span className="text-base font-black text-slate-200 font-mono">03:42</span>
          </div>
        </div>
      </div>

      {/* Main 3-Column Enterprise Workspace (Matching Page 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* ================= COLUMN 1: SMART INTAKE & OMNICHANNEL QUEUE ================= */}
        <div className="lg:col-span-3 glass-card rounded-2xl p-4 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-blue-400" /> Antrean Masuk (Queue)
              </span>
              <span className="text-[10px] font-mono bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-800">
                {filteredCustomers.length} Sesi Aktif
              </span>
            </div>

            {/* Search Box */}
            <div className="relative mb-3">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Cari nama, NIK, bank..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Channel Filters */}
            <div className="flex items-center space-x-1 mb-3 overflow-x-auto pb-1 text-[10px] scrollbar-none">
              {['ALL', 'WhatsApp', 'Voice', 'Live Chat'].map(ch => (
                <button
                  key={ch}
                  onClick={() => setChannelFilter(ch)}
                  className={`px-2 py-1 rounded-lg font-medium whitespace-nowrap transition ${
                    channelFilter === ch
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  {ch}
                </button>
              ))}
            </div>

            {/* Customer List */}
            <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
              {filteredCustomers.map((cust) => {
                const isSelected = selectedCustId === cust.id;
                return (
                  <div
                    key={cust.id}
                    onClick={() => setSelectedCustId(cust.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition ${
                      isSelected
                        ? 'bg-blue-950/50 border-blue-500 shadow-md ring-1 ring-blue-500'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1.5">
                      <div className="flex items-center space-x-2.5">
                        <img
                          src={cust.avatar}
                          alt={cust.name}
                          className="w-8 h-8 rounded-lg object-cover ring-1 ring-slate-700"
                        />
                        <div className="min-w-0">
                          <h4 className="text-xs font-bold text-white truncate">{cust.name}</h4>
                          <p className="text-[10px] text-slate-400 truncate">{cust.company}</p>
                        </div>
                      </div>

                      <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border shrink-0 ${
                        cust.channel === 'WhatsApp' ? 'bg-emerald-950 text-emerald-300 border-emerald-800' :
                        cust.channel === 'Voice' ? 'bg-amber-950 text-amber-300 border-amber-800' :
                        'bg-blue-950 text-blue-300 border-blue-800'
                      }`}>
                        {cust.channel}
                      </span>
                    </div>

                    <div className="mt-2 text-[10px] text-slate-400 truncate bg-slate-950/60 p-1.5 rounded">
                      "{cust.messages[cust.messages.length - 1]?.text || 'Percakapan berlangsung...'}"
                    </div>

                    <div className="mt-2 pt-1.5 border-t border-slate-800 flex items-center justify-between text-[10px]">
                      <span className="text-rose-400 font-mono font-bold flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" /> SLA: {cust.ticket.slaHoursRemaining} Jam
                      </span>
                      <span className="text-slate-500 font-mono">{cust.ticket.number}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-3 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[10px] text-slate-400">
            <span className="text-emerald-400 font-semibold block mb-0.5">Smart Routing & SLA Trigger:</span>
            Otomatis mencocokkan keterampilan agen dengan sektor industri nasabah (BFSI / Healthcare).
          </div>
        </div>

        {/* ================= COLUMN 2: CUSTOMER 360 SINGLE SCREEN WORKSPACE ================= */}
        <div className="lg:col-span-6 space-y-4">
          {/* Header Customer Profile Banner */}
          <div className="glass-card rounded-2xl p-4 md:p-5 border border-slate-800">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 border-b border-slate-800 gap-3">
              <div className="flex items-center space-x-3.5">
                <img
                  src={currentCust.avatar}
                  alt={currentCust.name}
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-blue-500/40 shadow-md"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-base font-extrabold text-white">{currentCust.name}</h2>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50">
                      {currentCust.tier}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {currentCust.company} &bull; NIK: <span className="font-mono text-slate-300">{currentCust.nik}</span>
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Telp: {currentCust.phone} &bull; Email: {currentCust.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 self-end sm:self-auto">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  KTP & KYC Terverifikasi
                </span>
              </div>
            </div>

            {/* THE 4 PILLARS FROM PAGE 2 DIAGRAM: POLICY, BILLING, CLAIM, TICKET */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3 text-xs">
              {/* Box 1: POLICY */}
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
                  1. POLICY / PLAN
                </span>
                <p className="text-[11px] font-bold text-white truncate">{currentCust.policy.plan}</p>
                <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                  <span className="text-emerald-400 font-semibold">{currentCust.policy.status}</span>
                  <span className="font-mono">{currentCust.policy.number}</span>
                </div>
              </div>

              {/* Box 2: BILLING */}
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  2. BILLING STATUS
                </span>
                <p className="text-[11px] font-bold text-white truncate">{currentCust.billing.outstanding}</p>
                <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                  <span className={`font-semibold ${currentCust.billing.status === 'LUNAS' ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {currentCust.billing.status}
                  </span>
                  <span>Due: {currentCust.billing.dueDate.split(' ')[0]}</span>
                </div>
              </div>

              {/* Box 3: CLAIM / DISPUTE */}
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block mb-1">
                  3. CLAIM / DISPUTE
                </span>
                <p className="text-[11px] font-bold text-white truncate">{currentCust.claim.category}</p>
                <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                  <span className="text-indigo-400 font-semibold">{currentCust.claim.status}</span>
                  <span className="font-mono">{currentCust.claim.number}</span>
                </div>
              </div>

              {/* Box 4: TICKET */}
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block mb-1">
                  4. OPEN TICKET
                </span>
                <p className="text-[11px] font-bold text-rose-300 truncate">{currentCust.ticket.number}</p>
                <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                  <span className="text-rose-400 font-bold">{currentCust.ticket.priority}</span>
                  <span className="font-mono">{currentCust.ticket.slaHoursRemaining}h SLA</span>
                </div>
              </div>
            </div>
          </div>

          {/* ACTIVE CONTEXT & CONVERSATION AREA */}
          <div className="glass-card rounded-2xl p-4 md:p-5 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  Kanal Aktif: <strong className="text-blue-300">{currentCust.channel}</strong>
                </span>
                <span className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                  Terhubung Langsung
                </span>
              </div>

              {/* UU PDP Protection status */}
              <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800 font-mono flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> UU PDP Active Scrubber
              </span>
            </div>

            {/* Audio Waveform Player if Voice Channel */}
            {currentCust.channel === 'Voice' && currentCust.voiceAudio && (
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/30 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-bold text-amber-300">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Rekaman Suara Panggilan Masuk (Call Recording & Playback)</span>
                  </div>
                  <span className="text-xs font-mono text-slate-300">{currentCust.voiceAudio.duration}</span>
                </div>

                {/* Interactive Player Controls */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-9 h-9 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold flex items-center justify-center transition shadow-md"
                  >
                    {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>

                  <div className="flex-1 space-y-1">
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-amber-400 h-full rounded-full transition-all duration-300"
                        style={{ width: isPlayingAudio ? '60%' : '37%' }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                      <span>{isPlayingAudio ? '02:31' : '01:34'}</span>
                      <span>{currentCust.voiceAudio.duration}</span>
                    </div>
                  </div>

                  <Volume2 className="w-4 h-4 text-slate-400" />
                </div>

                <div className="text-[11px] text-slate-300 bg-slate-950 p-2 rounded-lg border border-slate-800/80 italic font-mono">
                  Transkrip AI: "{currentCust.voiceAudio.transcriptSnippet}"
                </div>
              </div>
            )}

            {/* Message Bubble Stream */}
            <div className="space-y-3 max-h-[300px] overflow-y-auto p-2 rounded-xl bg-slate-950/60 border border-slate-900">
              {currentCust.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'agent'
                      ? 'items-end'
                      : msg.sender === 'customer'
                      ? 'items-start'
                      : 'items-center'
                  }`}
                >
                  {msg.sender === 'system' || msg.sender === 'bot' ? (
                    <div className="text-[10px] text-slate-400 bg-slate-900 px-3 py-1.5 rounded-full border border-slate-800 my-1 max-w-md text-center leading-relaxed">
                      {msg.text}
                    </div>
                  ) : (
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                        msg.sender === 'agent'
                          ? 'bg-blue-600 text-white rounded-br-none shadow-md'
                          : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4 mb-1 text-[10px] opacity-80">
                        <span className="font-semibold">{msg.sender === 'agent' ? 'Budi Santoso (Anda)' : currentCust.name}</span>
                        <span>{msg.time}</span>
                      </div>
                      <p>{msg.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* AI Agent Smart Suggestions */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-blue-400 flex items-center gap-1">
                  <Bot className="w-3.5 h-3.5" /> Rekomendasi Jawaban Cerdas (AI Agent Assist):
                </span>
                <span className="text-[10px] text-slate-500 font-mono">1-Click Insert</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => handleApplyAiSuggestion('Baik Pak Budi, kami telah melakukan trace pada sistem gateway switch BI-Fast. Status dana saat ini sudah kami kirimkan ke tim settlement untuk proses reversal otomatis dalam 15 menit ke depan.')}
                  className="px-2.5 py-1 rounded-lg bg-blue-950/80 hover:bg-blue-900/80 text-blue-200 border border-blue-800/60 text-[11px] text-left transition"
                >
                  💡 Konfirmasi Trace Reversal BI-Fast
                </button>
                <button
                  onClick={() => handleApplyAiSuggestion('Untuk kelengkapan arsip audit perbankan OJK, mohon izin kami lampirkan tautan formulir sanggahan debet elektronik langsung di aplikasi mobile banking nasabah.')}
                  className="px-2.5 py-1 rounded-lg bg-blue-950/80 hover:bg-blue-900/80 text-blue-200 border border-blue-800/60 text-[11px] text-left transition"
                >
                  📄 Kirim Tautan Sanggahan Debet OJK
                </button>
              </div>
            </div>

            {/* Reply Composer */}
            <form onSubmit={handleSendMessage} className="flex items-center space-x-2 pt-1">
              <input
                type="text"
                placeholder={`Balas pesan ke ${currentCust.name} via ${currentCust.channel}...`}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition flex items-center gap-1.5 text-xs shadow-lg shadow-blue-600/30"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim</span>
              </button>
            </form>
          </div>

          {/* INTERACTION TIMELINE (BOX 7 IN PAGE 2 DIAGRAM) */}
          <div className="glass-card rounded-2xl p-4 md:p-5 border border-slate-800">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
              <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" /> Interaction Timeline (Riwayat Interaksi)
              </span>
              <span className="text-[10px] text-slate-400">Terintegrasi Lintas Kanal</span>
            </div>

            <div className="relative pl-4 border-l border-slate-800 space-y-3 max-h-[180px] overflow-y-auto">
              {currentCust.timeline.map((evt) => (
                <div key={evt.id} className="relative text-xs">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-slate-950"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-blue-400 font-mono">
                      {evt.date} &bull; {evt.time}
                    </span>
                    <span className="text-[10px] text-slate-400 px-1.5 py-0.2 rounded bg-slate-900 border border-slate-800">
                      {evt.channel}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-white mt-0.5">{evt.subject}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Hasil: <span className="text-slate-300">{evt.outcome}</span> &bull; Agent: {evt.agent}
                  </p>
                  {evt.csat && (
                    <div className="mt-1 flex items-center gap-1 text-[10px] text-amber-300 font-semibold">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> CSAT Score: {evt.csat} / 5
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= COLUMN 3: DISPOSITION & NEXT ACTION (BOX 5 IN PAGE 2 DIAGRAM) ================= */}
        <div className="lg:col-span-3 space-y-4">
          <div className="glass-card rounded-2xl p-4 md:p-5 border border-slate-800 space-y-4">
            <div className="pb-3 border-b border-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
                BOX 5 &bull; DISPOSITION
              </span>
              <h3 className="text-sm font-bold text-white mt-1">Disposisi & Aksi Berikutnya</h3>
              <p className="text-[11px] text-slate-400">Eksekusi alur tindak lanjut interaksi</p>
            </div>

            {/* The 6 Action Buttons from Page 2 Diagram */}
            <div className="space-y-2">
              {/* Action 1: Resolved (1st contact) */}
              <button
                onClick={() => handleExecuteDisposition('resolve')}
                className="w-full p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center justify-between shadow-md shadow-emerald-600/20"
              >
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> 1. Resolved (Solve 1st Contact)
                </span>
                <span className="text-[10px] bg-emerald-800 px-1.5 py-0.5 rounded">FCR</span>
              </button>

              {/* Action 2: Create Ticket */}
              <button
                onClick={() => alert(`Tiket ${currentCust.ticket.number} telah diperbarui statusnya ke Tier 2 Assignment.`)}
                className="w-full p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-semibold transition flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-400" /> 2. Create Ticket (Tier 2)
                </span>
                <span className="text-[10px] text-slate-400">TAT-0192</span>
              </button>

              {/* Action 3: Escalate to Supervisor */}
              <button
                onClick={() => setActiveDispositionModal('escalate')}
                className="w-full p-2.5 rounded-xl bg-slate-900 hover:bg-amber-950/60 text-slate-200 hover:text-amber-200 border border-slate-700/80 hover:border-amber-700 transition flex items-center justify-between text-xs font-semibold"
              >
                <span className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" /> 3. Escalate (Spv / Dept)
                </span>
                <span className="text-[10px] text-amber-400 font-mono">DOA Gate</span>
              </button>

              {/* Action 4: Callback / Follow-up */}
              <button
                onClick={() => handleExecuteDisposition('callback')}
                className="w-full p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-semibold transition flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-400" /> 4. Callback / Follow-up
                </span>
                <span className="text-[10px] text-slate-400">Jadwal</span>
              </button>

              {/* Action 5: Refer to Sales */}
              <button
                onClick={() => handleExecuteDisposition('sales')}
                className="w-full p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-xs font-semibold transition flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-emerald-400" /> 5. Refer to Sales / Lead
                </span>
                <span className="text-[10px] text-emerald-400">CRM 8-Stg</span>
              </button>

              {/* Action 6: Send CSAT Survey */}
              <button
                onClick={() => setActiveDispositionModal('survey')}
                className="w-full p-2.5 rounded-xl bg-slate-900 hover:bg-purple-950/60 text-slate-200 hover:text-purple-200 border border-slate-700/80 hover:border-purple-700 text-xs font-semibold transition flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-purple-400" /> 6. Send Survey (CSAT)
                </span>
                <span className="text-[10px] text-purple-300">WA Poll</span>
              </button>
            </div>
          </div>

          {/* Contextual Knowledge SOP Recommendations (Page 2) */}
          <div className="glass-card rounded-2xl p-4 md:p-5 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-400" /> Rekomendasi SOP Resmi
              </span>
              <span className="text-[10px] text-emerald-400 font-semibold">Tervalidasi</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-blue-300">SOP-01: Reversal BI-Fast</span>
                  <span className="text-[9px] bg-slate-950 text-slate-400 px-1.5 py-0.5 rounded">OJK Compliant</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Langkah verifikasi kode switch ISO 8583 dan penerbitan bukti reversal otomatis.
                </p>
                <button
                  onClick={() => handleApplyAiSuggestion('Sesuai SOP-01 Reversal BI-Fast, transaksi Anda dengan ref BIF-991823 telah diverifikasi di gateway nasional dan saldo akan dikembalikan ke rekening asal paling lambat pukul 11.00 WIB.')}
                  className="text-[10px] font-semibold text-blue-400 hover:text-blue-300 pt-1 block"
                >
                  &rarr; Masukkan Teks SOP ke Chat
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-purple-300">SOP-03: Kepatuhan UU PDP</span>
                  <span className="text-[9px] bg-slate-950 text-slate-400 px-1.5 py-0.5 rounded">Edge Scrubber</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Protokol penyamaran 16 digit NIK dan nomor rekening nasabah sebelum eksport tiket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Escalation Modal */}
      {activeDispositionModal === 'escalate' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" /> Otorisasi Eskalasi (DOA Matrix)
              </h3>
              <button onClick={() => setActiveDispositionModal(null)} className="text-slate-400 hover:text-white">&times;</button>
            </div>

            <p className="text-xs text-slate-300">
              Eskalasi tiket <strong>{currentCust.ticket.number}</strong> memerlukan catatan rasional untuk Supervisor Ops:
            </p>

            <textarea
              value={escalateReason}
              onChange={(e) => setEscalateReason(e.target.value)}
              rows={3}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
            ></textarea>

            <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-500/30 text-[11px] text-amber-200">
              Berdasarkan DOA Matrix, isu Severity 1 &gt;Rp 2 Juta dialihkan ke Supervisor Desk untuk persetujuan manual.
            </div>

            <div className="flex justify-end space-x-2 pt-2">
              <button
                onClick={() => setActiveDispositionModal(null)}
                className="px-3 py-1.5 rounded-lg text-xs text-slate-300 bg-slate-800 hover:bg-slate-700"
              >
                Batal
              </button>
              <button
                onClick={() => handleExecuteDisposition('escalate')}
                className="px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-amber-600 hover:bg-amber-500"
              >
                Kirim Eskalasi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Survey Modal */}
      {activeDispositionModal === 'survey' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-md w-full space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Star className="w-4 h-4 text-purple-400" /> Kirim Survei Kepuasan CSAT
              </h3>
              <button onClick={() => setActiveDispositionModal(null)} className="text-slate-400 hover:text-white">&times;</button>
            </div>

            <p className="text-xs text-slate-300">
              Kirimkan kuesioner instan otomatis via {currentCust.channel} ke {currentCust.name}:
            </p>

            <div className="flex items-center justify-center space-x-2 py-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setSurveyScore(star)}
                  className={`p-2 rounded-xl transition ${
                    surveyScore >= star ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  <Star className={`w-6 h-6 ${surveyScore >= star ? 'fill-amber-400' : ''}`} />
                </button>
              ))}
            </div>

            <p className="text-center text-xs font-bold text-white font-mono">
              Rating Penilaian: {surveyScore} / 5 Bintang
            </p>

            <div className="flex justify-end space-x-2 pt-2">
              <button
                onClick={() => setActiveDispositionModal(null)}
                className="px-3 py-1.5 rounded-lg text-xs text-slate-300 bg-slate-800 hover:bg-slate-700"
              >
                Batal
              </button>
              <button
                onClick={() => handleExecuteDisposition('survey')}
                className="px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-purple-600 hover:bg-purple-500"
              >
                Kirim Survei
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
