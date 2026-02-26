'use client';

/**
 * 8-bit / pixel-style loading screen: black background, white icons and text.
 * Use as full-screen (default) or inline.
 */
export function PixelLoader({ inline }: { inline?: boolean }) {
  return (
    <div
      className={`bg-black flex flex-col items-center justify-center gap-8 ${
        inline ? 'py-12' : 'min-h-full w-full min-w-full'
      }`}
      style={inline ? undefined : { minHeight: '100%' }}
    >
      {/* Pixel blocks loader */}
      <div className='flex items-end gap-1.5' style={{ height: 24 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className='w-3 h-3 bg-white animate-pixel-bounce'
            style={{
              animationDelay: `${i * 0.15}s`,
              animationFillMode: 'both',
            }}
          />
        ))}
      </div>
      <p
        className='text-white uppercase tracking-[0.35em] text-sm font-bold tabular-nums'
        style={{
          fontFamily: 'var(--font-geist-mono), monospace',
          letterSpacing: '0.35em',
        }}
      >
        Loading
      </p>
    </div>
  );
}
