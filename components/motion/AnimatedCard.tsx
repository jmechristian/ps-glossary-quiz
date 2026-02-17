"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export function AnimatedCard({
  motionKey,
  children,
  className = "",
}: {
  motionKey: string | number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={motionKey}
        initial={{ opacity: 0, y: 10, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -8, scale: 0.985 }}
        transition={{ type: "spring", stiffness: 520, damping: 44 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
