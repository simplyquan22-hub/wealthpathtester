'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { LineChart } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  // Don't render header on the main quiz page
  if (pathname === '/') {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">WealthPath Exam</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild variant="ghost">
            <Link href="/dashboard">
                <LineChart className="mr-2 h-4 w-4" />
                My Progress
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}