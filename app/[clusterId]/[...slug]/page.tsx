import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { clusters } from "@/data/clusters"
import { Suspense } from "react"
import { InteractiveTest } from "@/components/interactive-test"

interface DynamicPageProps {
  params: {
    clusterId: string
    slug: string[]
  }
  searchParams: {
    event?: string
  }
}

// This handles routes like:
// /business-administration/roleplay-1
// /business-administration/test-1
// /business-administration/cheat-sheet.pdf (served from public folder)

export default async function DynamicPage({ params, searchParams }: DynamicPageProps) {
  const cluster = clusters.find((c) => c.id === params.clusterId)

  if (!cluster) {
    notFound()
  }

  const path = params.slug.join("/")
  const eventCode = searchParams.event
  
  // Handle roleplays - serve HTML files or PDFs
  if (path.startsWith("roleplay-")) {
    const roleplayNumber = path.replace("roleplay-", "")
    
    // If event code is provided, look in event-specific folder
    // Otherwise, fall back to root roleplays folder
    const pdfPath = eventCode
      ? `/${cluster.id}/roleplays/${eventCode}/roleplay-${roleplayNumber}.pdf`
      : `/${cluster.id}/roleplays/roleplay-${roleplayNumber}.pdf`
    const htmlPath = eventCode
      ? `/${cluster.id}/roleplays/${eventCode}/roleplay-${roleplayNumber}.html`
      : `/${cluster.id}/roleplays/roleplay-${roleplayNumber}.html`
    
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href={`/${cluster.id}`}>
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">{cluster.name} - Roleplay {roleplayNumber}</h1>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading roleplay...</div>}>
              {/* Embed PDF or HTML - PDFs work better with object tag */}
              <div className="w-full min-h-[600px] border rounded-lg overflow-hidden">
                <object
                  data={pdfPath}
                  type="application/pdf"
                  className="w-full h-full min-h-[600px]"
                  aria-label={`Roleplay ${roleplayNumber}`}
                >
                  <iframe
                    src={htmlPath}
                    className="w-full h-full min-h-[600px]"
                    title={`Roleplay ${roleplayNumber}`}
                  />
                </object>
              </div>
            </Suspense>
          </div>
        </main>
      </div>
    )
  }

  // Handle tests - serve interactive test pages
  if (path.startsWith("test-")) {
    const testNumber = path.replace("test-", "")
    
    // TODO: Load test data from a file or data structure
    // For now, return a placeholder
    // You'll need to create test data files similar to flashcards
    const sampleQuestions = [
      {
        id: "1",
        question: "What is the primary purpose of a mission statement?",
        options: [
          "To list company products",
          "To define the company's purpose and values",
          "To outline financial goals",
          "To describe the organizational structure",
        ],
        correctAnswer: 1,
        explanation: "A mission statement defines the company's purpose and values, serving as a guide for decision-making and strategy.",
      },
    ]

    return (
      <div className="min-h-screen bg-background">
        <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href={`/${cluster.id}`}>
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">{cluster.name} - Practice Test {testNumber}</h1>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading test...</div>}>
            <InteractiveTest 
              questions={sampleQuestions} 
              testName={`Practice Test ${testNumber}`}
            />
          </Suspense>
        </main>
      </div>
    )
  }

  notFound()
}

