import * as arrayUtils from './arrayUtils';

describe('arrayUtils', () => {
  describe('removeDuplicates', () => {
    test('should remove duplicate numbers', () => {
      expect(arrayUtils.removeDuplicates([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    test('should remove duplicate strings', () => {
      expect(arrayUtils.removeDuplicates(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
    });

    test('should handle empty array', () => {
      expect(arrayUtils.removeDuplicates([])).toEqual([]);
    });

    test('should handle array with no duplicates', () => {
      expect(arrayUtils.removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('removeDuplicatesBy', () => {
    test('should remove duplicates using comparator', () => {
      const arr = [{ id: 1 }, { id: 2 }, { id: 1 }];
      expect(arrayUtils.removeDuplicatesBy(arr, (item) => item.id)).toEqual([{ id: 1 }, { id: 2 }]);
    });

    test('should handle empty array', () => {
      expect(arrayUtils.removeDuplicatesBy([], (item) => item)).toEqual([]);
    });

    test('should work with strings', () => {
      const arr = ['apple', 'Apple', 'banana'];
      expect(arrayUtils.removeDuplicatesBy(arr, (item) => item.toLowerCase())).toEqual(['apple', 'banana']);
    });
  });

  describe('flatten', () => {
    test('should flatten one level', () => {
      expect(arrayUtils.flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
    });

    test('should handle empty array', () => {
      expect(arrayUtils.flatten([])).toEqual([]);
    });

    test('should handle nested empty arrays', () => {
      expect(arrayUtils.flatten([1, [], 2])).toEqual([1, 2]);
    });

    test('should preserve order', () => {
      expect(arrayUtils.flatten([3, [1, 2], 4])).toEqual([3, 1, 2, 4]);
    });
  });

  describe('chunk', () => {
    test('should chunk array into smaller arrays', () => {
      expect(arrayUtils.chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('should handle exact chunks', () => {
      expect(arrayUtils.chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    });

    test('should return empty array for invalid chunk size', () => {
      expect(arrayUtils.chunk([1, 2, 3], 0)).toEqual([]);
    });

    test('should handle chunk size larger than array', () => {
      expect(arrayUtils.chunk([1, 2], 5)).toEqual([[1, 2]]);
    });

    test('should handle empty array', () => {
      expect(arrayUtils.chunk([], 2)).toEqual([]);
    });
  });

  describe('last', () => {
    test('should return last element', () => {
      expect(arrayUtils.last([1, 2, 3])).toBe(3);
    });

    test('should return undefined for empty array', () => {
      expect(arrayUtils.last([])).toBeUndefined();
    });

    test('should handle single element array', () => {
      expect(arrayUtils.last([1])).toBe(1);
    });

    test('should work with strings', () => {
      expect(arrayUtils.last(['a', 'b', 'c'])).toBe('c');
    });
  });

  describe('first', () => {
    test('should return first element', () => {
      expect(arrayUtils.first([1, 2, 3])).toBe(1);
    });

    test('should return undefined for empty array', () => {
      expect(arrayUtils.first([])).toBeUndefined();
    });

    test('should handle single element array', () => {
      expect(arrayUtils.first([1])).toBe(1);
    });

    test('should work with strings', () => {
      expect(arrayUtils.first(['a', 'b', 'c'])).toBe('a');
    });
  });
});
