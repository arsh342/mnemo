import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mnemo - Intelligent Tab Management",
  description: "Stop losing tabs. Mnemo intelligently archives inactive tabs while preserving complete context for instant restoration.",
  icons: {
    icon: [
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/icon-48.png',
    apple: '/icon-192.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#f5f5f7] text-[#1d1d1f]">
        {children}
      </body>
    </html>
  );
}
