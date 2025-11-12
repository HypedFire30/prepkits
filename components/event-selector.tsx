"use client"

import * as React from "react"
import { Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useEventSelection } from "./event-selection-context"

interface EventSelectorProps {
  clusterName: string
}

export function EventSelector({ clusterName }: EventSelectorProps) {
  const { events, setSelectedEventCode } = useEventSelection()

  if (events.length === 0) {
    return null
  }

  const handleEventCodeClick = (eventCode: string) => {
    setSelectedEventCode(eventCode)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="h-5 w-5 text-primary" />
          Competitive Roleplay Events
        </CardTitle>
        <CardDescription>
          Available roleplay events in {clusterName}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((event) => (
            <Card key={event.id} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base font-semibold leading-tight">
                    {event.name}
                  </CardTitle>
                  {event.eventCode && (
                    <button
                      onClick={() => handleEventCodeClick(event.eventCode)}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded whitespace-nowrap hover:bg-primary/20 transition-colors cursor-pointer"
                      title="Click to select this event in Practice Roleplays"
                    >
                      {event.eventCode}
                    </button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
