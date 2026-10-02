import type { Metadata } from "next";
import { DM_Sans, Forum } from "next/font/google";
import "./globals.css";

const forum = Forum({
  variable: "--font-forum",
  weight: "400",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grilli - Amazing & Delicious Food",
  description: "This is a Restaurant html template made by codewithsadee",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${forum.variable} ${dmSans.variable}`}>
      <body id="top">{children}</body>
    </html>
  );
}
