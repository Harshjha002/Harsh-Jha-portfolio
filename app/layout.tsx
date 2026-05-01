import type { Metadata } from "next";
import { DM_Sans, Geist } from 'next/font/google'
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const dmSans = DM_Sans({
  weight:['400','500','700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Harsh Jha [Full stack developer]",
  description: "created by Harsh Jha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" className={cn("font-sans", geist.variable)}
    >
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
