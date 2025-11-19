import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/60 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse"></span>
            Custom woodwork • Built to last
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Modern craft for bold spaces
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200/90">
            We design and build furniture and interiors that blend precision craftsmanship with clean, minimalist aesthetics.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg hover:bg-rose-50 hover:text-rose-700 transition-colors">
              Get a quote
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-slate-900/60 px-6 py-3 font-semibold text-white backdrop-blur hover:border-rose-400/50 transition-colors">
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
