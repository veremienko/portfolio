import { education } from '../data/education'

export function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="sec-head">
          <h2>Education</h2>
        </div>
        {education.map((entry) => (
          <article key={entry.school} className="job reveal">
            <div className="job__meta">
              <span className="job__dates mono">{entry.dates}</span>
              <span className="job__loc mono">{entry.location}</span>
            </div>
            <div className="job__body">
              <h3 className="job__role">{entry.degree}</h3>
              <p className="job__co">{entry.school}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
