import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BugReportButton } from "@/components/bug-report-button"
import { clusters } from "@/data/clusters"
import { Suspense } from "react"

interface CheatSheetPageProps {
  params: {
    clusterId: string
  }
}

export default function CheatSheetPage({ params }: CheatSheetPageProps) {
  const cluster = clusters.find((c) => c.id === params.clusterId)

  if (!cluster) {
    notFound()
  }

  const pdfPath = `/clusters/${cluster.id}/cheat-sheet.pdf`

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
              <h1 className="text-2xl font-bold">Cheat Sheet</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <BugReportButton />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-4">
        <div className="max-w-6xl mx-auto">
          <Suspense fallback={<div className="h-[calc(100vh-12rem)] flex items-center justify-center">Loading cheat sheet...</div>}>
            {/* Embed PDF - using iframe with object fallback for maximum compatibility */}
            <div className="w-full h-[calc(100vh-12rem)] border rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={`${pdfPath}#toolbar=0`}
                className="w-full h-full"
                title="Cheat Sheet"
                style={{ border: 'none' }}
              />
            </div>
          </Suspense>
        </div>
      </main>
    </div>
  )
}

