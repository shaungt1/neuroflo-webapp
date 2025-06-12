import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import localFont from 'next/font/local';
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NeuroFlo | Agentic AI for Mission-Critical Operations',
  description: 'Premier Agentic AI Platform for Government, Military, Law Enforcement, and Healthcare',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
              {/* --- External Libraries Loading Correctly --- */}
                <Script
                    src='https://cdnjs.cloudflare.com/ajax/libs/three.js/84/three.min.js'
                    strategy='beforeInteractive'
                />
                <Script
                    src='https://unpkg.com/@ko-yelie/kgl@0.2.1/dist/index.iife.min.js'
                    strategy='beforeInteractive'
                />
                <Script
                    src='https://isuttell.github.io/sine-waves/javascripts/sine-waves.min.js'
                    strategy='beforeInteractive'
                />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}