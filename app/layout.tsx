import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/lib/auth';
import { GameViewport } from '@/components/GameViewport';
import { PersistPendingScore } from '@/components/PersistPendingScore';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PackRun | Packaging Terminology Challenge',
  description: 'A high-speed packaging terminology challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#000000' }}
      >
        <AuthProvider>
          <PersistPendingScore />
          <GameViewport>{children}</GameViewport>
        </AuthProvider>
      </body>
    </html>
  );
}
