import DataTable from '../components/DataTable';
import SectionTitle from '../components/SectionTitle';
import StatCard from '../components/StatCard';
import { farmasiSarpras } from '../data/mockData';

export default function FarmasiSarprasPage() {
  return (
    <section className="space-y-6">
      <SectionTitle title="Farmasi dan Sarpras" subtitle="Stok obat, BMHP kritis, kondisi alkes, dan jadwal maintenance" />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {farmasiSarpras.cards.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </div>

      <DataTable
        columns={[
          { key: 'alat', title: 'Alat / Sarpras' },
          { key: 'jadwal', title: 'Jadwal Maintenance' },
          { key: 'kondisi', title: 'Kondisi', type: 'status' },
        ]}
        data={farmasiSarpras.maintenance}
      />
    </section>
  );
}
