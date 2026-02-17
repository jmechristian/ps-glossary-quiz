"use client";

import { motion } from "framer-motion";

const TOTAL = 10;
const RADIUS = 36;
const STROKE = 6;
const circumference = 2 * Math.PI * RADIUS;

type TimerRingProps = {
  remaining: number;
};

export function TimerRing({ remaining }: TimerRingProps) {
  const progress = remaining / TOTAL;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={RADIUS * 2 + STROKE * 2} height={RADIUS * 2 + STROKE * 2} className="-rotate-90">
        <circle
          cx={RADIUS + STROKE}
          cy={RADIUS + STROKE}
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
          className="text-zinc-200 dark:text-zinc-700"
        />
        <motion.circle
          cx={RADIUS + STROKE}
          cy={RADIUS + STROKE}
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          className={
            remaining <= 3
              ? "text-red-500"
              : remaining <= 5
                ? "text-amber-500"
                : "text-emerald-500"
          }
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.2 }}
        />
      </svg>
      <span className="absolute text-xl font-bold tabular-nums text-zinc-900 dark:text-zinc-100">
        {Math.ceil(remaining)}
      </span>
    </div>
  );
}
