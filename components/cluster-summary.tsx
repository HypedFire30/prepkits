"use client"

import * as React from "react"
import { BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ClusterSummaryProps {
  clusterId: string
  points: string[]
}

export function ClusterSummary({ clusterId, points }: ClusterSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <CardTitle>Cluster Overview</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span className="text-sm sm:text-base text-foreground leading-relaxed">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

