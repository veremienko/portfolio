import photo from '../assets/photo.webp'

export function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero__grid">
        <div>
          <div className="eyebrow">
            <span className="dot"></span>
            <span className="mono">Lead JS Developer · Cherkasy, Ukraine</span>
          </div>
          <h1 className="name">
            Andrii
            <br />
            Verem<em>ii</em>enko
          </h1>
          <p className="lede">
            I build and ship web &amp; mobile products — and lead the teams that deliver them.
          </p>
          <div className="status">
            <span className="ok">●</span> Open to remote or hybrid work{' '}
            <span className="caret"></span>
          </div>
        </div>
      </div>
      <div className="portrait reveal in">
        <img src={photo} alt="Andrii Veremiienko" />
      </div>
    </header>
  )
}
