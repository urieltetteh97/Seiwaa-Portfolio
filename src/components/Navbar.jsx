import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Work',    href: '#work'    },
  { label: 'About',   href: '#about'   },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <div className="section-wrapper flex items-center justify-between h-16">

        {/* Logo / wordmark */}
        <a href="#" className="font-heading text-sm tracking-ultra uppercase text-canvas">
          {/* Replace with designer's name */}
          Serwandyy
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="eyebrow link-underline hover:text-canvas transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-canvas transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block w-6 h-px bg-canvas transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-canvas transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-6 px-6 pt-4 pb-8 border-t border-white/5">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="eyebrow text-mist hover:text-canvas transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
