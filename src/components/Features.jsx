import { Ruler, Layers, ShieldCheck, Leaf } from 'lucide-react'

const features = [
  {
    icon: Ruler,
    title: 'Precision Built',
    desc: 'Exacting tolerances and joinery for an heirloom-level finish that lasts.'
  },
  {
    icon: Layers,
    title: 'Premium Materials',
    desc: 'We source sustainably harvested hardwoods and high-grade finishes.'
  },
  {
    icon: ShieldCheck,
    title: 'Guaranteed',
    desc: 'Every piece is backed by a craftsmanship warranty and care guide.'
  },
  {
    icon: Leaf,
    title: 'Sustainable',
    desc: 'Thoughtful design, low waste processes, and eco-friendly products.'
  }
]

export default function Features() {
  return (
    <section id="services" className="relative py-24 sm:py-28 bg-slate-950">
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(600px_200px_at_top,rgba(244,63,94,0.35),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Craft without compromise</h2>
          <p className="mt-3 text-slate-300">
            From concept to installation, we obsess over the details so you don’t have to.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 transition-all hover:shadow-2xl hover:-translate-y-0.5">
              <div className="inline-flex rounded-xl bg-rose-500/10 p-3 ring-1 ring-rose-500/30">
                <Icon className="text-rose-400" size={20} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300/90 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
