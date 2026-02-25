export const ui = {
  page: 'h-full min-h-full w-full bg-base-light',
  container: 'mx-auto w-full max-w-5xl px-4 sm:px-6',
  stage: 'mx-auto w-full max-w-3xl',

  // Surfaces
  surface:
    'bg-white/90 backdrop-blur border border-black/5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]',
  surfaceSm:
    'bg-white/90 backdrop-blur border border-black/5 rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]',
  inset: 'bg-white/60 backdrop-blur border border-black/5 rounded-2xl',

  // Pills
  pill: 'rounded-full bg-white/70 border border-black/5 shadow-sm',

  // Buttons (Clemson as primary CTA)
  primaryBtn:
    'rounded-xl bg-clemson text-white font-semibold shadow-sm hover:brightness-95 active:scale-[0.98] transition will-change-transform',
  ghostBtn:
    'rounded-xl bg-white/70 border border-black/10 text-black/80 font-semibold hover:bg-white active:scale-[0.98] transition will-change-transform',
  dangerBtn:
    'rounded-xl bg-rose-500 text-white font-semibold shadow-sm hover:brightness-95 active:scale-[0.98] transition will-change-transform',

  // Text
  h1: 'text-4xl sm:text-5xl font-extrabold tracking-tight text-black/90',
  h2: 'text-2xl sm:text-3xl font-extrabold tracking-tight text-black/90',
  muted: 'text-black/55',

  // Accent (Clemson)
  clemson: 'bg-clemson',
  clemsonText: 'text-clemson',
};
