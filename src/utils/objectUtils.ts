/**
 * Deep clone an object
 */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Merge multiple objects
 */
export const mergeObjects = <T extends Record<string, any>>(...objects: T[]): T => {
  return objects.reduce((acc, obj) => {
    return { ...acc, ...obj };
  }, {} as T);
};

/**
 * Get object keys
 */
export const getKeys = <T extends Record<string, any>>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};

/**
 * Get object values
 */
export const getValues = <T extends Record<string, any>>(obj: T): T[keyof T][] => {
  return Object.values(obj);
};

/**
 * Check if object is empty
 */
export const isEmpty = (obj: Record<string, any>): boolean => {
  return Object.keys(obj).length === 0;
};

/**
 * Pick specific keys from object
 */
export const pick = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> => {
  const result: any = {};
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
};

/**
 * Omit specific keys from object
 */
export const omit = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> => {
  const result = { ...obj };
  keys.forEach((key) => {
    delete result[key];
  });
  return result;
};
