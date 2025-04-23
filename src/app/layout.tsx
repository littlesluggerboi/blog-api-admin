import type { Metadata } from "next";
import "./globals.css";

import { STIX_Two_Text, Inter } from "next/font/google";

const headingFont = STIX_Two_Text({
  subsets: ["latin"],
  variable: "--heading-font",
});
const textFont = Inter({
  subsets: ["latin"],
  variable: "--text-font",
});

export const metadata: Metadata = {
  title: "A Blogs",
  description: "Blogs Site for A.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
      <link rel="icon" href="/favicon.svg" sizes="any"/>
      </head>
      <body
        className={`${headingFont.variable} ${textFont.variable} antialiased grid grid-cols-[auto_1fr] h-full`}
      >
        {children}
      </body>
    </html>
  );
}
