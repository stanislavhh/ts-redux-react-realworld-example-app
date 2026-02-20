/**
 * Check if email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Check if URL is valid
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Check if string is a number
 */
export const isNumeric = (str: string): boolean => {
  return !isNaN(parseFloat(str)) && isFinite(Number(str));
};

/**
 * Check if value is between min and max
 */
export const isBetween = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

/**
 * Check if object has required keys
 */
export const hasRequiredKeys = <T extends Record<string, any>>(
  obj: T,
  requiredKeys: (keyof T)[]
): boolean => {
  return requiredKeys.every((key) => key in obj && obj[key] !== undefined && obj[key] !== null);
};

/**
 * Check if string matches a pattern (regex)
 */
export const matchesPattern = (str: string, pattern: RegExp): boolean => {
  return pattern.test(str);
};
