"use client";

import { motion } from "framer-motion";

const WINDOW_SIZE = 21;
const HALF = Math.floor(WINDOW_SIZE / 2);

type BoardPathProps = {
  currentPosition: number;
  maxVisible?: number;
};

export function BoardPath({ currentPosition, maxVisible = WINDOW_SIZE }: BoardPathProps) {
  const start = Math.max(0, currentPosition - HALF);
  const end = start + maxVisible;
  const markers = Array.from({ length: maxVisible }, (_, i) => start + i);

  return (
    <div className="flex items-center justify-center gap-1 overflow-hidden py-4">
      {markers.map((pos, i) => {
        const isCurrent = pos === currentPosition;
        const isPast = pos < currentPosition;
        const isFuture = pos > currentPosition;

        return (
          <motion.div
            key={pos}
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{
              scale: isCurrent ? 1.2 : 0.9,
              opacity: isCurrent ? 1 : isPast ? 0.9 : 0.4,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`
              h-3 w-3 rounded-full shrink-0
              ${isCurrent ? "bg-emerald-500 ring-2 ring-emerald-300 ring-offset-2" : ""}
              ${isPast ? "bg-emerald-400" : ""}
              ${isFuture ? "bg-zinc-300 dark:bg-zinc-600" : ""}
            `}
          />
        );
      })}
    </div>
  );
}
