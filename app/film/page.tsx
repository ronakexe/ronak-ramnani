"use client"

import Link from "next/link"
import { films } from "@/lib/films"
import Image from "next/image"

export default function FilmPage() {
  return (
    <div style={{ 
      position: "relative",
      backgroundColor: "#009E1A", 
      minHeight: "100vh", 
      width: "100%",
      padding: "20px"
    }}>
      <Link href="/" style={{ position: "absolute", top: "20px", left: "20px", zIndex: 10 }}>
        <img src="/assets/scat_logo.svg" alt="SCAT Logo" style={{ width: "30px", height: "30px", cursor: "pointer" }} />
      </Link>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 200px)",
        gap: "50px",
        width: "100%",
        paddingTop: "60px"
      }}>
        {films.map((film) => (
          <Link 
            key={film.slug} 
            href={`/film/${film.slug}`}
            style={{
              display: "block",
              width: "200px",
              cursor: "pointer",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"
            }}
          >
            <Image
              src={film.iconPath}
              alt={film.title}
              width={200}
              height={0}
              style={{ width: "200px", height: "auto" }}
              unoptimized
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
