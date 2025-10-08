import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ronak Ramanni',
  description: 'Personal website and portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navbar">
          <div className="nav-container">
            <a href="/" className="nav-logo">
              Ronak Ramanni
            </a>
            <div className="nav-menu">
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
          </div>
        </nav>
        <main className="main-content">
          {children}
        </main>
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 Ronak Ramanni. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
