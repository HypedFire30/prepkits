"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, RotateCcw, Settings2, BookOpen, Check, X, Shuffle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import type { Flashcard } from "@/data/flashcards"

type LearnAnswerWith = "term" | "definition" | "both"

interface LearnSettings {
  answerWith: LearnAnswerWith
  questionCount: number
}

interface LearnSession {
  order: number[]
  currentIndex: number
  score: number
  showResult: boolean
  selectedIndex: number | null
  options: string[]
  answerType: "term" | "definition"
}

interface FlashcardsProps {
  flashcards: Flashcard[]
  showLearnMode?: boolean
  studyGuidePdfUrl?: string
}

function shuffle<T>(array: T[]): T[] {
  const out = [...array]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

function buildLearnOrder(flashcards: Flashcard[], questionCount: number): number[] {
  const indices = flashcards.map((_, i) => i)
  const shuffled = shuffle(indices)
  return shuffled.slice(0, Math.min(Math.max(1, questionCount), flashcards.length))
}

function buildOptions(
  correctCard: Flashcard,
  answerType: "term" | "definition",
  flashcards: Flashcard[]
): string[] {
  const correct = answerType === "term" ? correctCard.term : correctCard.definition
  const others = flashcards.filter((c) => c.id !== correctCard.id)
  const wrongPool = others.map((c) => (answerType === "term" ? c.term : c.definition))
  const uniqueWrong = Array.from(new Set(wrongPool.filter((t) => t !== correct)))
  const wrong = shuffle(uniqueWrong).slice(0, 3)
  return shuffle([correct, ...wrong])
}

export function Flashcards({ flashcards, showLearnMode = false, studyGuidePdfUrl }: FlashcardsProps) {
  const pdfUrl = studyGuidePdfUrl
  const [cardOrder, setCardOrder] = React.useState<number[]>(() =>
    flashcards.map((_, i) => i)
  )
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isFlipped, setIsFlipped] = React.useState(false)
  const [hasFlipped, setHasFlipped] = React.useState(false)
  const [studyMode, setStudyMode] = React.useState<"flashcards" | "learn">("flashcards")
  const [learnSettings, setLearnSettings] = React.useState<LearnSettings>({
    answerWith: "both",
    questionCount: 25,
  })
  const [learnSession, setLearnSession] = React.useState<LearnSession | null>(null)
  const [settingsOpen, setSettingsOpen] = React.useState(false)

  React.useEffect(() => {
    setCardOrder(flashcards.map((_, i) => i))
    setCurrentIndex(0)
  }, [flashcards.length])

  const currentCard = flashcards[cardOrder[currentIndex]]

  function handleNext() {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setIsFlipped(false)
      setHasFlipped(false)
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setIsFlipped(false)
      setHasFlipped(false)
    }
  }

  function handleFlip() {
    setIsFlipped(!isFlipped)
    setHasFlipped(true)
  }

  function handleReset() {
    setCurrentIndex(0)
    setIsFlipped(false)
    setHasFlipped(false)
  }

  function handleShuffle() {
    setCardOrder(shuffle([...cardOrder]))
    setCurrentIndex(0)
    setIsFlipped(false)
    setHasFlipped(false)
  }

  function startLearn() {
    const count = Math.max(1, Math.min(learnSettings.questionCount, flashcards.length))
    const order = buildLearnOrder(flashcards, count)
    if (order.length === 0) return
    const firstCardIndex = order[0]
    const firstCard = flashcards[firstCardIndex]
    const answerType: "term" | "definition" =
      learnSettings.answerWith === "both"
        ? Math.random() < 0.5
          ? "term"
          : "definition"
        : learnSettings.answerWith
    const options = buildOptions(firstCard, answerType, flashcards)
    setLearnSession({
      order,
      currentIndex: 0,
      score: 0,
      showResult: false,
      selectedIndex: null,
      options,
      answerType,
    })
    setStudyMode("learn")
  }

  function exitLearn() {
    setStudyMode("flashcards")
    setLearnSession(null)
  }

  function nextLearnQuestion() {
    if (!learnSession) return
    const { order, currentIndex: idx, score } = learnSession
    if (idx >= order.length - 1) {
      setLearnSession(null)
      setStudyMode("flashcards")
      return
    }
    const nextIdx = idx + 1
    const nextCardIndex = order[nextIdx]
    const nextCard = flashcards[nextCardIndex]
    const answerType: "term" | "definition" =
      learnSettings.answerWith === "both"
        ? Math.random() < 0.5
          ? "term"
          : "definition"
        : learnSettings.answerWith
    const options = buildOptions(nextCard, answerType, flashcards)
    setLearnSession({
      ...learnSession,
      order,
      currentIndex: nextIdx,
      showResult: false,
      selectedIndex: null,
      options,
      answerType,
      score,
    })
  }

  function handleLearnAnswer(optionIndex: number) {
    if (!learnSession || learnSession.showResult) return
    const cardIndex = learnSession.order[learnSession.currentIndex]
    const card = flashcards[cardIndex]
    const correctAnswer = learnSession.answerType === "term" ? card.term : card.definition
    const selected = learnSession.options[optionIndex]
    const correct = selected === correctAnswer
    setLearnSession({
      ...learnSession,
      showResult: true,
      selectedIndex: optionIndex,
      score: learnSession.score + (correct ? 1 : 0),
    })
  }

  // Auto-advance to next question 1s after a correct answer in Learn mode
  React.useEffect(() => {
    if (studyMode !== "learn" || !learnSession?.showResult || learnSession.selectedIndex === null) return
    const cardIndex = learnSession.order[learnSession.currentIndex]
    const card = flashcards[cardIndex]
    const correctAnswer = learnSession.answerType === "term" ? card.term : card.definition
    const isCorrect = learnSession.options[learnSession.selectedIndex] === correctAnswer
    if (!isCorrect) return
    const isLast = learnSession.currentIndex >= learnSession.order.length - 1
    const timer = window.setTimeout(() => {
      if (!isLast) nextLearnQuestion()
    }, 1000)
    return () => window.clearTimeout(timer)
  }, [studyMode, learnSession?.showResult, learnSession?.currentIndex, learnSession?.selectedIndex, learnSession?.order, learnSession?.options, learnSession?.answerType])

  // Keyboard navigation (only in flashcard mode)
  React.useEffect(() => {
    if (studyMode !== "flashcards") return
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1)
          setIsFlipped(false)
          setHasFlipped(false)
        }
      }
      if (e.key === "ArrowRight") {
        if (currentIndex < flashcards.length - 1) {
          setCurrentIndex(currentIndex + 1)
          setIsFlipped(false)
          setHasFlipped(false)
        }
      }
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault()
        setIsFlipped(!isFlipped)
        setHasFlipped(true)
      }
    }
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [studyMode, currentIndex, isFlipped, flashcards.length])

  // --- Learn mode UI ---
  if (studyMode === "learn" && learnSession) {
    const cardIndex = learnSession.order[learnSession.currentIndex]
    const card = flashcards[cardIndex]
    const isLastQuestion = learnSession.currentIndex >= learnSession.order.length - 1
    const correctAnswer = learnSession.answerType === "term" ? card.term : card.definition

    return (
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">
            Question {learnSession.currentIndex + 1} of {learnSession.order.length}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Score: {learnSession.score}
              {learnSession.showResult &&
                (learnSession.options[learnSession.selectedIndex!] === correctAnswer
                  ? " +1"
                  : " +0")}
            </span>
            <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 gap-2 transition-all duration-200 ease-out hover:opacity-80" aria-label="Learn settings">
                  <Settings2 className="h-4 w-4 shrink-0" />
                  <span className="text-sm">Menu</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Learn mode settings</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="grid gap-3">
                    <Label>Answer with</Label>
                    <div className="flex flex-col gap-2">
                      {(
                        [
                          { value: "term" as const, label: "Term (see definition, choose term)" },
                          { value: "definition" as const, label: "Definition (see term, choose definition)" },
                          { value: "both" as const, label: "Both (random each question)" },
                        ] as const
                      ).map(({ value, label }) => (
                        <label key={value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="answerWithLearn"
                            checked={learnSettings.answerWith === value}
                            onChange={() =>
                              setLearnSettings((s) => ({ ...s, answerWith: value }))
                            }
                            className="rounded-full border-input"
                          />
                          <span className="text-sm">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Label>Number of questions</Label>
                    <input
                      type="number"
                      min={1}
                      max={flashcards.length}
                      value={learnSettings.questionCount}
                      onChange={(e) => {
                        const v = e.target.valueAsNumber
                        if (!Number.isNaN(v)) {
                          setLearnSettings((s) => ({
                            ...s,
                            questionCount: Math.max(1, Math.min(v, flashcards.length)),
                          }))
                        }
                      }}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                    <p className="text-xs text-muted-foreground">
                      Max {flashcards.length} (all cards)
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Card className="shadow-lg transition-shadow duration-300 ease-out hover:shadow-xl">
          <CardContent className="p-6 sm:p-8">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
              {learnSession.answerType === "term" ? "Definition" : "Term"}
            </p>
            <p className="text-xl sm:text-2xl font-medium leading-relaxed">
              {learnSession.answerType === "term" ? card.definition : card.term}
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Choose the correct {learnSession.answerType === "term" ? "term" : "definition"}.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-3 sm:grid-cols-2">
          {learnSession.options.map((option, i) => {
            const isSelected = learnSession.selectedIndex === i
            const isCorrect = option === correctAnswer
            const showCorrect = learnSession.showResult && isCorrect
            const showWrong = learnSession.showResult && isSelected && !isCorrect
            const disabled = learnSession.showResult

            return (
              <button
                key={i}
                type="button"
                onClick={() => handleLearnAnswer(i)}
                disabled={disabled}
                className={`
                  rounded-xl border-2 p-4 text-left text-base font-medium transition-all duration-300 ease-out
                  disabled:cursor-default
                  ${!learnSession.showResult ? "hover:border-primary/50 hover:bg-muted/50 border-border" : ""}
                  ${showCorrect ? "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400" : ""}
                  ${showWrong ? "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400" : ""}
                  ${learnSession.showResult && !showCorrect && !showWrong ? "opacity-60 border-muted" : ""}
                `}
              >
                <span className="flex items-center gap-2">
                  {showCorrect && <Check className="h-5 w-5 shrink-0" />}
                  {showWrong && <X className="h-5 w-5 shrink-0" />}
                  {option}
                </span>
              </button>
            )
          })}
        </div>

        {learnSession.showResult && !isLastQuestion && learnSession.options[learnSession.selectedIndex!] !== correctAnswer && (
          <div className="flex justify-center pt-2">
            <Button size="lg" onClick={nextLearnQuestion} className="transition-all duration-200 ease-out">
              Next question
            </Button>
          </div>
        )}

        {learnSession.showResult && isLastQuestion && (
          <Card className="bg-muted/30 border-primary/20">
            <CardContent className="p-6 text-center">
              <p className="text-2xl font-bold text-foreground">
                You got {learnSession.score + (learnSession.options[learnSession.selectedIndex!] === correctAnswer ? 1 : 0)} out of {learnSession.order.length} correct.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <Button onClick={startLearn}>Study again</Button>
                <Button variant="outline" onClick={exitLearn} className="transition-all duration-200 ease-out">
                  Flashcards
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-center items-center gap-3 pt-4">
          <Button variant="outline" onClick={exitLearn} className="transition-all duration-200 ease-out">
            Flashcards
          </Button>
          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-6 h-12 text-base font-medium shadow-sm transition-all duration-200 ease-out hover:bg-accent hover:text-accent-foreground"
            >
              PDF
            </a>
          )}
        </div>
      </div>
    )
  }

  // --- Flashcard mode UI ---
  if (!currentCard) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No flashcards available for this cluster.
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-foreground">
            Card {currentIndex + 1} of {flashcards.length}
          </span>
          <div className="h-2 w-32 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${((currentIndex + 1) / flashcards.length) * 100}%` }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          {showLearnMode && (
            <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="h-9 gap-2 transition-all duration-200 ease-out hover:opacity-80" aria-label="Learn settings">
                  <Settings2 className="h-4 w-4 shrink-0" />
                  <span className="text-sm">Menu</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Learn mode settings</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="grid gap-3">
                    <Label>Answer with</Label>
                    <div className="flex flex-col gap-2">
                      {(
                        [
                          { value: "term" as const, label: "Term (see definition, choose term)" },
                          { value: "definition" as const, label: "Definition (see term, choose definition)" },
                          { value: "both" as const, label: "Both (random each question)" },
                        ] as const
                      ).map(({ value, label }) => (
                        <label key={value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="answerWith"
                            checked={learnSettings.answerWith === value}
                            onChange={() =>
                              setLearnSettings((s) => ({ ...s, answerWith: value }))
                            }
                            className="rounded-full border-input"
                          />
                          <span className="text-sm">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Label>Number of questions</Label>
                    <input
                      type="number"
                      min={1}
                      max={flashcards.length}
                      value={learnSettings.questionCount}
                      onChange={(e) => {
                        const v = e.target.valueAsNumber
                        if (!Number.isNaN(v)) {
                          setLearnSettings((s) => ({
                            ...s,
                            questionCount: Math.max(1, Math.min(v, flashcards.length)),
                          }))
                        }
                      }}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                    <p className="text-xs text-muted-foreground">
                      Max {flashcards.length} (all cards)
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
          <Button variant="ghost" size="sm" onClick={handleShuffle} className="h-9" aria-label="Shuffle deck">
            <Shuffle className="h-4 w-4 mr-2" />
            Shuffle
          </Button>
          <Button variant="ghost" size="sm" onClick={handleReset} className="h-9">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>

      <div className="relative" style={{ perspective: "1000px" }}>
        <div
          className="relative h-[500px] cursor-pointer"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onClick={handleFlip}
        >
          <Card
            className="absolute inset-0 h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
            }}
          >
            <CardContent className="h-full flex items-center justify-center p-8">
              <div className="text-center space-y-6 w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Term
                  </p>
                </div>
                <h2 className="text-4xl font-bold leading-tight">{currentCard.term}</h2>
                <p className="text-sm text-muted-foreground mt-6">
                  Click or press Space to flip
                </p>
              </div>
            </CardContent>
          </Card>
          <Card
            className="absolute inset-0 h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <CardContent className="h-full flex items-center justify-center p-8">
              <div className="text-center space-y-6 w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Definition
                  </p>
                </div>
                <p className="text-2xl leading-relaxed font-medium max-w-2xl mx-auto">
                  {currentCard.definition}
                </p>
                <p className="text-sm text-muted-foreground mt-6">
                  Click or press Space to flip
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <Button
          variant="outline"
          size="lg"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-5 w-5" />
          Previous
        </Button>

        {showLearnMode ? (
          <div className="flex items-center gap-3">
            <Button variant="outline" size="lg" onClick={startLearn} className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Learn
            </Button>
            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-6 h-12 text-base font-medium shadow-sm transition-all duration-200 ease-out hover:bg-accent hover:text-accent-foreground"
              >
                PDF
              </a>
            )}
          </div>
        ) : (
          <div className="flex gap-1.5 flex-1 justify-center max-w-md mx-4">
            {flashcards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsFlipped(false)
                  setHasFlipped(false)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary flex-1"
                    : "bg-muted hover:bg-muted-foreground/50 flex-1"
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        )}

        <Button
          variant="outline"
          size="lg"
          onClick={handleNext}
          disabled={currentIndex === flashcards.length - 1}
          className="flex items-center gap-2"
        >
          Next
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          Use arrow keys to navigate • Space or Enter to flip
          {showLearnMode && " • Use Learn for multiple choice practice"}
        </p>
      </div>
    </div>
  )
}
