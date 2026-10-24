"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Orbit } from "lucide-react"
import { useTheme } from "./ThemeProvider"

export default function Interstellar() {
  const { theme } = useTheme()
  const [visible, setVisible] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [replay, setReplay] = useState(0)

  useEffect(() => () => {
    if (timeout.current) clearTimeout(timeout.current)
  }, [])

  useEffect(() => {
    if (theme !== "dark") {
      if (timeout.current) clearTimeout(timeout.current)
      setVisible(false)
    }
  }, [theme])

  if (theme !== "dark") return null

  function reveal() {
    if (timeout.current) clearTimeout(timeout.current)
    setReplay((value) => value + 1)
    setVisible(true)
    timeout.current = setTimeout(() => setVisible(false), 10000)
  }

  return (
    <>
      <button
        type="button"
        onClick={reveal}
        aria-label="Reveal an Interstellar-inspired black hole"
        title="Somewhere beyond the stars"
        className="ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full align-middle text-gray-500 transition-colors hover:text-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400 dark:hover:text-amber-200"
      >
        <Orbit className="h-4 w-4" strokeWidth={1.4} aria-hidden="true" />
      </button>
      <span className="sr-only" role="status">{visible ? "Gargantua appears on the right as Endurance flies toward it from the left." : ""}</span>
      <div className={`interstellar-overlay ${visible ? "is-visible" : ""}`} aria-hidden="true">
        <div key={replay} className="interstellar-scene">
          <div className="interstellar-viewport">
            <Image
              src="/images/interstellar/gargantua.webp"
              alt=""
              width={1536}
              height={1024}
              sizes="(max-width: 1280px) 72vw, 920px"
              className="interstellar-art"
            />
            <div className="endurance-flight">
              <Image
                src="/images/interstellar/endurance.webp"
                alt=""
                width={900}
                height={741}
                sizes="(max-width: 640px) 110px, 220px"
                className="endurance-ship"
              />
            </div>
          </div>
          <div className="interstellar-caption">GARGANTUA<span>somewhere beyond the stars</span></div>
        </div>
      </div>
    </>
  )
}
