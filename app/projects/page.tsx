export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of your first project and what technologies you used.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of your second project and what technologies you used.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of your third project and what technologies you used.",
      technologies: ["Python", "Flask", "SQLite"],
      github: "#",
      demo: "#"
    }
  ]

  return (
    <div className="container">
      <h1>My Projects</h1>
      <p className="projects-intro">
        Here are some of the projects I've been working on. Each one represents
        a learning experience and an opportunity to solve real-world problems.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} className="btn btn-outline">
                GitHub
              </a>
              <a href={project.demo} className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
