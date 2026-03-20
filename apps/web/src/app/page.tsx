import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#0B0D10] overflow-x-hidden">
      {/* ─── Navigation ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#FAF9F5]/80 border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-[var(--font-display)] text-2xl tracking-tight font-semibold">Rta</span>
            <span className="text-xs tracking-[0.2em] uppercase text-[#6B6560] font-medium">Living</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-[#6B6560] hover:text-[#0B0D10] transition-colors duration-300">Features</Link>
            <Link href="#philosophy" className="text-sm text-[#6B6560] hover:text-[#0B0D10] transition-colors duration-300">Philosophy</Link>
            <Link href="#stories" className="text-sm text-[#6B6560] hover:text-[#0B0D10] transition-colors duration-300">Stories</Link>
            <button className="px-5 py-2 bg-[#8B6F47] text-[#F5ECD8] text-sm font-medium rounded-lg hover:bg-[#6B5430] transition-colors duration-300">Begin your journey</button>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════
          HERO — Full viewport, cinematic typography
          ═══════════════════════════════════════════════ */}
      <section className="relative h-screen flex items-end pb-20 px-6 pt-16">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80&auto=format&fit=crop"
            alt="Luxury modern residence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/50 to-transparent" />
        </div>

        {/* Giant watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none select-none">
          <span className="font-[var(--font-display)] text-[20rem] md:text-[30rem] text-white/[0.03] font-light leading-none">&#2315;&#2340;</span>
        </div>

        {/* Content pinned bottom-left */}
        <div className="relative z-10 max-w-4xl">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4 font-medium">The Vedic principle of cosmic order</p>
          <h1 className="font-[var(--font-display)] text-6xl md:text-8xl lg:text-9xl text-white leading-[0.95] font-medium mb-6">
            Order,<br />naturally.
          </h1>
          <p className="text-lg text-white/60 max-w-lg leading-relaxed mb-8">
            Rta Living arranges your world so you don&apos;t have to. A sanctuary of clarity in the noise of modern life.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3.5 bg-[#8B6F47] text-[#F5ECD8] text-sm font-medium rounded-lg hover:bg-[#A8845A] transition-all duration-300">Begin your journey</button>
            <button className="px-8 py-3.5 border border-white/20 text-white/70 text-sm font-medium rounded-lg hover:border-white/50 hover:text-white transition-all duration-300">Learn more</button>
          </div>
        </div>

        {/* Scroll line */}
        <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 [writing-mode:vertical-lr]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          STATEMENT — One powerful line, nothing else
          ═══════════════════════════════════════════════ */}
      <section className="py-32 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[var(--font-display)] text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-medium">
            Your home should feel like an extension of your <span className="text-[#8B6F47] italic">consciousness</span> &#8212; not a control panel you fight with every morning.
          </h2>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PHILOSOPHY — Asymmetric editorial layout
          ═══════════════════════════════════════════════ */}
      <section id="philosophy" className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Left column */}
            <div className="md:col-span-5 md:sticky md:top-24">
              <p className="text-xs tracking-[0.2em] uppercase text-[#A89F94] mb-6 font-medium">Philosophy</p>
              <h2 className="font-[var(--font-display)] text-4xl md:text-5xl leading-[1.1] font-medium mb-8">
                Your day has a rhythm.<br />
                <span className="text-[#8B6F47]">We help you find it.</span>
              </h2>
              <p className="text-[#6B6560] leading-[1.8] mb-6">
                In Vedic philosophy, Rta is the cosmic principle that governs the natural order &#8212; the rhythm beneath all things. We translated that ancient understanding into a modern tool for living with intention.
              </p>
              <p className="text-[#6B6560] leading-[1.8] mb-10">
                One intelligence. One interface. Your entire home breathing in unison.
              </p>
              <div className="flex gap-16">
                <div>
                  <p className="font-[var(--font-display)] text-4xl font-medium text-[#8B6F47]">93%</p>
                  <p className="text-sm text-[#A89F94] mt-1">less time on devices</p>
                </div>
                <div>
                  <p className="font-[var(--font-display)] text-4xl font-medium text-[#8B6F47]">4.9</p>
                  <p className="text-sm text-[#A89F94] mt-1">resident satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right column — stacked images */}
            <div className="md:col-span-7 flex flex-col gap-6">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop"
                  alt="Serene luxury living space"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80&auto=format&fit=crop"
                    alt="Architectural detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl bg-[#0B0D10] flex items-center justify-center relative overflow-hidden">
                  <span className="font-[var(--font-display)] text-8xl text-[#8B6F47]/30 font-light">&#2315;&#2340;</span>
                  <p className="absolute bottom-6 left-6 right-6 text-white/50 text-sm leading-relaxed">The Sanskrit symbol for cosmic order &#8212; the invisible law that holds everything in balance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CINEMATIC INTERLUDE
          ═══════════════════════════════════════════════ */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop"
          alt="Modern residence at dusk"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B0D10]/50 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="font-[var(--font-display)] text-3xl md:text-5xl lg:text-6xl text-white/90 max-w-3xl leading-tight font-light">
              Technology that knows<br />when to <span className="italic text-[#C9A96E]">disappear.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FEATURES — Immersive cards
          ═══════════════════════════════════════════════ */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-[#A89F94] mb-4 font-medium">What we offer</p>
            <h2 className="font-[var(--font-display)] text-4xl md:text-6xl font-medium">Three pillars of balance</h2>
          </div>

          {/* Feature 1 — Full width */}
          <div className="mb-8">
            <div className="relative group rounded-3xl overflow-hidden aspect-[21/9]">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80&auto=format&fit=crop"
                alt="Intelligent climate system"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10]/80 via-[#0B0D10]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 md:p-16">
                <span className="text-xs text-[#C9A96E] tracking-[0.2em] font-medium">01 &#8212; CLARITY</span>
                <h3 className="font-[var(--font-display)] text-3xl md:text-5xl text-white mt-3 mb-4 font-medium max-w-xl leading-tight">One intelligence.<br />Zero complexity.</h3>
                <p className="text-white/60 max-w-md leading-relaxed">Climate, lighting, and security unified into a single AI-orchestrated interface. No more switching between twelve apps.</p>
              </div>
            </div>
          </div>

          {/* Features 2 and 3 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80&auto=format&fit=crop"
                alt="Home that learns your rhythm"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/80 via-[#0B0D10]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10">
                <span className="text-xs text-[#C9A96E] tracking-[0.2em] font-medium">02 &#8212; HARMONY</span>
                <h3 className="font-[var(--font-display)] text-3xl text-white mt-3 mb-4 font-medium leading-tight">The invisible hand.</h3>
                <p className="text-white/60 max-w-sm leading-relaxed">Your home learns your rhythms. Anticipates your needs. Acts before you ask. The technology fades. The living remains.</p>
              </div>
            </div>

            <div className="relative group rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format&fit=crop"
                alt="Security and wellness"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/80 via-[#0B0D10]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10">
                <span className="text-xs text-[#C9A96E] tracking-[0.2em] font-medium">03 &#8212; PRESENCE</span>
                <h3 className="font-[var(--font-display)] text-3xl text-white mt-3 mb-4 font-medium leading-tight">Sanctuary, secured.</h3>
                <p className="text-white/60 max-w-sm leading-relaxed">Security that watches so you don&apos;t have to. Wellness insights that keep your world protected, measured, intentional.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          METRICS
          ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#0B0D10]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          <div className="text-center">
            <p className="font-[var(--font-display)] text-5xl md:text-6xl font-light text-[#C9A96E]">12K+</p>
            <p className="text-sm text-white/40 mt-3 tracking-wide">Residences managed</p>
          </div>
          <div className="text-center">
            <p className="font-[var(--font-display)] text-5xl md:text-6xl font-light text-[#C9A96E]">99.9%</p>
            <p className="text-sm text-white/40 mt-3 tracking-wide">Uptime reliability</p>
          </div>
          <div className="text-center">
            <p className="font-[var(--font-display)] text-5xl md:text-6xl font-light text-[#C9A96E]">40%</p>
            <p className="text-sm text-white/40 mt-3 tracking-wide">Energy reduction</p>
          </div>
          <div className="text-center">
            <p className="font-[var(--font-display)] text-5xl md:text-6xl font-light text-[#C9A96E]">4.9</p>
            <p className="text-sm text-white/40 mt-3 tracking-wide">Resident rating</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TESTIMONIALS
          ═══════════════════════════════════════════════ */}
      <section id="stories" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-[#A89F94] mb-4 font-medium">Stories</p>
            <h2 className="font-[var(--font-display)] text-4xl md:text-6xl font-medium">Living with intention</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0B0D10] rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">
              <span className="absolute top-8 right-10 font-[var(--font-display)] text-[8rem] text-white/[0.03] leading-none pointer-events-none">&ldquo;</span>
              <p className="text-xl md:text-2xl leading-relaxed text-white/80 mb-10 font-[var(--font-display)] font-light">We stopped thinking about our home the day Rta was installed. The temperature, the lights, the security &#8212; it&apos;s like the house breathes with us.</p>
              <div>
                <p className="font-medium text-[#C9A96E]">Arjun &amp; Kavya Mehta</p>
                <p className="text-sm text-white/40 mt-1">The Ritz-Carlton Residences, Mumbai</p>
              </div>
            </div>
            <div className="bg-[#F5F3EE] rounded-3xl p-10 md:p-14 relative overflow-hidden border border-[#E8E4DC]">
              <span className="absolute top-8 right-10 font-[var(--font-display)] text-[8rem] text-[#0B0D10]/[0.03] leading-none pointer-events-none">&ldquo;</span>
              <p className="text-xl md:text-2xl leading-relaxed text-[#4A4540] mb-10 font-[var(--font-display)] font-light">As someone who values both tradition and innovation, Rta feels like it was made for me. The intelligence is remarkable &#8212; it anticipated my needs within a week.</p>
              <div>
                <p className="font-medium text-[#8B6F47]">Sophia Rothschild</p>
                <p className="text-sm text-[#A89F94] mt-1">One Hyde Park, London</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FOUNDERS — Words only, no photos
          ═══════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-[#F5F3EE]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#A89F94] mb-8 font-medium">The architects</p>
          <h2 className="font-[var(--font-display)] text-3xl md:text-5xl lg:text-6xl leading-[1.15] font-medium mb-8 max-w-4xl mx-auto">
            &ldquo;We didn&apos;t build another smart home app. We built a <span className="text-[#8B6F47] italic">philosophy</span> of living.&rdquo;
          </h2>
          <p className="text-[#6B6560] leading-[1.8] max-w-2xl mx-auto mb-12">
            Rta Living was born from a simple observation: the more &ldquo;smart&rdquo; our homes became, the more complicated our lives got. We believe technology should serve the ancient principle of order &#8212; not create new chaos.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="text-center">
              <p className="font-[var(--font-display)] text-xl font-medium">Jawahar Naidu</p>
              <p className="text-sm text-[#A89F94] mt-1">Co-Founder &amp; Chief Architect</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#E8E4DC]" />
            <div className="text-center">
              <p className="font-[var(--font-display)] text-xl font-medium">Renukesh</p>
              <p className="text-sm text-[#A89F94] mt-1">Co-Founder &amp; Head of Engineering</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          DARK CTA
          ═══════════════════════════════════════════════ */}
      <section className="relative py-40 px-6 bg-[#0B0D10] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1920&q=80&auto=format&fit=crop"
            alt="Luxury interior at night"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-[var(--font-display)] text-[16rem] md:text-[24rem] text-[#8B6F47]/10 font-light leading-none">&#2315;&#2340;</span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-6 font-medium">The invitation</p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-medium mb-6 leading-[1.05]">Begin your journey<br />toward order.</h2>
          <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto leading-relaxed">Join the select residences already experiencing the future of intentional living.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-[#8B6F47] text-[#F5ECD8] font-medium rounded-lg hover:bg-[#A8845A] transition-all duration-300 text-sm">Request a consultation</button>
            <button className="px-10 py-4 border border-white/20 text-white/70 font-medium rounded-lg hover:border-white/50 hover:text-white transition-all duration-300 text-sm">Download brochure</button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════ */}
      <footer className="py-16 px-6 bg-[#0B0D10] text-white/40 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-[var(--font-display)] text-xl text-white font-semibold">Rta</span>
              <span className="text-xs tracking-[0.2em] uppercase text-white/60">Living</span>
            </div>
            <p className="text-sm leading-relaxed">Order, naturally.<br />A sanctuary of clarity.</p>
          </div>
          <div>
            <p className="text-white/60 text-sm font-medium mb-4">Platform</p>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Climate Intelligence</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Lighting Orchestration</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Security Presence</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Wellness Insights</a>
            </div>
          </div>
          <div>
            <p className="text-white/60 text-sm font-medium mb-4">Company</p>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm hover:text-white/70 transition-colors">About</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Philosophy</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Careers</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Press</a>
            </div>
          </div>
          <div>
            <p className="text-white/60 text-sm font-medium mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Contact</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Instagram</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">LinkedIn</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Newsletter</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">&copy; 2026 Rta Living. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs hover:text-white/70 transition-colors">Privacy</a>
            <a href="#" className="text-xs hover:text-white/70 transition-colors">Terms</a>
            <a href="#" className="text-xs hover:text-white/70 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
