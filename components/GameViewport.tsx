'use client';

import { useEffect, useState } from 'react';

const DESIGN_WIDTH = 1620;
const DESIGN_HEIGHT = 1080;

function getScale() {
  if (typeof window === 'undefined') return 1;
  return Math.min(
    window.innerWidth / DESIGN_WIDTH,
    window.innerHeight / DESIGN_HEIGHT,
  );
}

export function GameViewport({ children }: { children: React.ReactNode }) {
  const [scale, setScale] = useState(getScale);

  useEffect(() => {
    const onResize = () => setScale(getScale());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div className='fixed inset-0 flex items-center justify-center overflow-hidden'>
      <div
        className='flex shrink-0 flex-col overflow-hidden rounded-2xl'
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        {children}
      </div>
    </div>
  );
}
