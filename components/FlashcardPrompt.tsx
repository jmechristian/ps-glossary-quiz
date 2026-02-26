"use client";

import { motion } from "framer-motion";
import { ui } from "@/components/ui/styles";

type FlashcardPromptProps = {
  term: string;
};

export function FlashcardPrompt({ term }: FlashcardPromptProps) {
  return (
    <div
      className={`${ui.surface} p-8 md:p-12 text-center min-h-[160px] flex items-center justify-center text-black`}
    >
      <h2 className={`${ui.h2} text-black`}>{term}</h2>
    </div>
  );
}
