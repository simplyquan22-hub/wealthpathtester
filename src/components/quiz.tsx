'use client';

import { useState, useMemo, useEffect } from 'react';
import { quizData, type Question } from '@/lib/quiz-data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, XCircle, Lightbulb, RotateCw, Trophy, AlertTriangle, LineChart, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import Celebration from './celebration';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import { explainAnswer, type ExplainAnswerInput } from '@/ai/flows/explain-answer-flow';
import { useFirebase } from '@/firebase';
import { addDoc, collection } from 'firebase/firestore';

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

// Explanation Component
const Explanation = ({ question, userAnswer }: { question: Question; userAnswer: string | null }) => {
  const [explanation, setExplanation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getExplanation = async () => {
    if (!userAnswer) return;
    setIsLoading(true);
    setError(null);
    setExplanation('');

    const input: ExplainAnswerInput = {
      question: question.question,
      options: question.options,
      userAnswer: userAnswer,
      correctAnswer: question.correctAnswer,
      originalExplanation: question.explanation,
    };

    try {
      const result = await explainAnswer(input);
      setExplanation(result.explanation);
    } catch (err) {
      console.error("Error getting AI explanation", err);
      setError('Sorry, I couldn\'t generate a new explanation right now. Please check the original one.');
      setExplanation(question.explanation); // Fallback to original
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <p className={cn("p-3 rounded-md", userAnswer === question.correctAnswer ? "bg-green-500/20" : "bg-red-500/20")}>
        Your answer: {userAnswer || 'Not Answered'}
      </p>
      {userAnswer !== question.correctAnswer && (
        <p className="p-3 rounded-md bg-green-500/20">
          Correct answer: {question.correctAnswer}
        </p>
      )}
      <div className="p-4 bg-card rounded-md border">
        <div className="flex items-start gap-4">
          <Lightbulb className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
          <div className="flex-1">
            <p className="font-semibold mb-2">Explanation</p>
            {isLoading ? (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Generating a better explanation...</span>
              </div>
            ) : error ? (
              <p className="text-destructive text-sm">{error}</p>
            ) : (
              <p className="text-muted-foreground">{explanation || question.explanation}</p>
            )}
          </div>
        </div>
        {!explanation && !isLoading && (
          <Button
            variant="link"
            size="sm"
            onClick={getExplanation}
            className="p-0 h-auto mt-2"
          >
            Explain this differently
          </Button>
        )}
      </div>
    </div>
  );
};

export function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const { firestore, user } = useFirebase();

  const currentQuestion = useMemo(() => quizData[currentQuestionIndex], [currentQuestionIndex]);
  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  
  const finalScore = useMemo(() => {
    return quizData.reduce((acc, question, index) => {
      return selectedAnswers[index] === question.correctAnswer ? acc + 1 : acc;
    }, 0);
  }, [selectedAnswers]);

  const weakestSection = useMemo(() => {
    if (!isFinished) return null;

    const incorrectAnswersBySection: Record<string, number> = {};

    quizData.forEach((question, index) => {
      if (selectedAnswers[index] !== question.correctAnswer) {
        const section = question.section || 'General';
        incorrectAnswersBySection[section] = (incorrectAnswersBySection[section] || 0) + 1;
      }
    });

    let maxIncorrect = 0;
    let worstSection = '';

    for (const section in incorrectAnswersBySection) {
      if (incorrectAnswersBySection[section] > maxIncorrect) {
        maxIncorrect = incorrectAnswersBySection[section];
        worstSection = section;
      }
    }
    
    return maxIncorrect >= 2 ? worstSection : null;
  }, [isFinished, selectedAnswers]);

  const handleAnswerSelect = (answer: string) => {
    if (showFeedback) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: answer });
  };
  
  const isCurrentAnswerCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    setShowFeedback(true);

    if (isCurrentAnswerCorrect) {
        if (navigator.vibrate) navigator.vibrate(100); // Short buzz for correct
    } else {
        if (navigator.vibrate) navigator.vibrate([100, 50, 100]); // "Incorrect" double buzz
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 820); // Duration of the shake animation
    }
    
    setTimeout(() => {
      if (currentQuestionIndex < quizData.length - 1) {
        setShowFeedback(false);
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setIsFinished(true);
      }
    }, 1200); // Wait for feedback animation
  };

  useEffect(() => {
    if (isFinished) {
      const saveHistory = async () => {
          if (firestore && user) {
              const newHistoryEntry = {
                  score: finalScore,
                  totalQuestions: quizData.length,
                  dateTaken: new Date().toISOString(),
                  userId: user.uid
              };

              try {
                  const historyCollection = collection(firestore, `users/${user.uid}/quizHistory`);
                  await addDoc(historyCollection, newHistoryEntry);
              } catch (error) {
                  console.error("Failed to save quiz history to Firestore", error);
              }
          }
      };
      saveHistory();
    }
  }, [isFinished, finalScore, firestore, user]);

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsFinished(false);
    setShowFeedback(false);
  };
  
  const scorePercentage = (finalScore / quizData.length) * 100;
  const quizProgress = ((isFinished ? quizData.length : currentQuestionIndex) / quizData.length) * 100;
  const isGoodScore = scorePercentage >= 80;

  if (isFinished) {
    return (
        <Card className="relative w-full max-w-4xl shadow-2xl overflow-hidden">
          {isGoodScore && <Celebration />}
          <CardHeader className="text-center p-8 bg-card/80 backdrop-blur-sm z-10 relative">
            <Trophy className="mx-auto h-16 w-16 text-yellow-400 animate-in zoom-in-50" />
            <CardTitle className="text-3xl font-bold mt-4">
              {isGoodScore ? "Excellent work!" : "Congratulations on finishing!"}
            </CardTitle>
            <CardDescription className="text-lg">You scored {finalScore} out of {quizData.length}</CardDescription>
            <div className="relative pt-4 max-w-sm mx-auto">
              <Progress value={scorePercentage} className="h-4" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-sm mix-blend-difference text-white">{Math.round(scorePercentage)}%</div>
            </div>
             <p className="text-muted-foreground mt-4 text-base max-w-xl mx-auto">
              {isGoodScore 
                ? "You have a solid understanding of these financial concepts. Keep up the great work and continue building on this knowledge!"
                : "Building financial literacy is a journey. Review your answers below and try again!"
              }
            </p>
          </CardHeader>
          <CardContent className="p-6">
            {weakestSection && (
              <Alert variant="destructive" className="mb-6 bg-yellow-500/10 border-yellow-500/50 text-yellow-200">
                <AlertTriangle className="h-4 w-4 !text-yellow-500" />
                <AlertTitle className="font-semibold !text-yellow-400">Focus Area</AlertTitle>
                <AlertDescription>
                    You seem to be struggling with the **{weakestSection}** section. We recommend reviewing this topic to strengthen your understanding.
                </AlertDescription>
              </Alert>
            )}
            <h3 className="text-xl font-semibold mb-4 text-center">Review Your Answers</h3>
            <Accordion type="multiple" className="w-full">
              {sectionNames.map(sectionName => (
                <AccordionItem value={sectionName} key={sectionName} className="bg-muted/30 rounded-lg mb-2 border-b-0">
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline px-4 py-3">
                    {sectionName}
                  </AccordionTrigger>
                  <AccordionContent className="px-2 pb-2">
                    <Accordion type="single" collapsible className="w-full space-y-1">
                      {sections[sectionName].map((question) => {
                         const questionGlobalIndex = quizData.findIndex(q => q.id === question.id);
                         const userAnswer = selectedAnswers[questionGlobalIndex];
                         const isCorrect = userAnswer === question.correctAnswer;
                        return (
                          <AccordionItem value={`item-${question.id}`} key={question.id} className="border-b-0">
                            <AccordionTrigger className="text-left hover:no-underline text-base rounded-md p-3 hover:bg-muted/50 data-[state=open]:bg-card">
                              <div className="flex items-center gap-4 w-full">
                                {isCorrect ? <CheckCircle2 className="text-green-500 h-5 w-5 flex-shrink-0" /> : <XCircle className="text-red-500 h-5 w-5 flex-shrink-0" />}
                                <span className="flex-1">{question.question}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="p-4 bg-card rounded-b-md">
                              <Explanation question={question} userAnswer={userAnswer} />
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
          <CardFooter className="justify-center p-6 border-t gap-4">
            <Button onClick={handleReset} size="lg" variant="outline">
              <RotateCw className="mr-2 h-4 w-4" /> Try Again
            </Button>
            {user && (
              <Button asChild size="lg">
                <Link href="/dashboard">
                  <LineChart className="mr-2 h-4 w-4" /> View My Progress
                </Link>
              </Button>
            )}
          </CardFooter>
        </Card>
    );
  }

  return (
    <Card className={cn("w-full max-w-2xl shadow-2xl relative overflow-hidden", isShaking && "animate-shake")}>
      {showFeedback && isCurrentAnswerCorrect && <Celebration />}
      <CardHeader className="p-6 border-b">
        <Progress value={quizProgress} className="mb-4 h-2"/>
        <CardDescription className="font-semibold text-primary">
          Question {currentQuestionIndex + 1} of {quizData.length} &bull; {currentQuestion.section}
        </CardDescription>
         <CardTitle className="text-2xl mt-1 leading-tight">{currentQuestion.question}</CardTitle>
      </CardHeader>
     
      <CardContent className="p-6">
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = currentQuestion.correctAnswer === option;

            return (
              <label
                key={index}
                className={cn(
                  "quiz-option-container font-medium",
                  showFeedback && isSelected && !isCorrect && "incorrect",
                  showFeedback && isCorrect && "correct",
                  isSelected && !showFeedback && "selected",
                  showFeedback && "disabled"
                )}
                onClick={() => handleAnswerSelect(option)}
              >
                <input
                  type="radio"
                  name={`q${currentQuestion.id}`}
                  value={option}
                  checked={isSelected}
                  readOnly
                  disabled={showFeedback}
                />
                <div className="checkmark"></div>
                {option}
              </label>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="justify-end items-center p-6 border-t bg-muted/30">
        <button className="btn w-full sm:w-auto" onClick={handleSubmit} disabled={!selectedAnswer || showFeedback}>
            <span>
                {showFeedback ? (isCurrentAnswerCorrect ? 'Correct!' : 'Incorrect') : (currentQuestionIndex === quizData.length - 1 ? 'Finish Quiz' : 'Next Question')}
            </span>
        </button>
      </CardFooter>
    </Card>
  );
}
