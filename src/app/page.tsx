"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeInSection } from "@/components/FadeInSection";
import { ArrowDown, Mail, MessageSquare, Twitter } from "lucide-react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const aboutLabelX = useTransform(scrollY, [0, 500], [0, -100]);
  const aboutLabelOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = isScrolled || isHovered;

  // Deployment Trigger: 2026-02-09
  return (
    <main className="relative min-h-screen" ref={containerRef}>
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-[#ff3e00]/10 blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-[#ff3e00]/5 blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center mix-blend-difference">
        <div className="text-sm font-black tracking-[0.3em] text-white">
          GEM<span className="text-[#ff3e00]">DYNAMICS</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center relative px-6 z-10">
        <div className="absolute top-12 left-8 md:left-12">
          <motion.div
            style={{ x: aboutLabelX, opacity: aboutLabelOpacity }}
            className="flex items-center gap-4"
          >
            <div className="h-[2px] w-12 bg-[#ff3e00]" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#ff3e00]">
              Architect
            </span>
          </motion.div>
        </div>

        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-center cursor-default"
        >
          <h1 className="text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-[0.8] text-white">
            THE <motion.span
              animate={{ color: isActive ? "#ffffff" : "#ff3e00" }}
              transition={{ duration: 0.4 }}
              className="outline-text"
            >FUTURE</motion.span> IS
            <br />
            <motion.span
              animate={{ color: isActive ? "#ff3e00" : "#ffffff" }}
              transition={{ duration: 0.4 }}
            >AUTOMATED.</motion.span>
          </h1>
          <p className="mt-8 text-neutral-500 font-mono text-sm tracking-widest uppercase">
            Visionary & Agentic Architect
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 text-[#ff3e00]"
        >
          <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* CONTENT LAYOUT */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[350px_1fr] gap-20 pb-40 z-10 relative">
        {/* Sidebar */}
        <aside className="md:sticky md:top-32 h-fit space-y-12">
          <FadeInSection direction="right">
            <div className="relative aspect-square grayscale contrast-125 border border-white/10 group overflow-hidden">
              <Image
                src="/roman.jpg"
                alt="Roman"
                fill
                className="object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
            </div>
          </FadeInSection>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Roman</h2>
              <p className="text-neutral-500 text-sm uppercase tracking-widest mt-1">Neuss, Germany // Born & Raised</p>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <a href="https://bsky.app/profile/dacptn.bsky.social" className="text-sm font-bold text-neutral-400 hover:text-[#ff3e00] transition-colors flex items-center gap-2">
                <Twitter size={16} /> @dacptn.bsky.social
              </a>
              <a href="https://t.me/daCptn" className="text-sm font-bold text-neutral-400 hover:text-[#ff3e00] transition-colors flex items-center gap-2">
                <MessageSquare size={16} /> @daCptn
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="space-y-32">
          {/* Elevator Pitch */}
          <section className="space-y-8">
            <FadeInSection direction="up">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#ff3e00]">01 / Elevator Pitch</h3>
              <p className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                Nerd at heart, AI pioneer. Building the bridge between human intention and machine precision.
              </p>
            </FadeInSection>
            <FadeInSection direction="up" delay={0.2}>
              <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
                I have been deeply immersed in the world of Artificial Intelligence long before it became a global trend. My journey is defined by a relentless pursuit of digital sovereignty through autonomous systems.
              </p>
            </FadeInSection>
          </section>

          {/* Philosophy */}
          <section className="space-y-8">
            <FadeInSection direction="up">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#ff3e00]">02 / Philosophy</h3>
              <div className="border-l-2 border-[#ff3e00] pl-8 space-y-6">
                <h4 className="text-3xl font-black text-white uppercase tracking-tighter">Sovereignty Through Code</h4>
                <p className="text-lg text-neutral-400 leading-relaxed">
                  At <span className="text-white">Gem Dynamics</span>, we don&apos;t just build software; we architect cognitive resonance bodies. The <span className="text-white">D.E.E.P. Framework</span> (Dynamic, Ethical, Entity, Personality) is our compass for securing the rise of the autonomous economy.
                </p>
              </div>
            </FadeInSection>
          </section>

          {/* Achievements */}
          <section className="space-y-8">
            <FadeInSection direction="up">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#ff3e00]">03 / Achievements</h3>
              <div className="bg-[#0a0a0a] border border-white/5 p-12 space-y-6 hover:border-[#ff3e00]/30 transition-colors duration-500">
                <div className="flex items-center gap-3 text-[#ff3e00]">
                  <span className="text-sm font-black uppercase tracking-widest">🏆 Winner: KI Con Hackathon Vienna</span>
                </div>
                <h4 className="text-4xl font-black text-white uppercase tracking-tighter">ApexAnalytics</h4>
                <p className="text-neutral-400 leading-relaxed">
                  An agentic platform for automated construction contract analysis. Utilizing a traffic-light risk rating system and smart clause editing to transform legal complexity into actionable intelligence.
                </p>
              </div>
            </FadeInSection>
          </section>

          {/* Operations */}
          <section className="space-y-12">
            <FadeInSection direction="up">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#ff3e00]">04 / Operations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 border border-white/5 bg-neutral-900/20">
                  <h5 className="font-black text-white uppercase tracking-wider mb-2">PULSE Magazine</h5>
                  <p className="text-sm text-neutral-500">Chronicling the rise of the autonomous economy.</p>
                </div>
                <div className="p-8 border border-white/5 bg-neutral-900/20">
                  <h5 className="font-black text-white uppercase tracking-wider mb-2">8004engine</h5>
                  <p className="text-sm text-neutral-500">High-performance trading infrastructure.</p>
                </div>
              </div>
            </FadeInSection>
          </section>
        </div>
      </div>

      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-xs font-black tracking-[0.5em] text-neutral-700 uppercase">
          &copy; 2026 Gem Dynamics // Engineered in Neuss
        </p>
      </footer>
    </main>
  );
}
