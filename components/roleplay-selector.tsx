"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, ExternalLink, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { DECAEvent } from "@/data/deca-events"

import { useEventSelection } from "./event-selection-context"

interface RoleplaySelectorProps {
  clusterId: string
  roleplayData: Record<string, number[]>
}

export function RoleplaySelector({ clusterId, roleplayData }: RoleplaySelectorProps) {
  const { events, selectedEventCode, setSelectedEventCode } = useEventSelection()
  
  const selectedEvent = React.useMemo(() => {
    if (!selectedEventCode) return events[0] || null
    return events.find((e) => e.eventCode === selectedEventCode) || events[0] || null
  }, [selectedEventCode, events])

  // Generate roleplay paths for the selected event based on available files
  const roleplays = React.useMemo(() => {
    if (!selectedEvent) return []
    
    const availableNumbers = roleplayData[selectedEvent.eventCode] || []
    return availableNumbers.map((num) => ({
      name: `Roleplay ${num}`,
      path: `/${clusterId}/roleplay/${selectedEvent.eventCode}/${num}`,
      eventCode: selectedEvent.eventCode,
    }))
  }, [selectedEvent, clusterId, roleplayData])

  if (events.length === 0) {
    return null
  }

  return (
    <Card className="border-2">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-lg">Practice Roleplays</CardTitle>
        </div>
        
        {/* Event Selector Dropdown */}
        <div className="relative">
          <select
            value={selectedEvent?.id || ""}
            onChange={(e) => {
              const event = events.find((ev) => ev.id === e.target.value)
              if (event) {
                setSelectedEventCode(event.eventCode)
              }
            }}
            className="w-full p-3 border rounded-lg bg-background text-foreground appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-primary font-medium"
          >
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.eventCode} - {event.name}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {roleplays.length > 0 ? (
            roleplays.map((roleplay, index) => (
              <Button
                key={index}
                asChild
                variant="outline"
                className="w-full justify-start"
              >
                <Link href={roleplay.path}>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {roleplay.name}
                </Link>
              </Button>
            ))
          ) : (
            <p className="text-sm text-muted-foreground text-center py-2 col-span-2">
              No roleplays available for this event yet
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

