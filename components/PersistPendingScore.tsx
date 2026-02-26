'use client';

/**
 * Pending score is no longer auto-flushed here. When a guest clicks "Sign in to save",
 * they are sent to login with returnTo=/play. After login they land on /play, which
 * shows the Enter Initials flow and then calls flushPendingScoreWithInitials.
 */
export function PersistPendingScore() {
  return null;
}
