"use client"

import * as React from "react"
import { Bug } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BugReportButton() {
  const handleClick = () => {
    // Get current page info
    const currentUrl = typeof window !== "undefined" ? window.location.href : ""
    const currentPath = typeof window !== "undefined" ? window.location.pathname : ""
    const timestamp = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "long",
    })

    // Create email template
    const subject = encodeURIComponent("Bug Report - Oregon DECA Prep Kits")
    const body = encodeURIComponent(
      `Bug Report Details:\n\n` +
        `Timestamp: ${timestamp}\n` +
        `Page URL: ${currentUrl}\n` +
        `Page Path: ${currentPath}\n\n` +
        `Description:\n[Please describe the bug you encountered here]\n\n` +
        `---\n` +
        `Please provide as much detail as possible about the issue you encountered.`
    )

    // Open email client
    const mailtoLink = `mailto:careerdevelopmentvp@oregondeca.org?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9"
      onClick={handleClick}
      title="Report a bug"
    >
      <Bug className="h-4 w-4" />
      <span className="sr-only">Report a bug</span>
    </Button>
  )
}

