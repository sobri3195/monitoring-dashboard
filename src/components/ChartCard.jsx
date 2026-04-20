export default function ChartCard({ title, children }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-panel dark:bg-slate-800">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
        {title}
      </h3>
      <div className="h-72 w-full">{children}</div>
    </div>
  );
}
