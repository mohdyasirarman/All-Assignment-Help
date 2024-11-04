import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/component/common/navbar";
import Footer from "@/app/component/common/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Assignment Help Online| Get Assignment Help @30% Discount",
  description:
    "AllAssignmentHelp.com is top assignment help website assisting students with online assignment writing. Hire professional assignment helper for cheap and get...",
  keywords:
    "Assignment Help, assignment help online, online assignment help, assignment writing service, assignment helper",
  authors: [{ name: "https://www.allassignmenthelp.com" }],
  openGraph: {
    title: "Assignment Help Online| Get Assignment Help @30% Discount",
    description:
      "AllAssignmentHelp.com is top assignment help website assisting students with online assignment writing. Hire professional assignment helper for cheap and get...",
    siteName: "AllAssignmentHelp.com",
    images: [{ url: "public/static/images/logo1.png" }],
    type: "website",
  },
  icons: {
    icon: "public/static/images/favicon.png",
    shortcut: "public/static/images/favicon.ico",
  },
  other: {
    Copyright: "Copyright 2024 @ Allassignmenthelp.com",
    distribution: "Global",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
