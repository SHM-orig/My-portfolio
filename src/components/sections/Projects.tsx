import { motion } from 'framer-motion'
import { PROJECTS } from '../../data/projects'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../ui/ScrollReveal'

function ExternalIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <motion.div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="A glimpse into apps I've built — from sports and productivity to rental platforms."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <motion.article
                className="glass glass-hover group overflow-hidden rounded-2xl"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className={`relative flex h-52 items-center justify-center bg-gradient-to-br ${project.gradient} sm:h-56`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `radial-gradient(circle at 30% 40%, ${project.accent}40, transparent 60%)`,
                    }}
                  />
                  <motion.div
                    className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl glass text-2xl font-display font-bold text-white/90"
                    style={{ boxShadow: `0 0 40px -10px ${project.accent}60` }}
                  >
                    {project.title.charAt(0)}
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated via-transparent to-transparent" />
                </motion.div>

                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-lg bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <motion.div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent/25 to-accent-blue/25 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:from-accent/35 hover:to-accent-blue/35"
                    >
                      Live Demo
                      <ExternalIcon />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:text-white"
                    >
                      GitHub
                      <GitHubIcon />
                    </a>
                  </motion.div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
