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
  Download,
  FolderOpen,
  Settings,
  CheckCircle2,
  Check,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Footer } from "@/components/ui/footer";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { Feature } from "@/components/ui/feature-with-advantages";
import { Spotlight } from "@/components/ui/spotlight";
import {
  Stepper,
  StepperContent,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

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

// Installation Steps
const installationSteps = [
  {
    title: "Download Extension",
    description: "Download mnemo.zip from the website",
    icon: Download,
  },
  {
    title: "Extract Files",
    description: "Unzip the downloaded file to a folder",
    icon: FolderOpen,
  },
  {
    title: "Enable Developer Mode",
    description: "Turn on Developer mode in your browser",
    icon: Settings,
  },
  {
    title: "Load Extension",
    description: 'Click "Load unpacked" and select folder',
    icon: CheckCircle2,
  },
];

// Installation Section Component
function InstallationSection({
  browser,
}: {
  browser: keyof typeof browserConfig;
}) {
  const currentBrowser = browserConfig[browser];
  const isSupported = currentBrowser.storeUrl !== "#";
  const [activeStep, setActiveStep] = useState(1);

  if (!isSupported) {
    return null; // Don't show installation for unsupported browsers
  }

  const handleNext = () => {
    if (activeStep < installationSteps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <section id="installation" className="py-24 px-6 bg-[var(--clay-bg)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--clay-text)]">
            Easy Installation
          </h2>
          <p className="text-lg text-[var(--clay-text-muted)] max-w-2xl mx-auto">
            Follow these simple steps to install Mnemo on{" "}
            <span className="font-semibold text-[var(--clay-accent)]">
              {browser.charAt(0).toUpperCase() + browser.slice(1)}
            </span>
          </p>
        </div>

        {/* Stepper */}
        <div className="clay-card p-6 md:p-12">
          <Stepper
            className="flex flex-col gap-8"
            value={activeStep}
            onValueChange={setActiveStep}
            orientation="horizontal"
            indicators={{
              completed: <Check className="size-4" />,
            }}
          >
            <StepperNav>
              {installationSteps.map((step, index) => (
                <StepperItem key={index} step={index + 1}>
                  <StepperTrigger>
                    <StepperIndicator className="data-[state=completed]:bg-green-500 data-[state=completed]:text-white data-[state=active]:bg-[var(--clay-accent)] data-[state=active]:text-white">
                      {index + 1}
                    </StepperIndicator>
                    <div className="hidden md:block text-left">
                      <StepperTitle className="text-[var(--clay-text)]">
                        {step.title}
                      </StepperTitle>
                      <StepperDescription>
                        {step.description}
                      </StepperDescription>
                    </div>
                  </StepperTrigger>
                  {index < installationSteps.length - 1 && (
                    <StepperSeparator className="group-data-[state=completed]/step:bg-green-500" />
                  )}
                </StepperItem>
              ))}
            </StepperNav>

            <StepperPanel>
              {installationSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <StepperContent key={index} value={index + 1}>
                    <div className="flex flex-col items-center gap-4 p-4 md:p-8 text-center">
                      <div className="rounded-full bg-[var(--clay-accent)]/10 p-4">
                        <Icon className="size-8 text-[var(--clay-accent)]" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-[var(--clay-text)]">
                          {step.title}
                        </h3>
                        <p className="text-[var(--clay-text-muted)] max-w-md">
                          {step.description}
                        </p>
                      </div>
                      {index === 0 && (
                        <div className="mt-4 space-y-3 text-left w-full max-w-md">
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Click the download button above
                          </p>
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Save the mnemo.zip file to your computer
                          </p>
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Remember the download location
                          </p>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="mt-4 space-y-3 text-left w-full max-w-md">
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Right-click the downloaded zip file
                          </p>
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Select "Extract All" or use your preferred
                            extraction tool
                          </p>
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Choose a permanent location for the folder (don't
                            delete it later!)
                          </p>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="mt-4 space-y-3 text-left w-full max-w-md">
                          <p className="text-sm text-[var(--clay-text-muted)] mb-2">
                            • Open your browser's extensions page:
                          </p>
                          <code className="block bg-gray-100 px-3 py-2 rounded text-xs font-mono">
                            {browser === "chrome" && "chrome://extensions"}
                            {browser === "edge" && "edge://extensions"}
                            {browser === "brave" && "brave://extensions"}
                            {browser === "arc" && "arc://extensions"}
                            {browser === "opera" && "opera://extensions"}
                            {browser === "vivaldi" && "vivaldi://extensions"}
                            {browser === "chromium" && "chrome://extensions"}
                            {browser === "samsung" && "internet://extensions"}
                          </code>
                          <p className="text-sm text-[var(--clay-text-muted)] mt-2">
                            • Toggle "Developer mode" ON (usually in the
                            top-right corner)
                          </p>
                        </div>
                      )}
                      {index === 3 && (
                        <div className="mt-4 space-y-3 text-left w-full max-w-md">
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Click the "Load unpacked" button
                          </p>
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Navigate to and select the extracted mnemo folder
                          </p>
                          <p className="text-sm text-[var(--clay-text-muted)]">
                            • Grant permissions when prompted
                          </p>
                          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-sm font-semibold text-green-700 flex items-center gap-2">
                              <CheckCircle2 className="size-5" />
                              Installation complete! Start managing your tabs
                              intelligently.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </StepperContent>
                );
              })}
            </StepperPanel>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={handlePrevious}
                disabled={activeStep === 1}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--clay-text)] rounded-full font-semibold hover:bg-[var(--clay-hover)] transition-all border border-[var(--clay-border)] shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>

              {activeStep < installationSteps.length ? (
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--clay-accent)] text-white rounded-full font-semibold hover:bg-[var(--clay-accent-hover)] transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <a
                  href={currentBrowser.storeUrl}
                  download="mnemo.zip"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  Download Now
                </a>
              )}
            </div>
          </Stepper>
        </div>

        {/* Troubleshooting */}
        <div className="mt-12 clay-card p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-4 text-[var(--clay-text)]">
            Troubleshooting
          </h3>
          <div className="space-y-3 text-sm text-[var(--clay-text-muted)]">
            <div className="flex gap-3">
              <span className="text-[var(--clay-accent)] font-bold">•</span>
              <p>
                <strong className="text-[var(--clay-text)]">
                  Extension not loading?
                </strong>{" "}
                Make sure you selected the correct folder containing the
                manifest.json file
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--clay-accent)] font-bold">•</span>
              <p>
                <strong className="text-[var(--clay-text)]">
                  Permissions error?
                </strong>{" "}
                Grant all requested permissions for full functionality
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[var(--clay-accent)] font-bold">•</span>
              <p>
                <strong className="text-[var(--clay-text)]">
                  Not working properly?
                </strong>{" "}
                Try disabling and re-enabling the extension, or contact us on{" "}
                <a
                  href="https://github.com/arsh342/mnemo/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--clay-accent)] hover:underline"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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

      {/* Installation Instructions Section */}
      <InstallationSection browser={browser} />

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
