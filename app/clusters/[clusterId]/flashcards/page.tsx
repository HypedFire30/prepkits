import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { clusters } from "@/data/clusters"
import { flashcardSets } from "@/data/flashcards"
import { Flashcards } from "@/components/flashcards"
import { Suspense } from "react"

interface FlashcardsPageProps {
  params: {
    clusterId: string
  }
}

export default function FlashcardsPage({ params }: FlashcardsPageProps) {
  const cluster = clusters.find((c) => c.id === params.clusterId)

  if (!cluster) {
    notFound()
  }

  const flashcards = flashcardSets[cluster.id] || []

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={`/clusters/${cluster.id}`}>
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">{cluster.name} - Flashcards</h1>
              <p className="text-sm text-muted-foreground">
                {flashcards.length} cards available
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading flashcards...</div>}>
            <Flashcards flashcards={flashcards} />
          </Suspense>
        </div>
      </main>
    </div>
  )
}

