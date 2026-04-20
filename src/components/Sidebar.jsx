import { Activity, BriefcaseBusiness, CircleDollarSign, FlaskConical, Home, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const menus = [
  { to: '/', label: 'Dashboard', icon: Home },
  { to: '/keuangan', label: 'Keuangan', icon: CircleDollarSign },
  { to: '/pelayanan', label: 'Pelayanan', icon: Activity },
  { to: '/mutu', label: 'Mutu & Keselamatan', icon: BriefcaseBusiness },
  { to: '/personel', label: 'SDM / Personel', icon: Users },
  { to: '/farmasi-sarpras', label: 'Farmasi & Sarpras', icon: FlaskConical },
];

export default function Sidebar({ open }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-72 transform bg-military-900 p-4 text-white transition-transform lg:static lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="mb-8 rounded-xl border border-white/20 bg-white/10 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-military-100">Executive Dashboard</p>
        <h1 className="mt-1 text-lg font-bold">Monitoring Sehat PUSKESAU</h1>
      </div>
      <nav className="space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;
          return (
            <NavLink
              key={menu.to}
              to={menu.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
                  isActive ? 'bg-military-500 text-white' : 'text-military-100 hover:bg-white/10'
                }`
              }
            >
              <Icon size={17} />
              <span>{menu.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
