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

  const totalBlocks = 16
  const filledBlocks = Math.round((progress.percentage / 100) * totalBlocks)
  const progressBar = "█".repeat(filledBlocks) + "░".repeat(totalBlocks - filledBlocks)

  return (
    <div className={`text-xs font-mono ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
      <span>degree progress [{progressBar}] {progress.percentage.toFixed(0)}%</span>
    </div>
  )
}
