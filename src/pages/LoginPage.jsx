import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-military-900 to-slate-900 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-panel">
        <div className="mb-6 flex items-center gap-3">
          <ShieldCheck className="text-military-700" />
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">Secure Access</p>
            <h1 className="text-xl font-bold text-slate-800">Monitoring Sehat PUSKESAU</h1>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">NIP / ID Personel</label>
            <input className="w-full rounded-lg border px-3 py-2" placeholder="Masukkan ID" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>
            <input type="password" className="w-full rounded-lg border px-3 py-2" placeholder="••••••••" />
          </div>
          <Link
            to="/"
            className="block rounded-lg bg-military-700 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-military-900"
          >
            Masuk Dashboard
          </Link>
        </form>
      </div>
    </div>
  );
}
