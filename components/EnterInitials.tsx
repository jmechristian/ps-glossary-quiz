'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ui } from '@/components/ui/styles';
import { CountUp } from '@/components/motion/CountUp';

const MAX_LENGTH = 3;

export type EnterInitialsProps = {
  open: boolean;
  isGuest?: boolean;
  score?: number;
  onLogin?: () => void;
  onPlayAgain?: () => void;
  onHome?: () => void;
  onSubmit: (initials: string) => void;
  onSkip?: () => void;
};

export function EnterInitials({
  open,
  isGuest = false,
  score = 0,
  onLogin,
  onPlayAgain,
  onHome,
  onSubmit,
  onSkip,
}: EnterInitialsProps) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    setValue(raw.slice(0, MAX_LENGTH));
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && value.length > 0) {
        onSubmit(value);
      }
    },
    [onSubmit, value],
  );

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    } else {
      setValue('');
    }
  }, [open]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (value.length > 0) onSubmit(value);
    },
    [onSubmit, value],
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className='fixed inset-0 z-50 flex items-center justify-center px-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className='absolute inset-0 bg-black/50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className={`relative w-full max-w-sm p-8 ${ui.surface}`}
            initial={{ y: 20, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
          >
            {isGuest ? (
              <>
                <h2 className='text-center text-xl font-bold tracking-tight text-black/90'>
                  Run complete
                </h2>
                <div className='mt-2 text-center text-3xl font-extrabold tabular-nums text-black/90'>
                  <CountUp value={score} />
                </div>
                <p className={`mt-4 text-center text-sm ${ui.muted}`}>
                  Sign in to save this score to the leaderboard
                </p>
                <div className='mt-6 flex flex-col gap-3'>
                  {onLogin && (
                    <button
                      type='button'
                      onClick={onLogin}
                      className={`w-full py-4 ${ui.primaryBtn}`}
                    >
                      Sign in to save score
                    </button>
                  )}
                  {onPlayAgain && (
                    <button
                      type='button'
                      onClick={onPlayAgain}
                      className={`w-full py-3 ${ui.ghostBtn}`}
                    >
                      Play again
                    </button>
                  )}
                  {onHome && (
                    <button
                      type='button'
                      onClick={onHome}
                      className={`w-full py-3 ${ui.ghostBtn}`}
                    >
                      Back to home
                    </button>
                  )}
                </div>
              </>
            ) : (
              <>
                <h2 className='text-center text-xl font-bold tracking-widest text-black/90'>
                  ENTER YOUR INITIALS
                </h2>
                <p className={`mt-1 text-center text-sm ${ui.muted}`}>
                  Max 3 characters — letters & numbers
                </p>

                <form onSubmit={handleSubmit} className='mt-6'>
                  <input
                    ref={inputRef}
                    type='text'
                    inputMode='text'
                    autoComplete='off'
                    maxLength={MAX_LENGTH}
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder='AAA'
                    className='w-full rounded-xl border-2 border-black/15 bg-white px-4 py-4 text-center text-2xl font-bold tracking-[0.5em] text-black/90 placeholder:text-black/25 focus:border-clemson focus:outline-none focus:ring-2 focus:ring-clemson/20'
                    aria-label='Your initials (3 characters)'
                  />

                  <div className='mt-6 flex flex-col gap-3'>
                    <button
                      type='submit'
                      disabled={value.length === 0}
                      className={`w-full py-4 ${ui.primaryBtn} disabled:opacity-50 disabled:pointer-events-none`}
                    >
                      Submit
                    </button>
                    {onSkip && (
                      <button
                        type='button'
                        onClick={onSkip}
                        className={`w-full py-3 ${ui.ghostBtn}`}
                      >
                        Skip
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
