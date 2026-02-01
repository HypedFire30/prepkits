import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Flashcards } from "@/components/flashcards";
import { TermsAccordion } from "@/components/terms-accordion";
import { emergingLeaderExamFlashcards } from "@/data/emerging-leader-exam-flashcards";
import { emergingLeaderExamDetails } from "@/data/emerging-leader-exam-details";
import { Suspense } from "react";

export default function EmergingLeaderExamFlashcardsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 transition-colors duration-200 ease-out">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Emerging Leader Exam</h1>
              <p className="text-sm text-muted-foreground">
                {emergingLeaderExamFlashcards.length} terms available
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main content: Quizlet-style — cards at top, list below */}
      <main className="container mx-auto px-4 py-8 transition-opacity duration-300 ease-out">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Flashcards at top */}
          <Suspense
            fallback={
              <div className="h-96 flex items-center justify-center">
                Loading flashcards...
              </div>
            }
          >
            <Flashcards
              flashcards={emergingLeaderExamFlashcards}
              showLearnMode
            />
          </Suspense>

          {/* Terms in this set — accordion with expandable study guide content */}
          <section className="border rounded-xl bg-muted/30 overflow-hidden transition-shadow duration-200 ease-out hover:shadow-sm">
            <div className="px-4 py-3 border-b bg-muted/50">
              <h2 className="text-lg font-semibold">
                Terms in this set ({emergingLeaderExamFlashcards.length})
              </h2>
              <p className="text-sm text-muted-foreground mt-0.5">
                Click a term to expand and read more from the study guide.
              </p>
            </div>
            <div className="max-h-[420px] overflow-y-auto">
              <TermsAccordion
                flashcards={emergingLeaderExamFlashcards}
                details={emergingLeaderExamDetails}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
