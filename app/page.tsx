"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth";
import { getUserGameStats } from "@/lib/gameApi";
import { ui } from "@/components/ui/styles";
import { CountUp } from "@/components/motion/CountUp";

export default function HomePage() {
  const { user, isLoading, login, logout } = useAuth();
  const [stats, setStats] = useState<{
    bestStreakAllTime: number;
    dailyBest?: number;
    weeklyBest?: number;
  } | null>(null);

  useEffect(() => {
    if (user) {
      getUserGameStats(user.id).then((s) => {
        if (s) {
          setStats({
            bestStreakAllTime: s.bestStreakAllTime ?? 0,
          });
        } else {
          setStats({ bestStreakAllTime: 0 });
        }
      });
    }
  }, [user]);

  return (
    <div className={`flex min-h-screen flex-col items-center justify-center ${ui.page} p-6`}>
      <main className={`${ui.container} ${ui.stage} text-center`}>
        <h1 className={`${ui.h1} mb-4`}>
          PackRun
        </h1>
        <p className={`text-lg ${ui.muted} mb-10 max-w-lg mx-auto`}>
          A high-speed packaging terminology challenge
        </p>

        {stats && (
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            <div className={`p-6 ${ui.surface} text-center min-w-[140px]`}>
              <span className={`text-xs font-semibold block ${ui.muted}`}>Longest Run</span>
              <span className={`text-3xl font-extrabold mt-1 block ${ui.clemsonText}`}>
                <CountUp value={stats.bestStreakAllTime} />
              </span>
            </div>
          </div>
        )}

        <Link
          href="/play"
          className={`inline-block w-full max-w-sm py-5 px-10 text-xl ${ui.primaryBtn}`}
        >
          Start Run
        </Link>

        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link
            href="/leaderboard"
            className={`px-6 py-3 ${ui.ghostBtn}`}
          >
            See Rankings
          </Link>
          {user && (
            <Link
              href="/profile"
              className={`px-6 py-3 ${ui.ghostBtn}`}
            >
              Profile
            </Link>
          )}
          {!isLoading &&
            (user ? (
              <button
                type="button"
                onClick={logout}
                className={`px-6 py-3 ${ui.ghostBtn}`}
              >
                Log out
              </button>
            ) : (
              <button
                type="button"
                onClick={login}
                className={`px-6 py-3 ${ui.ghostBtn}`}
              >
                Log in
              </button>
            ))}
        </div>
      </main>
    </div>
  );
}
