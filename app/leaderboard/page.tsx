'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getLeaderboard } from '@/lib/gameApi';
import {
  SegmentedTabs,
  type TabKey,
} from '@/components/leaderboard/SegmentedTabs';
import { ui } from '@/components/ui/styles';
import type { LeaderboardPeriod } from '@/lib/leaderboard';

const TAB_MAP: Record<TabKey, LeaderboardPeriod> = {
  Daily: 'DAILY',
  Weekly: 'WEEKLY',
  'All-time': 'ALL',
};

type Entry = {
  id: string;
  userID: string;
  displayName?: string | null;
  avatarUrl?: string | null;
  score: number;
  updatedAt?: string | null;
};

export default function LeaderboardPage() {
  const [tab, setTab] = useState<TabKey>('All-time');
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getLeaderboard(TAB_MAP[tab], 100).then((items) => {
      setEntries(items);
      setLoading(false);
    });
  }, [tab]);

  const top3 = entries.slice(0, 3);
  const rest = entries.slice(3);

  return (
    <div
      className={`h-full min-h-full bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: 'url(/images/leaderboard.webp)' }}
    >
      <div className={ui.container}>
        <div className='mb-8 flex items-center justify-between'>
          <Link
            href='/'
            className={`text-white hover:text-white/90 transition`}
          >
            ← Home
          </Link>
          <h1 className={ui.h2}>Leaderboard</h1>
          <div className='w-16' />
        </div>

        <SegmentedTabs value={tab} onChange={setTab} className='mb-8' />

        {loading ? (
          <div className={`py-12 text-center text-white`}>Loading...</div>
        ) : (
          <>
            {top3.length > 0 && (
              <div className='grid grid-cols-3 gap-4 mb-8'>
                {top3.map((e, i) => (
                  <motion.div
                    key={e.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className={`p-5 ${ui.surface} text-center`}
                  >
                    <div className='text-3xl mb-2'>
                      {i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉'}
                    </div>
                    <div className='h-14 w-14 mx-auto rounded-full bg-zinc-100 overflow-hidden shrink-0 mb-2'>
                      {e.avatarUrl ? (
                        <img
                          src={e.avatarUrl}
                          alt=''
                          className='h-full w-full object-cover'
                        />
                      ) : (
                        <div className='h-full w-full flex items-center justify-center text-xl font-semibold text-zinc-500'>
                          {(e.displayName ?? '?')[0]}
                        </div>
                      )}
                    </div>
                    <div className='font-semibold truncate text-sm'>
                      {e.displayName ?? 'Anonymous'}
                    </div>
                    <div className='text-xl font-extrabold text-emerald-600'>
                      {e.score}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {entries.length === 0 ? (
              <div className={`${ui.surface} p-12 text-center ${ui.muted}`}>
                No entries yet. Be the first!
              </div>
            ) : rest.length > 0 ? (
              <div className={`${ui.surface} overflow-hidden`}>
                <ul>
                  {rest.map((e, i) => (
                    <li
                      key={e.id}
                      className='flex items-center gap-4 px-6 py-4 border-b border-black/5 last:border-0'
                    >
                      <span className='w-8 text-lg font-bold text-black/40'>
                        {i + 4}
                      </span>
                      <div className='h-10 w-10 rounded-full bg-zinc-100 overflow-hidden shrink-0'>
                        {e.avatarUrl ? (
                          <img
                            src={e.avatarUrl}
                            alt=''
                            className='h-full w-full object-cover'
                          />
                        ) : (
                          <div className='h-full w-full flex items-center justify-center text-lg font-semibold text-zinc-500'>
                            {(e.displayName ?? '?')[0]}
                          </div>
                        )}
                      </div>
                      <span className='flex-1 font-medium truncate'>
                        {e.displayName ?? 'Anonymous'}
                      </span>
                      <span className='text-xl font-bold text-emerald-600'>
                        {e.score}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {top3.length > 0 && rest.length === 0 && <div className='h-4' />}
          </>
        )}

        <div className='mt-8 text-center'>
          <Link
            href='/play'
            className={`inline-block py-3 px-8 ${ui.primaryBtn}`}
          >
            Play again
          </Link>
        </div>
      </div>
    </div>
  );
}
