
import { Quiz } from "@/components/quiz";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 md:p-8 space-y-8">
       <div className="text-center space-y-2">
         <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground font-heading">
          WealthPath’s Exam
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Test your financial literacy and take the first step on your journey to financial freedom.</p>
       </div>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <Quiz />
      </div>

      <div className="relative group w-full max-w-2xl">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <Card className="relative w-full shadow-lg bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-2">Need to Review?</h2>
            <p className="mb-4 text-muted-foreground">
              Head back to our course PDF to brush up on your knowledge.
            </p>
            <Link href="https://docs.google.com/document/d/1-xCGlcx5ap2YinQ21jWvljQ8uWdof6NqCzATqJzfcJ4/edit?usp=drivesdk" target="_blank" className="inline-block">
              <button className="btn">
                <span>
                  Get started
                </span>
              </button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
