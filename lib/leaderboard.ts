/**
 * Leaderboard sortKey construction and helpers.
 * sortKey format: SCORE#{paddedScore}#TS#{isoNow}
 * For descending (highest first): use SCORE#(99999999 - score) so lexicographic ASC = numeric DESC
 */

export type LeaderboardPeriod = "DAILY" | "WEEKLY" | "ALL";

export function buildSortKey(score: number, now: Date = new Date()): string {
  const padded = String(99999999 - score).padStart(8, "0");
  const ts = now.toISOString();
  return `SCORE#${padded}#TS#${ts}`;
}

import { getDailyKey, getWeeklyKey } from "./timeKeys";

export function getLeaderboardKey(
  period: LeaderboardPeriod,
  d?: Date
): string {
  switch (period) {
    case "DAILY":
      return getDailyKey(d);
    case "WEEKLY":
      return getWeeklyKey(d);
    case "ALL":
      return "ALL";
    default:
      return "ALL";
  }
}
