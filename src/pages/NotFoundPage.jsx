import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="grid min-h-[70vh] place-items-center">
      <div className="text-center">
        <p className="text-7xl font-black text-military-700">404</p>
        <h1 className="mt-2 text-2xl font-bold">Halaman tidak ditemukan</h1>
        <p className="mt-1 text-slate-500">Rute yang Anda tuju tidak tersedia.</p>
        <Link to="/" className="mt-4 inline-block rounded-lg bg-military-700 px-4 py-2 text-white">
          Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
}
