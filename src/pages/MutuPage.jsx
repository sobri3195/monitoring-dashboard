import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartCard from '../components/ChartCard';
import SectionTitle from '../components/SectionTitle';
import StatCard from '../components/StatCard';
import { mutu } from '../data/mockData';

export default function MutuPage() {
  return (
    <section className="space-y-6">
      <SectionTitle title="Mutu dan Keselamatan" subtitle="PPRA, INM, insiden keselamatan pasien, dan kepatuhan mutu pelayanan" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {mutu.cards.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </div>
      <ChartCard title="Performa Mutu Bulanan">
        <ResponsiveContainer>
          <AreaChart data={mutu.trend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[70, 100]} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="ppra" stackId="1" stroke="#1f4a3b" fill="#1f4a3b99" />
            <Area type="monotone" dataKey="inm" stackId="1" stroke="#2563eb" fill="#2563eb88" />
            <Area
              type="monotone"
              dataKey="keselamatan"
              stackId="1"
              stroke="#14b8a6"
              fill="#14b8a688"
            />
            <Area type="monotone" dataKey="mutu" stackId="1" stroke="#64748b" fill="#64748b88" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>
    </section>
  );
}
