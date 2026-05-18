import { useState } from 'react'

// ── Placeholder data — replace with real images/titles ──────────────
const WORKS = [
  { id: 1, title: 'Dusk Reverie',    category: 'Bridal',     img: '/images/work-01.jpg' },
  { id: 2, title: 'Laterite',        category: 'Ready-to-Wear', img: '/images/work-02.jpg' },
  { id: 3, title: 'Solstice Gown',   category: 'Bridal',     img: '/images/work-03.jpg' },
  { id: 4, title: 'Urban Nomad',     category: 'Ready-to-Wear', img: '/images/work-04.jpg' },
  { id: 5, title: 'The Void Blazer', category: 'Bespoke',    img: '/images/work-05.jpg' },
  { id: 6, title: 'Frangipani',      category: 'Bridal',     img: '/images/work-06.jpg' },
  { id: 7, title: 'Kente Fragment',  category: 'Bespoke',    img: '/images/work-07.jpg' },
  { id: 8, title: 'Cloud Nine',      category: 'Ready-to-Wear', img: '/images/work-08.jpg' },
]

const CATEGORIES = ['All', ...Array.from(new Set(WORKS.map(w => w.category)))]

export default function Work() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? WORKS : WORKS.filter(w => w.category === active)

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="section-wrapper">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <p className="eyebrow mb-3">Selected Works</p>
            <h2 className="font-heading text-4xl md:text-5xl text-canvas">The Collection</h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-1.5 text-xs tracking-widest uppercase border transition-all duration-200
                  ${active === cat
                    ? 'bg-accent text-ink border-accent'
                    : 'border-white/20 text-mist hover:border-accent hover:text-accent'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {filtered.map(work => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkCard({ work }) {
  return (
    <article className="group relative bg-ink overflow-hidden aspect-[3/4] cursor-pointer">
      {/* Image */}
      <img
        src={work.img}
        alt={work.title}
        className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Caption */}
      <div className="absolute bottom-0 inset-x-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="eyebrow mb-1">{work.category}</p>
        <h3 className="font-heading text-lg text-canvas">{work.title}</h3>
      </div>
    </article>
  )
}
