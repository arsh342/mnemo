'use client';

import { Footer } from '@/components/ui/footer';
import { Twitter, Github, ArrowLeft, Linkedin } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] relative">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <a href="/" className="p-2 rounded-full hover:bg-black/5 transition-colors">
            <ArrowLeft className="w-6 h-6 text-[#1d1d1f]" />
          </a>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Mnemo" className="w-8 h-8" />
            <span className="text-xl font-bold text-[#1d1d1f]">Mnemo</span>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-[#1d1d1f] mb-2">Privacy Policy</h1>
          <p className="text-[#6e6e73] mb-8">Last Updated: December 11, 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Our Commitment to Privacy</h2>
            <p className="text-[#6e6e73] leading-relaxed">
              Mnemo is built with privacy as a fundamental design principle. We believe you should have complete control over your browsing data, and that data should never leave your device without your explicit consent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Data Collection and Storage</h2>
            
            <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">What Data Mnemo Collects</h3>
            <p className="text-[#6e6e73] mb-4">Mnemo collects the following information <strong>locally on your device</strong> to provide intelligent tab management:</p>
            
            <ul className="list-disc pl-6 space-y-2 text-[#6e6e73] mb-6">
              <li><strong>Tab Metadata:</strong> Page titles, URLs, domain names, timestamps.</li>
              <li><strong>Interaction Signals:</strong> Time spent on pages, scroll depth, copy/paste events, clicks.</li>
              <li><strong>Page Content:</strong> Text extracts (for search), screenshots (optional), scroll positions.</li>
              <li><strong>Calculated Data:</strong> Importance scores, visit frequency, usage patterns.</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">Where Data is Stored</h3>
            <p className="text-[#6e6e73] mb-4"><strong>All data is stored locally</strong> in your browser using IndexedDB. Specifically:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#6e6e73]">
              <li>Data never leaves your device</li>
              <li>Data is not transmitted to any server</li>
              <li>No network requests are made to external services</li>
              <li>No analytics or tracking systems are used</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Data Usage</h2>
            <p className="text-[#6e6e73] mb-4">Mnemo uses your data <strong>exclusively</strong> for:</p>
            <ol className="list-decimal pl-6 space-y-2 text-[#6e6e73]">
              <li>Calculating tab importance scores</li>
              <li>Archiving low-value tabs</li>
              <li>Providing search and restoration features</li>
              <li>Contextual suggestions</li>
              <li>Timeline visualization</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Third-Party Access</h2>
            <p className="text-[#6e6e73] mb-4"><strong>Mnemo does NOT:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-[#6e6e73]">
              <li>Share any data with third parties</li>
              <li>Send any data to external servers</li>
              <li>Include any analytics or tracking code</li>
              <li>Use any third-party services or APIs</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Your Control</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">Exclude Domains</h3>
                <p className="text-[#6e6e73]">You can exclude specific domains from being captured via the Settings panel.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">Disable Screenshots</h3>
                <p className="text-[#6e6e73]">You can disable screenshot capture entirely in Settings if you prefer text-only archiving.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2">Delete Data</h3>
                <p className="text-[#6e6e73]">You can delete individual items or permanently purge all data with one click in Settings.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Chrome Web Store Data Usage Disclosure</h2>
            <p className="text-[#6e6e73] mb-4">As required by the Chrome Web Store, Mnemo collects:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#6e6e73] mb-6">
              <li><strong>Web History:</strong> URLs and page titles of visited sites</li>
              <li><strong>Website Content:</strong> Limited text extracts (~2KB) and optional screenshots</li>
              <li><strong>User Activity:</strong> Interaction signals including scroll depth, clicks, dwell time, and clipboard events</li>
            </ul>
            <p className="text-[#6e6e73] mb-4"><strong>Important:</strong> All collected data:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#6e6e73]">
              <li>Remains on your local device only</li>
              <li>Is never transmitted to external servers</li>
              <li>Is never sold or shared with third parties</li>
              <li>Is used solely for tab management and importance scoring</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Contact</h2>
            <p className="text-[#6e6e73]">
              If you have questions or concerns about privacy, please open an issue on our <a href="https://github.com/arsh342/mnemo" className="text-[#8b7bff] hover:underline">GitHub repository</a>.
            </p>
          </section>
        </article>
      </div>

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
          { href: "/#features", label: "Features" },
          { href: "https://github.com/arsh342/mnemo", label: "Documentation" },
          { href: "https://github.com/arsh342/mnemo", label: "GitHub" },
          { href: "/#coming-soon", label: "Chrome Store" },
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
