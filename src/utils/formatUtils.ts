/**
 * Format number with commas (e.g., 1000 -> "1,000")
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

/**
 * Format bytes to human readable format (B, KB, MB, GB)
 */
export const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 B';

  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Format currency (USD by default)
 */
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

/**
 * Format percentage
 */
export const formatPercentage = (value: number, decimals: number = 2): string => {
  return (value * 100).toFixed(decimals) + '%';
};

/**
 * Convert camelCase to Title Case
 */
export const camelCaseToTitleCase = (str: string): string => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (char) => char.toUpperCase())
    .trim();
};

/**
 * Pad number with zeros
 */
export const padNumber = (num: number, length: number): string => {
  return String(num).padStart(length, '0');
};
