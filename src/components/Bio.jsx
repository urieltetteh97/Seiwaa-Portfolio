export default function Bio() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-white/5">
      <div className="section-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Portrait */}
          <div className="relative">
            {/* Decorative frame offset */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-accent/30 pointer-events-none" />
            <img
              src="/images/designer.jpg"
              alt="Designer portrait"
              className="relative w-full aspect-[3/4] object-cover object-top"
            />
          </div>

          {/* Text */}
          <div>
            <p className="eyebrow mb-4">About</p>
            <h2 className="font-heading text-4xl md:text-5xl text-canvas mb-8">
              The designer behind the stitch.
            </h2>

            {/* Bio copy — replace with real text */}
            <div className="space-y-5 text-mist leading-relaxed">
              <p>
                Seiwaa is a digital fashion artist, illustrator and multimedia creator specializing in 3D garment
                construction, digital illustration & concept development,
                textile design and digital pattern drafting.
              </p>
              <p>
                She seamlessly integrates technical pattern drafting
                with premium visual production to capture, design and document
                the future of digital arts and fashion.
              </p>
              <p>
                Every piece begins with the wearer — their body, their story, the life they want
                the garment to move through with them.
              </p>
            </div>

            {/* Credentials / stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              {[
                { value: '120+', label: 'Bespoke Pieces' },
                { value: '8',    label: 'Collections'    },
                { value: '12y',  label: 'Experience'     },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-heading text-3xl text-accent">{value}</p>
                  <p className="eyebrow mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
