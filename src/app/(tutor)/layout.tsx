import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Roboto_Serif } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const serif = Roboto_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'George Decesare',
  description: 'Personal website and portfolio of George Decesare',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${serif.variable} ${geistSans.variable}
          ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
