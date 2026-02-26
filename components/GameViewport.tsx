'use client';

/**
 * Viewport with aspect ratio 1620×1080, max 1620×1080 but never taller than the window.
 * Sizes to fit the screen so it doesn't overflow on short viewports.
 */
export function GameViewport({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen max-h-screen w-full flex items-center justify-center p-0 overflow-hidden'>
      <div
        className='w-full max-w-[1620px] max-h-full aspect-[1620/1080] flex flex-col overflow-hidden rounded-2xl bg-base-light shrink-0'
        style={{ minHeight: 0 }}
      >
        {children}
      </div>
    </div>
  );
}
