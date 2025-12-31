import Link from "next/link"

export default function ThingsPage() {
  return (
    <div style={{ 
      position: "relative",
      backgroundColor: "#0022FF", 
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
        gridAutoRows: "200px",
        gap: "50px",
        width: "100%",
        paddingTop: "60px"
      }}>
        {/* Grid cells are created automatically as items are added */}
      </div>
    </div>
  )
}
