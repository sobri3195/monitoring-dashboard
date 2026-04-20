export const formatNumber = (value) =>
  new Intl.NumberFormat('id-ID', { maximumFractionDigits: 1 }).format(value);

export const formatCurrency = (value) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);

export const statusTone = {
  baik: 'success',
  stabil: 'success',
  aman: 'success',
  perhatian: 'warning',
  menengah: 'warning',
  kritis: 'danger',
  buruk: 'danger',
};
