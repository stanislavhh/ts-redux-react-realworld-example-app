import * as validationUtils from './validationUtils';

describe('validationUtils', () => {
  describe('isValidEmail', () => {
    test('should validate correct email', () => {
      expect(validationUtils.isValidEmail('test@example.com')).toBe(true);
    });

    test('should reject email without @', () => {
      expect(validationUtils.isValidEmail('testexample.com')).toBe(false);
    });

    test('should reject email without domain', () => {
      expect(validationUtils.isValidEmail('test@')).toBe(false);
    });

    test('should reject email without extension', () => {
      expect(validationUtils.isValidEmail('test@example')).toBe(false);
    });

    test('should reject empty string', () => {
      expect(validationUtils.isValidEmail('')).toBe(false);
    });

    test('should accept email with subdomain', () => {
      expect(validationUtils.isValidEmail('test@mail.example.com')).toBe(true);
    });
  });

  describe('isValidUrl', () => {
    test('should validate correct URL', () => {
      expect(validationUtils.isValidUrl('https://example.com')).toBe(true);
    });

    test('should validate HTTP URL', () => {
      expect(validationUtils.isValidUrl('http://example.com')).toBe(true);
    });

    test('should reject invalid URL', () => {
      expect(validationUtils.isValidUrl('not a url')).toBe(false);
    });

    test('should reject empty string', () => {
      expect(validationUtils.isValidUrl('')).toBe(false);
    });

    test('should validate URL with path', () => {
      expect(validationUtils.isValidUrl('https://example.com/path')).toBe(true);
    });
  });

  describe('isNumeric', () => {
    test('should return true for numeric string', () => {
      expect(validationUtils.isNumeric('123')).toBe(true);
    });

    test('should return true for decimal string', () => {
      expect(validationUtils.isNumeric('123.45')).toBe(true);
    });

    test('should return true for negative number', () => {
      expect(validationUtils.isNumeric('-123')).toBe(true);
    });

    test('should return false for non-numeric string', () => {
      expect(validationUtils.isNumeric('abc')).toBe(false);
    });

    test('should return false for empty string', () => {
      expect(validationUtils.isNumeric('')).toBe(false);
    });

    test('should return false for Infinity', () => {
      expect(validationUtils.isNumeric('Infinity')).toBe(false);
    });
  });

  describe('isBetween', () => {
    test('should return true for value between min and max', () => {
      expect(validationUtils.isBetween(5, 1, 10)).toBe(true);
    });

    test('should return true for value equal to min', () => {
      expect(validationUtils.isBetween(1, 1, 10)).toBe(true);
    });

    test('should return true for value equal to max', () => {
      expect(validationUtils.isBetween(10, 1, 10)).toBe(true);
    });

    test('should return false for value below min', () => {
      expect(validationUtils.isBetween(0, 1, 10)).toBe(false);
    });

    test('should return false for value above max', () => {
      expect(validationUtils.isBetween(11, 1, 10)).toBe(false);
    });
  });

  describe('hasRequiredKeys', () => {
    test('should return true when all keys exist', () => {
      const obj = { name: 'John', age: 30 };
      expect(validationUtils.hasRequiredKeys(obj, ['name', 'age'])).toBe(true);
    });

    test('should return false when key is missing', () => {
      const obj = { name: 'John' };
      expect(validationUtils.hasRequiredKeys(obj, ['name', 'age'])).toBe(false);
    });

    test('should return false when value is null', () => {
      const obj = { name: 'John', age: null };
      expect(validationUtils.hasRequiredKeys(obj, ['name', 'age'])).toBe(false);
    });

    test('should return false when value is undefined', () => {
      const obj = { name: 'John', age: undefined };
      expect(validationUtils.hasRequiredKeys(obj, ['name', 'age'])).toBe(false);
    });

    test('should return true for empty required keys', () => {
      const obj = { name: 'John' };
      expect(validationUtils.hasRequiredKeys(obj, [])).toBe(true);
    });
  });

  describe('matchesPattern', () => {
    test('should match pattern', () => {
      expect(validationUtils.matchesPattern('hello', /^hello$/)).toBe(true);
    });

    test('should not match pattern', () => {
      expect(validationUtils.matchesPattern('hello', /^world$/)).toBe(false);
    });

    test('should match with case insensitive flag', () => {
      expect(validationUtils.matchesPattern('Hello', /hello/i)).toBe(true);
    });

    test('should match numbers', () => {
      expect(validationUtils.matchesPattern('123', /^\d+$/)).toBe(true);
    });
  });
});
