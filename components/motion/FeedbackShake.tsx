"use client";

import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect } from "react";

export function FeedbackShake({
  trigger,
  children,
  className = "",
}: {
  trigger: number;
  children: React.ReactNode;
  className?: string;
}) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (!trigger) return;
    controls.start({
      x: [0, -8, 8, -6, 6, -3, 3, 0],
      transition: { duration: 0.35 },
    });
  }, [trigger, controls]);

  return (
    <motion.div animate={controls} className={className}>
      {children}
    </motion.div>
  );
}
