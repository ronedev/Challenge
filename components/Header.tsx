import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        height: "80px",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "20px",
          top: "15px",
        }}
      >
        <Image src="/abstract-logo.png" alt="Logo" width={120} height={50} />
      </div>

      <nav
        style={{
          position: "absolute",
          right: "30px",
          top: "30px",
          display: "inline-block",
        }}
      >
        <Link href="#" style={{ marginRight: "25px", textDecoration: "none", color: "#333" }}>
          Home
        </Link>
        <Link href="#" style={{ marginRight: "25px", textDecoration: "none", color: "#333" }}>
          Shop
        </Link>
        <Link href="#" style={{ marginRight: "25px", textDecoration: "none", color: "#333" }}>
          Contact
        </Link>
        <Link href="#" style={{ marginRight: "25px", textDecoration: "none", color: "#333" }}>
          Login
        </Link>
        <Link href="#" style={{ textDecoration: "none", color: "#333" }}>
          Cart
        </Link>
      </nav>
    </header>
  )
}
