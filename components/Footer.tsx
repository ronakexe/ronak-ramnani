export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/" className="footer-link">Home</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/projects" className="footer-link">Projects</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="social-link">
            Email
          </a>
        </div>
        
        <p>&copy; {currentYear} Ronak Ramanni. All rights reserved.</p>
      </div>
    </footer>
  )
}
