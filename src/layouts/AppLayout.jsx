import { useMemo, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import useTheme from '../hooks/useTheme';

const titleMap = {
  '/': 'Dashboard Utama',
  '/keuangan': 'Modul Keuangan',
  '/pelayanan': 'Modul Pelayanan',
  '/mutu': 'Modul Mutu dan Keselamatan',
  '/personel': 'Modul SDM / Personel',
  '/farmasi-sarpras': 'Modul Farmasi dan Sarpras',
};

export default function AppLayout() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const breadcrumb = useMemo(() => {
    const path = location.pathname;
    if (path === '/') return ['Home', 'Dashboard'];
    return ['Home', titleMap[path] || 'Halaman'];
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 lg:grid lg:grid-cols-[18rem_1fr]">
      <Sidebar open={open} />
      <main className="p-4 md:p-6">
        <Header
          title={titleMap[location.pathname] || 'Monitoring Sehat PUSKESAU'}
          onToggleSidebar={() => setOpen((prev) => !prev)}
          onToggleTheme={toggleTheme}
          isDark={theme === 'dark'}
        />
        <div className="mb-4 rounded-xl bg-white px-4 py-2 text-sm text-slate-500 shadow-panel dark:bg-slate-800 dark:text-slate-300">
          {breadcrumb.map((item, idx) => (
            <span key={item}>
              {idx === breadcrumb.length - 1 ? (
                <strong className="text-military-700 dark:text-military-100">{item}</strong>
              ) : (
                <>
                  <Link to="/" className="hover:underline">
                    {item}
                  </Link>{' '}
                  /{' '}
                </>
              )}
            </span>
          ))}
        </div>
        <Outlet />
      </main>
    </div>
  );
}
