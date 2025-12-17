import { LiquidEffectAnimation } from "@/components/ui/liquid-effect-animation"
import { Droplets, Mountain, Waves } from "lucide-react"

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Liquid Background Effect */}
      <LiquidEffectAnimation
        imageUrl="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
        metalness={0.75}
        roughness={0.25}
        displacementScale={5}
        enableRain={false}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none">
        {/* Glassmorphism Card */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl backdrop-blur-md bg-white/10 rounded-2xl sm:rounded-3xl border border-white/20 p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl pointer-events-auto">
          {/* Icon */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 rounded-full bg-white/20 backdrop-blur-sm">
              <Droplets className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-3 sm:mb-4 drop-shadow-lg tracking-tight">
            Liquid Effect
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white/80 text-center mb-6 sm:mb-8 leading-relaxed">
            An immersive WebGL-powered liquid animation background using Three.js
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
              <Waves className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-300" />
              <span className="text-xs sm:text-sm text-white/90">WebGL</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
              <Mountain className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-300" />
              <span className="text-xs sm:text-sm text-white/90">Three.js</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
              <Droplets className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" />
              <span className="text-xs sm:text-sm text-white/90">Interactive</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-gray-900 font-semibold text-sm sm:text-base hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View Source
            </a>
            <a
              href="/demo"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              Interactive Demo
            </a>
          </div>
        </div>

        {/* Bottom hint */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2">
          <p className="text-white/60 text-xs sm:text-sm animate-pulse">
            Move your cursor to interact with the liquid effect
          </p>
        </div>
      </div>
    </main>
  )
}
