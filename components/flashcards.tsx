"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Flashcard } from "@/data/flashcards"

interface FlashcardsProps {
  flashcards: Flashcard[]
}

export function Flashcards({ flashcards }: FlashcardsProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isFlipped, setIsFlipped] = React.useState(false)
  const [hasFlipped, setHasFlipped] = React.useState(false)

  const currentCard = flashcards[currentIndex]

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

  // Keyboard navigation
  React.useEffect(() => {
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
  }, [currentIndex, isFlipped, flashcards.length])

  if (!currentCard) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No flashcards available for this cluster.
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Progress indicator */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Card {currentIndex + 1} of {flashcards.length}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleReset}
          className="h-8"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      {/* Flashcard */}
      <div className="relative" style={{ perspective: "1000px" }}>
        <Card
          className="h-96 cursor-pointer transition-transform duration-600 ease-in-out"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.6s ease-in-out",
          }}
          onClick={handleFlip}
        >
          <CardContent className="h-full flex items-center justify-center p-8">
            <div
              className="absolute inset-0 flex items-center justify-center p-8 backface-hidden"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <div className="text-center space-y-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Term
                </p>
                <h2 className="text-3xl font-bold">{currentCard.term}</h2>
                <p className="text-sm text-muted-foreground mt-4">
                  Click or press Space to flip
                </p>
              </div>
            </div>
            <div
              className="absolute inset-0 flex items-center justify-center p-8 backface-hidden"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="text-center space-y-4">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Definition
                </p>
                <p className="text-xl leading-relaxed">{currentCard.definition}</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Click or press Space to flip
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between">
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

        <div className="flex gap-2">
          {flashcards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsFlipped(false)
                setHasFlipped(false)
              }}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-muted hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

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

      {/* Keyboard shortcuts hint */}
      <div className="text-center text-xs text-muted-foreground">
        <p>
          Use arrow keys to navigate • Space or Enter to flip
        </p>
      </div>
    </div>
  )
}

