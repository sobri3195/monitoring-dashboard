import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import ChartCard from '../components/ChartCard';
import DataTable from '../components/DataTable';
import SectionTitle from '../components/SectionTitle';
import StatCard from '../components/StatCard';
import { personel } from '../data/mockData';
import { formatNumber } from '../utils/formatters';

const COLORS = ['#1f4a3b', '#2563eb', '#14b8a6', '#64748b', '#0f766e', '#334155'];

export default function PersonelPage() {
  return (
    <section className="space-y-6">
      <SectionTitle title="SDM / Personel" subtitle="Data personel, distribusi unit, produktivitas, beban kerja, dan kehadiran" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {personel.cards.map((item) => (
          <StatCard
            key={item.label}
            {...item}
            value={typeof item.value === 'number' ? formatNumber(item.value) : item.value}
          />
        ))}
      </div>

      <ChartCard title="Distribusi Personel per Unit">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={personel.distribution} dataKey="jumlah" nameKey="unit" outerRadius={100} label>
              {personel.distribution.map((entry, index) => (
                <Cell key={entry.unit} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <DataTable
        columns={[
          { key: 'nama', title: 'Nama Personel' },
          { key: 'unit', title: 'Unit' },
          { key: 'status', title: 'Status', type: 'status' },
        ]}
        data={personel.attendance}
      />
    </section>
  );
}
