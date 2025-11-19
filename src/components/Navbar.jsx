import { useState } from 'react'
import { Menu, X, Hammer } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-slate-200/90 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md px-5 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-rose-700 text-white shadow-lg">
              <Hammer size={18} />
            </span>
            <span className="text-white font-semibold tracking-tight">RedOak Craft</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#about">About</NavLink>
            <a href="#contact" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 font-medium hover:bg-rose-50 hover:text-rose-700 transition-colors">Contact</a>
          </nav>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-lg md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#about">About</NavLink>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2 font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
