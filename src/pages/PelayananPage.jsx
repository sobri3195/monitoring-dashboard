import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartCard from '../components/ChartCard';
import DataTable from '../components/DataTable';
import SectionTitle from '../components/SectionTitle';
import StatCard from '../components/StatCard';
import { pelayanan } from '../data/mockData';

export default function PelayananPage() {
  return (
    <section className="space-y-6">
      <SectionTitle title="Indikator Pelayanan" subtitle="BOR, ALOS, TOI, BTO, kunjungan pasien dan 10 besar diagnosa" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {pelayanan.metrics.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </div>

      <ChartCard title="Kunjungan Pasien Rawat Jalan, Rawat Inap, dan IGD">
        <ResponsiveContainer>
          <BarChart data={pelayanan.visits}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="rawatJalan" fill="#1f4a3b" />
            <Bar dataKey="rawatInap" fill="#2563eb" />
            <Bar dataKey="igd" fill="#14b8a6" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <DataTable
        columns={[
          { key: 'nama', title: 'Diagnosa' },
          { key: 'jumlah', title: 'Jumlah Kasus' },
        ]}
        data={pelayanan.topDiagnosa}
        pageSize={10}
      />
    </section>
  );
}
