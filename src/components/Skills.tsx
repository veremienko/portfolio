import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <h2>Skills &amp; tools</h2>
        </div>
        <div className="skills-wrap">
          {skillGroups.map((group) => (
            <div key={group.title} className="skillgroup reveal">
              <h3 className="skillgroup__h">{group.title}</h3>
              <ul className="tags">
                {group.tags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
