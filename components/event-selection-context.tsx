"use client"

import * as React from "react"
import type { DECAEvent } from "@/data/deca-events"

interface EventSelectionContextType {
  selectedEventCode: string | undefined
  setSelectedEventCode: (eventCode: string) => void
  events: DECAEvent[]
}

const EventSelectionContext = React.createContext<EventSelectionContextType | undefined>(undefined)

export function EventSelectionProvider({
  children,
  events,
  initialEventCode,
}: {
  children: React.ReactNode
  events: DECAEvent[]
  initialEventCode?: string
}) {
  // Initialize from URL param, sessionStorage, or default to first event
  const [selectedEventCode, setSelectedEventCode] = React.useState<string | undefined>(() => {
    // First check if there's an initial event code from URL
    if (initialEventCode && events.some((e) => e.eventCode === initialEventCode)) {
      return initialEventCode
    }
    // Then check sessionStorage
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('selectedEventCode')
      if (stored && events.some((e) => e.eventCode === stored)) {
        return stored
      }
    }
    // Default to first event
    return events.length > 0 ? events[0].eventCode : undefined
  })

  // Update sessionStorage when selection changes
  React.useEffect(() => {
    if (typeof window !== 'undefined' && selectedEventCode) {
      sessionStorage.setItem('selectedEventCode', selectedEventCode)
    }
  }, [selectedEventCode])

  // Update if initialEventCode changes (from URL)
  React.useEffect(() => {
    if (initialEventCode && events.some((e) => e.eventCode === initialEventCode)) {
      setSelectedEventCode(initialEventCode)
    }
  }, [initialEventCode, events])

  return (
    <EventSelectionContext.Provider
      value={{
        selectedEventCode,
        setSelectedEventCode,
        events,
      }}
    >
      {children}
    </EventSelectionContext.Provider>
  )
}

export function useEventSelection() {
  const context = React.useContext(EventSelectionContext)
  if (context === undefined) {
    throw new Error("useEventSelection must be used within EventSelectionProvider")
  }
  return context
}

