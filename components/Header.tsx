'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo">
          Ronak Ramanni
        </a>
        
        {/* Desktop Menu */}
        <div className="nav-menu desktop-menu">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/projects" className="nav-link">
            Projects
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="/projects" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>
          <a href="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}
