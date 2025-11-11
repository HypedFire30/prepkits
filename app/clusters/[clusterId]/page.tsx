import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, FileText, Video, BookOpen, ClipboardCheck, StickyNote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { clusters } from "@/data/clusters"
import { flashcardSets } from "@/data/flashcards"
import { Flashcards } from "@/components/flashcards"
import { Suspense } from "react"
import { ClusterSummary } from "@/components/cluster-summary"
import { clusterSummaries } from "@/data/cluster-summaries"

interface ClusterPageProps {
  params: {
    clusterId: string
  }
}

function VideoEmbed({ videoId }: { videoId?: string }) {
  if (!videoId) {
    return (
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <Video className="h-12 w-12 mx-auto mb-2 opacity-50" />
          <p>Video will be embedded here</p>
          <p className="text-sm">Add YouTube video ID to cluster data</p>
        </div>
      </div>
    )
  }

  return (
    <div className="aspect-video rounded-lg overflow-hidden bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="DECA Roleplay Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  )
}

export default function ClusterPage({ params }: ClusterPageProps) {
  const cluster = clusters.find((c) => c.id === params.clusterId)

  if (!cluster) {
    notFound()
  }

  const flashcards = flashcardSets[cluster.id] || []

  // 5 roleplays and 5 tests for each cluster
  const roleplays = [
    { name: "Roleplay 1", path: `/clusters/${cluster.id}/roleplays/roleplay-1.html` },
    { name: "Roleplay 2", path: `/clusters/${cluster.id}/roleplays/roleplay-2.html` },
    { name: "Roleplay 3", path: `/clusters/${cluster.id}/roleplays/roleplay-3.html` },
    { name: "Roleplay 4", path: `/clusters/${cluster.id}/roleplays/roleplay-4.html` },
    { name: "Roleplay 5", path: `/clusters/${cluster.id}/roleplays/roleplay-5.html` },
  ]

  const tests = [
    { name: "Practice Test 1", path: `/clusters/${cluster.id}/tests/test-1.html` },
    { name: "Practice Test 2", path: `/clusters/${cluster.id}/tests/test-2.html` },
    { name: "Practice Test 3", path: `/clusters/${cluster.id}/tests/test-3.html` },
    { name: "Practice Test 4", path: `/clusters/${cluster.id}/tests/test-4.html` },
    { name: "Practice Test 5", path: `/clusters/${cluster.id}/tests/test-5.html` },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">{cluster.name}</h1>
              <p className="text-sm text-muted-foreground">{cluster.description}</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main content - Udemy style layout */}
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side - Video (2/3 width) - Scrollable */}
          <div className="lg:w-2/3 space-y-6">
            {/* Video Section */}
            <div>
              <Suspense fallback={<div className="aspect-video bg-muted rounded-lg animate-pulse" />}>
                <VideoEmbed videoId={cluster.videoId} />
              </Suspense>
            </div>

            {/* Cluster Summary Section - Below video */}
            <div>
              <ClusterSummary 
                clusterId={cluster.id} 
                points={clusterSummaries[cluster.id] || []} 
              />
            </div>
          </div>

          {/* Right side - Sidebar (1/3 width) - Sticky */}
          <div className="lg:w-1/3">
            <div className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto space-y-4 pb-4">
              {/* Cheat Sheet */}
              <Card className="border-2">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Cheat Sheet</h3>
                      <p className="text-sm text-muted-foreground">One-page reference guide</p>
                    </div>
                  </div>
                  <Button asChild className="w-full" size="lg">
                    <a
                      href={`/clusters/${cluster.id}/cheat-sheet.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      View PDF
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Flashcards */}
              <Card className="border-2">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Flashcards</h3>
                      <p className="text-sm text-muted-foreground">
                        {flashcards.length} interactive cards
                      </p>
                    </div>
                  </div>
                  <Button asChild className="w-full" size="lg">
                    <Link href={`/clusters/${cluster.id}/flashcards`}>
                      <BookOpen className="h-4 w-4 mr-2" />
                      Study Flashcards
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Practice Roleplays */}
              <Card className="border-2">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Practice Roleplays</h3>
                  </div>
                  <div className="space-y-2">
                    {roleplays.map((roleplay, index) => (
                      <Button
                        key={index}
                        asChild
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <a
                          href={roleplay.path}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {roleplay.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Practice Tests */}
              <Card className="border-2">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <ClipboardCheck className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Practice Tests</h3>
                  </div>
                  <div className="space-y-2">
                    {tests.map((test, index) => (
                      <Button
                        key={index}
                        asChild
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <a
                          href={test.path}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {test.name}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
