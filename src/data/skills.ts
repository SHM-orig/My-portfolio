export interface Skill {
  name: string
  description: string
  icon: string
}

export const SKILLS: Skill[] = [
  {
    name: 'HTML',
    description: 'Semantic markup and accessible structure',
    icon: '◇',
  },
  {
    name: 'CSS',
    description: 'Modern layouts, animations, and design systems',
    icon: '◈',
  },
  {
    name: 'JavaScript',
    description: 'ES6+, async patterns, and clean architecture',
    icon: '◆',
  },
  {
    name: 'React',
    description: 'Component-driven UIs and state management',
    icon: '◎',
  },
  {
    name: 'Vite',
    description: 'Fast builds and optimized dev experience',
    icon: '⚡',
  },
  {
    name: 'Git',
    description: 'Version control and collaborative workflows',
    icon: '⎇',
  },
  {
    name: 'API',
    description: 'REST integration and data fetching',
    icon: '↔',
  },
  {
    name: 'Responsive Design',
    description: 'Fluid layouts across all screen sizes',
    icon: '▣',
  },
]
