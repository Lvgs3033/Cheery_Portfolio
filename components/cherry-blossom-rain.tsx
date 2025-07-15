"use client"

import { useEffect, useRef } from "react"

/**
 * Renders an always-running cherry-blossom “rain”.
 *  – Creates ~40 span elements containing the 🌸 emoji
 *  – Each blossom receives its own animation-duration, delay, size and
 *    horizontal starting position so the fall looks organic.
 *  – Pure CSS keyframes are injected once via a <style jsx global> tag.
 */
export default function CherryBlossomRain() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Inject the keyframes & utility class only once
    if (document.getElementById("cherry-rain-styles")) return
    const style = document.createElement("style")
    style.id = "cherry-rain-styles"
    style.innerHTML = `
      @keyframes cherryFall {
        0%   { transform: translateY(-10vh) rotate(0deg);   opacity: 0; }
        10%  { opacity: 1; }
        100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
      }
      .blossom {
        position: absolute;
        top: -10vh;
        pointer-events: none;
        animation-name: cherryFall;
        animation-iteration-count: infinite;
        will-change: transform;
      }
    `
    document.head.appendChild(style)
  }, [])

  // Generate the petals only once on first render
  const petals = Array.from({ length: 40 }).map((_, i) => {
    const size = 12 + Math.random() * 20 // px
    const left = Math.random() * 100 // vw
    const duration = 6 + Math.random() * 6 // s
    const delay = Math.random() * -20 // s (negative → already mid-fall)
    return (
      <span
        key={i}
        className="blossom select-none"
        style={{
          left: `${left}vw`,
          fontSize: `${size}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      >
        🌸
      </span>
    )
  })

  return (
    <div ref={containerRef} aria-hidden className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {petals}
    </div>
  )
}
