import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#0B0D10] overflow-x-hidden">

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#FAF9F5]/80 border-b border-[#E8E4DC]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-[var(--font-display)] text-2xl tracking-tight font-semibold">Rta</span>
            <span className="text-xs tracking-[0.2em] uppercase text-[#6B6560] font-medium">Living</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#system" className="text-sm text-[#6B6560] hover:text-[#0B0D10] transition-colors">System</Link>
            <Link href="#hardware" className="text-sm text-[#6B6560] hover:text-[#0B0D10] transition-colors">Hardware</Link>
            <Link href="#intelligence" className="text-sm text-[#6B6560] hover:text-[#0B0D10] transition-colors">Intelligence</Link>
            <Link href="#stories" className="text-sm text-[#6B6560] hover:text-[#0B0D10] transition-colors">Stories</Link>
            <button className="px-5 py-2 bg-[#8B6F47] text-[#F5ECD8] text-sm font-medium rounded-lg hover:bg-[#6B5430] transition-colors">Request installation</button>
          </div>
        </div>
      </nav>

      <section className="relative h-screen flex items-end pb-16 px-6 pt-16">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80&auto=format&fit=crop" alt="Modern luxury residence" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-[#0B0D10]/50 to-transparent" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none select-none">
          <span className="font-[var(--font-display)] text-[20rem] md:text-[28rem] text-white/[0.03] font-light leading-none">&#2315;&#2340;</span>
        </div>
        <div className="relative z-10 max-w-4xl">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4 font-medium">Complete home intelligence system</p>
          <h1 className="font-[var(--font-display)] text-5xl md:text-7xl lg:text-9xl text-white leading-[0.95] font-medium mb-6">Your entire home.<br />One touch.</h1>
          <p className="text-lg text-white/60 max-w-lg leading-relaxed mb-8">Custom hardware. Anticipatory AI. Professional installation. Rta replaces every smart home app with a single brass panel on your wall.</p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3.5 bg-[#8B6F47] text-[#F5ECD8] text-sm font-medium rounded-lg hover:bg-[#A8845A] transition-all duration-300">Request installation</button>
            <button className="px-8 py-3.5 border border-white/20 text-white/70 text-sm font-medium rounded-lg hover:border-white/50 hover:text-white transition-all duration-300">Watch the film</button>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 [writing-mode:vertical-lr]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      <section className="py-28 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[var(--font-display)] text-3xl md:text-5xl lg:text-6xl leading-[1.1] font-medium">12 apps. 6 remotes. 4 voice assistants that don&apos;t talk to each other. <span className="text-[#8B6F47] italic">That&apos;s not a smart home. That&apos;s a complicated one.</span></h2>
        </div>
      </section>

      <section id="system" className="py-28 px-6 bg-[#0B0D10]">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-4 font-medium">The system</p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-6xl text-white font-medium mb-6">Six domains. One brain.</h2>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed mb-16">Every system in your home &#8212; from the lights to the locks &#8212; unified under a single intelligence that learns, adapts, and never needs a software update from you.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 hover:border-[#8B6F47]/40 transition-all duration-500">
              <div className="w-10 h-10 rounded-full bg-[#8B6F47]/20 flex items-center justify-center mb-6"><div className="w-3 h-3 rounded-full bg-[#C9A96E]" /></div>
              <h3 className="font-[var(--font-display)] text-xl text-white font-medium mb-3">Lighting</h3>
              <p className="text-white/40 text-sm leading-relaxed">Scenes, schedules, circadian rhythm. Your home matches the time of day without you ever touching a switch.</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 hover:border-[#8B6F47]/40 transition-all duration-500">
              <div className="w-10 h-10 rounded-full bg-[#8B6F47]/20 flex items-center justify-center mb-6"><div className="w-3 h-3 rounded-full bg-[#C9A96E]" /></div>
              <h3 className="font-[var(--font-display)] text-xl text-white font-medium mb-3">Climate</h3>
              <p className="text-white/40 text-sm leading-relaxed">Heating, cooling, ventilation, air quality. Every room at the temperature it should be, not the temperature it happens to be.</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 hover:border-[#8B6F47]/40 transition-all duration-500">
              <div className="w-10 h-10 rounded-full bg-[#8B6F47]/20 flex items-center justify-center mb-6"><div className="w-3 h-3 rounded-full bg-[#C9A96E]" /></div>
              <h3 className="font-[var(--font-display)] text-xl text-white font-medium mb-3">Security</h3>
              <p className="text-white/40 text-sm leading-relaxed">Cameras, locks, alarms, perimeter monitoring. Your car arrives &#8212; the gate opens, the path lights, the door unlocks.</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 hover:border-[#8B6F47]/40 transition-all duration-500">
              <div className="w-10 h-10 rounded-full bg-[#8B6F47]/20 flex items-center justify-center mb-6"><div className="w-3 h-3 rounded-full bg-[#C9A96E]" /></div>
              <h3 className="font-[var(--font-display)] text-xl text-white font-medium mb-3">Blinds &amp; curtains</h3>
              <p className="text-white/40 text-sm leading-relaxed">Motorized control of every window covering. Dawn breaks, blinds rise. Movie starts, blackout descends.</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 hover:border-[#8B6F47]/40 transition-all duration-500">
              <div className="w-10 h-10 rounded-full bg-[#8B6F47]/20 flex items-center justify-center mb-6"><div className="w-3 h-3 rounded-full bg-[#C9A96E]" /></div>
              <h3 className="font-[var(--font-display)] text-xl text-white font-medium mb-3">Entertainment</h3>
              <p className="text-white/40 text-sm leading-relaxed">Multi-room audio, television, streaming. One button: the projector drops, speakers activate, lights dim to cinema mode.</p>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 hover:border-[#8B6F47]/40 transition-all duration-500">
              <div className="w-10 h-10 rounded-full bg-[#8B6F47]/20 flex items-center justify-center mb-6"><div className="w-3 h-3 rounded-full bg-[#C9A96E]" /></div>
              <h3 className="font-[var(--font-display)] text-xl text-white font-medium mb-3">Appliances</h3>
              <p className="text-white/40 text-sm leading-relaxed">Coffee machine, oven, washer. Your alarm goes off &#8212; coffee starts brewing before your feet touch the floor.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="hardware" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#A89F94] mb-4 font-medium">The hardware</p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-6xl font-medium mb-6">Engineered to disappear.</h2>
          <p className="text-[#6B6560] text-lg max-w-2xl leading-relaxed mb-16">Every Rta device is designed for one purpose: to do its job so well you forget it exists. Machined brass. Hidden sensors. Silent actuators.</p>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="aspect-square bg-[#0B0D10] rounded-3xl flex items-center justify-center relative overflow-hidden">
              <div className="w-48 h-72 rounded-2xl border-2 border-[#8B6F47]/40 bg-gradient-to-b from-[#B8956F] via-[#8B6F47] to-[#6B5430] flex flex-col items-center justify-center gap-5 p-6">
                <div className="text-[8px] tracking-[0.3em] uppercase text-white/40">Rta</div>
                <div className="flex gap-3"><div className="w-8 h-8 rounded-full border border-white/20 bg-white/10" /><div className="w-8 h-8 rounded-full border border-white/20 bg-white/10" /></div>
                <div className="w-24 h-0.5 bg-white/10 rounded" />
                <div className="flex gap-3"><div className="w-8 h-8 rounded-full border border-white/20 bg-white/10" /><div className="w-8 h-8 rounded-full border border-white/20 bg-white/10" /></div>
                <div className="w-24 h-0.5 bg-white/10 rounded" />
                <div className="flex gap-3"><div className="w-8 h-8 rounded-full border border-white/20 bg-white/10" /><div className="w-8 h-8 rounded-full border border-white/20 bg-white/10" /></div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-center"><p className="text-white/30 text-xs">Actual size: 86 &#215; 146 mm</p></div>
            </div>
            <div>
              <span className="text-xs text-[#C9A96E] tracking-[0.2em] font-medium uppercase">Flagship</span>
              <h3 className="font-[var(--font-display)] text-3xl md:text-4xl font-medium mt-2 mb-4">Rta brass panel</h3>
              <p className="text-[#6B6560] leading-[1.8] mb-6">Machined from solid brass, aged to a warm patina. No screen. No glowing LEDs. Just six haptic buttons you can find in the dark. Each press sends a subtle vibration confirming the action.</p>
              <p className="text-[#6B6560] leading-[1.8] mb-8">Top row controls lighting and climate. Middle row handles blinds and locks. Bottom row triggers scenes &#8212; one-touch presets that the AI learns from your habits.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 bg-[#F5F3EE] rounded-full text-[#6B6560] border border-[#E8E4DC]">Solid brass</span>
                <span className="text-xs px-3 py-1.5 bg-[#F5F3EE] rounded-full text-[#6B6560] border border-[#E8E4DC]">Haptic feedback</span>
                <span className="text-xs px-3 py-1.5 bg-[#F5F3EE] rounded-full text-[#6B6560] border border-[#E8E4DC]">Thread / Zigbee</span>
                <span className="text-xs px-3 py-1.5 bg-[#F5F3EE] rounded-full text-[#6B6560] border border-[#E8E4DC]">5-year battery</span>
                <span className="text-xs px-3 py-1.5 bg-[#F5F3EE] rounded-full text-[#6B6560] border border-[#E8E4DC]">IP44 rated</span>
                <span className="text-xs px-3 py-1.5 bg-[#F5F3EE] rounded-full text-[#6B6560] border border-[#E8E4DC]">OTA updates</span>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#F5F3EE] rounded-2xl p-8 border border-[#E8E4DC]">
              <div className="w-10 h-10 rounded-xl bg-[#0B0D10] flex items-center justify-center mb-6"><div className="w-2 h-2 rounded-full bg-[#C9A96E]" /></div>
              <h4 className="font-[var(--font-display)] text-lg font-medium mb-2">Sensors</h4>
              <p className="text-[#6B6560] text-sm leading-relaxed">Temperature, motion, air quality, ambient light. Hidden behind walls and ceilings.</p>
            </div>
            <div className="bg-[#F5F3EE] rounded-2xl p-8 border border-[#E8E4DC]">
              <div className="w-10 h-10 rounded-xl bg-[#0B0D10] flex items-center justify-center mb-6"><div className="w-2 h-2 rounded-full bg-[#C9A96E]" /></div>
              <h4 className="font-[var(--font-display)] text-lg font-medium mb-2">Controllers</h4>
              <p className="text-[#6B6560] text-sm leading-relaxed">Relay modules, dimmers, IR blasters. Installed inside your electrical panel.</p>
            </div>
            <div className="bg-[#F5F3EE] rounded-2xl p-8 border border-[#E8E4DC]">
              <div className="w-10 h-10 rounded-xl bg-[#0B0D10] flex items-center justify-center mb-6"><div className="w-2 h-2 rounded-full bg-[#C9A96E]" /></div>
              <h4 className="font-[var(--font-display)] text-lg font-medium mb-2">Actuators</h4>
              <p className="text-[#6B6560] text-sm leading-relaxed">Blind motors, smart lock modules, valve controllers. The muscles of your home.</p>
            </div>
            <div className="bg-[#F5F3EE] rounded-2xl p-8 border border-[#E8E4DC]">
              <div className="w-10 h-10 rounded-xl bg-[#0B0D10] flex items-center justify-center mb-6"><div className="w-2 h-2 rounded-full bg-[#C9A96E]" /></div>
              <h4 className="font-[var(--font-display)] text-lg font-medium mb-2">Rta Hub</h4>
              <p className="text-[#6B6560] text-sm leading-relaxed">On-premise brain. Real-time control and offline routines. Works without internet.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[70vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop" alt="Residence at dusk" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0B0D10]/50 flex items-center justify-center">
          <p className="font-[var(--font-display)] text-3xl md:text-5xl lg:text-6xl text-white/90 text-center max-w-3xl leading-tight font-light px-6">The spine keeps your home alive.<br />The mind makes it <span className="italic text-[#C9A96E]">intelligent.</span></p>
        </div>
      </section>

      <section id="intelligence" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="md:sticky md:top-24">
              <p className="text-xs tracking-[0.2em] uppercase text-[#A89F94] mb-4 font-medium">The intelligence</p>
              <h2 className="font-[var(--font-display)] text-4xl md:text-5xl leading-[1.1] font-medium mb-6">It learns. Then it asks. Then it disappears.</h2>
              <p className="text-[#6B6560] leading-[1.8] mb-6">Rta never surprises you. It observes your patterns for days, detects routines, then asks permission before automating anything new. Once approved, the routine runs silently &#8212; forever.</p>
              <p className="text-[#6B6560] leading-[1.8]">This is not a voice assistant waiting for commands. This is an intelligence that knows what you need before you do.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-[#F5F3EE] rounded-2xl p-6 border border-[#E8E4DC]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#E8E4DC] flex items-center justify-center text-xs font-medium text-[#6B6560]">1</span>
                  <span className="text-xs tracking-[0.15em] uppercase text-[#A89F94] font-medium">Observe &#183; Week 1</span>
                </div>
                <p className="text-sm text-[#4A4540] leading-relaxed">Rta watches: you dim the living room to 40% at 9:15 PM every evening. It says nothing. It just learns.</p>
              </div>
              <div className="bg-[#F5F3EE] rounded-2xl p-6 border border-[#E8E4DC]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#E8E4DC] flex items-center justify-center text-xs font-medium text-[#6B6560]">2</span>
                  <span className="text-xs tracking-[0.15em] uppercase text-[#A89F94] font-medium">Detect &#183; Day 6</span>
                </div>
                <p className="text-sm text-[#4A4540] leading-relaxed">Pattern confirmed: &ldquo;Dim living room to 40% at approximately 9:15 PM&rdquo; &#8212; detected 5 out of 5 evenings.</p>
              </div>
              <div className="bg-[#0B0D10] rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#8B6F47]/30 flex items-center justify-center text-xs font-medium text-[#C9A96E]">3</span>
                  <span className="text-xs tracking-[0.15em] uppercase text-[#C9A96E] font-medium">Ask permission &#183; Day 7</span>
                </div>
                <div className="bg-white/[0.06] rounded-xl p-4 border border-white/[0.08]">
                  <p className="text-sm text-white/70 mb-3">&ldquo;I noticed you dim the living room every evening around 9:15. Shall I do this automatically?&rdquo;</p>
                  <div className="flex gap-2">
                    <span className="text-xs px-4 py-1.5 bg-[#8B6F47] text-[#F5ECD8] rounded-lg">Yes, automate</span>
                    <span className="text-xs px-4 py-1.5 border border-white/20 text-white/50 rounded-lg">Not yet</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#F5F3EE] rounded-2xl p-6 border border-[#E8E4DC]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#8B6F47]/20 flex items-center justify-center text-xs font-medium text-[#8B6F47]">&#10003;</span>
                  <span className="text-xs tracking-[0.15em] uppercase text-[#8B6F47] font-medium">Automated &#183; Day 8+</span>
                </div>
                <p className="text-sm text-[#4A4540] leading-relaxed">Approved. The living room now dims itself every evening. You never touch the switch again. The routine lives on the local hub &#8212; it works even if the internet goes down.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-[#0B0D10]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-4 font-medium">The architecture</p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl text-white font-medium mb-16">Two layers. Unbreakable.</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-10">
              <span className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] font-medium">The spine</span>
              <h3 className="font-[var(--font-display)] text-2xl text-white font-medium mt-2 mb-4">Rta Hub (on-premise)</h3>
              <p className="text-white/50 leading-[1.7] mb-6">Lives in your home. Handles real-time device control, offline routine execution, and local security fallback. If the internet dies, your home keeps running.</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" /><span className="text-sm text-white/40">Sub-50ms response time</span></div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" /><span className="text-sm text-white/40">Full offline operation</span></div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" /><span className="text-sm text-white/40">Encrypted local mesh</span></div>
              </div>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-10">
              <span className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] font-medium">The mind</span>
              <h3 className="font-[var(--font-display)] text-2xl text-white font-medium mt-2 mb-4">Rta Cloud Brain</h3>
              <p className="text-white/50 leading-[1.7] mb-6">Lives in the cloud. Handles pattern learning, anomaly detection, new routine proposals, and remote access from anywhere in the world.</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" /><span className="text-sm text-white/40">Learns your rhythm in days</span></div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" /><span className="text-sm text-white/40">Asks before automating</span></div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" /><span className="text-sm text-white/40">Remote access worldwide</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><p className="font-[var(--font-display)] text-4xl md:text-5xl font-light text-[#8B6F47]">&lt;50ms</p><p className="text-sm text-[#A89F94] mt-3">Response time</p></div>
          <div><p className="font-[var(--font-display)] text-4xl md:text-5xl font-light text-[#8B6F47]">100%</p><p className="text-sm text-[#A89F94] mt-3">Offline capable</p></div>
          <div><p className="font-[var(--font-display)] text-4xl md:text-5xl font-light text-[#8B6F47]">6</p><p className="text-sm text-[#A89F94] mt-3">Domains controlled</p></div>
          <div><p className="font-[var(--font-display)] text-4xl md:text-5xl font-light text-[#8B6F47]">1</p><p className="text-sm text-[#A89F94] mt-3">Touch to control all</p></div>
        </div>
      </section>

      <section id="stories" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#A89F94] mb-4 font-medium">Stories</p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-6xl font-medium mb-16">Living with intention</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0B0D10] rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">
              <span className="absolute top-6 right-8 font-[var(--font-display)] text-[8rem] text-white/[0.03] leading-none pointer-events-none">&ldquo;</span>
              <p className="text-xl md:text-2xl leading-relaxed text-white/80 mb-10 font-[var(--font-display)] font-light">The brass panel changed everything. My children can control any room with one button. No screens, no apps, no arguments about who has the remote.</p>
              <div><p className="font-medium text-[#C9A96E]">Arjun &amp; Kavya Mehta</p><p className="text-sm text-white/40 mt-1">The Ritz-Carlton Residences, Mumbai</p></div>
            </div>
            <div className="bg-[#F5F3EE] rounded-3xl p-10 md:p-14 relative overflow-hidden border border-[#E8E4DC]">
              <span className="absolute top-6 right-8 font-[var(--font-display)] text-[8rem] text-[#0B0D10]/[0.03] leading-none pointer-events-none">&ldquo;</span>
              <p className="text-xl md:text-2xl leading-relaxed text-[#4A4540] mb-10 font-[var(--font-display)] font-light">Rta asked me if it should start my coffee when my alarm goes off. I said yes. That was three months ago. I haven&apos;t touched the machine since.</p>
              <div><p className="font-medium text-[#8B6F47]">Sophia Rothschild</p><p className="text-sm text-[#A89F94] mt-1">One Hyde Park, London</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-[#F5F3EE]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-[#A89F94] mb-4 font-medium">The process</p>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl font-medium">White-glove installation</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#0B0D10] text-[#C9A96E] flex items-center justify-center mx-auto mb-4 font-[var(--font-display)] text-lg font-medium">1</div>
              <h4 className="font-[var(--font-display)] text-lg font-medium mb-2">Consultation</h4>
              <p className="text-sm text-[#6B6560] leading-relaxed">We survey your home, understand your lifestyle, and design a system map tailored to every room.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#0B0D10] text-[#C9A96E] flex items-center justify-center mx-auto mb-4 font-[var(--font-display)] text-lg font-medium">2</div>
              <h4 className="font-[var(--font-display)] text-lg font-medium mb-2">Installation</h4>
              <p className="text-sm text-[#6B6560] leading-relaxed">Professional technicians install every sensor, controller, actuator, and brass panel. Typically 2&#8211;3 days.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#0B0D10] text-[#C9A96E] flex items-center justify-center mx-auto mb-4 font-[var(--font-display)] text-lg font-medium">3</div>
              <h4 className="font-[var(--font-display)] text-lg font-medium mb-2">Calibration</h4>
              <p className="text-sm text-[#6B6560] leading-relaxed">Rta observes your home for 7 days. Learns the rhythms. Begins proposing its first automations.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#8B6F47] text-[#F5ECD8] flex items-center justify-center mx-auto mb-4 font-[var(--font-display)] text-lg font-medium">&#10003;</div>
              <h4 className="font-[var(--font-display)] text-lg font-medium mb-2">Living</h4>
              <p className="text-sm text-[#6B6560] leading-relaxed">Your home is now alive. It learns more each week. You do less each day. That&apos;s the promise.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#A89F94] mb-8 font-medium">The architects</p>
          <h2 className="font-[var(--font-display)] text-3xl md:text-5xl lg:text-6xl leading-[1.15] font-medium mb-8 max-w-4xl mx-auto">&ldquo;We didn&apos;t build another smart home app. We built the entire system &#8212; from the brass on your wall to the cloud that thinks for you.&rdquo;</h2>
          <p className="text-[#6B6560] leading-[1.8] max-w-2xl mx-auto mb-12">Rta Living was born from a refusal to accept the status quo. Smart homes aren&apos;t smart. They&apos;re fragmented. We built a complete system &#8212; hardware, software, intelligence &#8212; because the only way to make a home truly intelligent is to control every layer.</p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="text-center"><p className="font-[var(--font-display)] text-xl font-medium">Jawahar Naidu</p><p className="text-sm text-[#A89F94] mt-1">Co-Founder &amp; Chief Architect</p></div>
            <div className="hidden sm:block w-px h-12 bg-[#E8E4DC]" />
            <div className="text-center"><p className="font-[var(--font-display)] text-xl font-medium">Renukesh</p><p className="text-sm text-[#A89F94] mt-1">Co-Founder &amp; Head of Engineering</p></div>
          </div>
        </div>
      </section>

      <section className="relative py-36 px-6 bg-[#0B0D10] overflow-hidden">
        <div className="absolute inset-0 opacity-10"><img src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1920&q=80&auto=format&fit=crop" alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"><span className="font-[var(--font-display)] text-[16rem] md:text-[24rem] text-[#8B6F47]/10 font-light leading-none">&#2315;&#2340;</span></div>
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-6 font-medium">The invitation</p>
          <h2 className="font-[var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-medium mb-6 leading-[1.05]">Ready to hand your home<br />a brain?</h2>
          <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto leading-relaxed">Professional consultation. Custom design. White-glove installation. Your home will never be the same.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-[#8B6F47] text-[#F5ECD8] font-medium rounded-lg hover:bg-[#A8845A] transition-all duration-300 text-sm">Request installation</button>
            <button className="px-10 py-4 border border-white/20 text-white/70 font-medium rounded-lg hover:border-white/50 hover:text-white transition-all duration-300 text-sm">Download brochure</button>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 bg-[#0B0D10] text-white/40 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4"><span className="font-[var(--font-display)] text-xl text-white font-semibold">Rta</span><span className="text-xs tracking-[0.2em] uppercase text-white/60">Living</span></div>
            <p className="text-sm leading-relaxed">Your entire home.<br />One touch.</p>
          </div>
          <div>
            <p className="text-white/60 text-sm font-medium mb-4">System</p>
            <div className="flex flex-col gap-3"><a href="#" className="text-sm hover:text-white/70 transition-colors">Lighting</a><a href="#" className="text-sm hover:text-white/70 transition-colors">Climate</a><a href="#" className="text-sm hover:text-white/70 transition-colors">Security</a><a href="#" className="text-sm hover:text-white/70 transition-colors">Entertainment</a></div>
          </div>
          <div>
            <p className="text-white/60 text-sm font-medium mb-4">Hardware</p>
            <div className="flex flex-col gap-3"><a href="#" className="text-sm hover:text-white/70 transition-colors">Brass panels</a><a href="#" className="text-sm hover:text-white/70 transition-colors">Sensors</a><a href="#" className="text-sm hover:text-white/70 transition-colors">Controllers</a><a href="#" className="text-sm hover:text-white/70 transition-colors">Rta Hub</a></div>
          </div>
          <div>
            <p className="text-white/60 text-sm font-medium mb-4">Company</p>
            <div className="flex flex-col gap-3"><a href="#" className="text-sm hover:text-white/70 transition-colors">About</a><a href="#" className="text-sm hover:text-white/70 transition-colors">Installation</a><a href="#" className="text-sm hover:text-white/70 transition-colors">Contact</a><a href="#" className="text-sm hover:text-white/70 transition-colors">Press</a></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">&copy; 2026 Rta Living. All rights reserved.</p>
          <div className="flex gap-6"><a href="#" className="text-xs hover:text-white/70 transition-colors">Privacy</a><a href="#" className="text-xs hover:text-white/70 transition-colors">Terms</a></div>
        </div>
      </footer>
    </main>
  );
}
