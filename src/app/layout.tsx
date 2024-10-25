import type { Metadata } from "next";
import "./globals.css";

// app/layout.tsx
import { Providers } from './providers'

import {Pacifico} from 'next/font/google'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico'
})

export const metadata: Metadata = {
  title: "The Last Dance",
  description: "lets go",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${pacifico.className} bg-[#f1f1f1]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
