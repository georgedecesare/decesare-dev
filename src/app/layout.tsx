import type { Metadata } from 'next';
import { Geist, Geist_Mono, IBM_Plex_Mono, VT323 } from 'next/font/google';
import './globals.css';
import Navlink from './navlink';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mono.variable}
          ${terminal.variable} antialiased`}
      >
        <header
          id="navbar"
          className="fixed top-0 z-40 flex flex-row gap-10 h-15
            w-[calc(100%-2.5rem)] pr-10 items-center mx-5 mt-5 invisible
            font-terminal rounded-xs bg-nav shadow-lg border-1 border-stone-700"
        >
          <div id="logo" className="ml-10 text-xl"></div>
          <div id="navlinks" className="flex flex-row gap-10">
            <Navlink>Home</Navlink>
            <Navlink>About Me</Navlink>
            <Navlink>Projects</Navlink>
            <Navlink>Contact</Navlink>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
