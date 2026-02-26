'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGameStore } from '@/lib/gameStore';
import { useAuth } from '@/lib/auth';
import { createTermSelector } from '@/lib/randomTerms';
import {
  pickDistractors,
  buildChoices,
  createRecentQueue,
} from '@/lib/distractors';
import {
  termFetcher,
  fetchLetterPool,
  resetTermFetcherSession,
} from '@/lib/gameApi';
import {
  upsertUserGameStats,
  upsertLeaderboardEntry,
  updateLeaderboardInitials,
  getLeaderboardDisplayName,
  getUserProfile,
} from '@/lib/gameApi';
import { BoardPath } from '@/components/BoardPath';
import { FlashcardPrompt } from '@/components/FlashcardPrompt';
import { ChoiceButtons } from '@/components/ChoiceButtons';
import { TimerRing } from '@/components/TimerRing';
import { ResultToast } from '@/components/ResultToast';
import {
  EnterInitials,
  type EnterInitialsProps,
} from '@/components/EnterInitials';
import { StreakHUD } from '@/components/StreakHUD';
import { PixelLoader } from '@/components/PixelLoader';
import { AnimatedCard } from '@/components/motion/AnimatedCard';
import { ui } from '@/components/ui/styles';
import type { GlossaryTermLike } from '@/lib/randomTerms';
import type { LeaderboardPeriod } from '@/lib/leaderboard';
import {
  PENDING_SCORE_KEY,
  getPendingScore,
  flushPendingScoreWithInitials,
} from '@/lib/pendingScore';

const TIMER_SECONDS = 10;
const ENABLE_TIMER = true;
const FEEDBACK_MS = 500;

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function PlayPage() {
  const router = useRouter();
  const { user, login } = useAuth();
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

  const selectorRef = useRef<ReturnType<typeof createTermSelector> | null>(
    null,
  );
  const letterPoolCache = useRef<Map<string, GlossaryTermLike[]>>(new Map());
  const recentDistractors = useRef(createRecentQueue());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const gameOverAttemptedRef = useRef<number>(0);
  const [initialsDone, setInitialsDone] = useState(false);
  const [pendingScoreAfterLogin, setPendingScoreAfterLogin] = useState<{
    score: number;
  } | null>(null);
  const [userInitials, setUserInitials] = useState('');

  const persistGameOver = useCallback(
    async (finalStreak: number) => {
      if (!user) return;
      try {
        const displayName = await getLeaderboardDisplayName(user.id, user.name);
        await upsertUserGameStats(user.id, { streakCorrect: finalStreak });
        const periods: LeaderboardPeriod[] = ['DAILY', 'WEEKLY', 'ALL'];
        for (const p of periods) {
          await upsertLeaderboardEntry(
            p,
            user.id,
            displayName,
            user.picture,
            finalStreak,
          );
        }
      } catch (e) {
        console.warn('Persist failed:', e);
      }
    },
    [user],
  );

  const loadNextTerm = useCallback(async () => {
    if (!selectorRef.current) return;

    const term = await selectorRef.current.getNextTerm();
    if (!term) {
      gameOverAttemptedRef.current = streakCorrect;
      setPhase('gameover');
      await persistGameOver(streakCorrect);
      return;
    }

    let pool = letterPoolCache.current.get(term.letter);
    if (!pool) {
      pool = await fetchLetterPool(term.letter);
      letterPoolCache.current.set(term.letter, pool);
    }

    const distractorResult = pickDistractors(
      term,
      pool,
      recentDistractors.current.get(),
    );
    let defs: [string, string];
    if (distractorResult) {
      recentDistractors.current.add(distractorResult[0].id);
      recentDistractors.current.add(distractorResult[1].id);
      defs = [distractorResult[0].definition, distractorResult[1].definition];
    } else {
      const fallbackLetter =
        LETTERS[Math.floor(Math.random() * LETTERS.length)];
      let fallbackPool = letterPoolCache.current.get(fallbackLetter);
      if (!fallbackPool) {
        fallbackPool = await fetchLetterPool(fallbackLetter);
        letterPoolCache.current.set(fallbackLetter, fallbackPool);
      }
      const others = fallbackPool
        .filter((t) => t.id !== term.id)
        .slice(0, 2)
        .map((t) => t.definition);
      defs = [others[0] ?? '', others[1] ?? ''];
    }

    const allChoices = buildChoices(term.definition, defs[0], defs[1]);
    const correctIndex = allChoices.indexOf(term.definition);
    setCurrentTerm(term, allChoices, correctIndex);
    setTimerRemaining(TIMER_SECONDS);
    setSelectedIndex(null);
  }, [
    setCurrentTerm,
    setTimerRemaining,
    setPhase,
    persistGameOver,
    streakCorrect,
  ]);

  useEffect(() => {
    if (!ENABLE_TIMER) return;
    if (phase !== 'playing') return;

    timerRef.current = setInterval(() => {
      setTimerRemaining((prev) =>
        Math.max(0, Math.round((prev - 0.1) * 10) / 10),
      );
    }, 100);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase, setTimerRemaining]);

  useEffect(() => {
    if (!ENABLE_TIMER) return;
    if (phase !== 'playing') return;
    if (timerRemaining <= 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      gameOverAttemptedRef.current = streakCorrect;
      setPhase('gameover');
      persistGameOver(streakCorrect);
    }
  }, [timerRemaining, phase, setPhase, persistGameOver, streakCorrect]);

  useEffect(() => {
    if (useGameStore.getState().phase === 'gameover') {
      setPhase('idle');
    }
  }, []);

  useEffect(() => {
    if (!user) return;
    const pending = getPendingScore();
    if (pending) setPendingScoreAfterLogin(pending);
  }, [user]);

  useEffect(() => {
    if (!user) return;
    getUserProfile(user.id).then((p) => {
      setUserInitials((p?.initials ?? '').trim().slice(0, 3).toUpperCase());
    });
  }, [user]);

  useEffect(() => {
    if (phase === 'idle') {
      reset();
      selectorRef.current = createTermSelector(termFetcher);
      resetTermFetcherSession();
      letterPoolCache.current.clear();
      recentDistractors.current = createRecentQueue();
      setPhase('playing');
      setStreak(0);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'playing' && !currentTerm && selectorRef.current) {
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
          setPhase('gameover');
          persistGameOver(streakCorrect);
        }, FEEDBACK_MS);
        return;
      }

      const newStreak = streakCorrect + 1;
      setStreak(newStreak);
      setBoardPosition(newStreak);

      setTimeout(() => {
        setPhase('feedback');
        setTimeout(() => {
          setCurrentTerm(null, [], 0);
          loadNextTerm();
          setPhase('playing');
        }, FEEDBACK_MS);
      }, FEEDBACK_MS);
    },
    [
      correctChoiceIndex,
      streakCorrect,
      selectedIndex,
      setFeedback,
      setStreak,
      setBoardPosition,
      setPhase,
      setCurrentTerm,
      loadNextTerm,
      persistGameOver,
    ],
  );

  if (user && pendingScoreAfterLogin) {
    return (
      <EnterInitials
        key={`pending-${userInitials}`}
        open
        isGuest={false}
        score={pendingScoreAfterLogin.score}
        defaultInitials={userInitials}
        onSubmit={async (initialsValue) => {
          await flushPendingScoreWithInitials(
            user,
            pendingScoreAfterLogin!.score,
            initialsValue,
          );
          setPendingScoreAfterLogin(null);
          router.push('/leaderboard');
        }}
        onSkip={() => {
          sessionStorage.removeItem(PENDING_SCORE_KEY);
          setPendingScoreAfterLogin(null);
        }}
        onPlayAgain={() => {
          sessionStorage.removeItem(PENDING_SCORE_KEY);
          setPendingScoreAfterLogin(null);
        }}
        onHome={() => {
          sessionStorage.removeItem(PENDING_SCORE_KEY);
          setPendingScoreAfterLogin(null);
          router.push('/');
        }}
      />
    );
  }

  if (phase === 'gameover') {
    const showEnterInitials = !initialsDone;
    return (
      <>
        <EnterInitials
          key={showEnterInitials ? `gameover-${userInitials}` : 'gameover-closed'}
          {...({
            open: showEnterInitials,
            isGuest: !user,
            score: streakCorrect,
            defaultInitials: userInitials,
            onLogin: !user
              ? () => {
                  try {
                    sessionStorage.setItem(
                      PENDING_SCORE_KEY,
                      JSON.stringify({ score: streakCorrect }),
                    );
                  } catch {
                    /* ignore */
                  }
                  login('/play');
                }
              : undefined,
            onPlayAgain: () => {
              setInitialsDone(true);
              setPhase('idle');
            },
            onHome: () => {
              setInitialsDone(true);
              router.push('/');
            },
            onSubmit: async (initialsValue) => {
              if (user) {
                await updateLeaderboardInitials(user.id, initialsValue);
              }
              setInitialsDone(true);
            },
            onSkip: () => setInitialsDone(true),
          } satisfies EnterInitialsProps)}
        />
        <ResultToast
          open={initialsDone}
          correct={streakCorrect}
          streak={streakCorrect}
          attempted={gameOverAttemptedRef.current}
          onPlayAgain={() => {
            setInitialsDone(false);
            setPhase('idle');
          }}
          onLeaderboard={() => router.push('/leaderboard')}
          onHome={() => router.push('/')}
        />
        <div className='min-h-full' />
      </>
    );
  }

  if (!currentTerm) {
    return <PixelLoader />;
  }

  const feedback =
    isCorrect === true ? 'correct' : isCorrect === false ? 'wrong' : 'idle';
  const feedbackIndex = isCorrect !== null ? selectedIndex : null;

  return (
    <div
      className={`h-full min-h-full w-full bg-cover bg-center bg-no-repeat overflow-hidden p-4 md:p-8`}
      style={{ backgroundImage: 'url(/images/back-black.png)' }}
    >
      <div className={`${ui.container} max-w-6xl h-full flex gap-6`}>
        <div className='flex flex-col gap-4 shrink-0 w-[140px]'>
          <div
            className={`${ui.surface} flex flex-col items-center justify-center p-4`}
          >
            <span className='text-xs font-semibold text-black/50 uppercase tracking-wide mb-2'>
              Time
            </span>
            <TimerRing remaining={timerRemaining} />
          </div>
          <div
            className={`${ui.surface} flex flex-col items-center justify-center p-4`}
          >
            <span className='text-xs font-semibold text-black/50 uppercase tracking-wide mb-2'>
              Current run
            </span>
            <StreakHUD streak={streakCorrect} hideLabel />
          </div>
        </div>
        <div className='flex-1 min-w-0 flex flex-col min-h-0 overflow-y-auto'>
          <div className='space-y-4'>
            <AnimatedCard motionKey={currentTerm?.id ?? boardPosition}>
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
          <div className='mt-4 shrink-0'>
            <BoardPath currentPosition={boardPosition} />
          </div>
        </div>
      </div>
    </div>
  );
}
