import { Quiz } from "@/components/quiz";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
      <header className="w-full max-w-4xl mb-8 flex items-center justify-center gap-4">
        <div className="w-10 h-10 text-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path d="M21 16.5C21 16.2239 20.8946 15.958 20.7071 15.7705L12.7071 7.7705C12.3166 7.38002 11.6834 7.38002 11.2929 7.7705L3.29289 15.7705C3.10536 15.958 3 16.2239 3 16.5V21H21V16.5Z" />
            <path d="M12.0003 1.5L22.5 6.75V11.25L12.0003 6L1.5 11.25V6.75L12.0003 1.5Z" />
          </svg>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground font-headline">
          WealthPath
        </h1>
      </header>
      <div className="w-full max-w-4xl text-center mb-8">
        <p className="text-lg text-muted-foreground">
          Test your financial literacy and pave your path to wealth.
        </p>
      </div>
      <Quiz />
    </main>
  );
}
