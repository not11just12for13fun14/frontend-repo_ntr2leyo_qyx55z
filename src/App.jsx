import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} RedOak Craft. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Pinterest</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
