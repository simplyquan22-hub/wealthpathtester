
import { Quiz } from "@/components/quiz";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 md:p-8 space-y-8">
       <div className="text-center">
         <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-foreground font-heading">
          WealthPath’s Exam
        </h1>
        <p className="text-muted-foreground text-lg mt-2">Test your Knowledge</p>
       </div>
      <Quiz />
      <Card className="w-full max-w-2xl shadow-lg">
        <CardContent className="p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Need to Review?</h2>
          <p className="mb-4 text-muted-foreground">
            Head back to our course PDF to brush up on your knowledge.
          </p>
          <Button asChild>
            <Link href="https://docs.google.com/document/d/1-xCGlcx5ap2YinQ21jWvljQ8uWdof6NqCzATqJzfcJ4/edit?usp=drivesdk" target="_blank">
              Open Course PDF
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
