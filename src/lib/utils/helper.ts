export function formatCurrency(amount: number, currency = '₦'): string {
  return `${currency}${amount.toLocaleString()}.00`;
}