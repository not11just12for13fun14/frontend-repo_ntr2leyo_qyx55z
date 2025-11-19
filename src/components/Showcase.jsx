import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Walnut Kitchen System',
    img: 'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Minimalist Hallway Bench',
    img: 'https://images.unsplash.com/photo-1505692794403-34cb4f991eea?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Living Room Console',
    img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative bg-slate-950 py-24 sm:py-28">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(500px_150px_at_bottom_right,rgba(244,63,94,0.35),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected work</h2>
            <p className="mt-3 text-slate-300 max-w-xl">A few highlights from recent projects across kitchens, living, and bespoke furniture.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-lg border border-white/15 bg-slate-900/60 px-4 py-2 text-white backdrop-blur hover:border-rose-400/50">Start a project</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.figure
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur ring-1 ring-white/5"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <figcaption className="flex items-center justify-between p-4">
                <div>
                  <p className="text-white font-medium">{p.title}</p>
                  <p className="text-xs text-slate-400">Bespoke cabinetry</p>
                </div>
                <span className="text-xs text-slate-300/70">View</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
