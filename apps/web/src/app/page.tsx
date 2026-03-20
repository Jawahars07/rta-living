import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#0B0D10]">
      {/* ─── Navigation ─── */}
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

      {/* ─── Hero Section with Unsplash Background ─── */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80&auto=format&fit=crop"
            alt="Luxury modern home interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F5]/90 via-[#FAF9F5]/70 to-[#FAF9F5]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#A89F94] mb-6 font-medium">The Vedic principle of cosmic order</p>
          <h1 className="font-[var(--font-display)] text-5xl md:text-7xl lg:text-8xl text-center max-w-4xl leading-[1.05] font-medium mb-8">Order, naturally.</h1>
          <p className="text-lg md:text-xl text-[#6B6560] text-center max-w-xl mx-auto leading-relaxed mb-12">Rta Living arranges your world so you don&apos;t have to. A sanctuary of clarity in the noise of modern life.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-[#8B6F47] text-[#F5ECD8] text-sm font-medium rounded-lg hover:bg-[#6B5430] transition-all duration-300">Begin your journey</button>
            <button className="px-8 py-3.5 border border-[#C4BFB8] text-[#6B6560] text-sm font-medium rounded-lg hover:border-[#0B0D10] hover:text-[#0B0D10] transition-all">Learn more</button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs tracking-widest uppercase text-[#A89F94]">Scroll</span>
          <div className="w-px h-8 bg-[#A89F94]" />
        </div>
      </section>

      {/* ─── Philosophy Section ─── */}
      <section id="philosophy" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#A89F94] mb-4 font-medium">The philosophy</p>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl leading-[1.1] font-medium mb-6">Your day has a rhythm. <span className="text-[#8B6F47]">We help you find it.</span></h2>
            <p className="text-[#6B6560] leading-[1.7] max-w-md mb-8">In Vedic philosophy, Ṛta is the cosmic principle that governs the natural order. We translated that ancient understanding into a modern tool for living with intention.</p>
            <div className="flex gap-12">
              <div>
                <p className="font-[var(--font-display)] text-3xl font-medium text-[#8B6F47]">93%</p>
                <p className="text-sm text-[#A89F94] mt-1">less time managing devices</p>
              </div>
              <div>
                <p className="font-[var(--font-display)] text-3xl font-medium text-[#8B6F47]">4.9</p>
                <p className="text-sm text-[#A89F94] mt-1">resident satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop"
                alt="Serene luxury interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#FAF9F5] border border-[#E8E4DC] rounded-xl p-6 shadow-lg">
              <span className="font-[var(--font-display)] text-5xl text-[#C9A96E] opacity-40 font-light">ऋत</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Visual Interlude ─── */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop"
          alt="Modern luxury residence exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0B0D10]/40 flex items-center justify-center">
          <p className="font-[var(--font-display)] text-3xl md:text-5xl text-white/90 text-center max-w-2xl leading-tight font-light px-6">
            Technology that knows when to <span className="italic">disappear.</span>
          </p>
        </div>
      </section>

      {/* ─── Features Section ─── */}
      <section id="features" className="py-32 px-6 bg-[#F5F3EE]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.2em] uppercase text-[#A89F94] mb-4 font-medium">What we offer</p>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl font-medium">Three pillars of balance</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: Clarity */}
            <div className="group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&auto=format&fit=crop"
                  alt="Smart lighting in luxury home"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="text-xs text-[#C9A96E] tracking-[0.15em] font-medium">01</span>
              <h3 className="font-[var(--font-display)] text-2xl mt-2 mb-3 font-medium">Clarity</h3>
              <p className="text-[#6B6560] leading-relaxed">Climate, lighting, and security unified into a single intelligence. No more switching between apps.</p>
            </div>
            {/* Feature 2: Harmony */}
            <div className="group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80&auto=format&fit=crop"
                  alt="Harmonious living space"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="text-xs text-[#C9A96E] tracking-[0.15em] font-medium">02</span>
              <h3 className="font-[var(--font-display)] text-2xl mt-2 mb-3 font-medium">Harmony</h3>
              <p className="text-[#6B6560] leading-relaxed">Your home learns your rhythms and anticipates your needs before you voice them. The invisible hand.</p>
            </div>
            {/* Feature 3: Presence */}
            <div className="group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80&auto=format&fit=crop"
                  alt="Peaceful home environment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="text-xs text-[#C9A96E] tracking-[0.15em] font-medium">03</span>
              <h3 className="font-[var(--font-display)] text-2xl mt-2 mb-3 font-medium">Presence</h3>
              <p className="text-[#6B6560] leading-relaxed">Security that watches so you don&apos;t have to. Wellness insights that keep your sanctuary protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Metrics Strip ─── */}
      <section className="py-20 px-6 bg-[#0B0D10] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="font-[var(--font-display)] text-4xl md:text-5xl font-light text-[#C9A96E]">12K+</p>
            <p className="text-sm text-white/50 mt-2">Residences managed</p>
          </div>
          <div>
            <p className="font-[var(--font-display)] text-4xl md:text-5xl font-light text-[#C9A96E]">99.9%</p>
            <p className="text-sm text-white/50 mt-2">Uptime reliability</p>
          </div>
          <div>
            <p className="font-[var(--font-display)] text-4xl md:text-5xl font-light text-[#C9A96E]">40%</p>
            <p className="text-sm text-white/50 mt-2">Energy savings</p>
          </div>
          <div>
            <p className="font-[var(--font-display)] text-4xl md:text-5xl font-light text-[#C9A96E]">4.9★</p>
            <p className="text-sm text-white/50 mt-2">Resident rating</p>
          </div>
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <section id="testimonials" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-[#A89F94] mb-4 font-medium">Stories</p>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl font-medium">Living with intention</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F5F3EE] rounded-2xl p-10 border border-[#E8E4DC]">
              <p className="text-lg leading-relaxed text-[#4A4540] mb-8">&ldquo;We stopped thinking about our home the day Rta was installed. Everything just works — the temperature, the lights, the security. It&apos;s like the house breathes with us.&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8E4DC] flex items-center justify-center">
                  <span className="text-sm font-medium text-[#8B6F47]">AK</span>
                </div>
                <div>
                  <p className="font-medium text-sm">Arjun & Kavya Mehta</p>
                  <p className="text-xs text-[#A89F94]">The Ritz-Carlton Residences, Mumbai</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F5F3EE] rounded-2xl p-10 border border-[#E8E4DC]">
              <p className="text-lg leading-relaxed text-[#4A4540] mb-8">&ldquo;As someone who values both tradition and innovation, Rta feels like it was made for me. The intelligence is remarkable — it anticipated my needs within a week.&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E8E4DC] flex items-center justify-center">
                  <span className="text-sm font-medium text-[#8B6F47]">SR</span>
                </div>
                <div>
                  <p className="font-medium text-sm">Sophia Rothschild</p>
                  <p className="text-xs text-[#A89F94]">One Hyde Park, London</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Founder Section with Portrait ─── */}
      <section className="py-32 px-6 bg-[#F5F3EE]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop"
              alt="Founder portrait"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#A89F94] mb-4 font-medium">The vision</p>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl leading-[1.2] font-medium mb-6">&ldquo;We didn&apos;t build another smart home app. We built a philosophy of living.&rdquo;</h2>
            <p className="text-[#6B6560] leading-[1.7] mb-6">Rta Living was born from a simple observation: the more &ldquo;smart&rdquo; our homes became, the more complicated our lives got. We believe technology should serve the ancient principle of order — not create new chaos.</p>
            <div className="border-t border-[#E8E4DC] pt-6">
              <p className="font-medium">Jawahar Naidu</p>
              <p className="text-sm text-[#A89F94]">Founder & Chief Architect</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Dark CTA Section ─── */}
      <section className="py-32 px-6 bg-[#0B0D10] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1920&q=80&auto=format&fit=crop"
            alt="Background texture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="font-[var(--font-display)] text-7xl md:text-9xl text-[#8B6F47] opacity-20 font-light block mb-8">ऋत</span>
          <h2 className="font-[var(--font-display)] text-4xl md:text-6xl font-medium mb-6 leading-tight">Begin your journey toward order.</h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">Join the select residences already experiencing the future of intentional living.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-[#8B6F47] text-[#F5ECD8] font-medium rounded-lg hover:bg-[#A8845A] transition-all duration-300">Request a consultation</button>
            <button className="px-10 py-4 border border-white/20 text-white/80 font-medium rounded-lg hover:border-white/50 hover:text-white transition-all">Download brochure</button>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="py-16 px-6 bg-[#0B0D10] text-white/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-[var(--font-display)] text-xl text-white font-semibold">Rta</span>
              <span className="text-xs tracking-[0.2em] uppercase text-white/60">Living</span>
            </div>
            <p className="text-sm leading-relaxed">Order, naturally.<br />A sanctuary of clarity.</p>
          </div>
          <div>
            <p className="text-white/60 text-sm font-medium mb-4">Platform</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Climate Intelligence</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Lighting Orchestration</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Security Presence</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Wellness Insights</a>
            </div>
          </div>
          <div>
            <p className="text-white/60 text-sm font-medium mb-4">Company</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm hover:text-white/70 transition-colors">About</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Philosophy</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Careers</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Press</a>
            </div>
          </div>
          <div>
            <p className="text-white/60 text-sm font-medium mb-4">Connect</p>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Contact</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Instagram</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">LinkedIn</a>
              <a href="#" className="text-sm hover:text-white/70 transition-colors">Newsletter</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
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
