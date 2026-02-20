import * as objectUtils from './objectUtils';

describe('objectUtils', () => {
  describe('deepClone', () => {
    test('should clone nested object', () => {
      const original = { a: 1, b: { c: 2 } };
      const cloned = objectUtils.deepClone(original);
      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
      expect(cloned.b).not.toBe(original.b);
    });

    test('should clone arrays', () => {
      const original = [1, [2, 3], 4];
      const cloned = objectUtils.deepClone(original);
      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
    });

    test('should clone objects with primitives', () => {
      const original = { name: 'John', age: 30, active: true };
      const cloned = objectUtils.deepClone(original);
      expect(cloned).toEqual(original);
      expect(cloned).not.toBe(original);
    });

    test('should not affect original when modifying clone', () => {
      const original = { a: { b: 1 } };
      const cloned = objectUtils.deepClone(original);
      cloned.a.b = 2;
      expect(original.a.b).toBe(1);
    });
  });

  describe('mergeObjects', () => {
    test('should merge two objects', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { c: 3, d: 4 };
      expect(objectUtils.mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });

    test('should merge multiple objects', () => {
      const obj1 = { a: 1 };
      const obj2 = { b: 2 };
      const obj3 = { c: 3 };
      expect(objectUtils.mergeObjects(obj1, obj2, obj3)).toEqual({ a: 1, b: 2, c: 3 });
    });

    test('should overwrite properties from left to right', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      expect(objectUtils.mergeObjects(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
    });

    test('should handle empty objects', () => {
      expect(objectUtils.mergeObjects({}, { a: 1 })).toEqual({ a: 1 });
    });
  });

  describe('getKeys', () => {
    test('should return object keys', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(objectUtils.getKeys(obj)).toEqual(['a', 'b', 'c']);
    });

    test('should return empty array for empty object', () => {
      expect(objectUtils.getKeys({})).toEqual([]);
    });

    test('should include all key types', () => {
      const obj = { name: 'John', age: 30, active: true };
      const keys = objectUtils.getKeys(obj);
      expect(keys).toContain('name');
      expect(keys).toContain('age');
      expect(keys).toContain('active');
    });
  });

  describe('getValues', () => {
    test('should return object values', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(objectUtils.getValues(obj)).toEqual([1, 2, 3]);
    });

    test('should return empty array for empty object', () => {
      expect(objectUtils.getValues({})).toEqual([]);
    });

    test('should handle mixed value types', () => {
      const obj = { name: 'John', age: 30, active: true };
      const values = objectUtils.getValues(obj);
      expect(values).toContain('John');
      expect(values).toContain(30);
      expect(values).toContain(true);
    });
  });

  describe('isEmpty', () => {
    test('should return true for empty object', () => {
      expect(objectUtils.isEmpty({})).toBe(true);
    });

    test('should return false for non-empty object', () => {
      expect(objectUtils.isEmpty({ a: 1 })).toBe(false);
    });

    test('should return false for object with multiple properties', () => {
      expect(objectUtils.isEmpty({ a: 1, b: 2 })).toBe(false);
    });

    test('should return false even if property value is falsy', () => {
      expect(objectUtils.isEmpty({ a: null })).toBe(false);
    });
  });

  describe('pick', () => {
    test('should pick specified keys', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(objectUtils.pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
    });

    test('should handle non-existent keys', () => {
      const obj = { a: 1, b: 2 };
      expect(objectUtils.pick(obj, ['a', 'd'])).toEqual({ a: 1 });
    });

    test('should return empty object when picking no keys', () => {
      const obj = { a: 1, b: 2 };
      expect(objectUtils.pick(obj, [])).toEqual({});
    });

    test('should handle empty object', () => {
      expect(objectUtils.pick({}, ['a'])).toEqual({});
    });
  });

  describe('omit', () => {
    test('should omit specified keys', () => {
      const obj = { a: 1, b: 2, c: 3 };
      expect(objectUtils.omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
    });

    test('should handle non-existent keys to omit', () => {
      const obj = { a: 1, b: 2 };
      expect(objectUtils.omit(obj, ['c'])).toEqual({ a: 1, b: 2 });
    });

    test('should return empty object when omitting all keys', () => {
      const obj = { a: 1, b: 2 };
      expect(objectUtils.omit(obj, ['a', 'b'])).toEqual({});
    });

    test('should not mutate original object', () => {
      const obj = { a: 1, b: 2 };
      objectUtils.omit(obj, ['b']);
      expect(obj).toEqual({ a: 1, b: 2 });
    });
  });
});
