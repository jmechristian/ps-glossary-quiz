/**
 * Score saved to sessionStorage when a guest clicks "Sign in to save score".
 * Persisted after they log in so it works no matter which page they land on.
 */

import {
  upsertUserGameStats,
  upsertLeaderboardEntry,
} from '@/lib/gameApi';
import type { User } from '@/lib/auth';
import type { LeaderboardPeriod } from '@/lib/leaderboard';

export const PENDING_SCORE_KEY = 'ps-glossary-pending-score';

export async function flushPendingScore(user: User): Promise<void> {
  if (typeof window === 'undefined') return;
  try {
    const raw = sessionStorage.getItem(PENDING_SCORE_KEY);
    if (!raw) return;
    const { score } = JSON.parse(raw) as { score: number };
    sessionStorage.removeItem(PENDING_SCORE_KEY);
    await upsertUserGameStats(user.id, { streakCorrect: score });
    const periods: LeaderboardPeriod[] = ['DAILY', 'WEEKLY', 'ALL'];
    for (const p of periods) {
      await upsertLeaderboardEntry(
        p,
        user.id,
        user.name,
        user.picture,
        score,
      );
    }
  } catch {
    sessionStorage.removeItem(PENDING_SCORE_KEY);
  }
}
