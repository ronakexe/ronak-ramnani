import Link from "next/link"

export default function ThingsPage() {
  return (
    <div style={{ 
      position: "relative",
      backgroundColor: "#0022FF", 
      minHeight: "100vh", 
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Link href="/" style={{ position: "absolute", top: "20px", left: "20px", zIndex: 10 }}>
        <img src="/assets/scat_logo.svg" alt="SCAT Logo" style={{ width: "30px", height: "30px", cursor: "pointer" }} />
      </Link>
      <h1 style={{ color: "white", fontSize: "48px" }}>Things</h1>
    </div>
  )
}
