# Mnemo Website

The official landing page and documentation site for **Mnemo**, the intelligent tab management browser extension.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion, Custom CSS

## ✨ Features

### Website Features
- **Modern UI:** Clean, claymorphism-inspired design with a light theme.
- **Dynamic Browser Detection:** Automatically detects user's browser and displays appropriate icon/download button.
- **Interactive Elements:**
  - **GooeyText:** Morphing text animation in the hero section.
  - **Spotlight:** Dynamic spotlight effect for the CTA section.
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

## 📦 Installing the Extension

### Download
Click the download button on the website or download directly from `/public/mnemo.zip`.

### Installation Instructions

#### For Chrome / Chromium / Brave / Edge / Arc / Vivaldi / Opera

1. **Download the Extension**
   - Download `mnemo.zip` from the website
   - Extract the zip file to a folder on your computer

2. **Enable Developer Mode**
   - Open your browser's extensions page:
     - **Chrome:** `chrome://extensions`
     - **Edge:** `edge://extensions`
     - **Brave:** `brave://extensions`
     - **Arc:** `arc://extensions`
     - **Vivaldi:** `vivaldi://extensions`
     - **Opera:** `opera://extensions`
   - Toggle **"Developer mode"** ON (usually in the top right corner)

3. **Load the Extension**
   - Click **"Load unpacked"** button
   - Navigate to the extracted folder and select it
   - The Mnemo extension should now appear in your extensions list

4. **Start Using Mnemo**
   - Click the Mnemo icon in your browser toolbar
   - Grant necessary permissions when prompted
   - Start managing your tabs intelligently!

### Troubleshooting

- **Extension not loading?** Make sure you selected the correct folder containing the `manifest.json` file
- **Permissions error?** Grant all requested permissions for full functionality
- **Not working properly?** Try disabling and re-enabling the extension

### Supported Browsers

✅ **Chromium-Based (Supported):**
- Google Chrome
- Microsoft Edge
- Brave Browser
- Arc Browser
- Vivaldi
- Opera
- Samsung Internet
- Any Chromium-based browser

❌ **Not Supported:**
- Firefox (uses different extension architecture)
- Safari (uses different extension architecture)

## 🛠️ Development

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to view the website.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
