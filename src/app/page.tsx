import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Quiz } from "@/components/quiz";
import { BookOpen, BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4 sm:p-8 md:p-12">
      <header className="w-full max-w-4xl mb-8 flex flex-col items-center justify-center gap-2 text-center">
        <BrainCircuit className="h-12 w-12 text-primary" />
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground font-headline uppercase">
          WealthPath’s Knowledge Tester
        </h1>
      </header>
      <div className="w-full max-w-4xl text-center mb-8">
        <p className="text-lg text-muted-foreground">
          Test your financial literacy and pave your path to wealth.
        </p>
      </div>
      <Quiz />
      <Card className="w-full max-w-2xl mt-8 shadow-lg">
        <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Need to Review?</h3>
            <p className="text-muted-foreground">Head back to our course PDF to sharpen your knowledge.</p>
          </div>
          <Button asChild size="lg">
            <Link href="https://docs.google.com/document/d/1-xCGlcx5ap2YinQ21jWvljQ8uWdof6NqCzATqJzfcJ4/edit?usp=drivesdk" target="_blank">
              <BookOpen className="mr-2 h-5 w-5" />
              Open Course PDF
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
