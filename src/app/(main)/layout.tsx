import type { Metadata, Viewport } from 'next';
import { Fira_Mono, Geist, Geist_Mono, VT323 } from 'next/font/google';
import './globals.css';
import Nav from './nav';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const mono = Fira_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

// const mono = IBM_Plex_Mono({
//   variable: '--font-mono',
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap',
// });

const terminal = VT323({
  variable: '--font-terminal',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
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
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="73408bf2-ff72-4a01-a3bb-60a1b787f6ff"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mono.variable}
          ${terminal.variable} antialiased`}
      >
        <Nav />
        <div className="smooth-content">{children}</div>
      </body>
    </html>
  );
}
