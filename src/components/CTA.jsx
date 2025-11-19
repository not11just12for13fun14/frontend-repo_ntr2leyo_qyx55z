export default function CTA() {
  return (
    <section id="contact" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(600px_200px_at_top_left,rgba(244,63,94,0.35),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Ready to build something timeless?</h2>
            <p className="mt-3 text-slate-300">Tell us about your space and vision. We’ll reply within 24 hours.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="mailto:hello@redoakcraft.com" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg hover:bg-rose-50 hover:text-rose-700 transition-colors">Email us</a>
              <a href="tel:+1234567890" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-slate-900/60 px-6 py-3 font-semibold text-white backdrop-blur hover:border-rose-400/50 transition-colors">Call now</a>
            </div>
          </div>

          <form className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-400/50" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-400/50" placeholder="jane@studio.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Project details</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-400/50" placeholder="Share your goals, dimensions, preferred materials..." />
              </div>
            </div>
            <button type="button" className="mt-4 inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 font-semibold text-slate-900 hover:bg-rose-50 hover:text-rose-700 transition-colors">Send inquiry</button>
          </form>
        </div>
      </div>
    </section>
  )
}
