import { jobs } from '../data/jobs'

export function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="sec-head">
          <h2>Selected experience</h2>
        </div>
        {jobs.map((job) => (
          <article key={`${job.role}-${job.dates}`} className="job reveal">
            <div className="job__meta">
              <span className="job__dates mono">{job.dates}</span>
              <span className="job__loc mono">{job.location}</span>
            </div>
            <div className="job__body">
              <h3 className="job__role">{job.role}</h3>
              <p className="job__co">{job.company}</p>
              <ul className="job__list">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
