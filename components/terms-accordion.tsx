"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import type { Flashcard } from "@/data/flashcards"
import { cn } from "@/lib/utils"

interface TermsAccordionProps {
  flashcards: Flashcard[]
  details: string[]
}

export function TermsAccordion({ flashcards, details }: TermsAccordionProps) {
  const [expandedId, setExpandedId] = React.useState<string | null>(null)

  return (
    <ul className="divide-y divide-border">
      {flashcards.map((card, index) => {
        const detail = details[index]
        const isExpanded = expandedId === card.id

        return (
          <li
            key={card.id}
            className={cn(
              "transition-colors duration-200 ease-out",
              isExpanded && "bg-muted/50"
            )}
          >
            <button
              type="button"
              onClick={() => setExpandedId(isExpanded ? null : card.id)}
              className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left hover:bg-muted/40 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset rounded-none"
              aria-expanded={isExpanded}
            >
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground">{card.term}</p>
                <p className="text-sm text-muted-foreground mt-1">{card.definition}</p>
              </div>
              <span
                className={cn(
                  "mt-1 shrink-0 text-muted-foreground transition-transform duration-300 ease-out",
                  isExpanded && "rotate-180"
                )}
                aria-hidden
              >
                <ChevronDown className="h-5 w-5" />
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isExpanded ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="px-4 pb-4 pt-0">
                  <div className="rounded-lg border border-border/60 bg-background/80 p-4 text-sm leading-relaxed text-muted-foreground">
                    {detail}
                  </div>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
