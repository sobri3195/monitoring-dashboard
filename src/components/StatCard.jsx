import StatusBadge from './StatusBadge';

export default function StatCard({ label, value, change, status }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-panel dark:bg-slate-800">
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <div className="mt-3 flex items-end justify-between gap-3">
        <p className="text-2xl font-bold text-military-700 dark:text-military-100">{value}</p>
        {change ? <p className="text-sm font-semibold text-blue-600">{change}</p> : <StatusBadge value={status} />}
      </div>
      {status && change ? (
        <div className="mt-3">
          <StatusBadge value={status} />
        </div>
      ) : null}
    </div>
  );
}
