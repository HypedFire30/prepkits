import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BugReportButton } from "@/components/bug-report-button"
import { clusters } from "@/data/clusters"
import { Suspense } from "react"

interface TestPageProps {
  params: {
    clusterId: string
    number: string
  }
}

export default function TestPage({ params }: TestPageProps) {
  const cluster = clusters.find((c) => c.id === params.clusterId)

  if (!cluster) {
    notFound()
  }

  const testNumber = params.number
  const pdfPath = `/clusters/${cluster.id}/tests/test-${testNumber}.pdf`
  const htmlPath = `/clusters/${cluster.id}/tests/test-${testNumber}.html`

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
              <h1 className="text-2xl font-bold">{cluster.name} — Test {testNumber}</h1>
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
          <Suspense fallback={<div className="h-[calc(100vh-12rem)] flex items-center justify-center">Loading test...</div>}>
            {/* Embed PDF or HTML - PDFs work better with object tag */}
            <div className="w-full h-[calc(100vh-12rem)] border rounded-lg overflow-hidden shadow-lg">
              <object
                data={pdfPath}
                type="application/pdf"
                className="w-full h-full"
                aria-label={`Practice Test ${testNumber}`}
              >
                <iframe
                  src={htmlPath}
                  className="w-full h-full"
                  title={`Practice Test ${testNumber}`}
                />
              </object>
            </div>
          </Suspense>
        </div>
      </main>
    </div>
  )
}

