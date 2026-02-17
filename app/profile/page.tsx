"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { getUserGameStats } from "@/lib/gameApi";
import { ui } from "@/components/ui/styles";
import { CountUp } from "@/components/motion/CountUp";

export default function ProfilePage() {
  const { user, login } = useAuth();
  const [stats, setStats] = useState<{
    bestStreakAllTime: number;
    totalAttempts: number;
    totalCorrect: number;
  } | null>(null);

  useEffect(() => {
    if (user) {
      getUserGameStats(user.id).then((s) => {
        if (s) {
          setStats({
            bestStreakAllTime: s.bestStreakAllTime ?? 0,
            totalAttempts: s.totalAttempts ?? 0,
            totalCorrect: s.totalCorrect ?? 0,
          });
        }
      });
    }
  }, [user]);

  if (!user) {
    return (
      <div className={`flex min-h-screen flex-col items-center justify-center gap-4 ${ui.page}`}>
        <p className={ui.muted}>Please log in to view your profile.</p>
        <button
          type="button"
          onClick={login}
          className={`px-6 py-3 ${ui.primaryBtn}`}
        >
          Log in
        </button>
      </div>
    );
  }

  const accuracy =
    stats && stats.totalAttempts > 0
      ? Math.round((stats.totalCorrect / stats.totalAttempts) * 100)
      : 0;

  return (
    <div className={`min-h-screen ${ui.page} p-6`}>
      <div className={ui.container}>
        <div className="mb-8">
          <Link
            href="/"
            className={`${ui.muted} hover:text-black/90 transition`}
          >
            ← Home
          </Link>
        </div>

        <div className={`${ui.surface} p-8`}>
          <div className="flex items-center gap-6 mb-8">
            <div className="h-20 w-20 rounded-full bg-zinc-100 overflow-hidden shrink-0">
              {user.picture ? (
                <img
                  src={user.picture}
                  alt=""
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-3xl font-bold text-zinc-500">
                  {user.name[0]}
                </div>
              )}
            </div>
            <div>
              <h1 className={ui.h2}>{user.name}</h1>
              <p className={ui.muted}>Glossary Streak Player</p>
            </div>
          </div>

          {stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className={`p-4 ${ui.inset} text-center`}>
                <div className="text-xs font-semibold text-black/50">Best streak</div>
                <div className="mt-1 text-2xl font-extrabold text-emerald-600">
                  <CountUp value={stats.bestStreakAllTime} />
                </div>
              </div>
              <div className={`p-4 ${ui.inset} text-center`}>
                <div className="text-xs font-semibold text-black/50">Total attempts</div>
                <div className="mt-1 text-2xl font-extrabold text-black/90">
                  <CountUp value={stats.totalAttempts} />
                </div>
              </div>
              <div className={`p-4 ${ui.inset} text-center`}>
                <div className="text-xs font-semibold text-black/50">Total correct</div>
                <div className="mt-1 text-2xl font-extrabold text-black/90">
                  <CountUp value={stats.totalCorrect} />
                </div>
              </div>
              <div className={`p-4 ${ui.inset} text-center`}>
                <div className="text-xs font-semibold text-black/50">Accuracy</div>
                <div className="mt-1 text-2xl font-extrabold text-black/90">
                  <CountUp value={accuracy} />%
                </div>
              </div>
            </div>
          )}

          {!stats && (
            <div className={`py-8 text-center ${ui.muted}`}>
              No stats yet. Play a game to get started!
            </div>
          )}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/play" className={`px-8 py-3 ${ui.primaryBtn}`}>
            Play
          </Link>
          <Link href="/leaderboard" className={`px-8 py-3 ${ui.ghostBtn}`}>
            Leaderboard
          </Link>
        </div>
      </div>
    </div>
  );
}
