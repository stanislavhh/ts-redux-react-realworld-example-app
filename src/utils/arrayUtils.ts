/**
 * Remove duplicates from array
 */
export const removeDuplicates = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr));
};

/**
 * Remove duplicates using a comparator function
 */
export const removeDuplicatesBy = <T>(arr: T[], compareFn: (a: T) => any): T[] => {
  const seen = new Set();
  return arr.filter((item) => {
    const key = compareFn(item);
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
};

/**
 * Flatten array by one level
 */
export const flatten = <T>(arr: (T | T[])[]): T[] => {
  return arr.reduce<T[]>((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(item);
    }
    return acc.concat(item);
  }, []);
};

/**
 * Chunk array into smaller arrays of specified size
 */
export const chunk = <T>(arr: T[], size: number): T[][] => {
  if (size <= 0) return [];
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

/**
 * Get last element of array
 */
export const last = <T>(arr: T[]): T | undefined => {
  return arr[arr.length - 1];
};

/**
 * Get first element of array
 */
export const first = <T>(arr: T[]): T | undefined => {
  return arr[0];
};
