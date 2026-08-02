const links = [
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#ai', label: 'AI' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <nav>
      <div className="wrap nav__in">
        <div className="brand">
          ANDRII&nbsp;<b>VEREMIIENKO</b>
        </div>
        <div className="nav__links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
