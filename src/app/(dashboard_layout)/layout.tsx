import { STIX_Two_Text, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/partials/navigation";
import Header from "@/partials/header";
import { User } from "../lib/definitions";
import { verifySession } from "../lib/dal";

const headingFont = STIX_Two_Text({
  subsets: ["latin"],
  variable: "--heading-font",
});
const textFont = Inter({
  subsets: ["latin"],
  variable: "--text-font",
});
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user: User = await verifySession();
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={`${headingFont.variable} ${textFont.variable} antialiased h-full grid grid-cols-[auto_1fr]`}
      >
        <Navigation/>
        <div className="grid grid-rows-[auto_1fr]">
        <Header
          user={user}
        />
        <div className="bg-gray-100 h-full p-8 gap-8 grid grid-cols-[1fr_auto]">
        {children}
        </div>
      </div>
      </body>
    </html>
  );
}
