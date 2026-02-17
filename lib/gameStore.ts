/**
 * Zustand store for the vocab streak game session.
 */

import { create } from "zustand";

export type GamePhase = "idle" | "playing" | "feedback" | "gameover";

export type GameState = {
  phase: GamePhase;
  currentTerm: {
    id: string;
    term: string;
    letter: string;
    definition: string;
  } | null;
  choices: string[];
  correctChoiceIndex: number;
  streakCorrect: number;
  boardPosition: number;
  timerRemaining: number;
  isCorrect: boolean | null;
};

type GameActions = {
  setPhase: (phase: GamePhase) => void;
  setCurrentTerm: (term: GameState["currentTerm"], choices: string[], correctIndex: number) => void;
  setStreak: (n: number) => void;
  setBoardPosition: (n: number) => void;
  setTimerRemaining: (n: number | ((prev: number) => number)) => void;
  setFeedback: (isCorrect: boolean) => void;
  reset: () => void;
};

const initialState: GameState = {
  phase: "idle",
  currentTerm: null,
  choices: [],
  correctChoiceIndex: 0,
  streakCorrect: 0,
  boardPosition: 0,
  timerRemaining: 10,
  isCorrect: null,
};

export const useGameStore = create<GameState & GameActions>((set) => ({
  ...initialState,
  setPhase: (phase) => set({ phase }),
  setCurrentTerm: (currentTerm, choices, correctChoiceIndex) =>
    set({ currentTerm, choices, correctChoiceIndex, isCorrect: null }),
  setStreak: (streakCorrect) => set({ streakCorrect }),
  setBoardPosition: (boardPosition) => set({ boardPosition }),
  setTimerRemaining: (n) =>
    set((s) => ({
      timerRemaining: typeof n === "function" ? n(s.timerRemaining) : n,
    })),
  setFeedback: (isCorrect) => set({ isCorrect }),
  reset: () => set(initialState),
}));
