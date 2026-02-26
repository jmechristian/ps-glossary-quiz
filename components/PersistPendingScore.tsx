'use client';

import { useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import { flushPendingScore } from '@/lib/pendingScore';

/**
 * When user becomes available (e.g. after login redirect), persist any score
 * they saved as a guest so it works whether they land on /play or /leaderboard.
 */
export function PersistPendingScore() {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    flushPendingScore(user);
  }, [user]);

  return null;
}
