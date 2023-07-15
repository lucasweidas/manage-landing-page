import './globals.css';
import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-be-vietnam-pro',
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Manage Landing Page',
  description: 'Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
      </head>
      <body className={`${beVietnamPro.variable} font-sans`}>
        <div className="overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
