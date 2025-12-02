'use client';

import { useEffect, useRef } from 'react';
import { Brain, Search, Sparkles, Shield, Zap, Clock, Twitter, Github, Linkedin } from 'lucide-react';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { Footer } from '@/components/ui/footer';
import { GooeyText } from '@/components/ui/gooey-text-morphing';
import { Feature } from '@/components/ui/feature-with-advantages';
import { Spotlight } from '@/components/ui/spotlight';


export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Full page FlickeringGrid background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <FlickeringGrid
          className="absolute inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#8b7bff"
          maxOpacity={0.15}
          flickerChance={0.1}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Logo */}
          <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
            <img src="/logo.png" alt="Mnemo" className="w-12 h-12" />
            <h1 className="text-5xl font-bold">Mnemo</h1>
          </div>

          {/* Headline with Morphing Text */}
          <div className="min-h-[150px] flex items-center justify-center mb-6 w-full">
            <GooeyText
              texts={["Never Lose a Tab", "Always Find a Tab", "Smart Archive Tabs"]}
              morphTime={1.5}
              cooldownTime={0.5}
              className="font-bold w-full"
              textClassName="bg-gradient-to-r from-[#8b7bff] to-[#b794f6] bg-clip-text text-transparent !text-5xl md:!text-6xl whitespace-nowrap"
            />
          </div>

          <p className="text-xl md:text-2xl text-[#6e6e73] max-w-3xl mx-auto mb-12 animate-fade-in delay-200">
            Intelligent tab management through automated context capture. 
            Archive tabs confidently, restore instantly.
          </p>

          {/* CTA Buttons Removed */}

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in delay-500">
            <div>
              <div className="text-4xl font-bold text-[#8b7bff]">100%</div>
              <div className="text-sm text-[#a0a0a0]">Local & Private</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#8b7bff]">0ms</div>
              <div className="text-sm text-[#a0a0a0]">Latency</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#8b7bff]">∞</div>
              <div className="text-sm text-[#a0a0a0]">Tabs Managed</div>
            </div>
          </div>
        </div>


      </section>

      {/* Features Section */}
      <Feature />

      {/* Coming Soon Section */}
      <section id="coming-soon" className="py-24 px-6">
        <div className="h-[40rem] w-full rounded-3xl flex md:items-center md:justify-center bg-[#8b7bff] antialiased relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center text-white">
              Browser Extension <br /> Coming Soon.
            </h1>
            <p className="mt-4 font-normal text-base text-white/90 max-w-lg text-center mx-auto">
              Experience intelligent tab management directly in your browser. 
              Never lose context again with our powerful extension.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer
        logo={<img src="/logo.png" alt="Mnemo" className="w-10 h-10" />}
        brandName="Mnemo"
        socialLinks={[
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com/thearshsran",
            label: "Twitter",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com/arsh342",
            label: "GitHub",
          },
          {
            icon: <Linkedin className="h-5 w-5" />,
            href: "https://www.linkedin.com/in/arsh342/",
            label: "LinkedIn",
          },
        ]}
        mainLinks={[
          { href: "#features", label: "Features" },
          { href: "https://github.com/arsh342/mnemo", label: "Documentation" },
          { href: "https://github.com/arsh342/mnemo", label: "GitHub" },
          { href: "#coming-soon", label: "Chrome Store" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy Policy" },
          { href: "/license", label: "License" },
        ]}
        copyright={{
          text: "© 2025 Mnemo - All rights reserved.",
          license: "MIT License",
        }}
      />
    </main>
  );
}


