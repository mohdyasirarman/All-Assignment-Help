import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assignment Help Online| Get Assignment Help @30% Discount",
  description:"AllAssignmentHelp.com is top assignment help website assisting students with online assignment writing. Hire professional assignment helper for cheap and get...",
  keywords:"Assignment Help, assignment help online, online assignment help, assignment writing service, assignment helper",
  authors: [{ name: "https://www.allassignmenthelp.com" }],
  openGraph: {
       title:"Assignment Help Online| Get Assignment Help @30% Discount",
       description:"AllAssignmentHelp.com is top assignment help website assisting students with online assignment writing. Hire professional assignment helper for cheap and get...",
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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
