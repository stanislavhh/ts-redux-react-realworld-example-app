import * as stringUtils from './stringUtils';

describe('stringUtils', () => {
  describe('capitalize', () => {
    test('should capitalize first letter', () => {
      expect(stringUtils.capitalize('hello')).toBe('Hello');
    });

    test('should handle already capitalized string', () => {
      expect(stringUtils.capitalize('Hello')).toBe('Hello');
    });

    test('should handle empty string', () => {
      expect(stringUtils.capitalize('')).toBe('');
    });

    test('should handle single character', () => {
      expect(stringUtils.capitalize('a')).toBe('A');
    });
  });

  describe('toSlug', () => {
    test('should convert to lowercase slug', () => {
      expect(stringUtils.toSlug('Hello World')).toBe('hello-world');
    });

    test('should replace multiple spaces with single hyphen', () => {
      expect(stringUtils.toSlug('hello   world')).toBe('hello-world');
    });

    test('should remove special characters', () => {
      expect(stringUtils.toSlug('Hello, World!')).toBe('hello-world');
    });

    test('should handle leading/trailing spaces', () => {
      expect(stringUtils.toSlug('  hello world  ')).toBe('hello-world');
    });
  });

  describe('truncate', () => {
    test('should truncate string with ellipsis', () => {
      expect(stringUtils.truncate('hello world', 5)).toBe('hello...');
    });

    test('should not truncate if string is shorter than limit', () => {
      expect(stringUtils.truncate('hello', 10)).toBe('hello');
    });

    test('should truncate at exact length', () => {
      expect(stringUtils.truncate('hello world', 11)).toBe('hello world');
    });

    test('should handle empty string', () => {
      expect(stringUtils.truncate('', 5)).toBe('');
    });
  });

  describe('isEmpty', () => {
    test('should return true for empty string', () => {
      expect(stringUtils.isEmpty('')).toBe(true);
    });

    test('should return true for whitespace only', () => {
      expect(stringUtils.isEmpty('   ')).toBe(true);
    });

    test('should return false for non-empty string', () => {
      expect(stringUtils.isEmpty('hello')).toBe(false);
    });

    test('should return false for string with text and spaces', () => {
      expect(stringUtils.isEmpty('  hello  ')).toBe(false);
    });
  });

  describe('removeWhitespace', () => {
    test('should remove all whitespace', () => {
      expect(stringUtils.removeWhitespace('h e l l o')).toBe('hello');
    });

    test('should remove tabs and newlines', () => {
      expect(stringUtils.removeWhitespace('hello\tworld\ntest')).toBe('helloworldtest');
    });

    test('should handle empty string', () => {
      expect(stringUtils.removeWhitespace('')).toBe('');
    });

    test('should preserve non-whitespace characters', () => {
      expect(stringUtils.removeWhitespace('hello-world')).toBe('hello-world');
    });
  });
});
