import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#0B0D10]">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#FAF9F5]/80 border-b border-[#E8E4DC]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-[var(--font-display)] text-2xl tracking-tight font-semibold">Rta</span>
            <span className="text-xs tracking-[0.2em] uppercase text-[#6B6560] font-medium">Living</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-[#6B6560] hover:text-[#0B0D10] transition-colors">Features</Link>
            <Link href="#philosophy" className="text-sm text-[#6B6560] hover:text-[#0B0D10] transition-colors">Philosophy</Link>
            <Link href="#testimonials" className="text-sm text-[#6B6560] hover:text-[#0B0D10] transition-colors">Stories</Link>
            <button className="px-5 py-2 bg-[#8B6F47] text-[#F5ECD8] text-sm font-medium rounded-lg hover:bg-[#6B5430] transition-colors">Begin your journey</button>
          </div>
        </div>
      </nav>
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-16">
        <p className="text-xs tracking-[0.25em] uppercase text-[#A89F94] mb-6 font-medium">The Vedic principle of cosmic order</p>
        <h1 className="font-[var(--font-display)] text-5xl md:text-7xl lg:text-8xl text-center max-w-4xl leading-[1.05] font-medium mb-8">Order, naturally.</h1>
        <p className="text-lg md:text-xl text-[#6B6560] text-center max-w-xl leading-relaxed mb-12">Rta Living arranges your world so you don&apos;t have to. A sanctuary of clarity in the noise of modern life.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3.5 bg-[#8B6F47] text-[#F5ECD8] text-sm font-medium rounded-lg hover:bg-[#6B5430] transition-all duration-300">Begin your journey</button>
          <button className="px-8 py-3.5 border border-[#E8E4DC] text-[#6B6560] text-sm font-medium rounded-lg hover:border-[#C4BFB8] hover:text-[#0B0D10] transition-all">Learn more</button>
        </div>
      </section>
      <section id="philosophy" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#A89F94] mb-4 font-medium">The philosophy</p>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl leading-[1.1] font-medium mb-6">Your day has a rhythm. <span className="text-[#8B6F47]">We help you find it.</span></h2>
            <p className="text-[#6B6560] leading-[1.7] max-w-md">In Vedic philosophy, Rta is the cosmic principle that governs the natural order. We translated that ancient understanding into a modern tool for living with intention.</p>
          </div>
          <div className="aspect-square rounded-2xl bg-[#F5F3EE] border border-[#E8E4DC] flex items-center justify-center">
            <span className="font-[var(--font-display)] text-7xl text-[#C9A96E] opacity-25 font-light">&#2315;&#2340;</span>
          </div>
        </div>
      </section>
      <section id="features" className="py-32 px-6 bg-[#F5F3EE]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-[#A89F94] mb-4 font-medium">What we offer</p>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl font-medium">Three pillars of balance</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FAF9F5] rounded-2xl p-8 border border-[#E8E4DC] hover:border-[#C9A96E] transition-all duration-300">
              <span className="text-xs text-[#C9A96E] tracking-[0.15em] font-medium">01</span>
              <h3 className="font-[var(--font-display)] text-2xl mt-4 mb-1 font-medium">Clarity</h3>
              <p className="text-sm text-[#8B6F47] mb-4 font-medium">See what matters</p>
              <p className="text-sm text-[#6B6560] leading-[1.7]">Cut through the noise. Rta Living surfaces what deserves your attention and quietly sets aside what does not.</p>
            </div>
            <div className="bg-[#FAF9F5] rounded-2xl p-8 border border-[#E8E4DC] hover:border-[#C9A96E] transition-all duration-300">
              <span className="text-xs text-[#C9A96E] tracking-[0.15em] font-medium">02</span>
              <h3 className="font-[var(--font-display)] text-2xl mt-4 mb-1 font-medium">Rhythm</h3>
              <p className="text-sm text-[#8B6F47] mb-4 font-medium">Flow with intention</p>
              <p className="text-sm text-[#6B6560] leading-[1.7]">Your energy has a natural arc. We help you align your tasks, rest, and focus with the rhythm your body already knows.</p>
            </div>
            <div className="bg-[#FAF9F5] rounded-2xl p-8 border border-[#E8E4DC] hover:border-[#C9A96E] transition-all duration-300">
              <span className="text-xs text-[#C9A96E] tracking-[0.15em] font-medium">03</span>
              <h3 className="font-[var(--font-display)] text-2xl mt-4 mb-1 font-medium">Space</h3>
              <p className="text-sm text-[#8B6F47] mb-4 font-medium">Room to breathe</p>
              <p className="text-sm text-[#6B6560] leading-[1.7]">A decluttered interface for a decluttered mind. Every screen gives you exactly what you need and nothing more.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 border-y border-[#E8E4DC]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><div className="font-[var(--font-display)] text-3xl md:text-4xl mb-2 font-medium">12k+</div><div className="text-sm text-[#A89F94]">Lives in balance</div></div>
          <div><div className="font-[var(--font-display)] text-3xl md:text-4xl mb-2 font-medium">4.9</div><div className="text-sm text-[#A89F94]">App Store rating</div></div>
          <div><div className="font-[var(--font-display)] text-3xl md:text-4xl mb-2 font-medium">89%</div><div className="text-sm text-[#A89F94]">Daily return rate</div></div>
          <div><div className="font-[var(--font-display)] text-3xl md:text-4xl mb-2 font-medium">2min</div><div className="text-sm text-[#A89F94]">Average session</div></div>
        </div>
      </section>
      <section id="testimonials" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-[#A89F94] mb-4 font-medium">Stories</p>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl font-medium">Living in balance</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#F5F3EE] rounded-2xl p-8 border border-[#E8E4DC]">
              <p className="font-[var(--font-display)] text-lg leading-[1.7] text-[#2E2A26] mb-8 italic">&ldquo;I stopped feeling like I was fighting my day. Rta Living helped me find the rhythm that was already there.&rdquo;</p>
              <p className="text-sm font-medium">Aria Mehta</p>
              <p className="text-xs text-[#A89F94] mt-0.5">Yoga instructor, Mumbai</p>
            </div>
            <div className="bg-[#F5F3EE] rounded-2xl p-8 border border-[#E8E4DC]">
              <p className="font-[var(--font-display)] text-lg leading-[1.7] text-[#2E2A26] mb-8 italic">&ldquo;The quietness of it. No notifications screaming at me. Just a calm, clear sense of what comes next.&rdquo;</p>
              <p className="text-sm font-medium">Thomas Engstrom</p>
              <p className="text-xs text-[#A89F94] mt-0.5">Architect, Stockholm</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 px-6 bg-[#0B0D10] text-[#F5F3EE]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[var(--font-display)] text-4xl md:text-6xl mb-6 font-medium">The balance is waiting.</h2>
          <p className="text-lg text-[#A89F94] mb-12 max-w-md mx-auto leading-relaxed">Join thousands who have found their rhythm. No noise, no clutter.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-[#C9A96E] text-[#0B0D10] text-sm font-medium rounded-lg hover:bg-[#D4B880] transition-colors">Begin your journey</button>
            <button className="px-8 py-3.5 border border-[#2E2A26] text-[#A89F94] text-sm font-medium rounded-lg hover:border-[#6B6560] hover:text-[#F5F3EE] transition-all">See how it works</button>
          </div>
        </div>
      </section>
      <footer className="py-16 px-6 bg-[#0B0D10] border-t border-[#1A1816]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-[var(--font-display)] text-xl text-[#F5F3EE] font-semibold">Rta</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#6B6560] font-medium">Living</span>
              </div>
              <p className="text-sm text-[#6B6560]">Order, naturally.</p>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.15em] uppercase text-[#A89F94] mb-4 font-medium">Product</h4>
              <ul className="space-y-3"><li><Link href="#" className="text-sm text-[#6B6560] hover:text-[#F5F3EE] transition-colors">Features</Link></li><li><Link href="#" className="text-sm text-[#6B6560] hover:text-[#F5F3EE] transition-colors">Pricing</Link></li></ul>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.15em] uppercase text-[#A89F94] mb-4 font-medium">Company</h4>
              <ul className="space-y-3"><li><Link href="#" className="text-sm text-[#6B6560] hover:text-[#F5F3EE] transition-colors">About</Link></li><li><Link href="#" className="text-sm text-[#6B6560] hover:text-[#F5F3EE] transition-colors">Contact</Link></li></ul>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.15em] uppercase text-[#A89F94] mb-4 font-medium">Legal</h4>
              <ul className="space-y-3"><li><Link href="#" className="text-sm text-[#6B6560] hover:text-[#F5F3EE] transition-colors">Privacy</Link></li><li><Link href="#" className="text-sm text-[#6B6560] hover:text-[#F5F3EE] transition-colors">Terms</Link></li></ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#1A1816] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#6B6560]">&copy; 2026 Rta Living. All rights reserved.</p>
            <p className="text-xs text-[#6B6560]">Designed with the weight of nothing.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
