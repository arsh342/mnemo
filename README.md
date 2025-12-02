# Mnemo Website

The official landing page and documentation site for **Mnemo**, the intelligent tab management browser extension.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion, Custom CSS
- **Deployment:** Vercel (Recommended)

## ✨ Features

### Website Features
- **Modern UI:** Clean, claymorphism-inspired design with a light theme.
- **Interactive Elements:**
  - **GooeyText:** Morphing text animation in the hero section.
  - **Spotlight:** Dynamic spotlight effect for the "Coming Soon" section.
  - **FlickeringGrid:** Subtle, animated background grid.
  - **Hover Effects:** Interactive cards and buttons.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
- **Legal Pages:** Integrated Privacy Policy and License pages.

### Mnemo Extension Features
- **Smart Tab Archiving:** Automatic archiving based on inactivity and importance scores.
- **ML-Powered Personalization:** Learns browsing patterns to protect important tabs.
- **Powerful Search:** TF-IDF full-text search across titles, URLs, and page content.
- **Privacy First:** 100% local storage (IndexedDB), no tracking or analytics.
- **Timeline View:** Browse complete browsing history with session restoration.
- **Custom Rules:** Fine-grained control with domain-specific archiving rules.

## 🛠️ Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/ui/`: Reusable UI components (Buttons, Cards, Animations).
- `public/`: Static assets (images, icons).
- `lib/`: Utility functions.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
