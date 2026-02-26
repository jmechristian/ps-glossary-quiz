'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getLeaderboard, getUserProfile } from '@/lib/gameApi';
import {
  SegmentedTabs,
  type TabKey,
} from '@/components/leaderboard/SegmentedTabs';
import { PixelLoader } from '@/components/PixelLoader';
import { ui } from '@/components/ui/styles';
import type { LeaderboardPeriod } from '@/lib/leaderboard';

const TAB_MAP: Record<TabKey, LeaderboardPeriod> = {
  Daily: 'DAILY',
  Weekly: 'WEEKLY',
  'All-time': 'ALL',
};

const PAGE_SIZE = 10;

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
  const [page, setPage] = useState(1);
  const [companiesByUserId, setCompaniesByUserId] = useState<
    Record<string, string | null>
  >({});

  useEffect(() => {
    setLoading(true);
    setPage(1);
    getLeaderboard(TAB_MAP[tab], 100).then((items) => {
      setEntries(items);
      setLoading(false);
      const userIds = [...new Set(items.map((e) => e.userID))];
      Promise.all(userIds.map((id) => getUserProfile(id))).then((profiles) => {
        const map: Record<string, string | null> = {};
        userIds.forEach((id, i) => {
          map[id] = profiles[i]?.company ?? null;
        });
        setCompaniesByUserId(map);
      });
    });
  }, [tab]);

  const top3 = entries.slice(0, 3);
  const totalPages = Math.max(1, Math.ceil(entries.length / PAGE_SIZE));
  const listEntries = entries.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div
      className={`h-full min-h-full bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: 'url(/images/back-black.png)' }}
    >
      <div className='max-w-5xl mx-auto py-12 mt-5'>
        <div className='w-full bg-zinc-700/40 backdrop-blur px-10 py-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]'>
          <div className='flex justify-between items-center pb-10'>
            <Link
              href='/'
              className={`text-white hover:text-white/90 transition`}
            >
              <img
                src='/images/minecart.svg'
                alt='Home'
                className='h-8 w-8 opacity-60'
              />
            </Link>
            <div>
              <img
                src='/images/leaderboardTitle.svg'
                alt='Trophy'
                className='w-[84%] mx-auto'
              />
            </div>
            <Link
              href='/play'
              className={`text-white hover:text-white/90 transition`}
            >
              <img
                src='/images/enter.svg'
                alt='Home'
                className='h-8 w-8 opacity-60'
              />
            </Link>
          </div>

          {loading ? (
            <div className='bg-black rounded-2xl overflow-hidden'>
              <PixelLoader inline />
            </div>
          ) : (
            <>
              {top3.length > 0 &&
                (() => {
                  const [first, second, third] = top3;
                  const podium = [
                    {
                      entry: second,
                      place: 2,
                      bg: 'bg-gradient-to-r from-gray-200 to-gray-400',
                      size: 'small',
                      scoreClass: 'text-emerald-600',
                      ringClass: 'ring-4 ring-slate-400',
                    },
                    {
                      entry: first,
                      place: 1,
                      bg: 'bg-gradient-to-r from-amber-300 to-amber-500',
                      size: 'large',
                      scoreClass: 'text-white',
                      ringClass: 'ring-4 ring-amber-600',
                    },
                    {
                      entry: third,
                      place: 3,
                      bg: 'bg-gradient-to-r from-amber-600 to-amber-800',
                      size: 'small',
                      scoreClass: 'text-white',
                      ringClass: 'ring-4 ring-amber-900',
                    },
                  ] as const;
                  return (
                    <div className='grid grid-cols-3 gap-4 mb-4 items-end'>
                      {podium.map(
                        ({ entry: e, bg, size, scoreClass, ringClass }, i) => {
                          if (!e) {
                            return (
                              <div
                                key={`podium-empty-${i}`}
                                className='min-h-[180px]'
                              />
                            );
                          }
                          return (
                            <motion.div
                              key={e.id}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.08 }}
                              className={`flex flex-col items-center justify-center p-5 rounded-xl text-center min-h-[180px] ${bg} ${size === 'large' ? 'py-10' : 'py-7'}`}
                            >
                              <div
                                className={`mx-auto rounded-full bg-white/80 overflow-hidden shrink-0 mb-4 ring-offset-3 ring-offset-transparent ${ringClass} ${size === 'large' ? 'h-20 w-20' : 'h-14 w-14'}`}
                              >
                                {e.avatarUrl ? (
                                  <img
                                    src={e.avatarUrl}
                                    alt=''
                                    className='h-full w-full object-cover'
                                  />
                                ) : (
                                  <div className='h-full w-full flex items-center justify-center font-semibold text-zinc-500'>
                                    {(e.displayName ?? '?')[0]}
                                  </div>
                                )}
                              </div>
                              <div
                                className={`font-semibold truncate ${size === 'large' ? 'text-lg' : 'text-sm'}`}
                              >
                                {e.displayName ?? 'Anonymous'}
                              </div>
                              {companiesByUserId[e.userID] && (
                                <div
                                  className={`truncate ${size === 'large' ? 'text-base' : 'text-xs'} opacity-90`}
                                >
                                  {companiesByUserId[e.userID]}
                                </div>
                              )}
                              <div
                                className={`${size === 'large' ? 'text-2xl' : 'text-xl'} font-extrabold ${scoreClass}`}
                              >
                                {e.score}
                              </div>
                            </motion.div>
                          );
                        },
                      )}
                    </div>
                  );
                })()}

              {top3.length > 0 && (
                <SegmentedTabs value={tab} onChange={setTab} className='my-4' />
              )}

              {entries.length === 0 ? (
                <div className={`${ui.surface} p-12 text-center ${ui.muted}`}>
                  No entries yet. Be the first!
                </div>
              ) : entries.length > 0 ? (
                <div className={`${ui.surface} overflow-hidden`}>
                  <ul>
                    {listEntries.map((e, i) => {
                      const rank = (page - 1) * PAGE_SIZE + i + 1;
                      const medalBg =
                        rank === 1
                          ? 'bg-amber-400 text-white'
                          : rank === 2
                            ? 'bg-slate-300 text-slate-800'
                            : rank === 3
                              ? 'bg-amber-700 text-white'
                              : '';
                      const avatarRing =
                        rank === 1
                          ? 'ring-3 ring-amber-500 ring-offset-2 ring-offset-white'
                          : rank === 2
                            ? 'ring-3 ring-slate-400 ring-offset-2 ring-offset-white'
                            : rank === 3
                              ? 'ring-3 ring-amber-800 ring-offset-2 ring-offset-white'
                              : '';
                      return (
                        <li
                          key={e.id}
                          className='flex items-center gap-4 px-6 py-4 border-b border-black/5 last:border-0'
                        >
                          <span
                            className={`w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold shrink-0 ${
                              medalBg || 'text-black/40'
                            }`}
                          >
                            {rank}
                          </span>
                          <div
                            className={`h-10 w-10 rounded-full bg-zinc-100 overflow-hidden shrink-0 ${avatarRing}`}
                          >
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
                          <div className='flex-1 min-w-0'>
                            <div className='font-medium truncate'>
                              {e.displayName ?? 'Anonymous'}
                            </div>
                            {companiesByUserId[e.userID] && (
                              <div className='text-sm text-black/50 truncate'>
                                {companiesByUserId[e.userID]}
                              </div>
                            )}
                          </div>
                          <span className='text-xl font-bold text-zinc-700 shrink-0'>
                            {e.score}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  {totalPages > 1 && (
                    <div className='flex items-center justify-center gap-4 py-4 border-t border-black/5'>
                      <button
                        type='button'
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page <= 1}
                        className='px-4 py-2 text-sm font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/5'
                      >
                        Previous
                      </button>
                      <span className='text-sm text-black/60'>
                        Page {page} of {totalPages}
                      </span>
                      <button
                        type='button'
                        onClick={() =>
                          setPage((p) => Math.min(totalPages, p + 1))
                        }
                        disabled={page >= totalPages}
                        className='px-4 py-2 text-sm font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black/5'
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
