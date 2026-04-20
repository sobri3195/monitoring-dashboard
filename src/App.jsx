import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import DashboardPage from './pages/DashboardPage';
import KeuanganPage from './pages/KeuanganPage';
import PelayananPage from './pages/PelayananPage';
import MutuPage from './pages/MutuPage';
import PersonelPage from './pages/PersonelPage';
import FarmasiSarprasPage from './pages/FarmasiSarprasPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/keuangan" element={<KeuanganPage />} />
        <Route path="/pelayanan" element={<PelayananPage />} />
        <Route path="/mutu" element={<MutuPage />} />
        <Route path="/personel" element={<PersonelPage />} />
        <Route path="/farmasi-sarpras" element={<FarmasiSarprasPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
