import { useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartCard from '../components/ChartCard';
import DataTable from '../components/DataTable';
import FilterBar from '../components/FilterBar';
import SectionTitle from '../components/SectionTitle';
import StatCard from '../components/StatCard';
import { alerts, dashboardKpis, filters, monthlyTrend, recentSummary } from '../data/mockData';

export default function DashboardPage() {
  const [activeFilter, setActiveFilter] = useState({
    period: filters.periods[3],
    unit: filters.units[0],
    category: filters.categories[0],
  });

  return (
    <section className="space-y-6">
      <FilterBar
        filters={filters}
        values={activeFilter}
        onChange={(key, value) => setActiveFilter((prev) => ({ ...prev, [key]: value }))}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardKpis.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </div>

      <ChartCard title="Tren Bulanan Kinerja Operasional, Pelayanan, Mutu, Keuangan">
        <ResponsiveContainer>
          <LineChart data={monthlyTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[70, 100]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="operasional" stroke="#1f4a3b" strokeWidth={2} />
            <Line type="monotone" dataKey="pelayanan" stroke="#2563eb" strokeWidth={2} />
            <Line type="monotone" dataKey="mutu" stroke="#14b8a6" strokeWidth={2} />
            <Line type="monotone" dataKey="keuangan" stroke="#64748b" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <SectionTitle title="Ringkasan Data Terbaru" subtitle="Status indikator utama per unit" />
      <DataTable
        columns={[
          { key: 'tanggal', title: 'Tanggal' },
          { key: 'unit', title: 'Unit' },
          { key: 'indikator', title: 'Indikator' },
          { key: 'nilai', title: 'Nilai' },
          { key: 'status', title: 'Status', type: 'status' },
        ]}
        data={recentSummary}
      />

      <SectionTitle title="Notifikasi Ringkas" />
      <div className="grid gap-3 md:grid-cols-3">
        {alerts.map((item) => (
          <div key={item.id} className="rounded-xl border-l-4 border-blue-600 bg-white p-3 shadow-panel dark:bg-slate-800">
            <p className="text-sm text-slate-700 dark:text-slate-200">{item.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
