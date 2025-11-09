import { Quiz } from "@/components/quiz";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
      <header className="w-full max-w-4xl mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-headline">
          WealthPath Courses Test
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Test your financial literacy and pave your path to wealth.
        </p>
      </header>
      <Quiz />
    </main>
  );
}
