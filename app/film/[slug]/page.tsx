"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { getFilmBySlug, films } from "@/lib/films"
import { use } from "react"
import Script from "next/script"

interface FilmDetailPageProps {
  params: Promise<{ slug: string }>
}

export default function FilmDetailPage({ params }: FilmDetailPageProps) {
  const { slug } = use(params)
  const film = getFilmBySlug(slug)

  if (!film) {
    notFound()
  }

  return (
    <div style={{
      position: "relative",
      backgroundColor: "#000000",
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Header with logo */}
      <Link href="/" style={{ position: "absolute", top: "20px", left: "20px", zIndex: 10 }}>
        <img src="/assets/scat_logo.svg" alt="SCAT Logo" style={{ width: "30px", height: "30px", cursor: "pointer" }} />
      </Link>

      {/* Main content area */}
      <div style={{
        flex: 1,
        padding: "60px 40px 40px 40px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}>
        {/* Title */}
        <h1 style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "white",
          margin: 0,
        }}>
          {film.title}
        </h1>

        {/* Video and description section */}
        <div style={{
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
        }}>
          {/* Video embed */}
          <div style={{
            flex: "1 1 60%",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            aspectRatio: "16/9",
            borderRadius: "8px",
            overflow: "hidden",
            minWidth: 0,
          }}>
            <VideoEmbed videoId={film.videoId} videoType={film.videoType} />
          </div>

          {/* Description */}
          <div style={{
            flex: "1 1 40%",
            color: "white",
            fontSize: "16px",
            lineHeight: "1.6",
            whiteSpace: "pre-wrap",
          }}>
            {film.description}
          </div>
        </div>

        {/* Additional content area */}
        {film.additionalContent && (
          <div style={{
            width: "100%",
            marginTop: "20px",
          }}>
            {film.additionalContent}
          </div>
        )}
      </div>

      {/* Bottom bar - simplified for now */}
      <div style={{
        position: "relative",
        width: "100%",
        padding: "40px",
        backgroundColor: "#009E1A",
      }}>
        <div style={{
          display: "flex",
          gap: "30px",
          overflowX: "auto",
          overflowY: "hidden",
        }}>
          {films.map((film) => (
            <Link
              key={film.slug}
              href={`/film/${film.slug}`}
              style={{
                flexShrink: 0,
                width: "180px",
                cursor: "pointer",
                opacity: film.slug === slug ? 1 : 0.8,
                transition: "opacity 0.2s ease, transform 0.2s ease",
                transform: film.slug === slug ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={(e) => {
                if (film.slug !== slug) {
                  e.currentTarget.style.opacity = "1"
                  e.currentTarget.style.transform = "scale(1.05)"
                }
              }}
              onMouseLeave={(e) => {
                if (film.slug !== slug) {
                  e.currentTarget.style.opacity = "0.8"
                  e.currentTarget.style.transform = "scale(1)"
                }
              }}
            >
              <img
                src={film.iconPath}
                alt={film.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "4px",
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// Video embed component
function VideoEmbed({ videoId, videoType }: { videoId?: string; videoType?: 'youtube' | 'vimeo' }) {
  if (!videoId || !videoType) {
    return (
      <div style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: "18px",
      }}>
        Video placeholder
      </div>
    );
  }

  if (videoType === 'youtube') {
    return (
      <div style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?si=OSQUWsTmow6tsBuY`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "8px",
          }}
        />
      </div>
    );
  }

  if (videoType === 'vimeo') {
    return (
      <>
        <div style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}>
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "8px",
            }}
          />
        </div>
        <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />
      </>
    );
  }

  return null;
}

