export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/6 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} <span className="text-white">SHM</span>. Crafted with React & Vite.
        </p>
        <a
          href="#hero"
          className="text-sm text-muted transition-colors duration-300 hover:text-white"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
