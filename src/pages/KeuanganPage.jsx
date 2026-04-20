import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartCard from '../components/ChartCard';
import DataTable from '../components/DataTable';
import SectionTitle from '../components/SectionTitle';
import StatCard from '../components/StatCard';
import { finance } from '../data/mockData';
import { formatCurrency } from '../utils/formatters';

export default function KeuanganPage() {
  return (
    <section className="space-y-6">
      <SectionTitle title="Laporan Keuangan" subtitle="Hutang piutang, cashflow, klaim BPJS/asuransi, dan rasio keuangan" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {finance.kpis.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={typeof item.value === 'number' ? formatCurrency(item.value) : item.value}
            status={item.status}
          />
        ))}
      </div>

      <ChartCard title="Grafik Cashflow Bulanan (dalam juta rupiah)">
        <ResponsiveContainer>
          <BarChart data={finance.cashflow}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="penerimaan" fill="#1f4a3b" radius={[6, 6, 0, 0]} />
            <Bar dataKey="pengeluaran" fill="#2563eb" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <DataTable
        columns={[
          { key: 'id', title: 'No. Transaksi' },
          { key: 'tanggal', title: 'Tanggal' },
          { key: 'kategori', title: 'Kategori' },
          { key: 'nominal', title: 'Nominal' },
          { key: 'status', title: 'Status', type: 'status' },
        ]}
        data={finance.transaksi.map((row) => ({ ...row, nominal: formatCurrency(row.nominal) }))}
      />
    </section>
  );
}
