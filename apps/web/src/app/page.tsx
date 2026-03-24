"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

/* ─────────────────────────── Easing curves ────────────────────────────── */
type Bez = [number, number, number, number];
const LUX:  Bez = [0.16, 1, 0.3, 1];
const EXPO: Bez = [0.87, 0, 0.13, 1];

/* ─────────────────────────── Shared variants ──────────────────────────── */

/** Scroll-triggered fade-up. Pass `custom={index}` for stagger offset. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden:  { opacity: 0, y: 26 },
  visible: (d: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: LUX, delay: d * 0.13 },
  }),
};

/** Stagger container — wraps grid children */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const staggerWrap: any = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.06 } },
};

/** Uniform grid child (used inside staggerWrap) */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const gridItem: any = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.60, ease: LUX } },
};

/** Testimonial slide direction variants */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const testimonialVariants: any = {
  enter:  (d: number) => ({ opacity: 0, y: d * 18 }),
  center: { opacity: 1, y: 0 },
  exit:   (d: number) => ({ opacity: 0, y: -d * 18 }),
};

/* ─────────────────────────── Animated counter ─────────────────────────── */
function AnimatedNumber({
  value,
  prefix = "",
}: {
  value: number;
  prefix?: string;
}) {
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 2200;
    const t0  = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 4)) * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{prefix}{count}</span>;
}

/* ─────────────────────────── Parallax interlude ───────────────────────── */
function InterludeSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: "70vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop"
        alt="Residence at dusk"
        style={{
          y: imgY,
          position: "absolute",
          width: "100%",
          height: "120%",
          objectFit: "cover",
          top: "-10%",
          left: 0,
        }}
      />
      <div className="interlude-overlay" />
      <motion.p
        className="interlude-text"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 1.1, ease: LUX }}
      >
        The spine keeps your home alive.<br />
        The mind makes it <em>intelligent.</em>
      </motion.p>
    </section>
  );
}

/* ─────────────────────────── Testimonial carousel ─────────────────────── */
const TESTIMONIALS = [
  {
    q: "The brass panel changed everything. My children can control any room with one button. No screens, no apps, no arguments about the remote.",
    n: "Arjun & Kavya Mehta",
    l: "The Ritz-Carlton Residences, Mumbai",
  },
  {
    q: "Rta asked me if it should start my coffee when my alarm goes off. I said yes. That was three months ago. I haven\u2019t touched the machine since.",
    n: "Sophia Rothschild",
    l: "One Hyde Park, London",
  },
  {
    q: "I travel 280 days a year. Rta runs my homes in Mumbai and London as if I never left.",
    n: "Priya Desai",
    l: "Dual Residence, Mumbai & London",
  },
];

function TestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [dir,    setDir]    = useState(1);

  const go = (i: number) => {
    setDir(i > active ? 1 : -1);
    setActive(i);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      custom={1}
      style={{ position: "relative", zIndex: 1 }}
    >
      <div style={{ position: "relative", minHeight: 200 }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={active}
            custom={dir}
            variants={testimonialVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: LUX }}
            style={{ textAlign: "center", padding: "0 1rem" }}
          >
            <div className="voice-q">&ldquo;{TESTIMONIALS[active].q}&rdquo;</div>
            <p className="voice-n">{TESTIMONIALS[active].n}</p>
            <p className="voice-l">{TESTIMONIALS[active].l}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="v-dots">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            className={`v-dot ${i === active ? "on" : ""}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────── Main page ────────────────────────────────── */
export default function Home() {
  const [gateOpen, setGateOpen] = useState(false);
  const [gateDone, setGateDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setGateOpen(true),  2400);
    const t2 = setTimeout(() => setGateDone(true), 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <>
      {/* ──────────────────────────── GLOBAL STYLES ──────────────────────── */}
      <style jsx global>{`
        :root {
          --brass:#8B6F47;--brass-light:#A8935F;--brass-pale:#C4B08A;--brass-deep:#6B5A3E;
          --gold:#D4A853;--gold-dim:rgba(212,168,83,0.06);
          --cream:#FAF8F5;--ivory:#F5F1EC;--pearl:#FDFCFA;
          --charcoal:#1A1A1A;--stone:#2C2A26;--obsidian:#0D0D0C;--ink:#141413;
          --mist:#E8E4DE;--silk:#D4CFC7;--ash:#9A968E;
          --fd:'Cormorant Garamond',Georgia,serif;
          --fb:'Manrope',system-ui,sans-serif;
          --lux:cubic-bezier(0.16,1,0.3,1);
          --expo:cubic-bezier(0.87,0,0.13,1);
        }
        html{overflow-x:hidden;font-size:16px;scroll-behavior:smooth}
        body{font-family:var(--fb);background:var(--cream);color:var(--charcoal);overflow-x:hidden;-webkit-font-smoothing:antialiased;margin:0;padding:0}
        ::selection{background:var(--brass);color:var(--cream)}

        .nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:0 clamp(1.5rem,4vw,3rem);height:60px;display:flex;align-items:center;justify-content:space-between;backdrop-filter:blur(20px);background:rgba(250,248,245,0.8);border-bottom:1px solid rgba(232,228,222,0.5)}
        .logo{font-family:var(--fd);font-size:1.3rem;font-weight:600;color:var(--charcoal);text-decoration:none}
        .logo b{color:var(--brass)}
        .nav-links{display:flex;gap:2rem;align-items:center}
        .nav-links a{font-size:0.78rem;font-weight:500;color:var(--ash);text-decoration:none;letter-spacing:0.03em;transition:color 0.3s}
        .nav-links a:hover{color:var(--charcoal)}
        .nav-cta{padding:0.5rem 1.4rem;background:var(--brass);color:var(--cream);font-size:0.72rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;border:none;border-radius:4px;cursor:pointer;transition:background 0.3s}
        .nav-cta:hover{background:var(--brass-deep)}
        @media(max-width:768px){.nav-links{display:none}}

        .tag{font-size:0.65rem;font-weight:600;letter-spacing:0.3em;text-transform:uppercase;color:var(--brass);margin-bottom:1.2rem}
        .h2{font-family:var(--fd);font-size:clamp(2.2rem,5vw,4rem);font-weight:400;line-height:1.1;margin-bottom:1.5rem}
        .body{font-size:0.88rem;line-height:1.7;color:var(--ash);max-width:500px}

        .sec{padding:clamp(5rem,10vw,8rem) clamp(1.5rem,5vw,4rem)}
        .sec-dk{background:var(--obsidian);color:var(--cream)}
        .sec-dk .tag{color:var(--brass-pale)}
        .sec-dk .body{color:rgba(250,248,245,0.45)}
        .sec-iv{background:var(--ivory)}
        .sec-pe{background:var(--pearl)}
        .mw{max-width:1200px;margin:0 auto}

        .hero{position:relative;min-height:100vh;display:flex;align-items:flex-end;padding:0 clamp(1.5rem,5vw,4rem) clamp(3rem,6vw,5rem);overflow:hidden}
        .hero-bg{position:absolute;inset:0;z-index:0}
        .hero-bg img{width:100%;height:100%;object-fit:cover}
        .hero-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(13,13,12,0.9) 0%,rgba(13,13,12,0.4) 40%,transparent 70%)}
        .hero-content{position:relative;z-index:2;max-width:700px;padding-bottom:2rem}
        .hero-tag{font-size:0.6rem;font-weight:600;letter-spacing:0.35em;text-transform:uppercase;color:var(--brass-pale);margin-bottom:1.2rem}
        .hero-h1{font-family:var(--fd);font-size:clamp(3rem,8vw,6.5rem);font-weight:400;line-height:0.95;color:var(--cream);margin-bottom:1.2rem}
        .hero-p{font-size:0.95rem;line-height:1.7;color:rgba(250,248,245,0.55);max-width:440px;margin-bottom:2rem}
        .hero-btns{display:flex;gap:0.8rem;flex-wrap:wrap}
        .btn-p{padding:0.75rem 2rem;background:var(--brass);color:var(--cream);font-size:0.72rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;border:none;border-radius:4px;cursor:pointer;transition:all 0.3s}
        .btn-p:hover{background:var(--brass-light)}
        .btn-s{padding:0.75rem 2rem;background:transparent;color:rgba(250,248,245,0.6);font-size:0.72rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;border:1px solid rgba(250,248,245,0.15);border-radius:4px;cursor:pointer;transition:all 0.3s}
        .btn-s:hover{border-color:rgba(250,248,245,0.4);color:var(--cream)}
        .scroll-hint{position:absolute;bottom:2rem;right:2rem;display:flex;flex-direction:column;align-items:center;gap:0.4rem}
        .scroll-txt{font-size:0.55rem;letter-spacing:0.3em;text-transform:uppercase;color:rgba(250,248,245,0.3);writing-mode:vertical-lr}
        .scroll-line{width:1px;height:3rem;background:linear-gradient(to bottom,rgba(250,248,245,0.3),transparent)}

        .domain-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;margin-top:3rem}
        @media(max-width:768px){.domain-grid{grid-template-columns:repeat(2,1fr)}}
        .domain-card{padding:clamp(1.5rem,3vw,2.5rem);background:rgba(250,248,245,0.03);border:1px solid rgba(250,248,245,0.06);cursor:default}
        .domain-dot{width:6px;height:6px;border-radius:50%;background:var(--brass);margin-bottom:1.5rem}
        .domain-name{font-family:var(--fd);font-size:1.2rem;font-weight:500;color:var(--cream);margin-bottom:0.6rem}
        .domain-desc{font-size:0.78rem;line-height:1.6;color:rgba(250,248,245,0.35)}

        .brass-showcase{display:grid;grid-template-columns:1fr 1fr;gap:clamp(2rem,4vw,4rem);align-items:center}
        @media(max-width:900px){.brass-showcase{grid-template-columns:1fr}}
        .brass-visual{aspect-ratio:1;background:var(--obsidian);border-radius:20px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .brass-panel{width:55%;max-width:200px;aspect-ratio:0.59;border-radius:16px;border:2px solid rgba(139,111,71,0.35);background:linear-gradient(145deg,#B8956F,#8B6F47,#6B5430);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:clamp(0.8rem,2vw,1.2rem);padding:1.5rem}
        .brass-logo{font-size:0.45rem;letter-spacing:0.3em;text-transform:uppercase;color:rgba(255,255,255,0.35)}
        .brass-row{display:flex;gap:0.6rem}
        .brass-btn{width:clamp(1.8rem,4vw,2.2rem);height:clamp(1.8rem,4vw,2.2rem);border-radius:50%;border:1px solid rgba(255,255,255,0.18);background:rgba(255,255,255,0.08)}
        .brass-sep{width:60%;height:1px;background:rgba(255,255,255,0.08)}
        .brass-size{position:absolute;bottom:1rem;font-size:0.65rem;color:rgba(255,255,255,0.2)}
        .brass-info .tag-sm{font-size:0.6rem;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:var(--brass);margin-bottom:0.3rem}
        .brass-title{font-family:var(--fd);font-size:clamp(2rem,4vw,2.8rem);font-weight:400;line-height:1.1;margin-bottom:1.2rem}
        .brass-desc{font-size:0.85rem;line-height:1.8;color:var(--ash);margin-bottom:1.5rem}
        .chips{display:flex;flex-wrap:wrap;gap:0.4rem}
        .chip{font-size:0.68rem;padding:0.3rem 0.8rem;background:var(--ivory);border:1px solid var(--mist);border-radius:100px;color:var(--ash)}

        .hw-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:3rem}
        @media(max-width:768px){.hw-grid{grid-template-columns:repeat(2,1fr)}}
        .hw-card{background:var(--ivory);border:1px solid var(--mist);border-radius:16px;padding:clamp(1.2rem,2vw,2rem);transition:border-color 0.4s}
        .hw-icon{width:2.5rem;height:2.5rem;border-radius:10px;background:var(--obsidian);display:flex;align-items:center;justify-content:center;margin-bottom:1.2rem}
        .hw-icon-dot{width:5px;height:5px;border-radius:50%;background:var(--brass)}
        .hw-name{font-family:var(--fd);font-size:1.1rem;font-weight:500;margin-bottom:0.4rem}
        .hw-desc{font-size:0.75rem;line-height:1.6;color:var(--ash)}

        .interlude-overlay{position:absolute;inset:0;background:rgba(13,13,12,0.55)}
        .interlude-text{position:relative;z-index:2;font-family:var(--fd);font-size:clamp(1.8rem,5vw,3.5rem);font-weight:300;color:rgba(250,248,245,0.9);text-align:center;max-width:700px;padding:0 1.5rem;line-height:1.15}
        .interlude-text em{font-style:italic;color:var(--brass-pale)}

        .ai-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(2rem,4vw,4rem);align-items:start}
        @media(max-width:900px){.ai-grid{grid-template-columns:1fr}}
        .ai-sticky{position:sticky;top:5rem}
        .ai-steps{display:flex;flex-direction:column;gap:1rem}
        .ai-step{padding:clamp(1.2rem,2vw,1.8rem);border-radius:16px;border:1px solid var(--mist);background:var(--ivory)}
        .ai-step-dk{background:var(--obsidian);border-color:rgba(250,248,245,0.08)}
        .ai-step-dk .ai-step-body{color:rgba(250,248,245,0.6)}
        .ai-step-head{display:flex;align-items:center;gap:0.8rem;margin-bottom:0.8rem}
        .ai-step-num{width:2rem;height:2rem;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.7rem;font-weight:600}
        .ai-step-num-lt{background:var(--mist);color:var(--ash)}
        .ai-step-num-dk{background:rgba(139,111,71,0.25);color:var(--brass-pale)}
        .ai-step-num-br{background:rgba(139,111,71,0.2);color:var(--brass)}
        .ai-step-tag{font-size:0.6rem;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:var(--ash)}
        .ai-step-tag-br{color:var(--brass-pale)}
        .ai-step-tag-go{color:var(--brass)}
        .ai-step-body{font-size:0.82rem;line-height:1.6;color:var(--ash)}
        .ai-notif{background:rgba(250,248,245,0.05);border:1px solid rgba(250,248,245,0.08);border-radius:12px;padding:1rem;margin-top:0.6rem}
        .ai-notif-text{font-size:0.8rem;color:rgba(250,248,245,0.6);margin-bottom:0.8rem;line-height:1.5}
        .ai-notif-btns{display:flex;gap:0.5rem}
        .ai-notif-yes{font-size:0.65rem;padding:0.4rem 1rem;background:var(--brass);color:var(--cream);border-radius:6px;font-weight:600;letter-spacing:0.05em}
        .ai-notif-no{font-size:0.65rem;padding:0.4rem 1rem;border:1px solid rgba(250,248,245,0.15);color:rgba(250,248,245,0.4);border-radius:6px}

        .arch-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:3rem}
        @media(max-width:768px){.arch-grid{grid-template-columns:1fr}}
        .arch-card{background:rgba(250,248,245,0.04);border:1px solid rgba(250,248,245,0.08);border-radius:20px;padding:clamp(1.5rem,3vw,2.5rem)}
        .arch-label{font-size:0.6rem;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:var(--brass-pale);margin-bottom:0.3rem}
        .arch-name{font-family:var(--fd);font-size:clamp(1.3rem,2.5vw,1.8rem);font-weight:500;color:var(--cream);margin-bottom:1rem}
        .arch-desc{font-size:0.82rem;line-height:1.7;color:rgba(250,248,245,0.4);margin-bottom:1.5rem}
        .arch-feat{display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem}
        .arch-dot{width:4px;height:4px;border-radius:50%;background:var(--brass-pale)}
        .arch-feat-text{font-size:0.78rem;color:rgba(250,248,245,0.35)}

        .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;text-align:center;padding:clamp(3rem,6vw,5rem) 0}
        @media(max-width:600px){.metrics{grid-template-columns:repeat(2,1fr)}}
        .m-val{font-family:var(--fd);font-size:clamp(2rem,5vw,3.5rem);font-weight:300;color:var(--brass)}
        .m-label{font-size:0.7rem;color:var(--ash);margin-top:0.5rem;letter-spacing:0.05em}

        .voice-q{font-family:var(--fd);font-size:clamp(1.1rem,2.5vw,1.5rem);font-weight:400;line-height:1.5;color:var(--charcoal);max-width:600px;margin:0 auto 1.5rem;font-style:italic}
        .voice-n{font-weight:600;font-size:0.85rem;color:var(--charcoal)}
        .voice-l{font-size:0.75rem;color:var(--ash);margin-top:0.2rem}
        .v-dots{display:flex;gap:0.5rem;justify-content:center;margin-top:2rem}
        .v-dot{width:8px;height:8px;border-radius:50%;background:var(--mist);border:none;cursor:pointer;transition:background 0.3s}
        .v-dot.on{background:var(--brass)}

        .install-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;margin-top:3rem;text-align:center}
        @media(max-width:768px){.install-grid{grid-template-columns:repeat(2,1fr)}}
        .install-num{width:3rem;height:3rem;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;font-family:var(--fd);font-size:1.1rem;font-weight:500}
        .install-num-dk{background:var(--obsidian);color:var(--brass-pale)}
        .install-num-br{background:var(--brass);color:var(--cream)}
        .install-name{font-family:var(--fd);font-size:1.1rem;font-weight:500;margin-bottom:0.5rem}
        .install-desc{font-size:0.78rem;line-height:1.6;color:var(--ash)}

        .founder{text-align:center;max-width:800px;margin:0 auto}
        .founder-quote{font-family:var(--fd);font-size:clamp(1.5rem,4vw,2.5rem);font-weight:400;line-height:1.2;margin-bottom:1.5rem}
        .founder-bio{font-size:0.85rem;line-height:1.8;color:var(--ash);max-width:550px;margin:0 auto 2rem}
        .founder-names{display:flex;gap:2rem;justify-content:center;align-items:center;flex-wrap:wrap}
        .founder-person{text-align:center}
        .founder-name{font-family:var(--fd);font-size:1.1rem;font-weight:500}
        .founder-role{font-size:0.72rem;color:var(--ash);margin-top:0.2rem}
        .founder-sep{width:1px;height:2.5rem;background:var(--mist)}

        .cta-block{text-align:center;max-width:560px;margin:0 auto}
        .cta-form{display:flex;margin-top:2rem;border:1px solid var(--mist);overflow:hidden;border-radius:6px;transition:border-color 0.3s}
        .cta-form:focus-within{border-color:var(--brass)}
        .cta-input{flex:1;padding:0.9rem 1.5rem;font-family:var(--fb);font-size:0.82rem;border:none;background:transparent;color:var(--charcoal);outline:none}
        .cta-input::placeholder{color:var(--silk);font-weight:300}
        .cta-submit{padding:0.9rem 2rem;font-family:var(--fb);font-size:0.55rem;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--cream);background:var(--charcoal);border:none;cursor:pointer;transition:background 0.4s}
        .cta-submit:hover{background:var(--brass)}

        .footer{padding:clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem) 2rem;background:var(--obsidian)}
        .footer-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:2.2fr 1fr 1fr 1fr;gap:clamp(2rem,4vw,4rem);margin-bottom:4rem}
        @media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr}}
        .footer-brand{font-family:var(--fd);font-size:1.15rem;font-weight:400;letter-spacing:0.15em;text-transform:uppercase;color:var(--cream);margin-bottom:1rem}
        .footer-tagline{font-size:0.78rem;font-weight:300;line-height:1.9;color:rgba(250,248,245,0.22);max-width:260px}
        .footer-col h4{font-size:0.55rem;font-weight:600;letter-spacing:0.25em;text-transform:uppercase;color:var(--brass-pale);margin-bottom:1rem}
        .footer-col a{display:block;font-size:0.75rem;font-weight:300;color:rgba(250,248,245,0.3);text-decoration:none;margin-bottom:0.5rem;transition:color 0.3s,transform 0.3s}
        .footer-col a:hover{color:var(--cream);transform:translateX(3px)}
        .footer-rule{max-width:1200px;margin:0 auto;height:1px;background:rgba(250,248,245,0.04)}
        .footer-bottom{max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;padding-top:1.5rem;font-size:0.62rem;color:rgba(250,248,245,0.15);flex-wrap:wrap;gap:1rem}
        .footer-bottom a{color:rgba(250,248,245,0.2);text-decoration:none;transition:color 0.3s}
        .footer-bottom a:hover{color:var(--brass-light)}
      `}</style>

      {/* ─────────────────────── GATE (cinematic reveal) ─────────────────── */}
      <AnimatePresence>
        {!gateDone && (
          <motion.div
            key="gate-panels"
            style={{ position: "fixed", inset: 0, zIndex: 10000, pointerEvents: "none" }}
            exit={{ opacity: 0, transition: { duration: 0 } }}
          >
            <motion.div
              style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "50.2%", background: "var(--obsidian)" }}
              animate={{ x: gateOpen ? "-101%" : 0 }}
              transition={{ duration: 1.05, ease: EXPO }}
            />
            <motion.div
              style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "50.2%", background: "var(--obsidian)" }}
              animate={{ x: gateOpen ? "101%" : 0 }}
              transition={{ duration: 1.05, ease: EXPO }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gate center logo */}
      <AnimatePresence>
        {!gateDone && (
          <motion.div
            key="gate-center"
            style={{
              position: "fixed", inset: 0, zIndex: 10001,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              pointerEvents: "none",
            }}
            animate={{ opacity: gateOpen ? 0 : 1 }}
            transition={{ duration: 0.38 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              style={{ fontFamily: "var(--fd)", fontSize: "clamp(3.5rem,9vw,6.5rem)", fontWeight: 300, color: "var(--brass)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: LUX }}
            >
              &#2315;&#2340;
            </motion.div>
            <motion.div
              style={{ fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.4em", textTransform: "uppercase", color: "var(--brass-pale)", marginTop: "0.4rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: LUX }}
            >
              The Architecture of Order
            </motion.div>
            <div style={{ width: 100, height: 1, background: "rgba(139,111,71,0.2)", marginTop: "1.2rem", overflow: "hidden", position: "relative" }}>
              <motion.div
                style={{ position: "absolute", inset: 0, background: "var(--brass)", transformOrigin: "left center" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.4, delay: 1.0, ease: LUX }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─────────────────────────── NAV ─────────────────────────────────── */}
      <motion.nav
        className="nav"
        initial={{ y: -70, opacity: 0 }}
        animate={gateDone ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.65, ease: LUX }}
      >
        <a href="#" className="logo">Rta <b>Living</b></a>
        <div className="nav-links">
          <a href="#system">System</a>
          <a href="#hardware">Hardware</a>
          <a href="#intelligence">AI</a>
          <a href="#contact">Contact</a>
          <motion.button className="nav-cta" whileTap={{ scale: 0.95 }}>
            Request Access
          </motion.button>
        </div>
      </motion.nav>

      {/* ─────────────────────────── HERO ────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80&auto=format&fit=crop"
            alt="Luxury residence"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <motion.p
            className="hero-tag"
            initial={{ opacity: 0, y: 18 }}
            animate={gateDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.60, ease: LUX, delay: 0.08 }}
          >
            Complete home intelligence system
          </motion.p>
          <motion.h1
            className="hero-h1"
            initial={{ opacity: 0, y: 34 }}
            animate={gateDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.80, ease: LUX, delay: 0.22 }}
          >
            Your entire home.<br />One touch.
          </motion.h1>
          <motion.p
            className="hero-p"
            initial={{ opacity: 0, y: 20 }}
            animate={gateDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: LUX, delay: 0.38 }}
          >
            Custom hardware. Anticipatory AI. Professional installation. Rta replaces
            every smart home app with a single brass panel on your wall.
          </motion.p>
          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 16 }}
            animate={gateDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.60, ease: LUX, delay: 0.52 }}
          >
            <motion.button className="btn-p" whileTap={{ scale: 0.96 }}>
              Request Installation
            </motion.button>
            <motion.button className="btn-s" whileTap={{ scale: 0.96 }}>
              Watch the Film
            </motion.button>
          </motion.div>
        </div>
        <motion.div
          className="scroll-hint"
          initial={{ opacity: 0 }}
          animate={gateDone ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.9, ease: LUX }}
        >
          <span className="scroll-txt">Scroll</span>
          <div className="scroll-line" />
        </motion.div>
      </section>

      {/* ─────────────────────────── PROBLEM ─────────────────────────────── */}
      <section className="sec sec-pe">
        <div className="mw">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px 0px" }}
            variants={fadeUp}
            custom={0}
            style={{ fontFamily: "var(--fd)", fontSize: "clamp(2rem,5vw,3.8rem)", fontWeight: 400, lineHeight: 1.1, maxWidth: 900 }}
          >
            12 apps. 6 remotes. 4 voice assistants that don&apos;t talk to each other.{" "}
            <em style={{ color: "var(--brass)", fontStyle: "italic" }}>
              That&apos;s not a smart home. That&apos;s a complicated one.
            </em>
          </motion.h2>
        </div>
      </section>

      {/* ─────────────────────────── SIX DOMAINS ─────────────────────────── */}
      <section className="sec sec-dk" id="system">
        <div className="mw">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="tag">The system</motion.p>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="h2" style={{ color: "var(--cream)" }}>Six domains. One brain.</motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="body" style={{ color: "rgba(250,248,245,0.45)", maxWidth: 550 }}>
            Every system in your home &#8212; from the lights to the locks &#8212; unified under a single intelligence.
          </motion.p>
          <motion.div
            className="domain-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerWrap}
          >
            {[
              { name: "Lighting",      desc: "Scenes, schedules, circadian rhythm. Your home matches the time of day." },
              { name: "Climate",       desc: "Heating, cooling, ventilation. Every room at the perfect temperature." },
              { name: "Security",      desc: "Cameras, locks, alarms. Your car arrives \u2014 the gate opens, the door unlocks." },
              { name: "Blinds",        desc: "Motorized control. Dawn breaks, blinds rise. Movie starts, blackout descends." },
              { name: "Entertainment", desc: "Multi-room audio, TV. One button: projector drops, lights dim to cinema." },
              { name: "Appliances",    desc: "Coffee, oven, washer. Your alarm goes off \u2014 coffee brews before you stand." },
            ].map((d) => (
              <motion.div
                key={d.name}
                variants={gridItem}
                className="domain-card"
                whileHover={{
                  backgroundColor: "rgba(250,248,245,0.07)",
                  borderColor: "rgba(139,111,71,0.35)",
                  y: -4,
                  transition: { type: "spring", stiffness: 320, damping: 22 },
                }}
              >
                <div className="domain-dot" />
                <div className="domain-name">{d.name}</div>
                <div className="domain-desc">{d.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────── BRASS PANEL ─────────────────────────── */}
      <section className="sec" id="hardware">
        <div className="mw">
          <div className="brass-showcase">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="brass-visual"
            >
              <motion.div
                className="brass-panel"
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="brass-logo">Rta</div>
                <div className="brass-row"><div className="brass-btn" /><div className="brass-btn" /></div>
                <div className="brass-sep" />
                <div className="brass-row"><div className="brass-btn" /><div className="brass-btn" /></div>
                <div className="brass-sep" />
                <div className="brass-row"><div className="brass-btn" /><div className="brass-btn" /></div>
              </motion.div>
              <div className="brass-size">86 &#215; 146 mm</div>
            </motion.div>
            <div className="brass-info">
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="tag-sm">Flagship</motion.p>
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="brass-title">Rta Brass Panel</motion.h2>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="brass-desc">
                Machined from solid brass, aged to a warm patina. No screen. No LEDs. Six haptic buttons you can find in the dark. Each press sends a subtle vibration confirming the action.
              </motion.p>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="chips">
                {["Solid brass", "Haptic feedback", "Thread / Zigbee", "5-year battery", "IP44 rated", "OTA updates"].map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div
            className="hw-grid"
            style={{ marginTop: "4rem" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerWrap}
          >
            {[
              { name: "Sensors",     desc: "Temperature, motion, air quality. Hidden behind walls." },
              { name: "Controllers", desc: "Relays, dimmers, IR blasters. Inside your electrical panel." },
              { name: "Actuators",   desc: "Blind motors, smart locks, valve controllers." },
              { name: "Rta Hub",     desc: "On-premise brain. Works without internet." },
            ].map((h) => (
              <motion.div
                key={h.name}
                variants={gridItem}
                className="hw-card"
                whileHover={{
                  borderColor: "var(--brass-pale)",
                  y: -5,
                  transition: { type: "spring", stiffness: 320, damping: 22 },
                }}
              >
                <div className="hw-icon"><div className="hw-icon-dot" /></div>
                <div className="hw-name">{h.name}</div>
                <div className="hw-desc">{h.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────── INTERLUDE (parallax) ────────────────── */}
      <InterludeSection />

      {/* ─────────────────────────── AI INTELLIGENCE ─────────────────────── */}
      <section className="sec" id="intelligence">
        <div className="mw">
          <div className="ai-grid">
            <div className="ai-sticky">
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="tag">The intelligence</motion.p>
              <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="h2">It learns. Then it asks. Then it disappears.</motion.h2>
              <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="body">
                Rta never surprises you. It observes your patterns, detects routines, then asks permission before automating anything new.
              </motion.p>
            </div>
            <motion.div
              className="ai-steps"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
            >
              <motion.div variants={gridItem} className="ai-step">
                <div className="ai-step-head">
                  <div className="ai-step-num ai-step-num-lt">1</div>
                  <span className="ai-step-tag">Observe &#183; Week 1</span>
                </div>
                <p className="ai-step-body">Rta watches: you dim the living room to 40% at 9:15 PM every evening. It says nothing.</p>
              </motion.div>
              <motion.div variants={gridItem} className="ai-step">
                <div className="ai-step-head">
                  <div className="ai-step-num ai-step-num-lt">2</div>
                  <span className="ai-step-tag">Detect &#183; Day 6</span>
                </div>
                <p className="ai-step-body">Pattern confirmed: &ldquo;Dim living room to 40% at ~9:15 PM&rdquo; &#8212; 5 out of 5 evenings.</p>
              </motion.div>
              <motion.div variants={gridItem} className="ai-step ai-step-dk">
                <div className="ai-step-head">
                  <div className="ai-step-num ai-step-num-dk">3</div>
                  <span className="ai-step-tag ai-step-tag-br">Ask permission &#183; Day 7</span>
                </div>
                <div className="ai-notif">
                  <p className="ai-notif-text">&ldquo;I noticed you dim the living room every evening around 9:15. Shall I do this automatically?&rdquo;</p>
                  <div className="ai-notif-btns">
                    <span className="ai-notif-yes">Yes, automate</span>
                    <span className="ai-notif-no">Not yet</span>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={gridItem} className="ai-step">
                <div className="ai-step-head">
                  <div className="ai-step-num ai-step-num-br">&#10003;</div>
                  <span className="ai-step-tag ai-step-tag-go">Automated &#183; Day 8+</span>
                </div>
                <p className="ai-step-body">Approved. Runs every night on the local hub. Works even if the internet goes down.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── ARCHITECTURE ────────────────────────── */}
      <section className="sec sec-dk">
        <div className="mw" style={{ textAlign: "center" }}>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="tag" style={{ color: "var(--brass-pale)" }}>The architecture</motion.p>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="h2" style={{ color: "var(--cream)" }}>Two layers. Unbreakable.</motion.h2>
          <motion.div
            className="arch-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerWrap}
          >
            <motion.div
              variants={gridItem} className="arch-card"
              whileHover={{ borderColor: "rgba(139,111,71,0.25)", y: -4, transition: { type: "spring", stiffness: 300, damping: 22 } }}
            >
              <div className="arch-label">The spine</div>
              <div className="arch-name">Rta Hub (on-premise)</div>
              <div className="arch-desc">Lives in your home. Real-time device control, offline routines, local security fallback. Internet dies? Your home keeps running.</div>
              <div className="arch-feat"><div className="arch-dot" /><span className="arch-feat-text">Sub-50ms response</span></div>
              <div className="arch-feat"><div className="arch-dot" /><span className="arch-feat-text">Full offline operation</span></div>
              <div className="arch-feat"><div className="arch-dot" /><span className="arch-feat-text">Encrypted local mesh</span></div>
            </motion.div>
            <motion.div
              variants={gridItem} className="arch-card"
              whileHover={{ borderColor: "rgba(139,111,71,0.25)", y: -4, transition: { type: "spring", stiffness: 300, damping: 22 } }}
            >
              <div className="arch-label">The mind</div>
              <div className="arch-name">Rta Cloud Brain</div>
              <div className="arch-desc">Lives in the cloud. Pattern learning, anomaly detection, new routine proposals, remote access worldwide.</div>
              <div className="arch-feat"><div className="arch-dot" /><span className="arch-feat-text">Learns your rhythm in days</span></div>
              <div className="arch-feat"><div className="arch-dot" /><span className="arch-feat-text">Asks before automating</span></div>
              <div className="arch-feat"><div className="arch-dot" /><span className="arch-feat-text">Access from anywhere</span></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────── METRICS ─────────────────────────────── */}
      <section className="sec sec-iv">
        <div className="mw">
          <motion.div
            className="metrics"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerWrap}
          >
            <motion.div variants={gridItem}>
              <div className="m-val">&lt;<AnimatedNumber value={50} /><span style={{ fontSize: "0.6em" }}>ms</span></div>
              <div className="m-label">Response time</div>
            </motion.div>
            <motion.div variants={gridItem}>
              <div className="m-val"><AnimatedNumber value={100} /><span style={{ fontSize: "0.6em" }}>%</span></div>
              <div className="m-label">Offline capable</div>
            </motion.div>
            <motion.div variants={gridItem}>
              <div className="m-val"><AnimatedNumber value={6} /></div>
              <div className="m-label">Domains controlled</div>
            </motion.div>
            <motion.div variants={gridItem}>
              <div className="m-val"><AnimatedNumber value={1} /></div>
              <div className="m-label">Touch to control all</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────── TESTIMONIALS ────────────────────────── */}
      <section className="sec sec-pe">
        <div className="mw" style={{ textAlign: "center" }}>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="tag">Resident voices</motion.p>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ─────────────────────────── INSTALLATION ────────────────────────── */}
      <section className="sec sec-iv">
        <div className="mw" style={{ textAlign: "center" }}>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="tag">The process</motion.p>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="h2">White-glove installation</motion.h2>
          <motion.div
            className="install-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerWrap}
          >
            {[
              { num: "1", name: "Consultation", desc: "We survey your home and design a system map for every room.",               style: "install-num-dk" },
              { num: "2", name: "Installation", desc: "Professional technicians install every device. 2\u20133 days.",             style: "install-num-dk" },
              { num: "3", name: "Calibration",  desc: "Rta observes for 7 days and proposes its first automations.",               style: "install-num-dk" },
              { num: "✓", name: "Living",       desc: "Your home is alive. It learns more each week. You do less each day.",       style: "install-num-br" },
            ].map((s) => (
              <motion.div key={s.name} variants={gridItem}>
                <div className={`install-num ${s.style}`}>{s.num}</div>
                <div className="install-name">{s.name}</div>
                <div className="install-desc">{s.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────── FOUNDER ─────────────────────────────── */}
      <section className="sec sec-pe">
        <div className="mw">
          <div className="founder">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="tag">The architects</motion.p>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="founder-quote">
              &ldquo;We didn&apos;t build another smart home app. We built the entire system &#8212; from the brass on your wall to the cloud that thinks for you.&rdquo;
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="founder-bio">
              Rta Living was born from a refusal to accept the status quo. Smart homes aren&apos;t smart. They&apos;re fragmented. We built hardware, software, and intelligence as one &#8212; because that&apos;s the only way.
            </motion.p>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="founder-names">
              <div className="founder-person">
                <div className="founder-name">Jawahar Naidu</div>
                <div className="founder-role">Co-Founder &amp; Chief Architect</div>
              </div>
              <div className="founder-sep" />
              <div className="founder-person">
                <div className="founder-name">Renukesh</div>
                <div className="founder-role">Co-Founder &amp; Head of Engineering</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── CTA ─────────────────────────────────── */}
      <section className="sec" id="contact">
        <div className="cta-block">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="tag" style={{ color: "var(--brass)" }}>Begin Your Journey</motion.p>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="h2" style={{ textAlign: "center" }}>Request Early<br />Access to Rta</motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="body" style={{ textAlign: "center", maxWidth: 400, margin: "0 auto" }}>
            Join a curated community of residents who believe their home should think, adapt, and serve &#8212; invisibly.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3} className="cta-form">
            <input className="cta-input" type="email" placeholder="Your email address" />
            <button className="cta-submit">Request Access</button>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────── FOOTER ──────────────────────────────── */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: LUX }}
      >
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Rta Living</div>
            <p className="footer-tagline">Your entire home. One touch.<br />The invisible architecture of a perfect home.</p>
          </div>
          <div className="footer-col">
            <h4>System</h4>
            <a href="#">Lighting</a><a href="#">Climate</a><a href="#">Security</a><a href="#">Entertainment</a>
          </div>
          <div className="footer-col">
            <h4>Hardware</h4>
            <a href="#">Brass Panels</a><a href="#">Sensors</a><a href="#">Controllers</a><a href="#">Rta Hub</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a><a href="#">Installation</a><a href="#">Contact</a><a href="#">Press</a>
          </div>
        </div>
        <div className="footer-rule" />
        <div className="footer-bottom">
          <span>&copy; 2026 Rta Living. All rights reserved.</span>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a href="#">Privacy</a><a href="#">Terms</a>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
