export default function Hero() {
  return (
    <section className="relative flex flex-col justify-end min-h-screen pt-16 overflow-hidden">

      {/* Background image placeholder — replace src with actual hero photo */}
      <div className="absolute inset-0 bg-ink">
        <img
          src="/images/hero.jpg"
          alt="Hero"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative section-wrapper pb-20 md:pb-28">
        <p className="eyebrow mb-6">Fashion Designer · Accra, Ghana</p>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-canvas leading-none max-w-3xl">
          Craft that moves{' '}
          <span className="text-accent italic">with you.</span>
        </h1>

        <p className="mt-6 max-w-md text-mist text-base md:text-lg leading-relaxed">
          Bespoke collections rooted in texture, heritage, and the quiet confidence of wearing something made entirely for you.
        </p>

        <a
          href="#work"
          className="inline-block mt-10 px-8 py-3 border border-accent text-accent text-sm tracking-widest uppercase
                     hover:bg-accent hover:text-ink transition-all duration-300"
        >
          View Work
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 opacity-40">
        <span className="eyebrow text-[10px]">Scroll</span>
        <span className="block w-px h-10 bg-canvas" />
      </div>
    </section>
  )
}
