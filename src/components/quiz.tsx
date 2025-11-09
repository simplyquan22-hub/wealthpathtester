"use client";

import { useState, useMemo, useEffect } from 'react';
import { quizData, type Question } from '@/lib/quiz-data';
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      const savedIndex = getInitialState('quizCurrentQuestionIndex', 0);
      const savedAnswers = getInitialState('quizSelectedAnswers', {});
      const savedFinished = getInitialState('quizIsFinished', false);
      
      setCurrentQuestionIndex(savedIndex);
      setSelectedAnswers(savedAnswers);
      setIsFinished(savedFinished);

      // Recalculate score based on saved answers
      const newScore = quizData.reduce((acc, question, index) => {
        if (savedAnswers[index] === question.correctAnswer) {
          return acc + 1;
        }
        return acc;
      }, 0);
      setScore(newScore);
    }
  }, [isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem('quizCurrentQuestionIndex', JSON.stringify(currentQuestionIndex));
      window.localStorage.setItem('quizSelectedAnswers', JSON.stringify(selectedAnswers));
      window.localStorage.setItem('quizIsFinished', JSON.stringify(isFinished));
    } catch (error) {
      console.warn('Could not save quiz state to localStorage:', error);
    }
  }, [currentQuestionIndex, selectedAnswers, isFinished, isHydrated]);
  
  const currentQuestion = useMemo(() => quizData[currentQuestionIndex], [currentQuestionIndex]);
  const selectedAnswer = selectedAnswers[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    if (showFeedback) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: answer });
  };
  
  const handleSubmit = () => {
    if (!selectedAnswer) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setIsFinished(true);
      }
    }, 2000);
  }

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsFinished(false);
    setScore(0);
    setShowFeedback(false);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem('quizCurrentQuestionIndex');
        window.localStorage.removeItem('quizSelectedAnswers');
        window.localStorage.removeItem('quizIsFinished');
      } catch (error) {
        console.warn('Could not remove quiz state from localStorage:', error);
      }
    }
  };
  
  const scorePercentage = (score / quizData.length) * 100;
  const quizProgress = ((isFinished ? quizData.length : currentQuestionIndex) / quizData.length) * 100;
  const isCurrentAnswerCorrect = showFeedback && selectedAnswer === currentQuestion.correctAnswer;

  if (!isHydrated) {
    // Render a loading state or nothing until the component is hydrated
    return (
      <Card className="w-full max-w-2xl shadow-2xl relative overflow-hidden">
        <CardHeader className="p-6">
          <div className="h-2 bg-muted rounded-full mb-4"></div>
          <div className="h-4 bg-muted rounded w-1/4 mb-2"></div>
          <div className="h-8 bg-muted rounded w-3/4"></div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            <div className="h-14 bg-muted/30 rounded-lg"></div>
            <div className="h-14 bg-muted/30 rounded-lg"></div>
            <div className="h-14 bg-muted/30 rounded-lg"></div>
            <div className="h-14 bg-muted/30 rounded-lg"></div>
          </div>
        </CardContent>
        <CardFooter className="justify-between items-center p-6">
          <div className="h-5 bg-muted rounded w-1/5"></div>
          <div className="h-11 bg-muted rounded w-1/3"></div>
        </CardFooter>
      </Card>
    );
  }

  if (isFinished) {
    const isGoodScore = scorePercentage >= 80;
    return (
        <Card className="relative w-full max-w-4xl shadow-2xl overflow-hidden">
          {isGoodScore && <Celebration />}
          <CardHeader className="text-center p-8 bg-card/80 backdrop-blur-sm z-10 relative">
            {isGoodScore ? (
              <Trophy className="mx-auto h-16 w-16 text-primary animate-in zoom-in-50" />
            ) : (
              <RotateCw className="mx-auto h-16 w-16 text-muted-foreground animate-in zoom-in-50" />
            )}
            <CardTitle className="text-3xl font-bold mt-4">{isGoodScore ? "Excellent Work!" : "Keep Learning!"}</CardTitle>
            <CardDescription className="text-lg">You scored {score} out of {quizData.length}</CardDescription>
            <div className="relative pt-4">
              <Progress value={scorePercentage} className={cn("h-4", isGoodScore ? "bg-primary/30" : "bg-destructive/30")} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-primary-foreground text-sm">{Math.round(scorePercentage)}%</div>
            </div>
             <p className="text-muted-foreground mt-4">
              {isGoodScore 
                ? "You have a strong understanding of these financial concepts. Apply your knowledge and build your wealth!"
                : "Building financial literacy is a journey. Review your answers and try again!"
              }
            </p>
          </CardHeader>
          <CardContent className="p-6">
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
                         const questionGlobalIndex = quizData.findIndex(q => q.id === question.id);
                         const userAnswer = selectedAnswers[questionGlobalIndex];
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
                              <p className={cn("p-3 rounded-md", isCorrect ? "bg-green-500/20" : "bg-red-500/20")}>Your answer: {userAnswer || 'Not Answered'}</p>
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
          <CardFooter className="justify-center p-6 border-t">
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
            const id = `q${currentQuestion.id}-opt${index}`;
            return (
              <Label
                  key={id}
                  htmlFor={id}
                  className={cn(
                    "flex items-center p-4 rounded-lg border-2 transition-all cursor-pointer bg-muted/30 hover:bg-muted/70",
                    isSelected && "border-primary bg-primary/10",
                    showFeedback && isSelected && !isCorrect && "bg-red-500/20 border-red-500/50 text-foreground animate-in shake",
                    showFeedback && isCorrect && "bg-green-500/20 border-green-500/50 text-foreground animate-in pulse",
                  )}
                >
                  <RadioGroupItem
                    value={option}
                    id={id}
                    className="mr-4"
                  />
                  <span className="flex-1">{option}</span>
                </Label>
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
