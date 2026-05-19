import { motion } from 'framer-motion'
import { SKILLS } from '../../data/skills'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../ui/ScrollReveal'

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <motion.div className="relative mx-auto max-w-6xl">
        <SectionHeading
          label="Skills"
          title="Tools I use to ship quality"
          description="A focused toolkit for building modern, responsive, and maintainable frontends."
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <ScrollReveal delay={index * 0.04}>
                <motion.article
                  className="glass glass-hover group relative h-full overflow-hidden rounded-2xl p-6"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:bg-accent/20" />
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 font-display text-lg text-accent transition-colors group-hover:bg-accent/20">
                    {skill.icon}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{skill.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{skill.description}</p>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent to-accent-blue"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.article>
              </ScrollReveal>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
