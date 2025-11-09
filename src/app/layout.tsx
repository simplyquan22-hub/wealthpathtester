import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Nunito:wght@700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
        <Toaster />
        <footer className="w-full bg-background border-t border-border mt-auto py-8">
          <div className="max-w-4xl mx-auto px-4 text-center text-muted-foreground">
            <p className="font-bold text-lg text-foreground">WealthPath</p>
            <p className="italic mb-4">“A Journey Uniquely Yours”</p>
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
