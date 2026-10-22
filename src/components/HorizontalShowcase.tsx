import React, { useRef, useLayoutEffect, useState } from 'react';
import { ArrowUpRight, Cpu, Radio, ShieldCheck, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectItem {
  id: string;
  tag: string;
  title: string;
  category: string;
  description: string;
  metrics: { label: string; value: string };
  icon: React.ReactNode;
  specs: string[];
}

export const HorizontalShowcase: React.FC<{ onSelectProject?: (title: string) => void }> = ({
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects: ProjectItem[] = [
    {
      id: '01',
      tag: 'SYSTEM 01 // NEURAL COGNITION',
      title: 'Autonomous Swarm Intelligence & Reasoning Engines',
      category: 'APPLIED AI & AGENTIC ARCHITECTURES',
      description:
        'Deterministic execution pipelines, multi-agent consensus networks, and sub-second retrieval clusters engineered for high-stakes operational environments.',
      metrics: { label: 'Inference Latency', value: '< 18ms' },
      icon: <Cpu className="w-6 h-6 text-[#FF3E24]" />,
      specs: ['Vector Graph Indexing', 'Continuous Evaluation', 'Zero Hallucination Tolerance'],
    },
    {
      id: '02',
      tag: 'SYSTEM 02 // ORBITAL COMPUTE',
      title: 'Planetary Mesh & Resilient Distributed Backbones',
      category: 'HIGH-AVAILABILITY CLOUD INFRASTRUCTURE',
      description:
        'Fault-tolerant decentralized edge clusters designed to survive severe network partition events with cryptographic state synchronization.',
      metrics: { label: 'Verified Uptime', value: '99.999%' },
      icon: <Radio className="w-6 h-6 text-[#3B82F6]" />,
      specs: ['Multi-Region Failover', 'Byzantine Fault Resistance', 'Terabit Throughput'],
    },
    {
      id: '03',
      tag: 'SYSTEM 03 // QUANTUM SIMULATION',
      title: 'High-Dimensional Algorithmic Physics & R&D',
      category: 'APPLIED RESEARCH & COMPUTATIONAL SIMULATION',
      description:
        'Pioneering numerical simulation frameworks, deep geometric learning models, and real-time stress testing for aerospace and defense hardware.',
      metrics: { label: 'Compute Acceleration', value: '14.2x' },
      icon: <Zap className="w-6 h-6 text-[#10B981]" />,
      specs: ['GPU Kernel Synthesis', 'Tensor Decomposition', 'Sparse Matrix Engines'],
    },
    {
      id: '04',
      tag: 'SYSTEM 04 // ZERO-TRUST DEFENSE',
      title: 'Mission Command & Sovereign Data Enclaves',
      category: 'MISSION-CRITICAL GOVERNANCE & INTEGRITY',
      description:
        'Hardware-attested cryptographic enclaves ensuring sovereign confidentiality, audited across SOC II Type II, ISO 27001, and strict defense standards.',
      metrics: { label: 'Audit Compliance', value: '100%' },
      icon: <ShieldCheck className="w-6 h-6 text-[#A855F7]" />,
      specs: ['Homomorphic Encryption', 'Air-Gapped Telemetry', 'Immutable Event Logs'],
    },
  ];

  useLayoutEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const ctx = gsap.context(() => {
      const getScrollDistance = () => track.scrollWidth - window.innerWidth + 140;

      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: () => `+=${getScrollDistance()}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const index = Math.min(
            projects.length - 1,
            Math.floor(self.progress * projects.length)
          );
          setActiveIndex(index);

          if (progressRef.current) {
            progressRef.current.style.width = `${Math.max(5, self.progress * 100)}%`;
          }
        },
        animation: gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: 'none',
        }),
      });
    }, container);

    return () => ctx.revert();
  }, [projects.length]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#050B1E] text-white overflow-hidden border-b border-white/10"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-[#FF3E24]/10 rounded-full blur-[140px]" />
      </div>

      <div className="h-screen w-full flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-10">
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 flex items-end justify-between z-10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#FF3E24] tracking-widest uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3E24]" />
              <span>[03 // MISSION MATRIX]</span>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
              Flagship Operational Systems
            </h3>
          </div>

          <div className="hidden md:flex items-center gap-4 font-mono text-xs text-white/50 tracking-wider">
            <span>INDEX: 0{activeIndex + 1} / 0{projects.length}</span>
            <span className="text-white/20">|</span>
            <span className="text-[#FF3E24]">SCROLL DRIVEN TRAJECTORY →</span>
          </div>
        </div>

        <div className="relative flex items-center my-auto z-10 w-full overflow-visible">
          <div
            ref={trackRef}
            className="flex gap-6 sm:gap-10 pl-6 sm:pl-16 pr-24 sm:pr-40 will-change-transform items-center"
          >
            {projects.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectProject?.(item.title)}
                className="group relative w-[85vw] sm:w-[540px] md:w-[600px] h-[480px] sm:h-[520px] flex-shrink-0 bg-[#0B1227]/90 border border-white/10 hover:border-white/30 rounded-lg p-7 sm:p-10 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-white/10 font-mono text-xs">
                    <span className="text-[#FF3E24] tracking-widest">{item.tag}</span>
                    <div className="flex items-center gap-2 text-white/40 group-hover:text-white transition-colors">
                      <span>DEEP DIVE</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="p-2.5 rounded bg-white/5 border border-white/10">
                      {item.icon}
                    </div>
                    <span className="font-mono text-xs tracking-wider text-white/50 uppercase">
                      {item.category}
                    </span>
                  </div>

                  <h4 className="mt-4 text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-white group-hover:text-white/95 leading-snug">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-xs sm:text-sm text-white/65 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block">
                      ARCHITECTURAL SPECS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.specs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/5 text-white/70 border border-white/5"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="sm:text-right flex-shrink-0">
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block">
                      {item.metrics.label}
                    </span>
                    <span className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.metrics.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 z-10">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-[#FF3E24] via-blue-500 to-white w-[5%] transition-all duration-75 ease-out rounded-full"
            />
          </div>
          <div className="flex justify-between items-center mt-3 font-mono text-[11px] text-white/40 tracking-wider">
            <span>DISPATCH 2026 // VECTOR SPACE DYNAMICS</span>
            <span>SYSTEM EXPLORATION SEQUENCE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
