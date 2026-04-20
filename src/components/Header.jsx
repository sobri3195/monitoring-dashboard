import { Bell, Download, FileText, Menu, Moon, Search, Sun } from 'lucide-react';

export default function Header({ title, onToggleSidebar, onToggleTheme, isDark }) {
  return (
    <header className="sticky top-0 z-30 mb-4 rounded-2xl bg-white/95 p-4 shadow-panel backdrop-blur dark:bg-slate-800/95">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="rounded-lg border p-2 text-slate-500 lg:hidden"
          aria-label="Toggle Sidebar"
        >
          <Menu size={18} />
        </button>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">PUSKESAU</p>
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{title}</h2>
        </div>
        <div className="ml-auto flex flex-1 items-center justify-end gap-2">
          <div className="hidden items-center gap-2 rounded-xl border px-3 py-2 md:flex md:min-w-72">
            <Search size={16} className="text-slate-500" />
            <input
              type="text"
              placeholder="Cari unit, indikator, transaksi..."
              className="w-full bg-transparent text-sm outline-none"
            />
          </div>
          <button type="button" className="rounded-lg border p-2" title="Export Excel">
            <Download size={16} />
          </button>
          <button type="button" className="rounded-lg border p-2" title="Export PDF">
            <FileText size={16} />
          </button>
          <button type="button" className="rounded-lg border p-2" title="Notifikasi">
            <Bell size={16} />
          </button>
          <button type="button" onClick={onToggleTheme} className="rounded-lg border p-2" title="Ubah tema">
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}
