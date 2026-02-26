/**
 * Score saved to sessionStorage when a guest clicks "Sign in to save score".
 * After login they land on /play, enter initials, then we persist with that display name.
 */

import {
  upsertUserGameStats,
  upsertLeaderboardEntry,
  updateLeaderboardInitials,
  updateUserProfile,
} from '@/lib/gameApi';
import type { User } from '@/lib/auth';
import type { LeaderboardPeriod } from '@/lib/leaderboard';

export const PENDING_SCORE_KEY = 'ps-glossary-pending-score';

export type PendingScore = { score: number };

export function getPendingScore(): PendingScore | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(PENDING_SCORE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PendingScore;
  } catch {
    return null;
  }
}

/**
 * Persist pending score with the given initials as leaderboard display name.
 * Call from /play after user enters initials post-login. Clears sessionStorage.
 */
export async function flushPendingScoreWithInitials(
  user: User,
  score: number,
  initials: string
): Promise<void> {
  if (typeof window === 'undefined') return;
  const displayName = initials.trim().slice(0, 3).toUpperCase();
  if (!displayName) return;
  try {
    sessionStorage.removeItem(PENDING_SCORE_KEY);
    await upsertUserGameStats(user.id, { streakCorrect: score });
    const periods: LeaderboardPeriod[] = ['DAILY', 'WEEKLY', 'ALL'];
    for (const p of periods) {
      await upsertLeaderboardEntry(
        p,
        user.id,
        displayName,
        user.picture,
        score,
      );
    }
    await updateLeaderboardInitials(user.id, displayName);
    await updateUserProfile(user.id, { initials: displayName });
  } catch (e) {
    console.warn('Could not save pending score:', e);
  }
}

/** @deprecated Use flushPendingScoreWithInitials from /play after user enters initials. */
export async function flushPendingScore(user: User): Promise<void> {
  if (typeof window === 'undefined') return;
  try {
    const raw = sessionStorage.getItem(PENDING_SCORE_KEY);
    if (!raw) return;
    const { score } = JSON.parse(raw) as PendingScore;
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
