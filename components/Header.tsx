"use client"
import Image from "next/image"
import Link from "next/link"
import styles from "./Header.module.css"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  // Cierra el menú al hacer click en un link (solo mobile)
  const handleLinkClick = () => setOpen(false)

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <button className={styles.logoButton} onClick={() => setOpen((o) => !o)} aria-label="Abrir menú">
          <Image src="/abstract-logo.png" alt="Logo" width={120} height={50} />
        </button>
      </div>
      <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
        <Link href="#" className={styles.link} onClick={handleLinkClick}>Home</Link>
        <Link href="#" className={styles.link} onClick={handleLinkClick}>Shop</Link>
        <Link href="#" className={styles.link} onClick={handleLinkClick}>Contact</Link>
        <Link href="#" className={styles.link} onClick={handleLinkClick}>Login</Link>
        <Link href="#" className={styles.link} onClick={handleLinkClick}>Cart</Link>
      </nav>
    </header>
  )
}
