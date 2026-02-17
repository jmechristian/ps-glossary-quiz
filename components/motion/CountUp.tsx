"use client";

import React, { useEffect, useState } from "react";

export function CountUp({
  value,
  duration = 500,
}: {
  value: number;
  duration?: number;
}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const from = 0;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setN(Math.round(from + (value - from) * eased));
      if (p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [value, duration]);

  return <span>{n}</span>;
}
