"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/lib/gameStore";
import { useAuth } from "@/lib/auth";
import { createTermSelector } from "@/lib/randomTerms";
import { pickDistractors, buildChoices, createRecentQueue } from "@/lib/distractors";
import { termFetcher, fetchLetterPool, resetTermFetcherSession } from "@/lib/gameApi";
import {
  upsertUserGameStats,
  upsertLeaderboardEntry,
} from "@/lib/gameApi";
import { BoardPath } from "@/components/BoardPath";
import { FlashcardPrompt } from "@/components/FlashcardPrompt";
import { ChoiceButtons } from "@/components/ChoiceButtons";
import { TimerRing } from "@/components/TimerRing";
import { ResultToast } from "@/components/ResultToast";
import { StreakHUD } from "@/components/StreakHUD";
import { AnimatedCard } from "@/components/motion/AnimatedCard";
import { ui } from "@/components/ui/styles";
import type { GlossaryTermLike } from "@/lib/randomTerms";
import type { LeaderboardPeriod } from "@/lib/leaderboard";

const TIMER_SECONDS = 10;
const FEEDBACK_MS = 500;

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function PlayPage() {
  const router = useRouter();
  const { user } = useAuth();
  const {
    phase,
    currentTerm,
    choices,
    correctChoiceIndex,
    streakCorrect,
    boardPosition,
    timerRemaining,
    isCorrect,
    setPhase,
    setCurrentTerm,
    setStreak,
    setBoardPosition,
    setTimerRemaining,
    setFeedback,
    reset,
  } = useGameStore();

  const selectorRef = useRef<ReturnType<typeof createTermSelector> | null>(null);
  const letterPoolCache = useRef<Map<string, GlossaryTermLike[]>>(new Map());
  const recentDistractors = useRef(createRecentQueue());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const gameOverAttemptedRef = useRef<number>(0);

  const persistGameOver = useCallback(
    async (finalStreak: number) => {
      if (!user) return;
      try {
        await upsertUserGameStats(user.id, { streakCorrect: finalStreak });
        const periods: LeaderboardPeriod[] = ["DAILY", "WEEKLY", "ALL"];
        for (const p of periods) {
          await upsertLeaderboardEntry(
            p,
            user.id,
            user.name,
            user.picture,
            finalStreak
          );
        }
      } catch (e) {
        console.warn("Persist failed:", e);
      }
    },
    [user]
  );

  const loadNextTerm = useCallback(async () => {
    if (!selectorRef.current) return;

    const term = await selectorRef.current.getNextTerm();
    if (!term) {
      gameOverAttemptedRef.current = streakCorrect;
      setPhase("gameover");
      await persistGameOver(streakCorrect);
      return;
    }

    let pool = letterPoolCache.current.get(term.letter);
    if (!pool) {
      pool = await fetchLetterPool(term.letter);
      letterPoolCache.current.set(term.letter, pool);
    }

    const distractorResult = pickDistractors(term, pool, recentDistractors.current.get());
    let defs: [string, string];
    if (distractorResult) {
      recentDistractors.current.add(distractorResult[0].id);
      recentDistractors.current.add(distractorResult[1].id);
      defs = [distractorResult[0].definition, distractorResult[1].definition];
    } else {
      const fallbackLetter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
      let fallbackPool = letterPoolCache.current.get(fallbackLetter);
      if (!fallbackPool) {
        fallbackPool = await fetchLetterPool(fallbackLetter);
        letterPoolCache.current.set(fallbackLetter, fallbackPool);
      }
      const others = fallbackPool
        .filter((t) => t.id !== term.id)
        .slice(0, 2)
        .map((t) => t.definition);
      defs = [others[0] ?? "", others[1] ?? ""];
    }

    const allChoices = buildChoices(term.definition, defs[0], defs[1]);
    const correctIndex = allChoices.indexOf(term.definition);
    setCurrentTerm(term, allChoices, correctIndex);
    setTimerRemaining(TIMER_SECONDS);
    setSelectedIndex(null);
  }, [setCurrentTerm, setTimerRemaining, setPhase, persistGameOver, streakCorrect]);

  useEffect(() => {
    if (phase !== "playing") return;

    timerRef.current = setInterval(() => {
      setTimerRemaining(
        (prev) => Math.max(0, Math.round((prev - 0.1) * 10) / 10)
      );
    }, 100);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase, setTimerRemaining]);

  useEffect(() => {
    if (phase !== "playing") return;
    if (timerRemaining <= 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      gameOverAttemptedRef.current = streakCorrect;
      setPhase("gameover");
      persistGameOver(streakCorrect);
    }
  }, [timerRemaining, phase, setPhase, persistGameOver, streakCorrect]);

  useEffect(() => {
    if (useGameStore.getState().phase === "gameover") {
      setPhase("idle");
    }
  }, []);

  useEffect(() => {
    if (phase === "idle") {
      reset();
      selectorRef.current = createTermSelector(termFetcher);
      resetTermFetcherSession();
      letterPoolCache.current.clear();
      recentDistractors.current = createRecentQueue();
      setPhase("playing");
      setStreak(0);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === "playing" && !currentTerm && selectorRef.current) {
      loadNextTerm();
    }
  }, [phase, currentTerm, loadNextTerm]);

  const handleSelect = useCallback(
    (index: number) => {
      if (selectedIndex !== null) return;
      setSelectedIndex(index);
      if (timerRef.current) clearInterval(timerRef.current);

      const correct = index === correctChoiceIndex;
      setFeedback(correct);

      if (!correct) {
        gameOverAttemptedRef.current = streakCorrect + 1;
        setTimeout(() => {
          setPhase("gameover");
          persistGameOver(streakCorrect);
        }, FEEDBACK_MS);
        return;
      }

      const newStreak = streakCorrect + 1;
      setStreak(newStreak);
      setBoardPosition(newStreak);

      setTimeout(() => {
        setPhase("feedback");
        setTimeout(() => {
          setCurrentTerm(null, [], 0);
          loadNextTerm();
          setPhase("playing");
        }, FEEDBACK_MS);
      }, FEEDBACK_MS);
    },
    [correctChoiceIndex, streakCorrect, selectedIndex, setFeedback, setStreak, setBoardPosition, setPhase, setCurrentTerm, loadNextTerm, persistGameOver]
  );

  if (phase === "gameover") {
    return (
      <>
        <ResultToast
          open={true}
          correct={streakCorrect}
          streak={streakCorrect}
          attempted={gameOverAttemptedRef.current}
          onPlayAgain={() => setPhase("idle")}
          onLeaderboard={() => router.push("/leaderboard")}
          onHome={() => router.push("/")}
        />
        <div className="min-h-screen" />
      </>
    );
  }

  if (!currentTerm) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-xl text-zinc-600">Loading...</div>
      </div>
    );
  }

  const feedback =
    isCorrect === true ? "correct" : isCorrect === false ? "wrong" : "idle";
  const feedbackIndex = isCorrect !== null ? selectedIndex : null;

  return (
    <div className={`min-h-screen ${ui.page} p-4 md:p-8`}>
      <div className={`${ui.container} ${ui.stage}`}>
        <div className="flex items-center justify-between mb-4 py-2 px-1 rounded-xl bg-white/60 border border-black/5">
          <StreakHUD streak={streakCorrect} />
          <TimerRing remaining={timerRemaining} />
        </div>
        <BoardPath currentPosition={boardPosition} />
        <div className="mt-8 space-y-6">
          <AnimatedCard
            motionKey={currentTerm?.id ?? boardPosition}
          >
            <FlashcardPrompt term={currentTerm.term} />
          </AnimatedCard>
          <ChoiceButtons
            choices={choices}
            correctIndex={correctChoiceIndex}
            selectedIndex={selectedIndex}
            isRevealed={isCorrect !== null}
            onSelect={handleSelect}
            feedback={feedback}
            feedbackIndex={feedbackIndex}
          />
          <p className={`text-center text-sm ${ui.muted}`}>
            One mistake ends the run.
          </p>
        </div>
      </div>
    </div>
  );
}
