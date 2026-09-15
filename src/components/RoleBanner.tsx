import React from 'react';
import { PersonaInfo } from '../types';
import { UserCheck, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

interface RoleBannerProps {
  persona: PersonaInfo;
}

export const RoleBanner: React.FC<RoleBannerProps> = ({ persona }) => {
  return (
    <div className="bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-indigo-950/40 border-b border-blue-900/30 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex items-center space-x-3.5">
          <div className="relative">
            <img
              src={persona.avatar}
              alt={persona.name}
              className="w-11 h-11 rounded-xl object-cover ring-2 ring-blue-500/50 shadow-md"
            />
            <span className="absolute -bottom-1 -right-1 bg-emerald-500 w-3.5 h-3.5 rounded-full border-2 border-slate-950 flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-sm font-bold text-white tracking-tight">
                {persona.title}
              </h2>
              <span className="text-[11px] font-medium text-slate-300">({persona.name})</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" /> {persona.badge}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
                Divisi: {persona.department}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5 line-clamp-1 max-w-3xl">
              {persona.description}
            </p>
          </div>
        </div>

        {/* Quick context info */}
        <div className="flex items-center space-x-3 text-xs self-end md:self-auto shrink-0">
          <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800 text-slate-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px]">Sistem S.E.R.V.E Aktif</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800 text-slate-300">
            <UserCheck className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px]">Core Hours: 10.00 - 16.00 WIB</span>
          </div>
        </div>
      </div>
    </div>
  );
};
