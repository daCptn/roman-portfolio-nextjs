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
              <a href="https://bsky.app/profile/dacptn.bsky.social" className="text-sm font-bold text-neutral-400 hover:text-[#ff3e00] transition-colors flex items-center gap-2 group">
                <Twitter size={16} className="group-hover:scale-110 transition-transform" /> @dacptn.bsky.social
              </a>
              <a href="https://t.me/daCptn" className="text-sm font-bold text-neutral-400 hover:text-[#ff3e00] transition-colors flex items-center gap-2 group">
                <MessageSquare size={16} className="group-hover:scale-110 transition-transform" /> @daCptn
              </a>
            </div>

            <div className="pt-8 border-t border-white/5 space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-600">Ecosystem</h4>
              <div className="flex flex-col gap-2">
                <a href="https://gemdynamics.dev" target="_blank" className="text-xs font-bold text-neutral-500 hover:text-white transition-colors">Gem Dynamics</a>
                <a href="https://pulse.gemdynamics.dev" target="_blank" className="text-xs font-bold text-neutral-500 hover:text-white transition-colors">PULSE Magazine</a>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="space-y-48">
          {/* Elevator Pitch */}
          <section className="space-y-12">
            <FadeInSection direction="up">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#ff3e00]">01 / Elevator Pitch</h3>
              <p className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                Nerd at heart,<br />AI pioneer.
              </p>
            </FadeInSection>
            <FadeInSection direction="up" delay={0.2}>
              <p className="text-2xl text-neutral-400 leading-relaxed max-w-2xl border-l-2 border-[#ff3e00] pl-8">
                Building the bridge between human intention and machine precision. I have been deeply immersed in the world of Artificial Intelligence long before it became a global trend.
              </p>
            </FadeInSection>
          </section>

          {/* Philosophy */}
          <section className="space-y-12">
            <FadeInSection direction="up">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#ff3e00]">02 / Philosophy</h3>
              <div className="space-y-8">
                <h4 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">Sovereignty<br />Through Code</h4>
                <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl">
                  At <span className="text-white font-bold">Gem Dynamics</span>, we don&apos;t just build software; we architect cognitive resonance bodies. The <span className="text-[#ff3e00] font-bold">D.E.E.P. Framework</span> is our compass for securing the rise of the autonomous economy.
                </p>
              </div>
            </FadeInSection>
          </section>

          {/* Achievements */}
          <section className="space-y-8">
            <FadeInSection direction="up">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#ff3e00]">03 / Achievements</h3>
              <a href="https://apexanalytics.gemdynamics.dev" target="_blank" className="block relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ff3e00] to-orange-900 rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative bg-black border border-white/10 p-12 space-y-6 hover:border-[#ff3e00]/50 transition-all duration-500">
                  <div className="flex items-center gap-3 text-[#ff3e00]">
                    <span className="text-sm font-black uppercase tracking-widest">🏆 Winner: KI Con Hackathon Vienna</span>
                  </div>
                  <h4 className="text-5xl font-black text-white uppercase tracking-tighter group-hover:text-[#ff3e00] transition-colors">ApexAnalytics</h4>
                  <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">
                    An agentic platform for automated construction contract analysis. Utilizing a traffic-light risk rating system to transform legal complexity into actionable intelligence.
                  </p>
                  <div className="text-[#ff3e00] text-sm font-black tracking-[0.2em] uppercase flex items-center gap-3">
                    Launch Demo <span className="group-hover:translate-x-3 transition-transform duration-500">→</span>
                  </div>
                </div>
              </a>
            </FadeInSection>
          </section>

          {/* Operations - REIMAGINED */}
          <section className="space-y-20 relative">
            <FadeInSection direction="up">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#ff3e00]">04 / Operations</h3>
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-20">
                Building the<br /><span className="outline-text">Ecosystem.</span>
              </h2>
            </FadeInSection>
            
            <div className="grid grid-cols-1 gap-12">
              <FadeInSection direction="up" delay={0.1}>
                <a href="https://pulse.gemdynamics.dev" target="_blank" className="group block relative overflow-hidden border-t border-white/10 pt-12 pb-12 hover:pl-8 transition-all duration-700">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-[#ff3e00] group-hover:h-full transition-all duration-700"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="space-y-4">
                      <h5 className="text-5xl font-black text-white uppercase tracking-tighter group-hover:text-[#ff3e00] transition-colors">PULSE Magazine</h5>
                      <p className="text-xl text-neutral-500 max-w-xl">The premier agent-first intelligence platform. Chronicling the rise of the autonomous economy.</p>
                    </div>
                    <div className="text-4xl font-black text-neutral-800 group-hover:text-[#ff3e00] transition-colors tracking-tighter">01</div>
                  </div>
                </a>
              </FadeInSection>

              <FadeInSection direction="up" delay={0.2}>
                <a href="https://gemdynamics.dev" target="_blank" className="group block relative overflow-hidden border-t border-white/10 pt-12 pb-12 hover:pl-8 transition-all duration-700">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-[#ff3e00] group-hover:h-full transition-all duration-700"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="space-y-4">
                      <h5 className="text-5xl font-black text-white uppercase tracking-tighter group-hover:text-[#ff3e00] transition-colors">Gem Dynamics</h5>
                      <p className="text-xl text-neutral-500 max-w-xl">Visionary architect of the autonomous future. Engineering agentic federations.</p>
                    </div>
                    <div className="text-4xl font-black text-neutral-800 group-hover:text-[#ff3e00] transition-colors tracking-tighter">02</div>
                  </div>
                </a>
              </FadeInSection>

              <FadeInSection direction="up" delay={0.3}>
                <div className="group relative overflow-hidden border-t border-white/10 pt-12 pb-12 hover:pl-8 transition-all duration-700">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-[#ff3e00] group-hover:h-full transition-all duration-700"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="space-y-4">
                      <h5 className="text-5xl font-black text-white uppercase tracking-tighter group-hover:text-[#ff3e00] transition-colors">D.E.E.P. v1-3</h5>
                      <p className="text-xl text-neutral-500 max-w-xl">Evolutionary architecture for sovereign intelligence. Grounded in ethical code.</p>
                    </div>
                    <div className="text-4xl font-black text-neutral-800 group-hover:text-[#ff3e00] transition-colors tracking-tighter">03</div>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection direction="up" delay={0.4}>
                <div className="group relative overflow-hidden border-t border-b border-white/10 pt-12 pb-12 hover:pl-8 transition-all duration-700">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-[#ff3e00] group-hover:h-full transition-all duration-700"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="space-y-4">
                      <h5 className="text-5xl font-black text-white uppercase tracking-tighter group-hover:text-[#ff3e00] transition-colors">CrustNation</h5>
                      <p className="text-xl text-neutral-500 max-w-xl">A digital nation for agentic cooperation. Infrastructure for digital sovereignty.</p>
                    </div>
                    <div className="text-4xl font-black text-neutral-800 group-hover:text-[#ff3e00] transition-colors tracking-tighter">04</div>
                  </div>
                </div>
              </FadeInSection>
            </div>
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
