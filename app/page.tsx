export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1 className="hero-title">
          Hello, I'm <span className="highlight">Ronak Ramanni</span>
        </h1>
        <p className="hero-subtitle">
          Welcome to my personal website and portfolio
        </p>
        <div className="hero-actions">
          <a href="/projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="/contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </section>

      <section className="intro">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer who loves creating amazing digital experiences.
          This is where you can learn more about my journey, projects, and skills.
        </p>
      </section>
    </div>
  )
}
