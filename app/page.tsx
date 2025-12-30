"use client"

import Link from "next/link"
import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroupContent, SidebarGroup} from "@/components/ui/sidebar"

export default function Page() {
  return (
  <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", width: "100%" }}>
    <Link href="/" style={{ position: "absolute", top: "20px", left: "20px", zIndex: 10 }}>
      <img src="/assets/scat_logo.svg" alt="SCAT Logo" style={{ width: "30px", height: "30px", cursor: "pointer", filter: "brightness(0)" }} />
    </Link>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <h1 style={{ fontSize: "100px", textAlign: "left", marginBottom: "2rem", fontWeight: "bold" }}>Ronak Ramnani</h1>
      <div className="button-container">
    <Link href="/projects" style={{ textDecoration: "none" }}>
      <button
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
          boxShadow: "0 1px 2px rgba(16,30,54,0.10)"
        }}
      >
        projects
      </button>
    </Link>
    <Link href="/film" style={{ textDecoration: "none" }}>
      <button
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
          boxShadow: "0 1px 2px rgba(16,30,54,0.10)"
        }}
      >
        film
      </button>
    </Link>
    <Link href="/things" style={{ textDecoration: "none" }}>
      <button
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
          boxShadow: "0 1px 2px rgba(16,30,54,0.10)"
        }}
      >
        things
      </button>
    </Link>
      </div>
    </div>
  </div>
  )
}