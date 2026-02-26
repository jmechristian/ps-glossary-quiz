import { PixelLoader } from '@/components/PixelLoader';

export default function Loading() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black'>
      <PixelLoader inline />
    </div>
  );
}
