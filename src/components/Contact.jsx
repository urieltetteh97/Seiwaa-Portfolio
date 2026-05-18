import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // TODO: wire up to your preferred email service (EmailJS, Formspree, Resend, etc.)
    console.log('Form submitted:', form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/5">
      <div className="section-wrapper">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — info */}
          <div>
            <p className="eyebrow mb-4">Get in Touch</p>
            <h2 className="font-heading text-4xl md:text-5xl text-canvas mb-8">
              Let's make something for you.
            </h2>
            <p className="text-mist leading-relaxed max-w-sm">
              Whether you have a specific vision in mind or you're starting from scratch, reach out
              — every great piece begins with a conversation.
            </p>

            {/* Contact details */}
            <ul className="mt-10 space-y-5">
              {[
                { label: 'Email',     value: 'hello@amaraosei.com',  href: 'mailto:hello@amaraosei.com'  },
                { label: 'Phone',     value: '+233 20 000 0000',      href: 'tel:+233200000000'           },
                { label: 'Location',  value: 'Accra, Ghana',          href: null                          },
                { label: 'Instagram', value: '@amaraoseidesigns',      href: 'https://instagram.com'       },
              ].map(({ label, value, href }) => (
                <li key={label} className="flex gap-6 items-baseline">
                  <span className="eyebrow w-20 shrink-0">{label}</span>
                  {href
                    ? <a href={href} target="_blank" rel="noopener noreferrer"
                         className="text-canvas link-underline hover:text-accent transition-colors">{value}</a>
                    : <span className="text-canvas">{value}</span>
                  }
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-start justify-center h-full">
                <p className="font-heading text-3xl text-accent mb-3">Thank you.</p>
                <p className="text-mist">Your message has been received. I'll be in touch shortly.</p>
                <button onClick={() => setSent(false)} className="mt-8 eyebrow link-underline text-mist hover:text-canvas">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="eyebrow">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="bg-transparent border-b border-white/20 focus:border-accent py-3 text-canvas placeholder-mist/50
                               outline-none transition-colors duration-200 text-sm"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="eyebrow">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-transparent border-b border-white/20 focus:border-accent py-3 text-canvas placeholder-mist/50
                               outline-none transition-colors duration-200 text-sm"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="eyebrow">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="bg-transparent border-b border-white/20 focus:border-accent py-3 text-canvas placeholder-mist/50
                               outline-none transition-colors duration-200 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full py-4 border border-accent text-accent text-xs tracking-widest uppercase
                             hover:bg-accent hover:text-ink transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
