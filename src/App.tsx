import React, { useState } from 'react';
import { PersonaRole } from './types';
import { PERSONAS } from './data/mockData';
import { Navbar } from './components/Navbar';
import { RoleBanner } from './components/RoleBanner';
import { Customer360AgentWorkspace } from './components/Customer360AgentWorkspace';
import { SupervisorCenter } from './components/SupervisorCenter';
import { ExecutiveCockpit } from './components/ExecutiveCockpit';
import { DeliveryEngine } from './components/DeliveryEngine';
import { ComplianceMoat } from './components/ComplianceMoat';
import { GovernanceDOA } from './components/GovernanceDOA';
import { WorkforceScorecard } from './components/WorkforceScorecard';
import { ExecutiveReportModal } from './components/ExecutiveReportModal';
import { Layers, ShieldCheck, PhoneCall, Bell, CheckCircle2, X } from 'lucide-react';

export function App() {
  const [currentRole, setCurrentRole] = useState<PersonaRole>('agent'); // Default to Agent to immediately view Customer 360!
  const [activeTab, setActiveTab] = useState<string>('customer360'); // Primary view matching Page 2
  const [isReportModalOpen, setIsReportModalOpen] = useState<boolean>(false);
  const [inboundToast, setInboundToast] = useState<{ visible: boolean; customer: string; channel: string } | null>(null);

  const activePersona = PERSONAS.find(p => p.role === currentRole) || PERSONAS[2]; // Default to Agent Budi Santoso

  const handleSelectRole = (role: PersonaRole) => {
    setCurrentRole(role);
    if (role === 'agent') {
      setActiveTab('customer360');
    } else if (role === 'manager') {
      setActiveTab('supervisor');
    } else if (role === 'director') {
      setActiveTab('cockpit');
    } else if (role === 'compliance') {
      setActiveTab('compliance');
    } else if (role === 'sales') {
      setActiveTab('delivery');
    }
  };

  const handleTriggerSimulatedInbound = () => {
    const channels = ['WhatsApp', 'Voice Call', 'Live Chat'];
    const randomChannel = channels[Math.floor(Math.random() * channels.length)];
    const names = ['dr. Melinda Sianipar (Siloam Hospital)', 'Bpk. Ilham Ramadhan (Apartemen Marina)', 'Johan Santoso (Retail Mega)'];
    const randomName = names[Math.floor(Math.random() * names.length)];

    setInboundToast({
      visible: true,
      customer: randomName,
      channel: randomChannel
    });

    // Auto-dismiss after 6 seconds
    setTimeout(() => {
      setInboundToast(null);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentRole={currentRole}
        onSelectRole={handleSelectRole}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenReportModal={() => setIsReportModalOpen(true)}
        onSimulateInbound={handleTriggerSimulatedInbound}
      />

      {/* Persona Role Context Bar */}
      <RoleBanner persona={activePersona} />

      {/* Simulated Inbound Toast Notification */}
      {inboundToast && (
        <div className="fixed top-20 right-6 z-50 animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 border border-blue-400/50 p-4 rounded-2xl shadow-2xl shadow-blue-500/20 max-w-sm flex items-start space-x-3 text-xs">
            <div className="p-2 rounded-xl bg-blue-500/20 text-blue-300 ring-1 ring-blue-400/40 animate-pulse">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white uppercase text-[10px] tracking-wider">
                  Panggilan / Pesan Masuk Baru!
                </span>
                <button onClick={() => setInboundToast(null)} className="text-slate-400 hover:text-white">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
              <p className="font-bold text-white mt-0.5">{inboundToast.customer}</p>
              <p className="text-blue-200 mt-0.5">
                Kanal: <strong className="text-white">{inboundToast.channel}</strong> &bull; Routing ke antrean Customer 360 Workspace
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Workspace Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {activeTab === 'customer360' && <Customer360AgentWorkspace />}
        {activeTab === 'supervisor' && <SupervisorCenter />}
        {activeTab === 'cockpit' && <ExecutiveCockpit />}
        {activeTab === 'delivery' && <DeliveryEngine />}
        {activeTab === 'compliance' && <ComplianceMoat />}
        {activeTab === 'doa' && <GovernanceDOA />}
        {activeTab === 'workforce' && <WorkforceScorecard />}
      </main>

      {/* Executive Report Modal */}
      <ExecutiveReportModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />

      {/* Enterprise Platform Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center space-x-3">
            <div className="h-7 w-7 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <p className="text-slate-300 font-semibold">ServeNow OS &bull; Intelligent Inbound Customer Service Platform</p>
              <p className="text-[11px] text-slate-500">Single Screen Workspace &bull; Supervisor Command &bull; OJK AI &amp; UU PDP Governance</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[11px] font-semibold">OJK AI &amp; UU PDP Ready</span>
            </div>
            <div className="flex items-center space-x-1 text-slate-400">
              <span>S.E.R.V.E. the Engine</span>
              <span>&bull;</span>
              <span>N.O.W. the Market</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
