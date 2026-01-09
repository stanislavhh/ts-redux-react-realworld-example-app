/**
 * Capitalize the first letter of a string
 */
export const capitalize = (str: string): string => {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Convert string to slug format (lowercase, hyphenated)
 */
export const toSlug = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/-+/g, '-');
};

/**
 * Truncate string to specified length with ellipsis
 */
export const truncate = (str: string, length: number): string => {
  if (str.length <= length) return str;
  return str.substring(0, length) + '...';
};

/**
 * Check if string is empty or whitespace only
 */
export const isEmpty = (str: string): boolean => {
  return str.trim().length === 0;
};

/**
 * Remove all whitespace from string
 */
export const removeWhitespace = (str: string): string => {
  return str.replace(/\s+/g, '');
};
