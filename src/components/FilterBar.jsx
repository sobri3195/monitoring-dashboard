export default function FilterBar({ filters, values, onChange }) {
  return (
    <div className="mb-4 grid gap-3 rounded-2xl bg-white p-4 shadow-panel dark:bg-slate-800 md:grid-cols-3">
      <select
        value={values.period}
        onChange={(event) => onChange('period', event.target.value)}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-900"
      >
        {filters.periods.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <select
        value={values.unit}
        onChange={(event) => onChange('unit', event.target.value)}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-900"
      >
        {filters.units.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <select
        value={values.category}
        onChange={(event) => onChange('category', event.target.value)}
        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-900"
      >
        {filters.categories.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
