const toneMap = {
  success: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  warning: 'bg-amber-100 text-amber-700 border-amber-200',
  danger: 'bg-red-100 text-red-700 border-red-200',
};

const statusMap = {
  baik: 'success',
  stabil: 'success',
  aman: 'success',
  perhatian: 'warning',
  menengah: 'warning',
  kritis: 'danger',
  buruk: 'danger',
};

export default function StatusBadge({ value }) {
  const normalized = (value || '').toLowerCase();
  const tone = statusMap[normalized] || 'warning';
  return (
    <span className={`rounded-full border px-2 py-1 text-xs font-semibold capitalize ${toneMap[tone]}`}>
      {value}
    </span>
  );
}
