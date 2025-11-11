import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { BugReportButton } from "@/components/bug-report-button"
import { clusters } from "@/data/clusters"
import { decaEvents } from "@/data/deca-events"
import { Suspense } from "react"
import { getRoleplayDirName } from "@/lib/get-roleplay-dir"

interface RoleplayPageProps {
  params: {
    clusterId: string
    eventCode: string
    number: string
  }
}

export default async function RoleplayPage({ params }: RoleplayPageProps) {
  const cluster = clusters.find((c) => c.id === params.clusterId)

  if (!cluster) {
    notFound()
  }

  const event = decaEvents[cluster.id]?.find((e) => e.eventCode === params.eventCode)

  if (!event) {
    notFound()
  }

  // Get the actual directory name (handles trailing spaces, case differences)
  const actualDirName = await getRoleplayDirName(cluster.id, params.eventCode)
  
  if (!actualDirName) {
    notFound()
  }

  const roleplayNumber = params.number
  const pdfPath = `/clusters/${cluster.id}/roleplays/${actualDirName}/roleplay-${roleplayNumber}.pdf`

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={`/${cluster.id}?event=${params.eventCode}`}>
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">
                {event.name} ({event.eventCode}) — Roleplay {roleplayNumber}
              </h1>
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
          <Suspense fallback={<div className="h-[calc(100vh-12rem)] flex items-center justify-center">Loading roleplay...</div>}>
            {/* Embed PDF - using iframe for maximum compatibility */}
            <div className="w-full h-[calc(100vh-12rem)] border rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={`${pdfPath}#toolbar=0`}
                className="w-full h-full"
                title={`${event.name} (${event.eventCode}) — Roleplay ${roleplayNumber}`}
                style={{ border: 'none' }}
              />
            </div>
          </Suspense>
        </div>
      </main>
    </div>
  )
}

