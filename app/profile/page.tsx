'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth';
import {
  getUserGameStats,
  getUserProfile,
  updateUserProfile,
  updateLeaderboardInitials,
  type UserProfileData,
} from '@/lib/gameApi';
import { ui } from '@/components/ui/styles';
import { CountUp } from '@/components/motion/CountUp';

const INITIALS_MAX = 3;

export default function ProfilePage() {
  const { user, login } = useAuth();
  const [stats, setStats] = useState<{
    bestStreakAllTime: number;
    totalAttempts: number;
    totalCorrect: number;
  } | null>(null);
  const [, setProfile] = useState<UserProfileData | null>(null);

  const [displayName, setDisplayName] = useState('');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [initials, setInitials] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (user) {
      getUserGameStats(user.id).then((s) => {
        if (s) {
          setStats({
            bestStreakAllTime: s.bestStreakAllTime ?? 0,
            totalAttempts: s.totalAttempts ?? 0,
            totalCorrect: s.totalCorrect ?? 0,
          });
        }
      });
      getUserProfile(user.id).then((p) => {
        if (p) setProfile(p);
        setDisplayName(p?.name ?? user.name ?? '');
        setTitle(p?.title ?? '');
        setCompany(p?.company ?? '');
        setInitials(p?.initials ?? '');
      });
    }
  }, [user]);

  const handleSave = useCallback(async () => {
    if (!user) return;
    setSaving(true);
    setSaved(false);
    try {
      await updateUserProfile(user.id, {
        name: displayName.trim() || undefined,
        title: title.trim() || undefined,
        company: company.trim() || undefined,
      });
      if (initials.trim().slice(0, INITIALS_MAX)) {
        await updateLeaderboardInitials(
          user.id,
          initials.trim().slice(0, INITIALS_MAX),
        );
      }
      setProfile((prev) => ({
        ...prev,
        name: displayName.trim() || prev?.name,
        title: title.trim() || prev?.title,
        company: company.trim() || prev?.company,
      }));
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } finally {
      setSaving(false);
    }
  }, [user, displayName, title, company, initials]);

  if (!user) {
    return (
      <div
        className={`flex h-full min-h-full flex-col items-center justify-center gap-4 bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: 'url(/images/profilescreen.webp)' }}
      >
        <p className='text-white/80'>Please log in to view your profile.</p>
        <button
          type='button'
          onClick={() => login()}
          className={`px-6 py-3 ${ui.primaryBtn}`}
        >
          Log in
        </button>
      </div>
    );
  }

  const accuracy =
    stats && stats.totalAttempts > 0
      ? Math.round((stats.totalCorrect / stats.totalAttempts) * 100)
      : 0;

  const subtitle =
    title && company
      ? `${title} at ${company}`
      : title || company || 'Glossary Streak Player';

  return (
    <div
      className='h-full min-h-full bg-cover bg-center bg-no-repeat px-16 py-10'
      style={{ backgroundImage: 'url(/images/game-2.webp)' }}
    >
      <div className='max-w-2xl bg-zinc-700/40 backdrop-blur px-10 py-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]'>
        <div className='flex justify-between items-center pb-10'>
          <Link href='/' className='text-white hover:text-white/90 transition'>
            <img
              src='/images/minecart.svg'
              alt='Home'
              className='h-8 w-8 opacity-60'
            />
          </Link>
          <div>
            <img
              src='/images/profile.svg'
              alt='Profile'
              className='w-[66%] mx-auto'
            />
          </div>
          <Link
            href='/play'
            className='text-white hover:text-white/90 transition'
          >
            <img
              src='/images/enter.svg'
              alt='Play'
              className='h-8 w-8 opacity-60'
            />
          </Link>
        </div>

        <div className='flex flex-col'>
          <hr className='border-white/30 mb-6' />
          <div className='flex justify-center mb-6'>
            <div className='h-20 w-20 rounded-full bg-white/10 overflow-hidden shrink-0 border border-white/20'>
              {user.picture ? (
                <img
                  src={user.picture}
                  alt=''
                  className='h-full w-full object-cover'
                />
              ) : (
                <div className='h-full w-full flex items-center justify-center text-3xl font-bold text-white/70'>
                  {(displayName || user.name)[0]?.toUpperCase() ?? '?'}
                </div>
              )}
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-6 gap-y-4 mb-2'>
            <div>
              <label className='block text-xs font-semibold text-white/70 uppercase tracking-wide mb-1'>
                Name
              </label>
              <input
                type='text'
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder='Your name'
                className='w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-base font-semibold text-white placeholder:text-white/40 focus:border-clemson focus:ring-2 focus:ring-clemson/30 focus:outline-none'
              />
            </div>
            <div>
              <label className='block text-xs font-semibold text-white/70 uppercase tracking-wide mb-1'>
                Email
              </label>
              <div
                className='w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white/90 cursor-default'
                aria-readonly
              >
                {user.email ?? '—'}
              </div>
            </div>
            <div>
              <label className='block text-xs font-semibold text-white/70 uppercase tracking-wide mb-1'>
                Company title
              </label>
              <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='e.g. Product Manager'
                className='w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-clemson focus:ring-2 focus:ring-clemson/30 focus:outline-none'
              />
            </div>
            <div>
              <label className='block text-xs font-semibold text-white/70 uppercase tracking-wide mb-1'>
                Company
              </label>
              <input
                type='text'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder='Company name'
                className='w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-clemson focus:ring-2 focus:ring-clemson/30 focus:outline-none'
              />
            </div>
            <div>
              <label className='block text-xs font-semibold text-white/70 uppercase tracking-wide mb-1'>
                Leaderboard initials (max 3)
              </label>
              <input
                type='text'
                inputMode='text'
                maxLength={INITIALS_MAX}
                value={initials}
                onChange={(e) =>
                  setInitials(
                    e.target.value
                      .toUpperCase()
                      .replace(/[^A-Z0-9]/g, '')
                      .slice(0, INITIALS_MAX),
                  )
                }
                placeholder='ABC'
                className='w-full max-w-24 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-center text-lg font-bold tracking-widest text-white placeholder:text-white/40 focus:border-clemson focus:ring-2 focus:ring-clemson/30 focus:outline-none'
              />
            </div>
          </div>

          <div className='flex items-center gap-3 mt-6 mb-8'>
            <button
              type='button'
              onClick={handleSave}
              disabled={saving}
              className={`px-5 py-2.5 rounded-xl font-semibold transition ${ui.primaryBtn} disabled:opacity-60`}
            >
              {saving ? 'Saving…' : saved ? 'Saved' : 'Save profile'}
            </button>
            {saved && (
              <span className='text-sm text-emerald-400'>Profile updated.</span>
            )}
          </div>

          <p className='text-sm text-white/60 mb-6'>
            Shows as:{' '}
            <span className='text-white/90'>
              {displayName.trim() || user.name}
            </span>
            {subtitle !== 'Glossary Streak Player' && <> · {subtitle}</>}
          </p>

          {stats && (
            <div className='grid grid-cols-2 gap-4'>
              <div className={`p-4 ${ui.inset} text-center h-full`}>
                <div className='text-xs font-semibold text-black/50'>
                  Best streak
                </div>
                <div className='mt-1 text-2xl font-extrabold text-emerald-600'>
                  <CountUp value={stats.bestStreakAllTime} />
                </div>
              </div>
              <div className={`p-4 ${ui.inset} text-center h-full`}>
                <div className='text-xs font-semibold text-black/50'>
                  Total attempts
                </div>
                <div className='mt-1 text-2xl font-extrabold text-black/90'>
                  <CountUp value={stats.totalAttempts} />
                </div>
              </div>
              <div className={`p-4 ${ui.inset} text-center`}>
                <div className='text-xs font-semibold text-black/50'>
                  Total correct
                </div>
                <div className='mt-1 text-2xl font-extrabold text-black/90'>
                  <CountUp value={stats.totalCorrect} />
                </div>
              </div>
              <div className={`p-4 ${ui.inset} text-center`}>
                <div className='text-xs font-semibold text-black/50'>
                  Accuracy
                </div>
                <div className='mt-1 text-2xl font-extrabold text-black/90'>
                  <CountUp value={accuracy} />%
                </div>
              </div>
            </div>
          )}

          {!stats && (
            <div className='py-8 text-center text-white/70'>
              No stats yet. Play a game to get started!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
