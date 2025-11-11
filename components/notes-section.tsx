"use client"

import * as React from "react"
import { StickyNote, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface NotesSectionProps {
  clusterId: string
}

export function NotesSection({ clusterId }: NotesSectionProps) {
  const [notes, setNotes] = React.useState("")
  const [isSaving, setIsSaving] = React.useState(false)

  // Load notes from localStorage on mount
  React.useEffect(() => {
    const savedNotes = localStorage.getItem(`notes-${clusterId}`)
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [clusterId])

  // Auto-save notes with debounce
  React.useEffect(() => {
    if (notes === "") return
    
    const timer = setTimeout(() => {
      setIsSaving(true)
      localStorage.setItem(`notes-${clusterId}`, notes)
      setTimeout(() => {
        setIsSaving(false)
      }, 300)
    }, 1000) // Save 1 second after user stops typing

    return () => clearTimeout(timer)
  }, [notes, clusterId])

  function handleSave() {
    setIsSaving(true)
    localStorage.setItem(`notes-${clusterId}`, notes)
    setTimeout(() => {
      setIsSaving(false)
    }, 500)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <StickyNote className="h-5 w-5 text-primary" />
          <CardTitle>Notes</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Take notes while watching the video or studying. Your notes will be saved automatically..."
          className="w-full min-h-[200px] p-4 border rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-background text-foreground"
        />
        <div className="flex justify-end">
          <Button
            onClick={handleSave}
            disabled={isSaving}
            size="sm"
          >
            <Save className="h-4 w-4 mr-2" />
            {isSaving ? "Saving..." : "Save Notes"}
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            Notes are saved automatically and stored locally in your browser.
          </p>
          {isSaving && (
            <span className="text-xs text-muted-foreground">Saving...</span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

