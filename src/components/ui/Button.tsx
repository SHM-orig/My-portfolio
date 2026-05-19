import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children' | 'type'> {
  children: ReactNode
  variant?: Variant
  href?: string
  onClick?: () => void
}

const variants: Record<Variant, string> = {
  primary:
    'glass glass-hover glow-sm bg-gradient-to-r from-accent/20 to-accent-blue/20 text-white border-accent/30',
  secondary:
    'glass glass-hover text-white/90 hover:text-white',
  ghost: 'text-muted hover:text-white transition-colors duration-300',
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300'

  const motionProps = {
    className: `${base} ${variants[variant]} ${className}`,
    whileHover: { scale: 1.02, y: -1 },
    whileTap: { scale: 0.98 },
    onClick,
  }

  if (href) {
    const { type: _type, ...anchorProps } = props as HTMLMotionProps<'a'>
    return (
      <motion.a href={href} {...motionProps} {...anchorProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" {...motionProps} {...props}>
      {children}
    </motion.button>
  )
}
