"use client";

import { motion } from "framer-motion";

export type TabKey = "Daily" | "Weekly" | "All-time";

const tabs: TabKey[] = ["Daily", "Weekly", "All-time"];

export function SegmentedTabs({
  value,
  onChange,
  className = "",
}: {
  value: TabKey;
  onChange: (v: TabKey) => void;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-xl ${className}`}>
      <div className="relative p-1 rounded-full bg-white/70 border border-black/5 shadow-sm">
        <div className="grid grid-cols-3 gap-1">
          {tabs.map((t) => {
            const active = value === t;
            return (
              <button
                key={t}
                onClick={() => onChange(t)}
                className="relative py-3 rounded-full text-sm font-semibold"
              >
                {active && (
                  <motion.div
                    layoutId="seg-pill"
                    className="absolute inset-0 rounded-full bg-clemson"
                    transition={{ type: "spring", stiffness: 520, damping: 40 }}
                  />
                )}
                <span className={`relative ${active ? "text-white" : "text-black/70"}`}>
                  {t}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
