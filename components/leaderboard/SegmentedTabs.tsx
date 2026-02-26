'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export type TabKey = 'Daily' | 'Weekly' | 'All-time';

const tabs: TabKey[] = ['Daily', 'Weekly', 'All-time'];

const tabImages: Record<TabKey, { active: string; inactive: string }> = {
  Daily: { active: '/images/daily.svg', inactive: '/images/daily-dk.svg' },
  Weekly: { active: '/images/weekly.svg', inactive: '/images/weekly-dk.svg' },
  'All-time': {
    active: '/images/alltime.svg',
    inactive: '/images/alltime-dk.svg',
  },
};

export function SegmentedTabs({
  value,
  onChange,
  className = '',
}: {
  value: TabKey;
  onChange: (v: TabKey) => void;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-full ${className}`}>
      <div className='relative p-1 rounded-2xl bg-white/30 border border-black/5 shadow-sm'>
        <div className='grid grid-cols-3 gap-1'>
          {tabs.map((t) => {
            const active = value === t;
            const { active: activeSrc, inactive: inactiveSrc } = tabImages[t];
            return (
              <button
                key={t}
                onClick={() => onChange(t)}
                className='relative py-3 rounded-2xl text-sm font-semibold flex items-center justify-center min-h-[44px]'
              >
                {active && (
                  <motion.div
                    layoutId='seg-pill'
                    className='absolute inset-0 rounded-2xl bg-zinc-900'
                    transition={{ type: 'spring', stiffness: 520, damping: 40 }}
                  />
                )}
                <span className='relative flex items-center justify-center'>
                  <Image
                    src={active ? activeSrc : inactiveSrc}
                    alt={t}
                    width={80}
                    height={24}
                    className='h-6 w-auto object-contain scale-[0.7]'
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
