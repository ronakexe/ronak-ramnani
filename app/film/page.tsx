import Link from "next/link"

export default function FilmPage() {
  return (
    <div style={{ 
      position: "relative",
      backgroundColor: "#009E1A", 
      minHeight: "100vh", 
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Link href="/" style={{ position: "absolute", top: "20px", left: "20px", zIndex: 10 }}>
        <img src="/assets/scat_logo.svg" alt="SCAT Logo" style={{ width: "30px", height: "30px", cursor: "pointer" }} />
      </Link>
    </div>
  )
}
