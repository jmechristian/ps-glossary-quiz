"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ui } from "@/components/ui/styles";

const MAX_LENGTH = 3;

export function EnterInitials({
  open,
  onSubmit,
  onSkip,
}: {
  open: boolean;
  onSubmit: (initials: string) => void;
  onSkip?: () => void;
}) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    setValue(raw.slice(0, MAX_LENGTH));
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && value.length > 0) {
        onSubmit(value);
      }
    },
    [onSubmit, value]
  );

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    } else {
      setValue("");
    }
  }, [open]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (value.length > 0) onSubmit(value);
    },
    [onSubmit, value]
  );

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
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className={`relative w-full max-w-sm p-8 ${ui.surface}`}
            initial={{ y: 20, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
          >
            <h2 className="text-center text-xl font-bold tracking-widest text-black/90">
              ENTER YOUR INITIALS
            </h2>
            <p className={`mt-1 text-center text-sm ${ui.muted}`}>
              Max 3 characters — letters & numbers
            </p>

            <form onSubmit={handleSubmit} className="mt-6">
              <input
                ref={inputRef}
                type="text"
                inputMode="text"
                autoComplete="off"
                maxLength={MAX_LENGTH}
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="AAA"
                className="w-full rounded-xl border-2 border-black/15 bg-white px-4 py-4 text-center text-2xl font-bold tracking-[0.5em] text-black/90 placeholder:text-black/25 focus:border-clemson focus:outline-none focus:ring-2 focus:ring-clemson/20"
                aria-label="Your initials (3 characters)"
              />

              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={value.length === 0}
                  className={`w-full py-4 ${ui.primaryBtn} disabled:opacity-50 disabled:pointer-events-none`}
                >
                  Submit
                </button>
                {onSkip && (
                  <button
                    type="button"
                    onClick={onSkip}
                    className={`w-full py-3 ${ui.ghostBtn}`}
                  >
                    Skip
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
