import type React from "react";
import localFont from "next/font/local"; 
import "./globals.css";


const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Variable.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const clashGrotesk = localFont({
  src: "./fonts/ClashGrotesk-Variable.woff2",
  variable: "--font-clash-grotesk",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${satoshi.variable} ${clashGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
