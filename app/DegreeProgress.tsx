"use client"

import { useEffect, useState } from "react"

interface DegreeProgressProps {
  theme: "light" | "dark"
}

export default function DegreeProgress({ theme }: DegreeProgressProps) {
  const [progress, setProgress] = useState({ days: 0, total: 0, percentage: 0 })

  useEffect(() => {
    // Set your actual degree dates here
    const startDate = new Date("2023-09-01") // Your degree start date
    const endDate = new Date("2027-04-30") // Your expected graduation date
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

  // Create progress bar visualization
  const totalBlocks = 24
  const filledBlocks = Math.round((progress.percentage / 100) * totalBlocks)
  const progressBar = "█".repeat(filledBlocks) + "░".repeat(totalBlocks - filledBlocks)

  return (
    <div className={`text-sm ${theme === "dark" ? "text-[#d4d4d4]" : "text-gray-700"}`}>
      <div className="flex items-center gap-3">
        <span className="font-semibold min-w-fit">Degree Progress</span>
        <span className="font-mono">
          [{progressBar}]
        </span>
        <span className="font-mono">{progress.days} / {progress.total} days ({progress.percentage.toFixed(1)}%)</span>
      </div>
    </div>
  )
}
