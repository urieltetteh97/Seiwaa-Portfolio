import { useState } from 'react'

// ── Import images ──────────────
import work01 from '../assets/work/illustrations/collection.jpg'
import work02 from '../assets/work/print designs/daasebre.jpg'
import work03 from '../assets/work/3D render/MFTSKIT.png'
import work04 from '../assets/work/illustrations/cici.jpg'
import work05 from '../assets/work/print designs/conceited.jpg'
import work06 from '../assets/work/illustrations/seiwaa.jpg'
import work07 from '../assets/work/print designs/new eras-02.png'
import work08 from '../assets/work/illustrations/storm.jpg'
import work09 from '../assets/work/3D render/baby.png'
import work10 from '../assets/work/3D render/IMG_20231219_065335_167.jpg'
import work11 from '../assets/work/3D render/IMG_20231220_205310_125.jpg'
import work12 from '../assets/work/3D render/IMG_20231220_205310_414.jpg' 
import work13 from '../assets/work/3D render/IMG_20231220_205310_683.jpg'
import work14 from '../assets/work/3D render/IMG_20240103_173843_462.jpg'
import work15 from '../assets/work/3D render/mfantsiman focus.png'
import work16 from '../assets/work/3D render/mfantsiman_180.png'
import work17 from '../assets/work/3D render/tyla-Cover.jpg'
import work18 from '../assets/work/illustrations/yyy.png'
import work19 from '../assets/work/illustrations/SHIRLEY-02.png'
import work20 from '../assets/work/illustrations/kimpossible and shego.jpg'
import work21 from '../assets/work/illustrations/ESTELLA.png'
import work22 from '../assets/work/illustrations/ESTELLA 2.png'
import work23 from '../assets/work/print designs/denkyem.jpg'
import work24 from '../assets/work/print designs/new eras-01.png'

// ── Works data ──────────────
const WORKS = [
  { id: 1, title: 'Collection',    category: 'illustrations',     img: work01 },
  { id: 2, title: 'Daasebre',        category: 'print designs', img: work02 },
  { id: 3, title: 'MFTSKIT',   category: '3D renders',     img: work03 },
  { id: 4, title: 'Cici',             category: 'illustrations',     img: work04 },
  { id: 5, title: 'Conceited',        category: 'print designs', img: work05 },
  { id: 6, title: 'Seiwaa',           category: 'illustrations',     img: work06 },
  { id: 7, title: 'New Eras',        category: 'print designs', img: work07 },
  { id: 8, title: 'Storm',            category: 'illustrations',     img: work08 },
  { id: 9, title: 'Baby',             category: '3D renders',     img: work09 },
  { id: 10, title: 'Untitled',       category: '3D renders',     img: work10 },
  { id: 11, title: 'Untitled',       category: '3D renders',     img: work11 },
  { id: 12, title: 'Untitled',       category: '3D renders',     img: work12 },
  { id: 13, title: 'Untitled',       category: '3D renders',     img: work13 },
  { id: 14, title: 'Untitled',       category: '3D renders',     img: work14 },
  { id: 15, title: 'Mfantsiman Focus', category: '3D renders',   img: work15 },
  { id: 16, title: 'Mfantsiman 180', category: '3D renders',     img: work16 },
  { id: 17, title: 'Tyla Cover',     category: '3D renders',     img: work17 },
  { id: 18, title: 'YYY',             category: 'illustrations',     img: work18 },
  { id: 19, title: 'Shirley',         category: 'illustrations',     img: work19 },
  { id: 20, title: 'Kimpossible & Shego', category: 'illustrations', img: work20 },
  { id: 21, title: 'Estella',         category: 'illustrations',     img: work21 },
  { id: 22, title: 'Estella 2',       category: 'illustrations',     img: work22 },
  { id: 23, title: 'Denkyem',         category: 'print designs', img: work23 },
  { id: 24, title: 'New Eras',       category: 'print designs', img: work24 },
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
