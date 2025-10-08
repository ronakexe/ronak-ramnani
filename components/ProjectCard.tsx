interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  imageUrl?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl = "#",
  demoUrl = "#",
  imageUrl
}: ProjectCardProps) {
  return (
    <div className="project-card">
      {imageUrl && (
        <div className="project-image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="project-links">
          {githubUrl !== "#" && (
            <a href={githubUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {demoUrl !== "#" && (
            <a href={demoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
