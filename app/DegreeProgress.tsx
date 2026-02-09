"use client"

import { useEffect, useState } from "react"

interface DegreeProgressProps {
  theme: "light" | "dark"
}

export default function DegreeProgress({ theme }: DegreeProgressProps) {
  const [progress, setProgress] = useState({ days: 0, total: 0, percentage: 0 })

  useEffect(() => {
    const startDate = new Date("2023-09-01")
    const endDate = new Date("2027-04-30")
    const today = new Date()

    const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    const daysPassed = Math.ceil((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    const percentage = Math.min((daysPassed / totalDays) * 100, 100)

    setProgress({
      days: Math.max(daysPassed, 0),
      total: totalDays,
      percentage: Math.max(percentage, 0),
    })
  }, [])

  return (
    <div className={`text-xs font-mono ${theme === "dark" ? "text-white" : "text-black"}`}>
      <span className="inline-flex items-center gap-1">
        <span>degree progress</span>
        <span>[</span>
        <span 
          className="inline-flex h-2.5 overflow-hidden rounded-sm"
          style={{ width: '96px' }}
        >
          <span 
            className={`h-full ${theme === "dark" ? "bg-white" : "bg-black"}`}
            style={{ width: `${progress.percentage}%` }}
          />
          <span 
            className={`h-full ${theme === "dark" ? "bg-gray-700" : "bg-gray-300"}`}
            style={{ width: `${100 - progress.percentage}%` }}
          />
        </span>
        <span>]</span>
        <span>{progress.percentage.toFixed(0)}%</span>
      </span>
    </div>
  )
}
