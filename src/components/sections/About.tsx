import { motion } from 'framer-motion'
import { STATS } from '../../data/constants'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../ui/ScrollReveal'

export function About() {
  return (
    <section id="about" className="section-padding">
      <motion.div className="mx-auto max-w-6xl">
        <SectionHeading
          label="About"
          title="Building interfaces that feel effortless"
          description="Focused on clarity, motion, and detail — the kind of polish users notice without naming it."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m a frontend developer passionate about turning ideas into fast, beautiful web
              applications. My work centers on{' '}
              <span className="text-white">React</span>,{' '}
              <span className="text-white">JavaScript</span>, and{' '}
              <span className="text-white">UI/UX</span> — from component architecture to
              pixel-perfect layouts and smooth interactions.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              I care about modern web standards, responsive design, and maintainable code. Whether
              it&apos;s a product dashboard, a marketing site, or a full web app, I aim for
              experiences that are intuitive, accessible, and built to last.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.08}>
                <motion.div
                  className="glass glass-hover group rounded-2xl p-6 sm:p-8"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.span
                    className="font-display text-3xl font-bold text-gradient-accent sm:text-4xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {stat.value}
                  </motion.span>
                  <p className="mt-2 text-sm text-muted transition-colors group-hover:text-white/80">
                    {stat.label}
                  </p>
                  <motion.div
                    className="mt-4 h-px w-full bg-gradient-to-r from-accent/40 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                    style={{ originX: 0 }}
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
