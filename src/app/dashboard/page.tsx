'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFirebase, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardPage() {
  const { user, isUserLoading, firestore } = useFirebase();
  const router = useRouter();

  const quizHistoryQuery = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return query(collection(firestore, `users/${user.uid}/quizHistory`), orderBy('dateTaken', 'asc'));
  }, [user, firestore]);

  const { data: quizHistory, isLoading: isHistoryLoading } = useCollection<{
    score: number;
    totalQuestions: number;
    dateTaken: string;
  }>(quizHistoryQuery);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login?redirect=/dashboard');
    }
  }, [user, isUserLoading, router]);

  const chartData = useMemo(() => {
    if (!quizHistory) return [];
    return quizHistory.map(entry => ({
      date: format(parseISO(entry.dateTaken), 'MMM d'),
      score: (entry.score / entry.totalQuestions) * 100,
    }));
  }, [quizHistory]);

  if (isUserLoading || isHistoryLoading) {
    return (
      <div className="container mx-auto py-8 px-4 md:px-8">
        <div className="space-y-6">
          <Skeleton className="h-8 w-1/4" />
          <Skeleton className="h-[350px] w-full" />
          <Skeleton className="h-40 w-full" />
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // or a message telling them they are being redirected
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.displayName || 'Learner'}!</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Quiz Score Over Time</CardTitle>
          <CardDescription>Track your progress across all your quiz attempts.</CardDescription>
        </CardHeader>
        <CardContent>
          {chartData.length > 1 ? (
            <div className="h-[350px]">
              <ChartContainer config={{}} className="w-full h-full">
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--muted-foreground) / 0.2)" />
                  <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
                  <YAxis unit="%" tickLine={false} axisLine={false} tickMargin={8} />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent
                        formatter={(value) => `${Math.round(Number(value))}%`}
                        indicator="line"
                      />}
                  />
                  <defs>
                    <linearGradient id="fillScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="score"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#fillScore)"
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          ) : (
            <div className="h-[350px] flex items-center justify-center text-center text-muted-foreground">
              <p>Complete at least two quizzes to see your progress chart.</p>
            </div>
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Quiz History</CardTitle>
          <CardDescription>A detailed log of all your past attempts.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Score</TableHead>
                <TableHead className="text-right">Percentage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quizHistory && quizHistory.length > 0 ? (
                [...quizHistory].reverse().map(entry => (
                  <TableRow key={entry.id}>
                    <TableCell>{format(parseISO(entry.dateTaken), 'MMMM d, yyyy')}</TableCell>
                    <TableCell>{entry.score} / {entry.totalQuestions}</TableCell>
                    <TableCell className="text-right">
                       <Badge
                        className={cn(
                          (entry.score / entry.totalQuestions) * 100 >= 80
                            ? 'bg-green-500/20 text-green-400 border-green-500/50'
                            : (entry.score / entry.totalQuestions) * 100 >= 50
                            ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
                            : 'bg-red-500/20 text-red-400 border-red-500/50'
                        )}
                        variant="outline"
                      >
                        {Math.round((entry.score / entry.totalQuestions) * 100)}%
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="h-24 text-center">
                    You haven't completed any quizzes yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
