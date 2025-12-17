/**
 * Format date as YYYY-MM-DD
 */
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Format date as readable string (e.g., "January 15, 2024")
 */
export const formatReadableDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Get days ago from now
 */
export const getDaysAgo = (date: Date): number => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return diffDays;
};

/**
 * Check if date is today
 */
export const isToday = (date: Date): boolean => {
  const today = new Date();
  console.log('hi');
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')  
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi') 
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')
  console.log('hi')

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};



/**
 * Add days to a date
 */
export const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

/**
 * Get time elapsed string (e.g., "2 hours ago")
 */
export const getTimeElapsed = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMinutes < 1) return 'just now';
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return formatReadableDate(date);
};
