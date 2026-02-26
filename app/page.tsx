'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';
import { getLeaderboard } from '@/lib/gameApi';
import { ui } from '@/components/ui/styles';
import { CountUp } from '@/components/motion/CountUp';
import { motion } from 'framer-motion';

export default function HomePage() {
  const { user, isLoading, login, logout } = useAuth();
  const [topEntry, setTopEntry] = useState<{
    score: number;
    firstName: string;
  } | null>(null);

  useEffect(() => {
    getLeaderboard('ALL', 1).then((items) => {
      const e = items[0];
      if (e) {
        const firstName = e.displayName?.trim().split(/\s+/)[0] ?? 'Anonymous';
        setTopEntry({ score: e.score, firstName });
      }
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      exit={{ opacity: 0, scale: 1.05 }}
      className={`relative flex h-full min-h-full flex-col items-center justify-center ${ui.page} bg-cover bg-center bg-no-repeat overflow-hidden`}
      style={{ backgroundImage: 'url(/images/bg-7.webp)' }}
    >
      {/* Top-right: highest streak across all users (always visible) */}
      {/* <div className='absolute top-20 right-6 z-50 flex items-center gap-2'>
        <img src='/images/trophy.svg' alt='' className='h-7 w-7 shrink-0' />
        <span className={`text-lg font-bold tabular-nums text-white`}>
          Highest Streak:{' '}
          {topEntry ? (
            <>
              <CountUp value={topEntry.score} /> {topEntry.firstName}
            </>
          ) : (
            '—'
          )}
        </span>
      </div> */}

      <main className={`${ui.container} ${ui.stage} text-center`}>
        <div className='flex flex-col items-center justify-center gap-24 mt-24'>
          <div className='flex flex-col items-center justify-center gap-8'>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }}
            >
              <img
                src='/images/headline.svg'
                alt='PackRun'
                className='w-full max-w-[960px]'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: 'easeInOut',
                stiffness: 100,
                damping: 10,
                mass: 1,
                velocity: 1,
                bounce: 2,
                type: 'spring',
              }}
            >
              <img
                src='/images/title.svg'
                alt='PackRun'
                className='w-full max-w-[960px]'
              />
            </motion.div>
          </div>
          <Link
            href='/play'
            className='flex flex-col items-center justify-center cursor-pointer [&_img]:cursor-pointer'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.5,
                ease: 'easeInOut',
                stiffness: 100,
                damping: 10,
                mass: 1,
                velocity: 1,
                bounce: 2,
                type: 'spring',
              }}
              className='cursor-pointer'
            >
              <img
                src='/images/start.svg'
                alt='Start game'
                className='w-full max-w-[400px] animate-pulse hover:animate-none transition-all duration-300 pointer-events-none'
              />
            </motion.div>
          </Link>
          <motion.div
            className='flex flex-col items-center justify-center gap-16'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.5,
              ease: 'easeInOut',
            }}
          >
            <div className='flex gap-4 justify-center flex-wrap'>
              <Link
                href='/leaderboard'
                className={`px-6 py-3 ${ui.primaryBtn} text-lg`}
              >
                Leaderboard
              </Link>
              {user && (
                <Link
                  href='/profile'
                  className={`px-6 py-3 ${ui.primaryBtn} text-lg`}
                >
                  Profile
                </Link>
              )}
              {!isLoading &&
                (user ? (
                  <button
                    type='button'
                    onClick={logout}
                    className={`px-6 py-3 ${ui.primaryBtn} text-lg`}
                  >
                    Log out
                  </button>
                ) : (
                  <button
                    type='button'
                    onClick={() => login()}
                    className={`px-6 py-3 ${ui.primaryBtn} text-lg`}
                  >
                    Log in
                  </button>
                ))}
            </div>
            <div className=' flex items-center gap-2'>
              <img
                src='/images/trophy.svg'
                alt=''
                className='h-7 w-7 shrink-0'
              />
              <span className={`text-lg font-bold tabular-nums text-white`}>
                Highest Streak:{' '}
                {topEntry ? (
                  <>
                    <CountUp value={topEntry.score} /> {topEntry.firstName}
                  </>
                ) : (
                  '—'
                )}
              </span>
            </div>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
