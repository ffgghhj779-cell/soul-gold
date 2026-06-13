import type { Metadata } from 'next';
import { Cairo, Tajawal } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  weight: ['700', '800'],
  subsets: ['latin', 'arabic'],
  variable: '--font-cairo',
});

const tajawal = Tajawal({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'arabic'],
  variable: '--font-tajawal',
});

export const metadata: Metadata = {
  title: 'Soul Gold | صول الذهبية',
  description: 'Premium Intelligence & Inspiring Quality | The Gold of the Saudi Table.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
