"use client";

import { motion } from "framer-motion";

type StreakHUDProps = {
  streak: number;
  /** When true, only show number + emoji (e.g. when card title already says "Current run") */
  hideLabel?: boolean;
};

export function StreakHUD({ streak, hideLabel }: StreakHUDProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 rounded-full bg-amber-100 dark:bg-amber-900/40 px-5 py-2"
    >
      <span className="text-2xl">🔥</span>
      <span className="text-xl font-bold text-amber-800 dark:text-amber-200 tabular-nums">
        {streak}
      </span>
      {!hideLabel && (
        <span className="text-sm font-medium text-amber-700 dark:text-amber-300">
          Current Run
        </span>
      )}
    </motion.div>
  );
}
