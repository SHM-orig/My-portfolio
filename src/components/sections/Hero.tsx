import { motion } from 'framer-motion'
import { AnimatedBackground } from '../ui/AnimatedBackground'
import { Button } from '../ui/Button'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden section-padding pt-32"
    >
      <AnimatedBackground />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
          <span className="text-sm font-medium tracking-widest text-muted uppercase">
            Available for work
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">SHM</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 font-display text-xl font-medium text-gradient-accent sm:text-2xl md:text-3xl"
        >
          Frontend Developer
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          I craft refined digital experiences with React and modern JavaScript — blending
          performance, accessibility, and thoughtful UI design into every project.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href="#contact" variant="secondary">
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-20 hidden items-center gap-8 text-sm text-muted sm:flex"
        >
          <div className="flex flex-col gap-1">
            <span className="font-display text-2xl font-semibold text-white">React</span>
            <span>Primary stack</span>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <motion.div
            className="flex flex-col gap-1"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-white/60">Scroll to explore</span>
            <span className="text-lg">↓</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
