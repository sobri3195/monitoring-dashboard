export const filters = {
  periods: ['Januari 2026', 'Februari 2026', 'Maret 2026', 'April 2026'],
  units: ['Seluruh Unit', 'RSAU dr. Esnawan', 'Lakespra', 'RSPAU dr. Hardjolukito'],
  categories: ['Semua Kategori', 'Operasional', 'Pelayanan', 'Mutu', 'Keuangan'],
};

export const dashboardKpis = [
  { label: 'Kinerja Operasional', value: '92%', change: '+4.2%', status: 'baik' },
  { label: 'Mutu Pelayanan', value: '89%', change: '+1.8%', status: 'stabil' },
  { label: 'Efisiensi Anggaran', value: '95%', change: '+2.7%', status: 'aman' },
  { label: 'Kepuasan Pasien', value: '87%', change: '-0.6%', status: 'perhatian' },
];

export const monthlyTrend = [
  { month: 'Jan', operasional: 84, pelayanan: 80, mutu: 79, keuangan: 82 },
  { month: 'Feb', operasional: 86, pelayanan: 83, mutu: 81, keuangan: 85 },
  { month: 'Mar', operasional: 90, pelayanan: 85, mutu: 84, keuangan: 88 },
  { month: 'Apr', operasional: 92, pelayanan: 88, mutu: 87, keuangan: 90 },
  { month: 'Mei', operasional: 91, pelayanan: 87, mutu: 89, keuangan: 91 },
  { month: 'Jun', operasional: 93, pelayanan: 90, mutu: 91, keuangan: 94 },
];

export const recentSummary = [
  {
    tanggal: '20 Apr 2026',
    unit: 'RSAU dr. Esnawan',
    indikator: 'BOR',
    nilai: '75%',
    status: 'baik',
  },
  {
    tanggal: '20 Apr 2026',
    unit: 'Lakespra',
    indikator: 'Realisasi Anggaran',
    nilai: '94%',
    status: 'aman',
  },
  {
    tanggal: '19 Apr 2026',
    unit: 'RSPAU Hardjolukito',
    indikator: 'Insiden Keselamatan',
    nilai: '3 kasus',
    status: 'perhatian',
  },
  {
    tanggal: '18 Apr 2026',
    unit: 'Seluruh Unit',
    indikator: 'Stok BMHP Kritis',
    nilai: '5 item',
    status: 'kritis',
  },
];

export const finance = {
  kpis: [
    { label: 'Total Penerimaan', value: 9450000000, status: 'aman' },
    { label: 'Total Pengeluaran', value: 7850000000, status: 'stabil' },
    { label: 'Rasio Lancar', value: '1.85', status: 'baik' },
    { label: 'Klaim BPJS Tertagih', value: '91%', status: 'perhatian' },
  ],
  cashflow: [
    { month: 'Jan', penerimaan: 1500, pengeluaran: 1250 },
    { month: 'Feb', penerimaan: 1400, pengeluaran: 1200 },
    { month: 'Mar', penerimaan: 1600, pengeluaran: 1300 },
    { month: 'Apr', penerimaan: 1700, pengeluaran: 1320 },
    { month: 'Mei', penerimaan: 1650, pengeluaran: 1360 },
    { month: 'Jun', penerimaan: 1600, pengeluaran: 1420 },
  ],
  transaksi: [
    { id: 'TRX-1021', tanggal: '20 Apr', kategori: 'Klaim BPJS', nominal: 525000000, status: 'aman' },
    { id: 'TRX-1020', tanggal: '19 Apr', kategori: 'Belanja Obat', nominal: 215000000, status: 'perhatian' },
    { id: 'TRX-1019', tanggal: '19 Apr', kategori: 'Pemeliharaan Alkes', nominal: 95000000, status: 'stabil' },
    { id: 'TRX-1018', tanggal: '18 Apr', kategori: 'Pendapatan Rikkes', nominal: 180000000, status: 'aman' },
  ],
};

export const pelayanan = {
  metrics: [
    { label: 'BOR', value: '76%', status: 'baik' },
    { label: 'ALOS', value: '4.5 hari', status: 'stabil' },
    { label: 'TOI', value: '2.1 hari', status: 'baik' },
    { label: 'BTO', value: '43', status: 'aman' },
  ],
  visits: [
    { month: 'Jan', rawatJalan: 4200, rawatInap: 970, igd: 710 },
    { month: 'Feb', rawatJalan: 4360, rawatInap: 990, igd: 745 },
    { month: 'Mar', rawatJalan: 4510, rawatInap: 1025, igd: 780 },
    { month: 'Apr', rawatJalan: 4630, rawatInap: 1100, igd: 815 },
  ],
  topDiagnosa: [
    { nama: 'Hipertensi', jumlah: 412 },
    { nama: 'ISPA', jumlah: 350 },
    { nama: 'Diabetes Melitus', jumlah: 318 },
    { nama: 'Dispepsia', jumlah: 290 },
    { nama: 'Myalgia', jumlah: 244 },
    { nama: 'Diare', jumlah: 212 },
    { nama: 'Vertigo', jumlah: 177 },
    { nama: 'Asma', jumlah: 162 },
    { nama: 'DHF', jumlah: 129 },
    { nama: 'Anemia', jumlah: 118 },
  ],
};

export const mutu = {
  cards: [
    { label: 'PPRA Compliance', value: '93%', status: 'baik' },
    { label: 'INM Score', value: '88%', status: 'stabil' },
    { label: 'Insiden Keselamatan', value: '3 kasus', status: 'perhatian' },
    { label: 'Kepatuhan SOP', value: '96%', status: 'aman' },
  ],
  trend: [
    { month: 'Jan', ppra: 86, inm: 80, keselamatan: 82, mutu: 85 },
    { month: 'Feb', ppra: 88, inm: 82, keselamatan: 84, mutu: 86 },
    { month: 'Mar', ppra: 89, inm: 84, keselamatan: 86, mutu: 87 },
    { month: 'Apr', ppra: 91, inm: 86, keselamatan: 88, mutu: 89 },
    { month: 'Mei', ppra: 93, inm: 88, keselamatan: 90, mutu: 91 },
  ],
};

export const personel = {
  cards: [
    { label: 'Personel Aktif', value: 874, status: 'aman' },
    { label: 'Tenaga Kesehatan', value: 622, status: 'baik' },
    { label: 'Kehadiran', value: '96.4%', status: 'stabil' },
    { label: 'Beban Kerja', value: '78%', status: 'perhatian' },
  ],
  distribution: [
    { unit: 'Rawat Jalan', jumlah: 168 },
    { unit: 'Rawat Inap', jumlah: 140 },
    { unit: 'IGD', jumlah: 108 },
    { unit: 'Farmasi', jumlah: 82 },
    { unit: 'Lab/Radiologi', jumlah: 67 },
    { unit: 'Manajemen', jumlah: 74 },
  ],
  attendance: [
    { nama: 'dr. Rina Pratiwi', unit: 'Rawat Inap', status: 'aman' },
    { nama: 'Kapten Kes Putra', unit: 'IGD', status: 'baik' },
    { nama: 'Sertu Kes Miko', unit: 'Farmasi', status: 'stabil' },
    { nama: 'drg. Ayu Pertiwi', unit: 'Rikkes', status: 'perhatian' },
  ],
};

export const farmasiSarpras = {
  cards: [
    { label: 'Stok Obat Aman', value: '92%', status: 'aman' },
    { label: 'BMHP Kritis', value: 5, status: 'kritis' },
    { label: 'Alat Siap Pakai', value: '89%', status: 'stabil' },
    { label: 'Maintenance Tepat Waktu', value: '94%', status: 'baik' },
  ],
  maintenance: [
    { alat: 'Ventilator ICU-03', jadwal: '24 Apr 2026', kondisi: 'perhatian' },
    { alat: 'CT-Scan Unit A', jadwal: '26 Apr 2026', kondisi: 'stabil' },
    { alat: 'Mesin Anestesi OR-2', jadwal: '29 Apr 2026', kondisi: 'aman' },
    { alat: 'Defibrillator IGD', jadwal: '30 Apr 2026', kondisi: 'baik' },
  ],
};

export const alerts = [
  { id: 1, message: '5 item BMHP masuk status kritis.', tone: 'danger' },
  { id: 2, message: 'Klaim BPJS tertunda 9%.', tone: 'warning' },
  { id: 3, message: 'Kepatuhan SOP meningkat 2%.', tone: 'success' },
];
