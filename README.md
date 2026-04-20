# Monitoring Sehat PUSKESAU

Dashboard eksekutif modern untuk monitoring operasional, pelayanan, mutu, keuangan, personel, serta farmasi & sarpras PUSKESAU.

## Tech Stack
- React + Vite
- Tailwind CSS
- React Router DOM
- Recharts
- Lucide React
- Data mock lokal JSON (tanpa backend)

## Menjalankan lokal
```bash
npm install
npm run dev
```

Aplikasi berjalan di `http://localhost:5173` (default Vite).

## Build production
```bash
npm run build
npm run preview
```

## Deploy ke Vercel
1. Push repo ke GitHub/GitLab/Bitbucket.
2. Import project di Vercel.
3. Gunakan setting default:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

> Karena project menggunakan React Router, Vercel akan menangani SPA routing otomatis untuk konfigurasi default Vite modern.

## Struktur folder
```
src/
  assets/
  components/
  data/
  hooks/
  layouts/
  pages/
  utils/
```
