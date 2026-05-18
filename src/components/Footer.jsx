export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="section-wrapper flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="eyebrow text-mist/50">
          © {year} Amara Osei. All rights reserved.
        </p>

        <nav className="flex gap-8">
          {[
            { label: 'Work',      href: '#work'    },
            { label: 'About',     href: '#about'   },
            { label: 'Contact',   href: '#contact' },
            { label: 'Instagram', href: 'https://instagram.com' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="eyebrow text-mist/50 hover:text-accent transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
