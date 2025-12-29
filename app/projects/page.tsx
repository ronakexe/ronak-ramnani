import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div style={{ 
      position: "relative",
      backgroundColor: "#EB0000", 
      minHeight: "100vh", 
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Link href="/" style={{ position: "absolute", top: "20px", left: "20px", zIndex: 10 }}>
        <img src="/assets/scat_logo.svg" alt="SCAT Logo" style={{ width: "40px", height: "40px", cursor: "pointer" }} />
      </Link>
      <h1 style={{ color: "white", fontSize: "48px" }}>Projects</h1>
    </div>
  )
}
