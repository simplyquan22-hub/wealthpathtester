"use client";

import { useState, useMemo, useEffect } from 'react';
import { quizData } from '@/lib/quiz-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, XCircle, Lightbulb, RotateCw, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import Celebration from './celebration';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Group questions by section
const sections = quizData.reduce((acc, question) => {
  const section = question.section || 'General';
  if (!acc[section]) {
    acc[section] = [];
  }
  acc[section].push(question);
  return acc;
}, {} as Record<string, typeof quizData>);

const sectionNames = Object.keys(sections);

const getInitialState = <T,>(key: string, defaultValue: T): T => {
  if (typeof window === 'undefined') {
    return defaultValue;
  }
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn(`Error reading localStorage key “${key}”:`, error);
    return defaultValue;
  }
};


export function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(() => getInitialState('quizCurrentQuestionIndex', 0));
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>(() => getInitialState('quizSelectedAnswers', {}));
  const [isFinished, setIsFinished] = useState<boolean>(() => getInitialState('quizIsFinished', false));
  const [score, setScore] = useState<number>(() => getInitialState('quizScore', 0));
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    window.localStorage.setItem('quizCurrentQuestionIndex', JSON.stringify(currentQuestionIndex));
    window.localStorage.setItem('quizSelectedAnswers', JSON.stringify(selectedAnswers));
    window.localStorage.setItem('quizIsFinished', JSON.stringify(isFinished));
    window.localStorage.setItem('quizScore', JSON.stringify(score));
  }, [currentQuestionIndex, selectedAnswers, isFinished, score]);
  
  const currentQuestion = useMemo(() => quizData[currentQuestionIndex], [currentQuestionIndex]);
  const selectedAnswer = selectedAnswers[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    if (showFeedback) return;
    setSelectedAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setShowFeedback(true);

    setTimeout(() => {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setIsFinished(true);
      }
      setShowFeedback(false);
    }, 2000);
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsFinished(false);
    setScore(0);
    setShowFeedback(false);
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('quizCurrentQuestionIndex');
      window.localStorage.removeItem('quizSelectedAnswers');
      window.localStorage.removeItem('quizIsFinished');
      window.localStorage.removeItem('quizScore');
    }
  };
  
  const scorePercentage = (score / quizData.length) * 100;
  const quizProgress = ((currentQuestionIndex + 1) / quizData.length) * 100;
  const isCurrentAnswerCorrect = showFeedback && selectedAnswer === currentQuestion.correctAnswer;

  if (isFinished) {
    const isGoodScore = scorePercentage >= 80;
    return (
      <Card className="w-full max-w-4xl shadow-2xl">
        <CardHeader className="text-center p-8">
          <CardTitle className="text-3xl font-bold">Quiz Complete!</CardTitle>
          <CardDescription className="text-lg">You scored {score} out of {quizData.length}</CardDescription>
          <div className="relative pt-4">
            <Progress value={scorePercentage} className="h-4" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-primary-foreground text-sm">{Math.round(scorePercentage)}%</div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="my-6">
            {isGoodScore ? (
              <Alert className="border-accent bg-accent/30 text-accent-foreground">
                <Trophy className="h-5 w-5 text-primary" />
                <AlertTitle className="font-bold text-lg">
                  Excellent work!
                </AlertTitle>
                <AlertDescription>
                  You have a strong understanding of these financial concepts. Now it's time to go apply your knowledge and build your wealth!
                </AlertDescription>
              </Alert>
            ) : (
              <Alert variant="destructive">
                <RotateCw className="h-5 w-5" />
                <AlertTitle className="font-bold text-lg">
                  Keep learning!
                </AlertTitle>
                <AlertDescription>
                  Don't worry, building financial literacy is a journey. We recommend you retake the quiz or go back to the WealthPath courses to review the material.
                </AlertDescription>
              </Alert>
            )}
          </div>
          <h3 className="text-xl font-semibold mb-4 text-center">Review Your Answers</h3>
          <Accordion type="multiple" className="w-full">
            {sectionNames.map(sectionName => (
              <AccordionItem value={sectionName} key={sectionName} className="bg-muted/50 rounded-lg mb-2">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4">
                  {sectionName}
                </AccordionTrigger>
                <AccordionContent className="p-2">
                  <Accordion type="single" collapsible className="w-full">
                    {sections[sectionName].map((question) => {
                      const userAnswer = selectedAnswers[quizData.indexOf(question)];
                      const isCorrect = userAnswer === question.correctAnswer;
                      return (
                        <AccordionItem value={`item-${question.id}`} key={question.id} className="border-b-0">
                          <AccordionTrigger className="text-left hover:no-underline text-base">
                            <div className="flex items-center gap-4 w-full">
                              {isCorrect ? <CheckCircle2 className="text-green-500 h-5 w-5 flex-shrink-0" /> : <XCircle className="text-red-500 h-5 w-5 flex-shrink-0" />}
                              <span className="flex-1">{question.question}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="space-y-4">
                            <p className={cn("p-3 rounded-md", isCorrect ? "bg-green-500/20" : "bg-red-500/20")}>Your answer: {userAnswer}</p>
                            {!isCorrect && <p className="p-3 rounded-md bg-green-500/20">Correct answer: {question.correctAnswer}</p>}
                            <div className="flex items-start gap-3 p-3 bg-card rounded-md">
                              <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                              <p className="text-muted-foreground">{question.explanation}</p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
        <CardFooter className="justify-center p-6">
          <Button onClick={handleReset} size="lg">
            <RotateCw className="mr-2 h-4 w-4" /> Try Again
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl shadow-2xl relative overflow-hidden">
      {isCurrentAnswerCorrect && <Celebration />}
      <CardHeader className="p-6">
        <Progress value={quizProgress} className="mb-4 h-2"/>
        <CardDescription className="font-semibold text-primary">
          {currentQuestion.section}
        </CardDescription>
         <CardTitle className="text-2xl mt-1 leading-tight">{currentQuestion.question}</CardTitle>
      </CardHeader>
     
      <CardContent className="pt-0">
        <RadioGroup
          value={selectedAnswer}
          onValueChange={handleAnswerSelect}
          className="space-y-3"
          disabled={showFeedback}
        >
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = currentQuestion.correctAnswer === option;
            return (
              <div key={index}>
                <RadioGroupItem
                  value={option}
                  id={`q${currentQuestion.id}-opt${index}`}
                  className="sr-only peer"
                />
                <Label
                  htmlFor={`q${currentQuestion.id}-opt${index}`}
                  className={cn(
                    "flex items-center p-4 rounded-lg border-2 transition-all cursor-pointer bg-muted/30 hover:bg-muted/70 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10",
                    showFeedback && isSelected && !isCorrect && "bg-red-500/20 border-red-500/50 text-foreground animate-in shake",
                    showFeedback && isCorrect && "bg-green-500/20 border-green-500/50 text-foreground animate-in pulse",
                  )}
                >
                  {option}
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      </CardContent>
      <CardFooter className="justify-between items-center p-6">
        <p className="text-sm text-muted-foreground">Question {currentQuestionIndex + 1} of {quizData.length}</p>
        <Button onClick={handleSubmit} disabled={!selectedAnswer || showFeedback} size="lg">
          {currentQuestionIndex === quizData.length - 1 ? 'Finish' : 'Submit Answer'}
        </Button>
      </CardFooter>
    </Card>
  );
}
