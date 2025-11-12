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
        <Button
          variant="ghost"
          size="sm"
          onClick={handleReset}
          className="h-9"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      {/* Flashcard */}
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
          {/* Front side - Term */}
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
          
          {/* Back side - Definition */}
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
                <p className="text-2xl leading-relaxed font-medium max-w-2xl mx-auto">{currentCard.definition}</p>
                <p className="text-sm text-muted-foreground mt-6">
                  Click or press Space to flip
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation buttons */}
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
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          Use arrow keys to navigate • Space or Enter to flip
        </p>
      </div>
    </div>
  )
}

