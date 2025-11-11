import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  FileText,
  Video,
  BookOpen,
  ClipboardCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { BugReportButton } from "@/components/bug-report-button";
import { clusters } from "@/data/clusters";
import { flashcardSets } from "@/data/flashcards";
import { Flashcards } from "@/components/flashcards";
import { Suspense } from "react";
import { ClusterSummary } from "@/components/cluster-summary";
import { clusterSummaries } from "@/data/cluster-summaries";
import { decaEvents } from "@/data/deca-events";
import { EventSelectionProvider } from "@/components/event-selection-context";
import { EventSelector } from "@/components/event-selector";
import { RoleplaySelector } from "@/components/roleplay-selector";
import {
  getAvailableTests,
  getAvailableRoleplays,
} from "@/lib/get-content-files";

interface ClusterPageProps {
  params: {
    clusterId: string;
  };
  searchParams: {
    event?: string;
  };
}

function VideoEmbed({
  videoId,
  videoType = "youtube",
}: {
  videoId?: string;
  videoType?: "youtube" | "vimeo";
}) {
  if (!videoId || videoId === "YOUR_VIDEO_ID_HERE") {
    return (
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <Video className="h-12 w-12 mx-auto mb-2 opacity-50" />
          <p>Video will be embedded here</p>
          <p className="text-sm">Add video ID to cluster data</p>
        </div>
      </div>
    );
  }

  const embedUrl =
    videoType === "vimeo"
      ? `https://player.vimeo.com/video/${videoId}`
      : `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="aspect-video rounded-lg overflow-hidden bg-black">
      <iframe
        src={embedUrl}
        title="DECA Roleplay Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}

export default async function ClusterPage({ params, searchParams }: ClusterPageProps) {
  const cluster = clusters.find((c) => c.id === params.clusterId);

  if (!cluster) {
    notFound();
  }

  const flashcards = flashcardSets[cluster.id] || [];
  const events = decaEvents[cluster.id] || [];
  const initialEventCode = searchParams.event;

  // Dynamically get available tests and roleplays in parallel
  const [availableTestNumbers, ...roleplayResults] = await Promise.all([
    getAvailableTests(cluster.id),
    ...events.map((event) =>
      getAvailableRoleplays(cluster.id, event.eventCode).then((numbers) => ({
        eventCode: event.eventCode,
        numbers,
      }))
    ),
  ]);

  const tests = availableTestNumbers.map((num) => ({
    name: `Test ${num}`,
    path: `/${cluster.id}/test/${num}`,
  }));

  // Build roleplay data object
  const roleplayData: Record<string, number[]> = {};
  roleplayResults.forEach((result) => {
    roleplayData[result.eventCode] = result.numbers;
  });

  return (
    <EventSelectionProvider events={events} initialEventCode={initialEventCode}>
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
                <p className="text-sm text-muted-foreground">
                  {cluster.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BugReportButton />
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Main content - Udemy style layout */}
        <main className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left side - Video (2/3 width) - Scrollable */}
            <div className="lg:w-2/3 space-y-6">
              {/* Video Section */}
              <div>
                <Suspense
                  fallback={
                    <div className="aspect-video bg-muted rounded-lg animate-pulse" />
                  }
                >
                  <VideoEmbed
                    videoId={cluster.videoId}
                    videoType={cluster.videoType}
                  />
                </Suspense>
              </div>

              {/* Cluster Summary Section - Below video */}
              <div className="space-y-6">
                <ClusterSummary
                  clusterId={cluster.id}
                  points={clusterSummaries[cluster.id] || []}
                />

                {/* Event Selector */}
                <EventSelector clusterName={cluster.name} />
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
                        <p className="text-sm text-muted-foreground">
                          One-page reference guide
                        </p>
                      </div>
                    </div>
                    <Button asChild className="w-full" size="lg">
                      <Link href={`/${cluster.id}/cheat-sheet`}>
                        <FileText className="h-4 w-4 mr-2" />
                        View PDF
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Practice Roleplays */}
                <RoleplaySelector
                  clusterId={cluster.id}
                  roleplayData={roleplayData}
                />

              {/* Practice Tests */}
              <Card className="border-2">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <ClipboardCheck className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Practice Tests</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {tests.length > 0 ? (
                      tests.map((test, index) => (
                        <Button
                          key={index}
                          asChild
                          variant="outline"
                          className="w-full justify-start"
                        >
                          <Link href={test.path}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {test.name}
                          </Link>
                        </Button>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-2 col-span-2">
                        No practice tests available yet
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </EventSelectionProvider>
  );
}
