import { projects, type Project } from '../data/projects'

function ProjectCard({ project }: { project: Project }) {
  const body = (
    <>
      <div className="proj__main">
        <h3 className="proj__name">
          {project.name}
          {project.url && <span className="proj__arrow">↗</span>}
        </h3>
        {project.description && <p className="proj__desc">{project.description}</p>}
      </div>
      <div className="proj__meta">
        <span className="proj__yr mono">{project.years}</span>
        <span className="proj__co mono">{project.company}</span>
      </div>
    </>
  )

  if (project.url) {
    return (
      <a className="proj reveal" href={project.url} target="_blank" rel="noopener">
        {body}
      </a>
    )
  }
  return <div className="proj reveal">{body}</div>
}

export function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head">
          <h2>Projects</h2>
        </div>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
