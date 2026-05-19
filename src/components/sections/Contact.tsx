import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { SOCIAL_LINKS } from '../../data/constants'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../ui/ScrollReveal'

const socialItems = [
  {
    name: 'Telegram',
    href: SOCIAL_LINKS.telegram,
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: SOCIAL_LINKS.github,
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: SOCIAL_LINKS.email,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <motion.div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let's build something great"
          description="Have a project in mind or want to collaborate? Drop a message — I'll get back to you soon."
        />

        <motion.div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <ScrollReveal className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8">
              <motion.div
                className="space-y-5"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.08 } },
                }}
              >
                {[
                  { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { id: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com' },
                ].map((field) => (
                  <motion.div
                    key={field.id}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <label htmlFor={field.id} className="mb-2 block text-sm font-medium text-white/80">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/30 transition-all duration-300 outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/20"
                    />
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full resize-none rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/30 transition-all duration-300 outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/20"
                  />
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <motion.button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-accent/30 to-accent-blue/30 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:from-accent/40 hover:to-accent-blue/40 glow-sm sm:w-auto sm:min-w-[160px]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {submitted ? 'Message sent ✓' : 'Send Message'}
                  </motion.button>
                </motion.div>
              </motion.div>
            </form>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-2" delay={0.15}>
            <motion.div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-white">Connect</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Prefer a direct line? Reach out on any of these channels.
              </p>
              <ul className="mt-8 space-y-3">
                {socialItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      target={item.name === 'Email' ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="glass glass-hover flex items-center gap-4 rounded-xl px-5 py-4 text-white/90 transition-colors hover:text-white"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </ScrollReveal>
        </motion.div>
      </motion.div>
    </section>
  )
}
