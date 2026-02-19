import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ClickyTour Clone',
  description: 'React migration of clickytour.club',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
