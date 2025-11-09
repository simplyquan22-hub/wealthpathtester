'use client';

import { useFirebase } from '@/firebase';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { signOut } from 'firebase/auth';
import { LogIn, LogOut, LayoutDashboard } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const { user, isUserLoading, auth } = useFirebase();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    if (auth) {
      await signOut(auth);
      router.push('/');
    }
  };

  // Don't render anything if we are on the login page
  if (pathname === '/login') {
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
          {isUserLoading ? (
             <div className="h-8 w-20 animate-pulse rounded-md bg-muted" />
          ) : user ? (
            <>
              <Button asChild variant="ghost">
                <Link href="/dashboard">
                  <LayoutDashboard className="mr-2" />
                  Dashboard
                </Link>
              </Button>
              <Button onClick={handleLogout} variant="ghost">
                <LogOut className="mr-2" />
                Logout
              </Button>
            </>
          ) : (
            <Button asChild>
              <Link href="/login">
                <LogIn className="mr-2" />
                Login
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
