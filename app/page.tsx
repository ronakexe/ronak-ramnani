"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useRef } from "react"

export default function Page() {
  const router = useRouter()
  const [expandingButton, setExpandingButton] = useState<string | null>(null)
  const [buttonPosition, setButtonPosition] = useState<{ x: number; y: number; width: number; height: number; color: string; expandedSize: number } | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, href: string, color: string) => {
    e.preventDefault()
    
    const button = buttonRefs.current[href]
    if (!button || typeof window === "undefined") return

    const rect = button.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Calculate the size needed to cover the entire viewport
    // We need to ensure the circle covers all corners of the viewport
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    
    // Calculate distances to all four corners
    const distToTopLeft = Math.sqrt(centerX ** 2 + centerY ** 2)
    const distToTopRight = Math.sqrt((viewportWidth - centerX) ** 2 + centerY ** 2)
    const distToBottomLeft = Math.sqrt(centerX ** 2 + (viewportHeight - centerY) ** 2)
    const distToBottomRight = Math.sqrt((viewportWidth - centerX) ** 2 + (viewportHeight - centerY) ** 2)
    
    // Find the maximum distance to any corner, then double it for the diameter
    // Add a small buffer to ensure full coverage
    const maxDistance = Math.max(distToTopLeft, distToTopRight, distToBottomLeft, distToBottomRight)
    const expandedSize = maxDistance * 2 + 100 // Add 100px buffer to ensure full coverage
    
    setButtonPosition({
      x: centerX,
      y: centerY,
      width: rect.width,
      height: rect.height,
      color: color,
      expandedSize: expandedSize
    })
    
    setExpandingButton(href)
    
    // Trigger expansion after a brief delay to ensure state is set
    setTimeout(() => {
      setIsExpanded(true)
    }, 10)
    
    // Navigate after animation completes (800ms to match transition duration)
    setTimeout(() => {
      router.push(href)
    }, 800)
  }

  return (
  <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", width: "100%", overflow: "hidden" }}>
    <Link href="/" style={{ position: "absolute", top: "20px", left: "20px", zIndex: 10 }}>
      <img src="/assets/scat_logo.svg" alt="SCAT Logo" style={{ width: "30px", height: "30px", cursor: "pointer", filter: "brightness(0)" }} />
    </Link>
    
    {/* Expanding overlay */}
    {expandingButton && buttonPosition && (
      <div
        className="expanding-overlay"
        style={{
          position: "fixed",
          left: `${buttonPosition.x}px`,
          top: `${buttonPosition.y}px`,
          width: isExpanded ? `${buttonPosition.expandedSize}px` : `${buttonPosition.width}px`,
          height: isExpanded ? `${buttonPosition.expandedSize}px` : `${buttonPosition.height}px`,
          backgroundColor: buttonPosition.color,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          transition: "width 0.8s ease-out, height 0.8s ease-out",
          pointerEvents: "none"
        }}
      />
    )}
    
    <div className="content-container">
      <h1 className="main-heading">Ronak Ramnani</h1>
      <div className="button-container">
        <button
          ref={(el) => { buttonRefs.current["/projects"] = el }}
          onClick={(e) => handleButtonClick(e, "/projects", "#EB0000")}
          className={expandingButton === "/projects" ? "expanding" : ""}
          style={{
            padding: "0",
            backgroundColor: "#EB0000",
            color: "white",
            border: "none",
            borderRadius: "50%",
            fontWeight: "600",
            fontSize: "25px",
            cursor: "pointer",
            height: "50px",
            width: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 1px 2px rgba(16,30,54,0.10)",
            transition: "opacity 0.3s ease-out"
          }}
        >
          <span className={expandingButton === "/projects" ? "fade-out" : ""}>projects</span>
        </button>
        <button
          ref={(el) => { buttonRefs.current["/film"] = el }}
          onClick={(e) => handleButtonClick(e, "/film", "#009E1A")}
          className={expandingButton === "/film" ? "expanding" : ""}
          style={{
            padding: "0",
            backgroundColor: "#009E1A",
            color: "white",
            border: "none",
            borderRadius: "50%",
            fontWeight: "600",
            fontSize: "25px",
            cursor: "pointer",
            height: "50px",
            width: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 1px 2px rgba(16,30,54,0.10)",
            transition: "opacity 0.3s ease-out"
          }}
        >
          <span className={expandingButton === "/film" ? "fade-out" : ""}>film</span>
        </button>
        <button
          ref={(el) => { buttonRefs.current["/things"] = el }}
          onClick={(e) => handleButtonClick(e, "/things", "#0022FF")}
          className={expandingButton === "/things" ? "expanding" : ""}
          style={{
            padding: "0",
            backgroundColor: "#0022FF",
            color: "white",
            border: "none",
            borderRadius: "50%",
            fontWeight: "600",
            fontSize: "25px",
            cursor: "pointer",
            height: "50px",
            width: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 1px 2px rgba(16,30,54,0.10)",
            transition: "opacity 0.3s ease-out"
          }}
        >
          <span className={expandingButton === "/things" ? "fade-out" : ""}>things</span>
        </button>
      </div>
    </div>
  </div>
  )
}