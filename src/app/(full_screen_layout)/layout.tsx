import { STIX_Two_Text, Inter } from "next/font/google";
import "./globals.css";

const headingFont = STIX_Two_Text({
  subsets: ["latin"],
  variable: "--heading-font",
});
const textFont = Inter({
  subsets: ["latin"],
  variable: "--text-font",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={`${headingFont.variable} ${textFont.variable} antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
