"use client"

import * as React from "react"
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export interface TestQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number // 0-based index
  explanation: string
}

interface InteractiveTestProps {
  questions: TestQuestion[]
  testName: string
}

export function InteractiveTest({ questions, testName }: InteractiveTestProps) {
  const [answers, setAnswers] = React.useState<Record<string, number>>({})
  const [showResults, setShowResults] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  function handleAnswerSelect(questionId: string, optionIndex: number) {
    if (submitted) return
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }))
  }

  function handleSubmit() {
    setSubmitted(true)
    setShowResults(true)
  }

  function handleReset() {
    setAnswers({})
    setShowResults(false)
    setSubmitted(false)
  }

  const score = React.useMemo(() => {
    if (!submitted) return 0
    let correct = 0
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++
      }
    })
    return correct
  }, [answers, questions, submitted])

  const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{testName}</h2>
        {submitted && (
          <div className="text-right">
            <p className="text-lg font-semibold">
              Score: {score} / {questions.length}
            </p>
            <p className="text-sm text-muted-foreground">{percentage}%</p>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {questions.map((question, qIndex) => {
          const userAnswer = answers[question.id]
          const isCorrect = userAnswer === question.correctAnswer
          const showAnswer = submitted

          return (
            <Card key={question.id} className={showAnswer ? (isCorrect ? "border-green-500" : "border-red-500") : ""}>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <span className="text-muted-foreground">Question {qIndex + 1}:</span>
                  <span>{question.question}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  {question.options.map((option, oIndex) => {
                    const isSelected = userAnswer === oIndex
                    const isCorrectOption = oIndex === question.correctAnswer
                    let buttonVariant: "default" | "outline" | "secondary" = "outline"

                    if (showAnswer) {
                      if (isCorrectOption) {
                        buttonVariant = "default"
                      } else if (isSelected && !isCorrect) {
                        buttonVariant = "secondary"
                      }
                    } else if (isSelected) {
                      buttonVariant = "default"
                    }

                    return (
                      <button
                        key={oIndex}
                        onClick={() => handleAnswerSelect(question.id, oIndex)}
                        disabled={submitted}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          showAnswer && isCorrectOption
                            ? "bg-green-100 dark:bg-green-900/30 border-green-500"
                            : showAnswer && isSelected && !isCorrect
                            ? "bg-red-100 dark:bg-red-900/30 border-red-500"
                            : isSelected
                            ? "bg-primary/10 border-primary"
                            : "hover:bg-muted border-border"
                        } ${submitted ? "cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{String.fromCharCode(65 + oIndex)})</span>
                          <span className="flex-1">{option}</span>
                          {showAnswer && isCorrectOption && (
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          )}
                          {showAnswer && isSelected && !isCorrect && (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>

                {showAnswer && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    isCorrect 
                      ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                      : "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                  }`}>
                    <div className="flex items-start gap-2 mb-2">
                      <AlertCircle className={`h-5 w-5 mt-0.5 ${
                        isCorrect ? "text-green-600" : "text-blue-600"
                      }`} />
                      <div className="flex-1">
                        <p className={`font-semibold mb-1 ${
                          isCorrect ? "text-green-900 dark:text-green-100" : "text-blue-900 dark:text-blue-100"
                        }`}>
                          {isCorrect ? "Correct!" : "Explanation:"}
                        </p>
                        <p className={`text-sm ${
                          isCorrect ? "text-green-800 dark:text-green-200" : "text-blue-800 dark:text-blue-200"
                        }`}>
                          {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="flex gap-4 justify-center pt-4">
        {!submitted ? (
          <Button
            onClick={handleSubmit}
            disabled={Object.keys(answers).length !== questions.length}
            size="lg"
            className="min-w-[200px]"
          >
            Submit Test
          </Button>
        ) : (
          <Button onClick={handleReset} variant="outline" size="lg" className="min-w-[200px]">
            Retake Test
          </Button>
        )}
      </div>
    </div>
  )
}

