/**
 * Random term selection with buffer and wrap-around.
 * Uses glossaryTermByRand when available, else listGlossaryTerms fallback (shuffled batches).
 */

export type GlossaryTermLike = {
  id: string;
  term: string;
  letter: string;
  definition: string;
  rand?: number | null;
  status?: string | null;
};

export type TermFetcher = (
  seed: number,
  limit: number,
  nextToken?: string | null
) => Promise<{
  items: GlossaryTermLike[];
  nextToken?: string | null;
}>;

const MAX_RAND = 1e9;

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

/**
 * Creates a getNextTerm function that maintains buffer, seenIds, and wrap-around.
 */
export function createTermSelector(fetchPage: TermFetcher) {
  let seed = Math.floor(Math.random() * (MAX_RAND + 1));
  const seenIds = new Set<string>();
  let termBuffer: GlossaryTermLike[] = [];
  let nextToken: string | null = null;

  const MIN_BUFFER = 15;
  const FETCH_SIZE = 100;

  async function refillBuffer(): Promise<void> {
    if (termBuffer.length >= MIN_BUFFER) return;

    let accumulated: GlossaryTermLike[] = [];
    let currentSeed = seed;
    let currentToken = nextToken;

    while (accumulated.length < FETCH_SIZE) {
      const result = await fetchPage(currentSeed, FETCH_SIZE, currentToken ?? undefined);

      const items = (result.items ?? []).filter(
        (t): t is GlossaryTermLike => t != null
      );

      for (const t of items) {
        if (!seenIds.has(t.id)) {
          accumulated.push(t);
        }
      }

      currentToken = result.nextToken ?? null;

      if (!currentToken && accumulated.length < FETCH_SIZE) {
        if (seenIds.size > 0) {
          seenIds.clear();
          currentToken = null;
        } else {
          break;
        }
      }

      if (!currentToken && accumulated.length === 0) break;
    }

    if (accumulated.length > 0) {
      accumulated = shuffle(accumulated);
    }
    termBuffer = termBuffer.concat(accumulated);
    nextToken = currentToken;
  }

  async function getNextTerm(): Promise<GlossaryTermLike | null> {
    await refillBuffer();

    const picked = termBuffer.find((t) => !seenIds.has(t.id));
    if (!picked) return null;

    seenIds.add(picked.id);
    termBuffer = termBuffer.filter((t) => t.id !== picked.id);
    return picked;
  }

  return {
    getNextTerm,
    getSeed: () => seed,
    getSeenCount: () => seenIds.size,
    reset: () => {
      seed = Math.floor(Math.random() * (MAX_RAND + 1));
      seenIds.clear();
      termBuffer = [];
      nextToken = null;
    },
  };
}
