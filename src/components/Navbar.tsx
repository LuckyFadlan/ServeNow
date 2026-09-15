import React, { useState } from 'react';
import { PersonaRole, PersonaInfo } from '../types';
import { PERSONAS } from '../data/mockData';
import { 
  Headphones, 
  Users, 
  FileText, 
  Layers,
  ChevronDown,
  LayoutDashboard,
  Shield,
  Clock,
  GitBranch,
  Award,
  Zap,
  PhoneCall
} from 'lucide-react';

interface NavbarProps {
  currentRole: PersonaRole;
  onSelectRole: (role: PersonaRole) => void;
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenReportModal: () => void;
  onSimulateInbound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRole,
  onSelectRole,
  activeTab,
  onSelectTab,
  onOpenReportModal,
  onSimulateInbound
}) => {
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const activePersona = PERSONAS.find(p => p.role === currentRole) || PERSONAS[0];

  const navItems = [
    { id: 'customer360', label: 'Customer 360 Workspace', icon: Headphones, badge: 'Page 2 Core' },
    { id: 'supervisor', label: 'Supervisor Command', icon: Users, badge: 'Page 2 Box 8' },
    { id: 'cockpit', label: 'Executive Cockpit', icon: LayoutDashboard, badge: 'Decoupling' },
    { id: 'delivery', label: 'Delivery & Template', icon: Clock, badge: '8 Weeks' },
    { id: 'compliance', label: 'Lapis Kepatuhan AI', icon: Shield, badge: 'OJK & PDP' },
    { id: 'doa', label: 'Tata Kelola DOA', icon: GitBranch, badge: '26:1 to 8:1' },
    { id: 'workforce', label: 'Scorecard Kinerja', icon: Award, badge: 'Core Hours' }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Tagline */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onSelectTab('customer360')}>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 flex items-center justify-center shadow-lg shadow-blue-500/25 ring-1 ring-white/20">
              <Layers className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-300 bg-clip-text text-transparent">
                  ServeNow<span className="text-blue-500">OS</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-900/60 text-blue-300 border border-blue-700/50">
                  ENTERPRISE
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Cloud Customer Service Omnichannel Platform</p>
            </div>
          </div>

          {/* Center Navigation Tabs */}
          <nav className="hidden xl:flex items-center space-x-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-2.5">
            {/* Simulate Inbound Interaction Button */}
            <button
              onClick={onSimulateInbound}
              className="inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 transition active:scale-95"
              title="Simulasikan Panggilan Telepon / WhatsApp Masuk Baru"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Simulasi Inbound</span>
            </button>

            {/* Executive Dossier Report Button */}
            <button
              onClick={onOpenReportModal}
              className="inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition"
              title="Ringkasan Eksekutif Kasus"
            >
              <FileText className="h-3.5 w-3.5 text-blue-400" />
              <span className="hidden md:inline">Case Briefing</span>
            </button>

            {/* Persona Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center space-x-2 p-1.5 pr-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition text-left focus:outline-none"
              >
                <img
                  src={activePersona.avatar}
                  alt={activePersona.name}
                  className="w-7 h-7 rounded-lg object-cover ring-1 ring-blue-500/50"
                />
                <div className="hidden lg:block text-left">
                  <p className="text-xs font-semibold text-slate-100 leading-tight">
                    {activePersona.name.split(',')[0]}
                  </p>
                  <p className="text-[10px] text-blue-400 leading-tight truncate max-w-[100px]">
                    {activePersona.title.split('(')[0]}
                  </p>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${roleDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl py-2 z-50 animate-in fade-in">
                  <div className="px-3 py-2 border-b border-slate-800">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <Users className="w-3 h-3 text-blue-400" /> Pilih Sudut Pandang Peran
                    </p>
                  </div>
                  <div className="py-1">
                    {PERSONAS.map((p) => {
                      const isSelected = p.role === currentRole;
                      return (
                        <button
                          key={p.role}
                          onClick={() => {
                            onSelectRole(p.role);
                            setRoleDropdownOpen(false);
                          }}
                          className={`w-full px-3 py-2 text-left flex items-center space-x-2.5 transition ${
                            isSelected
                              ? 'bg-blue-600/15 border-l-2 border-blue-500 text-blue-300'
                              : 'hover:bg-slate-800/60 text-slate-300'
                          }`}
                        >
                          <img
                            src={p.avatar}
                            alt={p.name}
                            className="w-7 h-7 rounded-md object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold truncate text-slate-100">{p.title}</p>
                            <p className="text-[10px] text-slate-400 truncate">{p.name}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Horizontal Navigation */}
        <div className="xl:hidden py-2 overflow-x-auto flex items-center space-x-1.5 scrollbar-none border-t border-slate-900">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-900 text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
