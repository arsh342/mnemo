'use client';

import { Footer } from '@/components/ui/footer';
import { Twitter, Github, ArrowLeft, Linkedin } from 'lucide-react';

export default function License() {
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
          <h1 className="text-4xl font-bold text-[#1d1d1f] mb-8">MIT License</h1>
          
          <div className="bg-white p-8 rounded-3xl border border-[#e8e8ed] shadow-sm">
            <p className="text-[#6e6e73] mb-6 font-mono text-sm">Copyright (c) 2025 arsh342</p>
            
            <p className="text-[#1d1d1f] mb-4 leading-relaxed">
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the "Software"), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>

            <p className="text-[#1d1d1f] mb-6 leading-relaxed">
              The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.
            </p>

            <p className="text-[#1d1d1f] font-medium leading-relaxed">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              SOFTWARE.
            </p>
          </div>
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
          { href: "https://github.com/arsh342", label: "Documentation" },
          { href: "https://github.com/arsh342", label: "GitHub" },
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
