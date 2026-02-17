/**
 * Distractor generation: 2 plausible fake definitions from same letter pool.
 * Uses token overlap and length penalty for similarity scoring.
 */

import { tokenize } from "./stopwords";

export type TermWithDef = {
  id: string;
  letter: string;
  definition: string;
};

const RECENT_QUEUE_SIZE = 30;

function similarityScore(candidateDef: string, correctDef: string): number {
  const cTokens = tokenize(candidateDef);
  const corrTokens = new Set(tokenize(correctDef));
  let overlap = 0;
  for (const t of cTokens) {
    if (corrTokens.has(t)) overlap++;
  }
  const lenPenalty = Math.abs(candidateDef.length - correctDef.length) * 0.02;
  return overlap * 10 - lenPenalty;
}

export function pickDistractors(
  correctTerm: TermWithDef,
  pool: TermWithDef[],
  recentUsedIds: string[]
): [TermWithDef, TermWithDef] | null {
  const excludeIds = new Set([correctTerm.id, ...recentUsedIds]);
  const candidates = pool.filter((t) => !excludeIds.has(t.id));
  if (candidates.length < 2) return null;

  const scored = candidates.map((t) => ({
    term: t,
    score: similarityScore(t.definition, correctTerm.definition),
  }));
  scored.sort((a, b) => b.score - a.score);

  const [d1, d2] = scored;
  if (!d1 || !d2) return null;
  return [d1.term, d2.term];
}

export function buildChoices(
  correctDef: string,
  distractor1: string,
  distractor2: string
): string[] {
  const arr = [correctDef, distractor1, distractor2];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j]!, arr[i]!];
  }
  return arr;
}

export function createRecentQueue(): {
  add: (id: string) => void;
  get: () => string[];
} {
  const queue: string[] = [];
  return {
    add: (id: string) => {
      queue.push(id);
      if (queue.length > RECENT_QUEUE_SIZE) queue.shift();
    },
    get: () => [...queue],
  };
}
