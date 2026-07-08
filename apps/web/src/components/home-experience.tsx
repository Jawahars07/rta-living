"use client";

import dynamic from "next/dynamic";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  BatteryCharging,
  BedDouble,
  ChefHat,
  CircleDot,
  CloudSun,
  Cpu,
  DoorOpen,
  Gauge,
  House,
  Leaf,
  LockKeyhole,
  Menu,
  Moon,
  Radio,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Wind,
  X,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import type { FormEvent } from "react";
import type { RoomId } from "./house-scene";

const HouseScene = dynamic(
  () => import("./house-scene").then((module) => module.HouseScene),
  {
    ssr: false,
    loading: () => <div className="scene-loader" role="status" aria-label="Loading the digital twin" />,
  },
);

const ROOMS = [
  {
    id: "living",
    label: "Great room",
    eyebrow: "Hosting mode",
    temperature: "22.4°",
    lighting: "64%",
    air: "98",
    presence: "3 people",
    Icon: SunMedium,
  },
  {
    id: "kitchen",
    label: "Kitchen",
    eyebrow: "Dinner prep",
    temperature: "21.8°",
    lighting: "82%",
    air: "96",
    presence: "1 person",
    Icon: ChefHat,
  },
  {
    id: "studio",
    label: "Studio",
    eyebrow: "Deep focus",
    temperature: "21.1°",
    lighting: "48%",
    air: "99",
    presence: "Occupied",
    Icon: Cpu,
  },
  {
    id: "suite",
    label: "Primary suite",
    eyebrow: "Resting",
    temperature: "20.6°",
    lighting: "18%",
    air: "97",
    presence: "Quiet",
    Icon: BedDouble,
  },
] as const;

const MOMENTS = [
  {
    time: "06:18",
    label: "Dawn sequence",
    detail: "Blinds rise 28%. Bedroom warms to 21°. Espresso preheats.",
    Icon: CloudSun,
  },
  {
    time: "12:42",
    label: "Solar surplus",
    detail: "Battery at 91%. Pool circulation and laundry shifted to clean energy.",
    Icon: BatteryCharging,
  },
  {
    time: "18:10",
    label: "Arrival detected",
    detail: "Gate opens. Entry glows. Climate follows you into the great room.",
    Icon: DoorOpen,
  },
  {
    time: "23:04",
    label: "Night watch",
    detail: "Perimeter armed. Nonessential circuits asleep. Air refreshed silently.",
    Icon: Moon,
  },
] as const;

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function SignalIcon({ type }: { type: "air" | "energy" | "security" | "sound" }) {
  const Icon = {
    air: Wind,
    energy: Zap,
    security: LockKeyhole,
    sound: AudioLines,
  }[type];
  return <Icon aria-hidden="true" size={18} strokeWidth={1.6} />;
}

export function HomeExperience() {
  const [selectedRoom, setSelectedRoom] = useState<RoomId>("living");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.25 });

  const selectedRoomData = ROOMS.find((room) => room.id === selectedRoom) ?? ROOMS[0];

  const submitAccessRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    if (!email) return;
    window.location.href = `mailto:hello@rtaliving.com?subject=${encodeURIComponent(
      "Private residence consultation",
    )}&body=${encodeURIComponent(`I would like to discuss an Rta residence.\n\nEmail: ${email}`)}`;
  };

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rta Living home">
          <BrandMark />
          <span>Rta</span>
          <small>Living</small>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#residence">Residence</a>
          <a href="#intelligence">Intelligence</a>
          <a href="#architecture">Architecture</a>
        </nav>

        <a className="header-cta" href="#contact">
          Private consultation <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      {mobileMenuOpen && (
        <motion.nav
          className="mobile-nav"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {[
            ["Residence", "#residence"],
            ["Intelligence", "#intelligence"],
            ["Architecture", "#architecture"],
            ["Private consultation", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}>
              {label}
            </a>
          ))}
        </motion.nav>
      )}

      <main id="top">
        <section className="hero" id="residence">
          <div className="hero-grid" aria-hidden="true" />
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="live-label">
              <CircleDot size={14} aria-hidden="true" /> Live residence · Mumbai
            </div>
            <h1 aria-label="See your home thinking.">
              See your home
              <span>thinking.</span>
            </h1>
            <p className="hero-intro">
              A living digital twin for every light, lock, breath of air and watt of energy—unified by
              one private intelligence.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#digital-twin">
                Enter the residence <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a className="button button-quiet" href="#intelligence">
                How the intelligence works
              </a>
            </div>
            <div className="hero-proof">
              <span><ShieldCheck size={16} aria-hidden="true" /> Local-first privacy</span>
              <span><Activity size={16} aria-hidden="true" /> Sub-50ms response</span>
            </div>
          </motion.div>

          <motion.div
            className="scene-column"
            id="digital-twin"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.12 }}
          >
            <div
              className="scene-wrap"
              role="img"
              aria-label="Interactive three-dimensional cutaway of an Rta intelligent residence"
            >
              <HouseScene
                selectedRoom={selectedRoom}
                onSelectRoom={setSelectedRoom}
                reducedMotion={shouldReduceMotion}
              />
              <div className="scene-topline">
                <span>Residence 01</span>
                <span className="nominal"><i /> All systems nominal</span>
              </div>
              <div className="scene-hint">Drag to orbit · Select a room</div>
              <div className="coordinates">19.0760° N · 72.8777° E</div>
            </div>

            <aside className="room-console" aria-label="Room monitoring controls">
              <div className="room-tabs" role="tablist" aria-label="Rooms">
                {ROOMS.map((room) => (
                  <button
                    key={room.id}
                    role="tab"
                    type="button"
                    aria-selected={room.id === selectedRoom}
                    className={room.id === selectedRoom ? "active" : ""}
                    onClick={() => setSelectedRoom(room.id)}
                  >
                    <room.Icon size={16} aria-hidden="true" />
                    <span>{room.label}</span>
                  </button>
                ))}
              </div>
              <motion.div
                key={selectedRoomData.id}
                className="room-readout"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div>
                  <small>{selectedRoomData.eyebrow}</small>
                  <h2>{selectedRoomData.label}</h2>
                </div>
                <div className="reading-grid">
                  <span><strong>{selectedRoomData.temperature}</strong> Climate</span>
                  <span><strong>{selectedRoomData.lighting}</strong> Lighting</span>
                  <span><strong>{selectedRoomData.air}</strong> Air score</span>
                  <span><strong>{selectedRoomData.presence}</strong> Presence</span>
                </div>
              </motion.div>
            </aside>
          </motion.div>

          <div className="hero-index">01 — Living intelligence</div>
        </section>

        <section className="signal-strip" aria-label="Live residence signals">
          <div><SignalIcon type="security" /><span>Perimeter</span><strong>Secure</strong></div>
          <div><SignalIcon type="air" /><span>Indoor air</span><strong>Excellent</strong></div>
          <div><SignalIcon type="energy" /><span>Solar yield</span><strong>8.4 kW</strong></div>
          <div><SignalIcon type="sound" /><span>Soundscape</span><strong>Morning calm</strong></div>
        </section>

        <section className="story-section" id="intelligence">
          <div className="section-kicker">The intelligence</div>
          <div className="story-heading">
            <h2>A home that rehearses your day before you live it.</h2>
            <p>
              Rta observes patterns locally, proposes routines in plain language, and acts only after
              consent. The result feels less like automation and more like instinct.
            </p>
          </div>

          <div className="day-sequence">
            {MOMENTS.map((moment, index) => (
              <motion.article
                key={moment.time}
                className="moment-card"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ delay: shouldReduceMotion ? 0 : index * 0.08 }}
              >
                <div className="moment-time">{moment.time}</div>
                <moment.Icon size={24} aria-hidden="true" />
                <h3>{moment.label}</h3>
                <p>{moment.detail}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="system-section" id="architecture">
          <div className="system-visual" aria-hidden="true">
            <div className="orbital-system">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="core"><BrandMark /></div>
              <span className="node node-one"><Radio size={15} /></span>
              <span className="node node-two"><Gauge size={15} /></span>
              <span className="node node-three"><Leaf size={15} /></span>
            </div>
          </div>
          <div className="system-copy">
            <div className="section-kicker">The architecture</div>
            <h2>One quiet spine. Every system in harmony.</h2>
            <p>
              The Rta Hub runs the essential home locally. The cloud learns long-term rhythms and
              enables remote access. Lose the internet and your residence keeps breathing.
            </p>
            <div className="architecture-list">
              <div><Cpu size={20} aria-hidden="true" /><span><strong>Local core</strong>Instant control, encrypted mesh, offline routines.</span></div>
              <div><Sparkles size={20} aria-hidden="true" /><span><strong>Adaptive mind</strong>Pattern learning with permission at every step.</span></div>
              <div><House size={20} aria-hidden="true" /><span><strong>Invisible hardware</strong>Sensors and controllers designed into the architecture.</span></div>
            </div>
          </div>
        </section>

        <section className="panel-section">
          <div className="panel-copy">
            <div className="section-kicker">The physical interface</div>
            <h2>The last switch your wall will ever need.</h2>
            <p>
              Six haptic actions, machined from solid brass. No glowing screen. No nested menu. Just
              calm, tactile control that becomes more personal over time.
            </p>
            <ul>
              <li>Solid architectural brass</li>
              <li>Thread · Zigbee · Matter</li>
              <li>Five-year battery</li>
              <li>Haptic confirmation</li>
            </ul>
          </div>
          <div className="brass-product" role="img" aria-label="Rta brass control panel illustration">
            <div className="product-glow" />
            <div className="brass-plate">
              {[0, 1, 2, 3, 4, 5].map((button) => <span key={button} />)}
            </div>
            <div className="product-measure measure-width">86 mm</div>
            <div className="product-measure measure-height">146 mm</div>
          </div>
        </section>

        <section className="access-section" id="contact">
          <div className="access-content">
            <div className="section-kicker">Private residences · 2026</div>
            <h2>Your home already has a rhythm. Let Rta listen.</h2>
            <p>
              We are accepting a small number of residences in Mumbai, Bengaluru, Dubai and London.
            </p>
            <form className="access-form" onSubmit={submitAccessRequest}>
              <label htmlFor="access-email">Email address</label>
              <div>
                <input id="access-email" name="email" type="email" placeholder="you@residence.com" required />
                <button type="submit">
                  Request consultation <ArrowUpRight size={17} aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top" aria-label="Back to top">
          <BrandMark /> <span>Rta</span> <small>Living</small>
        </a>
        <p>Order, naturally.</p>
        <div>
          <a href="mailto:hello@rtaliving.com">hello@rtaliving.com</a>
          <span>© 2026 Rta Living</span>
        </div>
      </footer>
    </div>
  );
}
