export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  gradient: string
  accent: string
}

export const PROJECTS: Project[] = [
  {
    id: 'football-app',
    title: 'Football App',
    description:
      'Live scores, match schedules, and team stats in a fast, mobile-first interface built for sports fans.',
    tech: ['React', 'API', 'CSS'],
    liveUrl: 'https://football-app-shm.vercel.app/',
    githubUrl: 'https://github.com/SHM-orig/Football-app',
    gradient: 'from-violet-600/40 via-purple-900/30 to-indigo-950/50',
    accent: '#8b5cf6',
  },
  {
    id: 'resume-builder',
    title: 'Resume Builder',
    description:
      'Drag-and-drop resume editor with real-time preview and export — polished UX for job seekers.',
    tech: ['React', 'JavaScript', 'Vite'],
    liveUrl: 'https://resume-builder-hqxi.vercel.app/',
    githubUrl: 'https://github.com/SHM-orig/Resume-Builder',
    gradient: 'from-blue-600/40 via-slate-900/30 to-indigo-950/50',
    accent: '#3b82f6',
  },
  {
    id: 'smart-habit',
    title: 'Smart Habit',
    description:
      'Habit tracking with streaks, insights, and a calm dashboard designed for daily consistency.',
    tech: ['React', 'Local Storage', 'CSS'],
    liveUrl: 'https://smart-habit-o0nasi43o-shm-origs-projects.vercel.app/login',
    githubUrl: 'https://github.com/SHM-orig/Smart-Habit',
    gradient: 'from-fuchsia-600/30 via-purple-900/30 to-slate-950/50',
    accent: '#a855f7',
  },
  {
    id: 'rent-car',
    title: 'Rent Car',
    description:
      'Car rental platform with search, filters, and booking flow — clean UI for a premium feel.',
    tech: ['React', 'API', 'Responsive'],
    liveUrl: 'https://rent-car-ruby.vercel.app',
    githubUrl: 'https://github.com/SHM-orig/Rent-Car',
    gradient: 'from-cyan-600/30 via-blue-900/30 to-slate-950/50',
    accent: '#06b6d4',
  },
]
