import React, { useState } from 'react';
import { CUSTOMER_ACCOUNTS, MOCK_TICKETS } from '../data/mockData';
import { CustomerAccount, OmnichannelTicket } from '../types';
import { 
  Headphones, 
  ShieldAlert, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  Smartphone, 
  Clock, 
  Bot, 
  Search, 
  ChevronRight,
  TrendingUp,
  User,
  Building,
  Activity,
  HeartHandshake
} from 'lucide-react';

export const Customer360Hub: React.FC = () => {
  const [accounts, setAccounts] = useState<CustomerAccount[]>(CUSTOMER_ACCOUNTS);
  const [tickets, setTickets] = useState<OmnichannelTicket[]>(MOCK_TICKETS);
  const [selectedAccountId, setSelectedAccountId] = useState<string>(CUSTOMER_ACCOUNTS[0].id);
  const [selectedTicketId, setSelectedTicketId] = useState<string>(MOCK_TICKETS[0].id);
  const [filterChannel, setFilterChannel] = useState<string>('ALL');

  const selectedAccount = accounts.find(a => a.id === selectedAccountId) || accounts[0];
  const selectedTicket = tickets.find(t => t.id === selectedTicketId) || tickets[0];

  const getChannelIcon = (ch: OmnichannelTicket['channel']) => {
    switch (ch) {
      case 'WhatsApp': return <MessageSquare className="w-4 h-4 text-emerald-400" />;
      case 'Live Chat': return <MessageSquare className="w-4 h-4 text-blue-400" />;
      case 'Voice': return <Phone className="w-4 h-4 text-amber-400" />;
      case 'Email': return <Mail className="w-4 h-4 text-purple-400" />;
      case 'Mobile App': return <Smartphone className="w-4 h-4 text-indigo-400" />;
    }
  };

  const getSentimentBadge = (st: OmnichannelTicket['sentiment']) => {
    switch (st) {
      case 'Angry': return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-950 text-rose-300 border border-rose-800">😡 Sangat Kecewa</span>;
      case 'Frustrated': return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-950 text-amber-300 border border-amber-800">😟 Frustrasi</span>;
      case 'Neutral': return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">😐 Netral</span>;
      case 'Positive': return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">😊 Puas</span>;
    }
  };

  const filteredTickets = filterChannel === 'ALL' 
    ? tickets 
    : tickets.filter(t => t.channel === filterChannel);

  const handleResolveTicket = (id: string) => {
    setTickets(tickets.map(t => t.id === id ? { ...t, status: 'Resolved' } : t));
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="glass-card rounded-2xl p-6 md:p-8 border border-slate-800">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Headphones className="w-3.5 h-3.5 text-blue-400" />
            Pilar N: Nail Reliability • Customer 360 Workspace
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            Customer 360 Workspace & Radar Retensi 90-Hari
          </h1>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Menyatukan seluruh interaksi pelanggan (WhatsApp, Voice, Live Chat, Email) ke dalam <strong>1 Layar Tunggal</strong> dengan bantuan AI Agent Assist dan analisis sentimen real-time. 
            Mencegah <i>churn</i> dengan memantau skor kesehatan akun (*Health Score*) pada fase kritis 90 hari pertama dan menaikkan kepatuhan SLA dari <strong>78% ke ≥96%</strong>.
          </p>
        </div>
      </div>

      {/* Reliability KPI Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Pencapaian SLA Pelayanan</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-rose-400">78%</span>
            <span className="text-slate-500">&rarr;</span>
            <span className="text-2xl font-black text-emerald-400">96,4%</span>
          </div>
          <p className="text-[11px] text-emerald-400 font-semibold mt-2">Target minimal &ge;96% terlampaui</p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Keluhan Layanan Kritis</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-rose-400">43 Kasus</span>
            <span className="text-slate-500">&rarr;</span>
            <span className="text-2xl font-black text-blue-400">&le; 4 / kuartal</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Pangkas 72% beban penanganan insiden darurat</p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Tingkat Retensi & Churn</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-rose-400">16,7%</span>
            <span className="text-slate-500">&rarr;</span>
            <span className="text-2xl font-black text-emerald-400">&lt; 4,2%</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Menutup kebocoran 44% hasil akuisisi tim sales</p>
        </div>

        <div className="glass-card rounded-xl p-5 border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">AI Automated Deflection</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-black text-indigo-400">42,8%</span>
            <span className="text-xs text-slate-400">Tiket Terjawab Otomatis</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">Resolusi tingkat pertama (FCR) naik tajam</p>
        </div>
      </div>

      {/* Customer 360 Workspace & Omnichannel Center */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Client Account & Churn Radar */}
        <div className="lg:col-span-4 glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-blue-400" />
                <h3 className="text-sm font-bold text-white">Akun Pelanggan Terdaftar</h3>
              </div>
              <span className="text-[11px] text-slate-400">{accounts.length} Akun Terpantau</span>
            </div>

            <div className="space-y-2.5 max-h-[520px] overflow-y-auto pr-1">
              {accounts.map((acc) => {
                const isSelected = selectedAccountId === acc.id;
                const isDanger90Day = acc.onboardingDay <= 90 && acc.healthScore < 75;

                return (
                  <div
                    key={acc.id}
                    onClick={() => setSelectedAccountId(acc.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition ${
                      isSelected
                        ? 'bg-blue-950/50 border-blue-500 shadow-md ring-1 ring-blue-500'
                        : isDanger90Day
                        ? 'bg-rose-950/20 border-rose-500/40 hover:bg-rose-950/30'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1">
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <span className="text-xs font-bold text-white">{acc.name}</span>
                          {acc.isOutsideJabodetabek && (
                            <span className="text-[9px] bg-slate-800 text-blue-300 px-1.5 py-0.2 rounded border border-slate-700">
                              Luar Jabodetabek
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400">{acc.sector}</p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                          acc.healthScore >= 90
                            ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                            : acc.healthScore >= 70
                            ? 'bg-blue-950 text-blue-300 border-blue-800'
                            : 'bg-rose-950 text-rose-300 border-rose-800 animate-pulse'
                        }`}>
                          Health: {acc.healthScore}
                        </span>
                      </div>
                    </div>

                    {isDanger90Day && (
                      <div className="mt-2 text-[10px] text-rose-300 bg-rose-950/60 p-1.5 rounded border border-rose-800 flex items-center gap-1">
                        <ShieldAlert className="w-3 h-3 text-rose-400 shrink-0" />
                        <span>Fase 90 Hari Kritis! Risiko Churn Terdeteksi.</span>
                      </div>
                    )}

                    <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                      <span>ARR: <strong className="text-slate-200">Rp {acc.arrMillion} Jt</strong></span>
                      <span>Hari Onboarding: <strong className="text-slate-200">{acc.onboardingDay}</strong></span>
                      <span>SLA: <strong className="text-emerald-400">{acc.slaPerformance}%</strong></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
            <span className="text-slate-300 font-semibold block mb-0.5">Metrik Pengendali Churn:</span>
            70% churn B2B SaaS terjadi dalam 90 hari pertama. Customer Success memprioritaskan akun dengan Health Score &lt;75.
          </div>
        </div>

        {/* Right: Omnichannel 360 Workspace & Ticket Detail */}
        <div className="lg:col-span-8 glass-card rounded-2xl p-6 border border-slate-800 space-y-6">
          {/* Account 360 Overview Bar */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-extrabold text-white">{selectedAccount.name}</h3>
                <span className="text-xs bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded border border-blue-700/50">
                  {selectedAccount.implementationPkg}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                PIC: <strong className="text-slate-200">{selectedAccount.contactPerson}</strong> • Sektor: {selectedAccount.sector}
              </p>
            </div>

            <div className="flex items-center space-x-2 flex-wrap">
              {selectedAccount.activeChannels.map((ch, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {ch}
                </span>
              ))}
            </div>
          </div>

          {/* Ticket Queue & Filter */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                Antrean Tiket Terpadu (Single Screen Intake)
              </h4>

              <div className="flex items-center space-x-1 text-xs">
                {['ALL', 'WhatsApp', 'Live Chat', 'Voice'].map((ch) => (
                  <button
                    key={ch}
                    onClick={() => setFilterChannel(ch)}
                    className={`px-2.5 py-1 rounded-lg font-medium transition ${
                      filterChannel === ch
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-900 text-slate-400 hover:text-white'
                    }`}
                  >
                    {ch}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              {filteredTickets.map((t) => {
                const isSelected = selectedTicketId === t.id;
                return (
                  <div
                    key={t.id}
                    onClick={() => setSelectedTicketId(t.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition ${
                      isSelected
                        ? 'bg-blue-950/40 border-blue-500 shadow-md ring-1 ring-blue-500'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-mono text-blue-400 font-bold flex items-center gap-1.5">
                        {getChannelIcon(t.channel)} {t.id}
                      </span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        t.priority === 'Critical' ? 'bg-rose-950 text-rose-300' : 'bg-slate-800 text-slate-300'
                      }`}>
                        {t.priority}
                      </span>
                    </div>
                    <h5 className="text-xs font-bold text-white truncate">{t.subject}</h5>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">{t.clientName}</p>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800/80 pt-1.5">
                      <span>SLA: <strong className="text-amber-400">{t.slaHoursLeft} Jam tersisa</strong></span>
                      <span className="text-slate-300">{t.status}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Selected Ticket AI Assist Detail Workspace */}
          {selectedTicket && (
            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-900">
                      {selectedTicket.id}
                    </span>
                    <h4 className="text-sm font-bold text-white">{selectedTicket.subject}</h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Pengirim: <strong className="text-slate-200">{selectedTicket.customerUser}</strong> ({selectedTicket.clientName}) • Kanal: {selectedTicket.channel}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  {getSentimentBadge(selectedTicket.sentiment)}
                  <span className={`text-xs px-2.5 py-0.5 rounded border font-semibold ${
                    selectedTicket.status === 'Resolved'
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                      : 'bg-amber-950 text-amber-300 border-amber-800'
                  }`}>
                    {selectedTicket.status}
                  </span>
                </div>
              </div>

              {/* AI Agent Assist Summary & Classification Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/50 via-slate-950 to-indigo-950/40 border border-blue-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                    <Bot className="w-4 h-4 text-blue-400" />
                    AI Agent Assist • Ringkasan Otomatis
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Klasifikasi: <strong className="text-white">{selectedTicket.aiClassification}</strong>
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedTicket.aiSummary}
                </p>

                {selectedTicket.requiresHumanOversight && (
                  <div className="mt-2 text-[11px] text-amber-300 bg-amber-950/60 p-2 rounded-lg border border-amber-800 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                    <span><strong>Pedoman OJK 2025:</strong> Tiket ini membutuhkan validasi dan persetujuan agen manusia sebelum resolusi sistem dieksekusi.</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Batas Waktu SLA: <strong className="text-amber-300">{selectedTicket.slaHoursLeft} Jam</strong>
                </span>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleResolveTicket(selectedTicket.id)}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center gap-1.5 shadow-md shadow-emerald-600/20"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Selesaikan Tiket (Resolve)
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
