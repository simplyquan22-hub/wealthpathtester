'use client';

import {
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { useFirebase } from '@/firebase';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { doc, setDoc, getDoc, User } from 'firebase/firestore';

const GoogleIcon = () => (
  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const AppleIcon = () => (
    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
        <path d="M19.393,13.633c-0.033,3.385-2.137,6.035-5.253,6.035c-2.352,0-3.893-1.488-5.02-1.488c-1.144,0-2.822,1.455-4.333,1.455 c-1.527,0-3.038-1.55-4.137-3.696c-1.58-3.078-0.66-7.518,2.01-10.02c1.326-1.246,3.228-1.986,5.032-1.986 c1.697,0,3.31,0.852,4.356,0.852c1.014,0,2.954-0.924,4.9-0.924c1.55,0,3.585,0.611,4.789,2.05 C19.393,13.633,19.393,13.633,19.393,13.633z M15.532,2.305c1.17-1.404,1.838-3.33,1.614-5.305 c-1.898,0.083-3.956,1.246-5.126,2.65C12.759,0.274,12.091-1.65,11.868-3.623c1.93,0.033,3.924-1.196,5.093-2.62 C16.223-5.044,15.637-3.121,15.532,2.305z" transform="translate(4.607 10.323)" fill="currentColor"></path>
    </svg>
)

export default function LoginPage() {
  const { auth, firestore, user } = useFirebase();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    // if user is already logged in, redirect them
    if (user) {
      const redirect = searchParams.get('redirect') || '/dashboard';
      router.push(redirect);
    }
  }, [user, router, searchParams]);

  const handleSuccessfulSignIn = async (user: any) => {
    if (!firestore) return;
    const userDocRef = doc(firestore, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      await setDoc(userDocRef, {
        id: user.uid,
        email: user.email,
        name: user.displayName,
        quizHistoryIds: [],
      });
    }

    const redirect = searchParams.get('redirect') || '/dashboard';
    router.push(redirect);
  };

  const signInWithGoogle = async () => {
    if (!auth) return;
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      await handleSuccessfulSignIn(result.user);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const signInWithApple = async () => {
    if (!auth) return;
    const provider = new OAuthProvider('apple.com');
    try {
      const result = await signInWithPopup(auth, provider);
      await handleSuccessfulSignIn(result.user);
    } catch (error) {
      console.error("Error signing in with Apple: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="w-full max-w-sm p-8 space-y-4 bg-card rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to continue your journey.</p>
        </div>
        <div className="space-y-3">
            <Button onClick={signInWithGoogle} className="w-full" variant="outline">
                <GoogleIcon />
                Sign in with Google
            </Button>
            <Button onClick={signInWithApple} className="w-full bg-black text-white hover:bg-black/80">
                <AppleIcon />
                Sign in with Apple
            </Button>
        </div>
      </div>
    </div>
  );
}
