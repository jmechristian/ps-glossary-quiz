/**
 * Daily and weekly key generation for leaderboard periods.
 * - DAILY: YYYY-MM-DD
 * - WEEKLY: YYYY-WW (ISO week)
 * - ALL: "ALL"
 */

export function getDateString(d: Date = new Date()): string {
  return d.toISOString().slice(0, 10);
}

export function getISOWeek(d: Date = new Date()): string {
  const date = new Date(d);
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  const yearStart = new Date(date.getFullYear(), 0, 1);
  const weekNo = Math.ceil(
    ((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
  );
  return `${date.getFullYear()}-W${String(weekNo).padStart(2, "0")}`;
}

export function getDailyKey(d?: Date): string {
  return getDateString(d);
}

export function getWeeklyKey(d?: Date): string {
  return getISOWeek(d);
}

export const ALL_TIME_KEY = "ALL";
