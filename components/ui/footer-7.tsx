import React from "react";
import { Instagram, Facebook, Twitter, Linkedin, Brain } from "lucide-react";

interface Footer7Props {
  logo?: {
    url: string;
    icon: React.ReactElement;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "How it Works", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Chrome Store", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "GitHub", href: "#" },
      { name: "Community", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "/",
    icon: <img src="/logo.png" alt="Mnemo" className="w-8 h-8" />,
    title: "Mnemo",
  },
  sections = defaultSections,
  description = "Intelligent tab management through automated context capture. Never lose a tab again.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 Mnemo. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-16 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url} className="flex items-center gap-2">
                {logo.icon}
                <h2 className="text-xl font-semibold text-[#1d1d1f]">{logo.title}</h2>
              </a>
            </div>
            <p className="max-w-[70%] text-sm text-[#6e6e73]">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-[#6e6e73]">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-[#8b7bff] transition">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold text-[#1d1d1f]">{section.title}</h3>
                <ul className="space-y-3 text-sm text-[#6e6e73]">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-[#8b7bff] transition"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[#e8e8ed] pt-8 text-xs font-medium text-[#86868b] md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:gap-4">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-[#8b7bff] transition">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
