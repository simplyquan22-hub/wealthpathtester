import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Inter, Nunito } from 'next/font/google';
import { cn } from '@/lib/utils';
import { FirebaseClientProvider } from '@/firebase';
import Header from '@/components/header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'WealthPath’s Knowledge Tester',
  description: 'Test your financial knowledge with WealthPath Courses.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "font-body antialiased flex flex-col min-h-screen",
        inter.variable,
        nunito.variable
      )}>
        <FirebaseClientProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Toaster />
        </FirebaseClientProvider>
        <footer className="w-full bg-transparent mt-auto py-8">
          <div className="max-w-4xl mx-auto px-4 text-center text-muted-foreground">
            <p className="font-bold text-lg text-foreground">WealthPath</p>
            <p className="italic mb-4 text-sm">“A Journey Uniquely Yours”</p>
            <p className="text-sm">
              Contact Us: <a href="mailto:Raequancol12@gmail.com" className="text-primary hover:underline">Raequancol12@gmail.com</a>
            </p>
            <p className="text-xs mt-4">
              Copyright © 2026 WealthPath. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
