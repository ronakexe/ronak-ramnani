export default function About() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="about-content">
        <section className="about-section">
          <h2>My Story</h2>
          <p>
            I'm a passionate developer with a love for creating innovative solutions
            and beautiful user experiences. My journey in technology has been driven
            by curiosity and a desire to make a positive impact through code.
          </p>
        </section>

        <section className="about-section">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>Database Design</li>
                <li>API Development</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>What I Do</h2>
          <p>
            I specialize in full-stack web development, focusing on creating
            scalable, performant applications that provide excellent user experiences.
            I'm always learning new technologies and staying up-to-date with
            industry best practices.
          </p>
        </section>
      </div>
    </div>
  )
}
