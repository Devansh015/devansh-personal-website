"use client"

import { useState, useEffect } from "react"

export default function TypewriterName() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [nameIndex, setNameIndex] = useState(0)

  const names = ["Devansh!", "Dev!"]
  const currentName = names[nameIndex]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentIndex < currentName.length) {
            setDisplayText(currentName.substring(0, currentIndex + 1))
            setCurrentIndex(currentIndex + 1)
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (currentIndex > 0) {
            setDisplayText(currentName.substring(0, currentIndex - 1))
            setCurrentIndex(currentIndex - 1)
          } else {
            setIsDeleting(false)
            setNameIndex((nameIndex + 1) % names.length)
            setCurrentIndex(0)
          }
        }
      },
      isDeleting ? 80 : 120,
    )

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, nameIndex, currentName])

  return (
    <span className="inline font-bold">
      {displayText}
      <span className="animate-pulse opacity-70">|</span>
    </span>
  )
}
