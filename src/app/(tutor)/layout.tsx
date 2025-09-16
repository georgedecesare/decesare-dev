import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Montserrat, Roboto_Serif } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

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

const modern = Montserrat({
  variable: '--font-modern',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'George Decesare | Maths & Computing Tutor',
  description:
    'London-based tutoring for advanced Mathematics and Computer Science by George Decesare',
  openGraph: {
    title: 'George Decesare | Maths & Computing Tutor',
    description:
      'London-based tutoring for advanced Mathematics and Computer Science by George Decesare',
    url: 'tutor.decesare.dev',
    siteName: 'George Decesare',
    images: [
      'https://thumbs.dreamstime.com/b/derivation-advanced-mathematical-formula-17750197.jpg',
    ],
    type: 'profile',
  },
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
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="6d09a870-9048-4988-ac19-b123ca29e0d1"
      ></Script>
      <body
        className={`${serif.variable} ${geistSans.variable} ${modern.variable}
          ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
