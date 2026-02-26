"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ui } from "@/components/ui/styles";
import { FeedbackShake } from "@/components/motion/FeedbackShake";

type ChoiceButtonsProps = {
  choices: string[];
  correctIndex: number;
  selectedIndex: number | null;
  isRevealed: boolean;
  onSelect: (index: number) => void;
  feedback?: "idle" | "correct" | "wrong";
  feedbackIndex?: number | null;
};

export function ChoiceButtons({
  choices,
  correctIndex,
  selectedIndex,
  isRevealed,
  onSelect,
  feedback = "idle",
  feedbackIndex = null,
}: ChoiceButtonsProps) {
  const shakeTrigger = feedback === "wrong" && feedbackIndex !== null ? 1 : 0;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (isRevealed || selectedIndex !== null) return;
      const n = e.key === "1" ? 0 : e.key === "2" ? 1 : e.key === "3" ? 2 : null;
      if (n !== null && n < choices.length) onSelect(n);
      if (e.key === "Enter" && selectedIndex !== null) return;
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [choices.length, isRevealed, onSelect, selectedIndex]);

  return (
    <div className="grid gap-4 md:gap-5">
      {choices.map((choice, i) => {
        const selected = selectedIndex === i;
        const isCorrectChoice = i === correctIndex;
        const baseHeight = "min-h-[7.5rem]";
        let btnClass = `flex items-center gap-4 rounded-2xl p-5 md:p-6 text-left text-lg font-medium ${baseHeight} w-full transition-shadow ${ui.surfaceSm} hover:shadow-[0_14px_34px_rgba(0,0,0,0.10)]`;

        if (isRevealed) {
          if (isCorrectChoice) {
            btnClass = `flex items-center gap-4 rounded-2xl p-5 md:p-6 text-left text-lg font-medium ${baseHeight} w-full bg-emerald-500 text-white ring-2 ring-emerald-400/60`;
          } else if (selected && !isCorrectChoice) {
            btnClass = `flex items-center gap-4 rounded-2xl p-5 md:p-6 text-left text-lg font-medium ${baseHeight} w-full bg-rose-50/80 ring-2 ring-rose-400/70 text-rose-900`;
          }
        } else if (selected) {
          btnClass += feedback === "correct"
            ? " ring-2 ring-emerald-400/60 bg-emerald-50/60"
            : feedback === "wrong" && feedbackIndex === i
              ? " ring-2 ring-rose-400/70 bg-rose-50/60"
              : " ring-2 ring-emerald-400 bg-emerald-100/60";
        }

        const ButtonContent = (
          <motion.button
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05, type: "spring", stiffness: 520, damping: 34 }}
            whileHover={!isRevealed ? { y: -2 } : {}}
            whileTap={!isRevealed ? { scale: 0.98 } : {}}
            onClick={() => !isRevealed && onSelect(i)}
            disabled={isRevealed}
            className={btnClass}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 font-bold">
              {i + 1}
            </span>
            <span className="wrap-break-word flex-1">
              {choice}
            </span>
          </motion.button>
        );

        return feedback === "wrong" && feedbackIndex === i ? (
          <FeedbackShake key={i} trigger={shakeTrigger}>
            {ButtonContent}
          </FeedbackShake>
        ) : (
          <div key={i}>{ButtonContent}</div>
        );
      })}
    </div>
  );
}
