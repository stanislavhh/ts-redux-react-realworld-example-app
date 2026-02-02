import * as dateUtils from './dateUtils';

describe('dateUtils', () => {
  describe('formatDate', () => {
    test('should format date as YYYY-MM-DD', () => {
      const date = new Date('2024-01-15');
      expect(dateUtils.formatDate(date)).toBe('2024-01-15');
    });

    test('should pad month and day with zeros', () => {
      const date = new Date('2024-02-05');
      expect(dateUtils.formatDate(date)).toBe('2024-02-05');
    });
  });

  describe('formatReadableDate', () => {
    test('should format date as readable string', () => {
      const date = new Date('2024-01-15');
      const formatted = dateUtils.formatReadableDate(date);
      expect(formatted).toContain('January');
      expect(formatted).toContain('15');
      expect(formatted).toContain('2024');
    });

    test('should include full month name', () => {
      const date = new Date('2024-12-25');
      expect(dateUtils.formatReadableDate(date)).toContain('December');
    });
  });

  describe('getDaysAgo', () => {
    test('should calculate days ago correctly', () => {
      const now = new Date();
      const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      expect(dateUtils.getDaysAgo(yesterday)).toBe(1);
    });

    test('should return 0 for today', () => {
      const today = new Date();
      expect(dateUtils.getDaysAgo(today)).toBe(0);
    });

    test('should handle past dates', () => {
      const now = new Date();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      expect(dateUtils.getDaysAgo(weekAgo)).toBe(7);
    });
  });

  describe('isToday', () => {
    test('should return true for today', () => {
      const today = new Date();
      expect(dateUtils.isToday(today)).toBe(true);
    });

    test('should return false for yesterday', () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      expect(dateUtils.isToday(yesterday)).toBe(false);
    });

    test('should return false for tomorrow', () => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      expect(dateUtils.isToday(tomorrow)).toBe(false);
    });
  });

  describe('addDays', () => {
    test('should add positive days', () => {
      const date = new Date('2024-01-15');
      const result = dateUtils.addDays(date, 5);
      expect(result.getDate()).toBe(20);
    });

    test('should subtract with negative days', () => {
      const date = new Date('2024-01-15');
      const result = dateUtils.addDays(date, -5);
      expect(result.getDate()).toBe(10);
    });

    test('should handle month boundary', () => {
      const date = new Date('2024-01-28');
      const result = dateUtils.addDays(date, 5);
      expect(result.getMonth()).toBe(1); // February
      expect(result.getDate()).toBe(2);
    });

    test('should not mutate original date', () => {
      const date = new Date('2024-01-15');
      dateUtils.addDays(date, 5);
      expect(date.getDate()).toBe(15);
    });
  });

  describe('getTimeElapsed', () => {
    test('should return "just now" for very recent dates', () => {
      const now = new Date();
      const aFewSecondsAgo = new Date(now.getTime() - 10000);
      expect(dateUtils.getTimeElapsed(aFewSecondsAgo)).toBe('just now');
    });

    test('should return minutes ago format', () => {
      const now = new Date();
      const twoMinutesAgo = new Date(now.getTime() - 2 * 60 * 1000);
      expect(dateUtils.getTimeElapsed(twoMinutesAgo)).toBe('2m ago');
    });

    test('should return hours ago format', () => {
      const now = new Date();
      const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
      expect(dateUtils.getTimeElapsed(twoHoursAgo)).toBe('2h ago');
    });

    test('should return days ago format', () => {
      const now = new Date();
      const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);
      expect(dateUtils.getTimeElapsed(threeDaysAgo)).toBe('3d ago');
    });

    test('should return readable date for older dates', () => {
      const date = new Date('2020-01-01');
      const result = dateUtils.getTimeElapsed(date);
      expect(result).toContain('January');
    });
  });
});
