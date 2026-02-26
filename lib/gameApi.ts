/**
 * Game API: fetches terms, stats, leaderboard.
 * Uses existing listGlossaryTerms + glossaryTermsByLetterAndTerm until schema deploy.
 * After deploy: switch to glossaryTermsByRandAndTerm for random terms.
 */

import { generateClient } from "aws-amplify/api";
import { Amplify } from "aws-amplify";
import { apiOnlyConfig } from "@/src/amplify-config-api-only";
import {
  listGlossaryTerms,
  glossaryTermsByLetterAndTerm,
  getUser as getUserQuery,
  getUserGameStats as getUserGameStatsQuery,
  leaderboardEntriesByKeyAndSortKey,
  getLeaderboardEntry as getLeaderboardEntryQuery,
} from "@/src/graphql/queries";
import {
  createUserGameStats as createUserGameStatsMutation,
  updateUserGameStats as updateUserGameStatsMutation,
  createLeaderboardEntry as createLeaderboardEntryMutation,
  updateLeaderboardEntry as updateLeaderboardEntryMutation,
  updateUser as updateUserMutation,
} from "@/src/graphql/mutations";
import { ModelSortDirection, LeaderboardPeriod as LeaderboardPeriodEnum } from "@/src/API";
import type { GlossaryTerm } from "@/src/API";
import type { GlossaryTermLike, TermFetcher } from "./randomTerms";
import type { LeaderboardPeriod } from "./leaderboard";

function toAPIPeriod(p: LeaderboardPeriod): LeaderboardPeriodEnum {
  return LeaderboardPeriodEnum[p];
}
import {
  buildSortKey,
  getLeaderboardKey,
} from "./leaderboard";

// API_KEY only - no Cognito/Auth
Amplify.configure(apiOnlyConfig);

const client = generateClient();


const PAGE_SIZE = 100;

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

let initialSkipDone = false;

async function fetchTermsByRand(
  seed: number,
  limit: number,
  nextToken?: string | null
): Promise<{ items: GlossaryTermLike[]; nextToken?: string | null }> {
  let effectiveToken = nextToken ?? undefined;

  if (!initialSkipDone) {
    initialSkipDone = true;
    const skipPages = Math.floor(Math.random() * 20);
    for (let i = 0; i < skipPages; i++) {
      const r = await client.graphql({
        query: listGlossaryTerms,
        variables: { filter: undefined, limit: PAGE_SIZE, nextToken: effectiveToken },
      });
      const d = (r as { data?: { listGlossaryTerms?: { nextToken?: string | null } } }).data;
      effectiveToken = d?.listGlossaryTerms?.nextToken ?? undefined;
      if (effectiveToken == null) break;
    }
  }

  const fallbackResult = await client.graphql({
    query: listGlossaryTerms,
    variables: {
      filter: undefined,
      limit: Math.max(limit, PAGE_SIZE),
      nextToken: effectiveToken ?? undefined,
    },
  });

  const fallbackData = (fallbackResult as { data?: { listGlossaryTerms?: { items: GlossaryTerm[]; nextToken?: string | null } } })
    .data;
  const fallbackItems = (fallbackData?.listGlossaryTerms?.items ?? []).filter(Boolean) as GlossaryTerm[];
  const mapped = fallbackItems.map((t) => ({
    id: t.id,
    term: t.term,
    letter: t.letter,
    definition: t.definition,
    rand: (t as { rand?: number }).rand,
    status: t.status,
  }));
  return {
    items: shuffle(mapped),
    nextToken: fallbackData?.listGlossaryTerms?.nextToken,
  };
}

export const termFetcher: TermFetcher = fetchTermsByRand;

export function resetTermFetcherSession(): void {
  initialSkipDone = false;
}

/**
 * Letter pool for distractors.
 */
export async function fetchLetterPool(
  letter: string,
  limit = 200
): Promise<GlossaryTermLike[]> {
  const result = await client.graphql({
    query: glossaryTermsByLetterAndTerm,
    variables: {
      letter,
      filter: undefined,
      limit,
    },
  });

  const data = result.data as { glossaryTermsByLetterAndTerm?: { items: (GlossaryTerm | null)[] } };
  const items = (data.glossaryTermsByLetterAndTerm?.items ?? []).filter(Boolean) as GlossaryTerm[];
  return items.map((t) => ({
    id: t.id,
    term: t.term,
    letter: t.letter,
    definition: t.definition,
    rand: (t as { rand?: number }).rand,
    status: t.status,
  }));
}

export interface UserGameStatsData {
  id: string;
  userID: string;
  bestStreakAllTime?: number | null;
  totalAttempts?: number | null;
  totalCorrect?: number | null;
  lastPlayedAt?: string | null;
}

export interface LeaderboardEntryData {
  id: string;
  userID: string;
  displayName?: string | null;
  avatarUrl?: string | null;
  score: number;
  updatedAt?: string | null;
}

function getData<T>(result: unknown): T {
  return (result as { data?: T }).data as T;
}

export interface UserProfileData {
  name?: string | null;
  title?: string | null;
  company?: string | null;
  initials?: string | null;
}

export async function getUserProfile(userId: string): Promise<UserProfileData | null> {
  try {
    const result = await client.graphql({
      query: getUserQuery,
      variables: { id: userId },
    });
    const data = getData<{ getUser?: UserProfileData }>(result);
    const u = data.getUser;
    if (!u) return null;
    return {
      name: u.name ?? null,
      title: u.title ?? null,
      company: u.company ?? null,
      initials: u.initials ?? null,
    };
  } catch {
    return null;
  }
}

/** Preferred display name for leaderboard: User initials if set, else fallback (e.g. user.name). */
export async function getLeaderboardDisplayName(
  userId: string,
  fallback: string
): Promise<string> {
  const profile = await getUserProfile(userId);
  const initials = profile?.initials?.trim().slice(0, 3).toUpperCase();
  return initials && initials.length > 0 ? initials : fallback;
}

export async function updateUserProfile(
  userId: string,
  updates: { name?: string; title?: string; company?: string; initials?: string }
): Promise<void> {
  try {
    await client.graphql({
      query: updateUserMutation,
      variables: {
        input: { id: userId, ...updates },
      },
    });
  } catch (e) {
    console.warn("Could not update user profile:", e);
  }
}

export async function getUserGameStats(userId: string): Promise<UserGameStatsData | null> {
  try {
    const result = await client.graphql({
      query: getUserGameStatsQuery,
      variables: { id: userId },
    });
    const data = getData<{ getUserGameStats?: UserGameStatsData }>(result);
    return data.getUserGameStats ?? null;
  } catch {
    return null;
  }
}

export async function upsertUserGameStats(
  userId: string,
  sessionResult: {
    streakCorrect: number;
  }
): Promise<void> {
  try {
    const getResult = await client.graphql({
      query: getUserGameStatsQuery,
      variables: { id: userId },
    });
    const existing = getData<{ getUserGameStats?: UserGameStatsData }>(getResult);
    const prev = existing.getUserGameStats;
    const addAttempts = sessionResult.streakCorrect + 1;
    const addCorrect = sessionResult.streakCorrect;
    const bestStreakAllTime = Math.max(
      prev?.bestStreakAllTime ?? 0,
      sessionResult.streakCorrect
    );
    const totalAttempts = (prev?.totalAttempts ?? 0) + addAttempts;
    const totalCorrect = (prev?.totalCorrect ?? 0) + addCorrect;

    const now = new Date().toISOString();
    const input = {
      id: userId,
      userID: userId,
      bestStreakAllTime,
      totalAttempts,
      totalCorrect,
      lastPlayedAt: now,
    };

    if (prev) {
      await client.graphql({
        query: updateUserGameStatsMutation,
        variables: { input: { ...input, id: userId } },
      });
    } else {
      await client.graphql({
        query: createUserGameStatsMutation,
        variables: { input },
      });
    }
  } catch (err) {
    console.warn("Could not persist UserGameStats:", err);
  }
}

export async function getLeaderboard(
  period: LeaderboardPeriod,
  limit = 100
): Promise<LeaderboardEntryData[]> {
  try {
    const key = getLeaderboardKey(period);
    const result = await client.graphql({
      query: leaderboardEntriesByKeyAndSortKey,
      variables: {
        key,
        sortDirection: ModelSortDirection.ASC,
        limit,
      },
    });
    const data = getData<{ leaderboardEntriesByKeyAndSortKey?: { items: LeaderboardEntryData[] } }>(result);
    const items = data.leaderboardEntriesByKeyAndSortKey?.items ?? [];
    return items.filter(Boolean);
  } catch {
    return [];
  }
}

/**
 * Ensures each entry from a period (e.g. Daily/Weekly) exists in All-time.
 * Fixes scores that appear in Daily/Weekly but were never written to ALL.
 * Upsert only updates ALL if the new score is higher, so safe to call.
 */
export async function syncEntriesToAllTime(
  entries: LeaderboardEntryData[]
): Promise<void> {
  for (const e of entries) {
    try {
      await upsertLeaderboardEntry(
        "ALL",
        e.userID,
        e.displayName ?? "???",
        e.avatarUrl ?? null,
        e.score
      );
    } catch {
      // ignore per-entry failures
    }
  }
}

export async function upsertLeaderboardEntry(
  period: LeaderboardPeriod,
  userId: string,
  displayName: string,
  avatarUrl: string | null,
  score: number
): Promise<void> {
  try {
    const key = getLeaderboardKey(period);
    const entryId = `${key}#${userId}`;
    const sortKey = buildSortKey(score);

    const input = {
      id: entryId,
      period: toAPIPeriod(period),
      key,
      sortKey,
      userID: userId,
      displayName,
      avatarUrl: avatarUrl ?? undefined,
      score,
      updatedAt: new Date().toISOString(),
    };

    const getResult = await client.graphql({
      query: getLeaderboardEntryQuery,
      variables: { id: entryId },
    });
    const existing = getData<{ getLeaderboardEntry?: { score: number } }>(getResult);

    if (existing.getLeaderboardEntry && existing.getLeaderboardEntry.score >= score) {
      return;
    }

    if (existing.getLeaderboardEntry) {
      await client.graphql({
        query: updateLeaderboardEntryMutation,
        variables: { input },
      });
    } else {
      await client.graphql({
        query: createLeaderboardEntryMutation,
        variables: { input },
      });
    }
  } catch (err) {
    console.warn("Could not persist LeaderboardEntry:", err);
  }
}

const LEADERBOARD_PERIODS: LeaderboardPeriod[] = ["DAILY", "WEEKLY", "ALL"];

/**
 * Updates displayName (e.g. 3-letter initials) for a user's leaderboard entries
 * across all periods and saves initials on the User. Use after "Enter Your Initials".
 */
export async function updateLeaderboardInitials(
  userId: string,
  initials: string
): Promise<void> {
  const displayName = initials.slice(0, 3).toUpperCase();
  if (!displayName) return;
  try {
    await updateUserProfile(userId, { initials: displayName });
    for (const period of LEADERBOARD_PERIODS) {
      const key = getLeaderboardKey(period);
      const entryId = `${key}#${userId}`;
      const getResult = await client.graphql({
        query: getLeaderboardEntryQuery,
        variables: { id: entryId },
      });
      const existing = getData<{ getLeaderboardEntry?: { id: string } }>(getResult);
      if (existing.getLeaderboardEntry) {
        await client.graphql({
          query: updateLeaderboardEntryMutation,
          variables: {
            input: { id: entryId, displayName },
          },
        });
      }
    }
  } catch (err) {
    console.warn("Could not update leaderboard initials:", err);
  }
}
