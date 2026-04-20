import { useMemo, useState } from 'react';
import StatusBadge from './StatusBadge';

export default function DataTable({ columns, data, pageSize = 5 }) {
  const [page, setPage] = useState(1);
  const totalPage = Math.max(1, Math.ceil(data.length / pageSize));
  const rows = useMemo(
    () => data.slice((page - 1) * pageSize, page * pageSize),
    [data, page, pageSize],
  );

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-panel dark:bg-slate-800">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-100 dark:bg-slate-700">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-3 text-left text-xs font-bold uppercase text-slate-500">
                  {col.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-b border-slate-100 dark:border-slate-700">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-sm text-slate-700 dark:text-slate-200">
                    {col.type === 'status' ? <StatusBadge value={row[col.key]} /> : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 p-3 dark:border-slate-700">
        <p className="text-xs text-slate-500">
          Halaman {page} dari {totalPage}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            className="rounded-lg border px-3 py-1 text-xs"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => setPage((prev) => Math.min(totalPage, prev + 1))}
            className="rounded-lg border px-3 py-1 text-xs"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
