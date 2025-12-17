import * as formatUtils from './formatUtils';

describe('formatUtils', () => {
  describe('formatNumber', () => {
    test('should format number with commas', () => {
      expect(formatUtils.formatNumber(1000)).toBe('1,000');
    });

    test('should format large numbers', () => {
      expect(formatUtils.formatNumber(1000000)).toBe('1,000,000');
    });

    test('should format small numbers without commas', () => {
      expect(formatUtils.formatNumber(100)).toBe('100');
    });

    test('should handle decimals', () => {
      const result = formatUtils.formatNumber(1234.56);
      expect(result).toContain('1');
      expect(result).toContain('234');
    });

    test('should handle zero', () => {
      expect(formatUtils.formatNumber(0)).toBe('0');
    });
  });

  describe('formatBytes', () => {
    test('should format bytes', () => {
      expect(formatUtils.formatBytes(0)).toBe('0 B');
    });

    test('should format kilobytes', () => {
      expect(formatUtils.formatBytes(1024)).toBe('1 KB');
    });

    test('should format megabytes', () => {
      const result = formatUtils.formatBytes(1024 * 1024);
      expect(result).toContain('MB');
      expect(result).toContain('1');
    });

    test('should format gigabytes', () => {
      const result = formatUtils.formatBytes(1024 * 1024 * 1024);
      expect(result).toContain('GB');
      expect(result).toContain('1');
    });

    test('should handle partial units', () => {
      const result = formatUtils.formatBytes(1536); // 1.5 KB
      expect(result).toContain('KB');
    });
  });

  describe('formatCurrency', () => {
    test('should format currency', () => {
      const result = formatUtils.formatCurrency(100);
      expect(result).toContain('100');
      expect(result).toContain('$');
    });

    test('should format with decimals', () => {
      const result = formatUtils.formatCurrency(99.99);
      expect(result).toContain('99');
    });

    test('should format large amounts', () => {
      const result = formatUtils.formatCurrency(1000000);
      expect(result).toContain('1');
    });

    test('should support different currencies', () => {
      const result = formatUtils.formatCurrency(100, 'EUR');
      expect(result).toContain('100');
    });
  });

  describe('formatPercentage', () => {
    test('should format percentage', () => {
      expect(formatUtils.formatPercentage(0.5)).toBe('50.00%');
    });

    test('should handle zero', () => {
      expect(formatUtils.formatPercentage(0)).toBe('0.00%');
    });

    test('should handle one', () => {
      expect(formatUtils.formatPercentage(1)).toBe('100.00%');
    });

    test('should support custom decimals', () => {
      expect(formatUtils.formatPercentage(0.5555, 1)).toBe('55.5%');
    });

    test('should handle small percentages', () => {
      expect(formatUtils.formatPercentage(0.01)).toBe('1.00%');
    });
  });

  describe('camelCaseToTitleCase', () => {
    test('should convert camelCase to Title Case', () => {
      expect(formatUtils.camelCaseToTitleCase('firstName')).toBe('First Name');
    });

    test('should handle multiple camelCase words', () => {
      expect(formatUtils.camelCaseToTitleCase('firstName lastName')).toBe('First Name last Name');
    });

    test('should handle already title cased', () => {
      expect(formatUtils.camelCaseToTitleCase('FirstName')).toBe('First Name');
    });

    test('should handle single word', () => {
      expect(formatUtils.camelCaseToTitleCase('hello')).toBe('Hello');
    });

    test('should handle empty string', () => {
      expect(formatUtils.camelCaseToTitleCase('')).toBe('');
    });
  });

  describe('padNumber', () => {
    test('should pad number with zeros', () => {
      expect(formatUtils.padNumber(5, 3)).toBe('005');
    });

    test('should not pad if already long enough', () => {
      expect(formatUtils.padNumber(123, 3)).toBe('123');
    });

    test('should handle zero', () => {
      expect(formatUtils.padNumber(0, 2)).toBe('00');
    });

    test('should handle length 1', () => {
      expect(formatUtils.padNumber(5, 1)).toBe('5');
    });

    test('should handle large pad length', () => {
      expect(formatUtils.padNumber(5, 5)).toBe('00005');
    });
  });
});
