"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ui } from "@/components/ui/styles";
import { CountUp } from "@/components/motion/CountUp";

export function ResultToast({
  open,
  correct,
  streak,
  attempted,
  onPlayAgain,
  onLeaderboard,
  onHome,
}: {
  open: boolean;
  correct: number;
  streak: number;
  attempted: number;
  onPlayAgain: () => void;
  onLeaderboard: () => void;
  onHome: () => void;
}) {
  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className={`relative w-full max-w-md p-6 ${ui.surface}`}
            initial={{ y: 18, scale: 0.985, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 520, damping: 42 }}
          >
            <div className="text-center">
              <div className="text-sm font-semibold text-black/60">Run Ended</div>
              <div className="mt-2 text-3xl font-extrabold tracking-tight text-black/90">
                Final Score: <CountUp value={correct} />
              </div>
              <div className={`mt-1 ${ui.muted}`}>One mistake ends the run.</div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className={`p-4 ${ui.inset} text-center`}>
                <div className="text-xs font-semibold text-black/50">Current Run</div>
                <div className="mt-1 text-xl font-extrabold text-black/90">
                  <CountUp value={streak} />
                </div>
              </div>
              <div className={`p-4 ${ui.inset} text-center`}>
                <div className="text-xs font-semibold text-black/50">Attempts</div>
                <div className="mt-1 text-xl font-extrabold text-black/90">
                  <CountUp value={attempted} />
                </div>
              </div>
              <div className={`p-4 ${ui.inset} text-center`}>
                <div className="text-xs font-semibold text-black/50">Accuracy</div>
                <div className="mt-1 text-xl font-extrabold text-black/90">
                  <CountUp value={accuracy} />%
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <button className={`w-full py-4 ${ui.primaryBtn}`} onClick={onPlayAgain}>
                Start New Run
              </button>
              <button className={`w-full py-4 ${ui.ghostBtn}`} onClick={onLeaderboard}>
                See Rankings
              </button>
              <button className={`w-full py-4 ${ui.ghostBtn}`} onClick={onHome}>
                Back to home
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
