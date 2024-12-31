import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/hooks/useAuth';
import LandingPageNavbar from '@/components/landing-page/landingPageNavbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Assignment Help',
  description: 'Get help with your assignments',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <LandingPageNavbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
