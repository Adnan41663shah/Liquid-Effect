# 🌊 Liquid Effect Animation

A stunning, interactive WebGL-powered liquid animation background component built with React, Next.js, and Three.js. Create immersive water-like distortion effects that respond to user mouse movements.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-000000?style=flat-square&logo=three.js)

---

## ✨ Features

- **🎨 Interactive Liquid Effect** - Real-time WebGL-powered liquid distortion that responds to mouse movements
- **🖼️ Custom Images** - Use any image as the background with liquid effect overlay
- **⚙️ Highly Customizable** - Adjust metalness, roughness, wave intensity, and more
- **🌧️ Rain Effect** - Optional rain drops animation
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **🚀 Performance Optimized** - Isolated in an iframe for smooth performance
- **🎯 TypeScript Support** - Full type definitions included
- **🎨 shadcn/ui Compatible** - Follows shadcn project structure

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Adnan41663shah/Liquid-Effect.git
cd liquidBg
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📖 Usage

### Basic Usage

```tsx
import { LiquidEffectAnimation } from "@/components/ui/liquid-effect-animation"

export default function MyPage() {
  return (
    <div className="relative min-h-screen">
      <LiquidEffectAnimation />
      
      {/* Your content here */}
      <div className="relative z-10">
        <h1>Hello World</h1>
      </div>
    </div>
  )
}
```

### With Custom Options

```tsx
import { LiquidEffectAnimation } from "@/components/ui/liquid-effect-animation"

export default function MyPage() {
  return (
    <div className="relative min-h-screen">
      <LiquidEffectAnimation
        imageUrl="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80"
        metalness={0.8}
        roughness={0.2}
        displacementScale={8}
        enableRain={true}
      />
      
      <div className="relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          {/* Interactive content */}
        </div>
      </div>
    </div>
  )
}
```

---

## 🎛️ Component API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `imageUrl` | `string` | Unsplash mountain image | URL of the background image to apply the liquid effect to |
| `metalness` | `number` | `0.75` | Controls reflectivity of the liquid surface (0-1). Higher = more mirror-like |
| `roughness` | `number` | `0.25` | Controls surface roughness (0-1). Higher = more diffuse reflections |
| `displacementScale` | `number` | `5` | Intensity of the wave displacement. Higher = bigger waves |
| `enableRain` | `boolean` | `false` | Enable/disable rain drop effect |
| `className` | `string` | `""` | Additional CSS classes for the container |

### Examples

#### Calm Water Effect
```tsx
<LiquidEffectAnimation
  metalness={0.9}
  roughness={0.1}
  displacementScale={2}
/>
```

#### Stormy Ocean Effect
```tsx
<LiquidEffectAnimation
  metalness={0.5}
  roughness={0.5}
  displacementScale={15}
  enableRain={true}
/>
```

#### Glossy Surface
```tsx
<LiquidEffectAnimation
  metalness={1.0}
  roughness={0.0}
  displacementScale={3}
/>
```

---

## 🖼️ Recommended Images

The liquid effect works best with:

- **Nature landscapes** - Mountains, forests, oceans
- **Abstract gradients** - Colorful gradient backgrounds
- **Night skies** - Starry nights, auroras
- **Underwater scenes** - Already water-themed images

### Curated Unsplash Images

```tsx
// Mountain Peak
"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"

// Ocean Waves
"https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80"

// Sunset Sky
"https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=1920&q=80"

// Starry Night
"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80"

// Foggy Forest
"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80"

// Alpine Lake
"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
```

---

## 📁 Project Structure

```
liquid-bg/
├── src/
│   ├── app/
│   │   ├── demo/
│   │   │   └── page.tsx        # Interactive demo with controls
│   │   ├── globals.css         # Global styles & CSS variables
│   │   ├── layout.tsx          # Root layout with fonts
│   │   └── page.tsx            # Home page showcase
│   ├── components/
│   │   └── ui/
│   │       ├── index.ts        # Component exports
│   │       └── liquid-effect-animation.tsx  # Main component
│   └── lib/
│       └── utils.ts            # Utility functions (cn)
├── public/                     # Static assets
├── components.json             # shadcn configuration
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

---

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **React 19** | UI library |
| **TypeScript 5** | Type safety |
| **Tailwind CSS 4** | Styling |
| **Three.js** | WebGL 3D graphics |
| **threejs-components** | Liquid effect implementation |
| **shadcn/ui** | Component architecture |
| **Lucide React** | Icons |

---

## 🎨 Customization

### Changing the Theme

Edit `src/app/globals.css` to customize colors:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... more variables */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... more variables */
}
```

### Adding New Fonts

Update `src/app/layout.tsx`:

```tsx
import { YourFont } from "next/font/google"

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
})
```

---

## 🔧 Troubleshooting

### Hydration Warnings

If you see hydration warnings in development, they're likely caused by browser extensions. Add `suppressHydrationWarning` to your `<html>` and `<body>` tags:

```tsx
<html lang="en" suppressHydrationWarning>
  <body suppressHydrationWarning>
```

### Effect Not Visible

1. Ensure the component container has `position: relative` or `fixed`
2. Content overlay should have `z-10` or higher
3. The liquid effect renders at `z-0`

### Mouse Interaction Not Working

Add `pointer-events-none` to the content overlay and `pointer-events-auto` to interactive elements:

```tsx
<div className="relative z-10 pointer-events-none">
  <button className="pointer-events-auto">Click me</button>
</div>
```

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Credits

- **[threejs-components](https://www.npmjs.com/package/threejs-components)** - Liquid background effect
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[Unsplash](https://unsplash.com/)** - Beautiful stock images
- **[shadcn/ui](https://ui.shadcn.com/)** - Component architecture inspiration

---

## 📸 Screenshots

### Home Page
The main showcase page featuring the liquid effect with a glassmorphism card overlay.

### Interactive Demo
Full control panel to customize metalness, roughness, wave intensity, rain effect, and background images in real-time.

---

<p align="center">
  Made with ❤️ using Next.js, React, and Three.js
</p>
