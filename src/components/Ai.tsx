import { aiIntro, aiTags } from '../data/ai'

export function Ai() {
  return (
    <section id="ai" className="ai">
      <div className="wrap">
        <div className="sec-head">
          <h2>AI-assisted development</h2>
        </div>
        <div className="inner reveal">
          <p>{aiIntro}</p>
          <ul className="tags">
            {aiTags.map((tag) => (
              <li key={tag} className="tag tag--brass">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
