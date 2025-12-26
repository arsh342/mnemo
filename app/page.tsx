"use client";

import { useEffect, useRef, useState } from "react";
import {
  Brain,
  Search,
  Sparkles,
  Shield,
  Zap,
  Clock,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Footer } from "@/components/ui/footer";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { Feature } from "@/components/ui/feature-with-advantages";
import { Spotlight } from "@/components/ui/spotlight";

// Browser detection function
function detectBrowser() {
  if (typeof window === "undefined") return "chromium";

  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.includes("samsungbrowser")) return "samsung";
  if (userAgent.includes("edg")) return "edge";
  if (userAgent.includes("opr") || userAgent.includes("opera")) return "opera";
  if (userAgent.includes("brave")) return "brave";
  if (userAgent.includes("vivaldi")) return "vivaldi";
  if (userAgent.includes("arc")) return "arc";
  if (userAgent.includes("firefox")) return "firefox";
  if (userAgent.includes("safari") && !userAgent.includes("chrome"))
    return "safari";
  if (userAgent.includes("chrome")) return "chrome";

  // Check if it's a Chromium-based browser (fallback)
  if (userAgent.includes("chromium") || userAgent.includes("crios"))
    return "chromium";

  return "chromium"; // default
}

// Browser config
const browserConfig = {
  chrome: {
    icon: "/chrome.png",
    text: "Download for Chrome",
    storeUrl: "/mnemo.zip",
  },
  chromium: {
    icon: "/chromium.png",
    text: "Download Extension",
    storeUrl: "/mnemo.zip",
  },
  edge: {
    icon: "/edge.png",
    text: "Download for Edge",
    storeUrl: "/mnemo.zip",
  },
  brave: {
    icon: "/brave.png",
    text: "Download for Brave",
    storeUrl: "/mnemo.zip",
  },
  arc: {
    icon: "/arc.png",
    text: "Download for Arc",
    storeUrl: "/mnemo.zip",
  },
  firefox: {
    icon: "/firefox.png",
    text: "Not Available for Firefox",
    storeUrl: "#",
  },
  safari: {
    icon: "/safari.png",
    text: "Not Available for Safari",
    storeUrl: "#",
  },
  opera: {
    icon: "/opera.png",
    text: "Download for Opera",
    storeUrl: "/mnemo.zip",
  },
  vivaldi: {
    icon: "/vivaldi.png",
    text: "Download for Vivaldi",
    storeUrl: "/mnemo.zip",
  },
  samsung: {
    icon: "/samsungbrowser.png",
    text: "Download for Samsung Internet",
    storeUrl: "/mnemo.zip",
  },
};

export default function Home() {
  const [browser, setBrowser] =
    useState<keyof typeof browserConfig>("chromium");

  useEffect(() => {
    setBrowser(detectBrowser() as keyof typeof browserConfig);
  }, []);

  const currentBrowser = browserConfig[browser];
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
              texts={[
                "Never Lose a Tab",
                "Always Find a Tab",
                "Smart Archive Tabs",
              ]}
              morphTime={1.5}
              cooldownTime={0.5}
              className="font-bold w-full"
              textClassName="bg-gradient-to-r from-[#8b7bff] to-[#b794f6] bg-clip-text text-transparent !text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl"
            />
          </div>

          <p className="text-xl md:text-2xl text-[#6e6e73] max-w-3xl mx-auto mb-12 animate-fade-in delay-200">
            Intelligent tab management through automated context capture.
            Archive tabs confidently, restore instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-300">
            {currentBrowser.storeUrl !== "#" ? (
              <a
                href={currentBrowser.storeUrl}
                download="mnemo.zip"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#8b7bff] text-white rounded-full font-semibold hover:bg-[#9d8dff] transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <img
                  src={currentBrowser.icon}
                  alt={browser}
                  className="w-5 h-5"
                />
                {currentBrowser.text} - It's Free
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-8 py-4 bg-gray-400 text-white rounded-full font-semibold cursor-not-allowed opacity-60">
                <img
                  src={currentBrowser.icon}
                  alt={browser}
                  className="w-5 h-5"
                />
                {currentBrowser.text}
              </div>
            )}
            <a
              href="https://github.com/arsh342/mnemo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1d1d1f] rounded-full font-semibold hover:bg-[#fafafa] transition-all border border-[#e8e8ed] shadow-sm hover:shadow-md"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>

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

      {/* CTA Section */}
      <section id="download" className="py-24 px-6">
        <div className="h-auto min-h-[500px] md:h-[40rem] w-full rounded-3xl flex md:items-center md:justify-center bg-[#8b7bff] antialiased relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className="p-4 max-w-7xl mx-auto relative z-10 w-full py-12 md:pt-20 md:md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center text-white">
              Ready to Transform <br /> Your Tab Management?
            </h1>
            <p className="mt-4 font-normal text-base text-white/90 max-w-lg text-center mx-auto">
              Experience intelligent tab management directly in your browser.
              Never lose context again with our powerful extension.
            </p>
            <div className="flex justify-center mt-8">
              {currentBrowser.storeUrl !== "#" ? (
                <a
                  href={currentBrowser.storeUrl}
                  download="mnemo.zip"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#8b7bff] rounded-full font-semibold hover:bg-[#fafafa] transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <img
                    src={currentBrowser.icon}
                    alt={browser}
                    className="w-5 h-5"
                  />
                  {currentBrowser.text} - It's Free
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-8 py-4 bg-gray-400 text-white rounded-full font-semibold cursor-not-allowed opacity-60">
                  <img
                    src={currentBrowser.icon}
                    alt={browser}
                    className="w-5 h-5"
                  />
                  {currentBrowser.text}
                </div>
              )}
            </div>
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
