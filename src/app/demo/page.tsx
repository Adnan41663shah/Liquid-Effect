"use client"

import { useState, useCallback } from "react"
import { LiquidEffectAnimation } from "@/components/ui/liquid-effect-animation"
import { 
  Droplets, 
  Settings, 
  Image as ImageIcon, 
  ChevronLeft,
  Sun,
  CloudRain,
  Sparkles,
  Layers
} from "lucide-react"
import Link from "next/link"

// Curated Unsplash images that work great with liquid effect
const PRESET_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    name: "Mountain Peak",
    icon: "🏔️"
  },
  {
    url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920&q=80", 
    name: "Ocean Waves",
    icon: "🌊"
  },
  {
    url: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=1920&q=80",
    name: "Sunset Sky",
    icon: "🌅"
  },
  {
    url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80",
    name: "Starry Night",
    icon: "✨"
  },
  {
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80",
    name: "Foggy Forest",
    icon: "🌲"
  },
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80",
    name: "Alpine Lake",
    icon: "🏞️"
  }
]

export default function DemoPage() {
  const [imageUrl, setImageUrl] = useState(PRESET_IMAGES[0].url)
  const [metalness, setMetalness] = useState(0.75)
  const [roughness, setRoughness] = useState(0.25)
  const [displacementScale, setDisplacementScale] = useState(5)
  const [enableRain, setEnableRain] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [key, setKey] = useState(0) // For forcing re-render

  // Force component remount when settings change
  const applySettings = useCallback(() => {
    setKey(prev => prev + 1)
  }, [])

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Liquid Background Effect */}
      <LiquidEffectAnimation
        key={key}
        imageUrl={imageUrl}
        metalness={metalness}
        roughness={roughness}
        displacementScale={displacementScale}
        enableRain={enableRain}
      />

      {/* Back Button */}
      <Link
        href="/"
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-black/30 backdrop-blur-md text-white text-sm font-medium hover:bg-black/50 transition-all duration-300 border border-white/20"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Back</span>
      </Link>

      {/* Settings Toggle Button */}
      <button
        onClick={() => setShowControls(!showControls)}
        className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-black/30 backdrop-blur-md text-white text-sm font-medium hover:bg-black/50 transition-all duration-300 border border-white/20"
      >
        <Settings className={`w-4 h-4 transition-transform duration-300 ${showControls ? 'rotate-180' : ''}`} />
        <span className="hidden sm:inline">{showControls ? 'Hide' : 'Show'} Controls</span>
      </button>

      {/* Controls Panel */}
      <div
        className={`fixed top-16 right-4 z-40 w-[calc(100%-2rem)] sm:w-80 md:w-96 transition-all duration-500 ease-out ${
          showControls 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="backdrop-blur-xl bg-black/40 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
          {/* Panel Header */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
              <h2 className="text-white font-semibold text-sm sm:text-base">Effect Controls</h2>
            </div>
          </div>

          <div className="p-4 sm:p-6 space-y-5 sm:space-y-6 max-h-[calc(100vh-10rem)] overflow-y-auto">
            {/* Image Selection */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium">
                <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                Background Image
              </div>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                {PRESET_IMAGES.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setImageUrl(image.url)
                      applySettings()
                    }}
                    className={`p-2 sm:p-3 rounded-lg sm:rounded-xl text-center transition-all duration-200 ${
                      imageUrl === image.url
                        ? 'bg-white/30 border-2 border-cyan-400 scale-105'
                        : 'bg-white/10 border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    <div className="text-lg sm:text-xl mb-0.5 sm:mb-1">{image.icon}</div>
                    <div className="text-white/80 text-[10px] sm:text-xs truncate">{image.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Metalness Slider */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium">
                  <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" />
                  Metalness
                </div>
                <span className="text-white/60 text-xs sm:text-sm font-mono">{metalness.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={metalness}
                onChange={(e) => setMetalness(parseFloat(e.target.value))}
                onMouseUp={applySettings}
                onTouchEnd={applySettings}
                className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-cyan-400 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:shadow-lg"
              />
            </div>

            {/* Roughness Slider */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium">
                  <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
                  Roughness
                </div>
                <span className="text-white/60 text-xs sm:text-sm font-mono">{roughness.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={roughness}
                onChange={(e) => setRoughness(parseFloat(e.target.value))}
                onMouseUp={applySettings}
                onTouchEnd={applySettings}
                className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-orange-400 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-400 [&::-webkit-slider-thumb]:shadow-lg"
              />
            </div>

            {/* Displacement Scale Slider */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium">
                  <Droplets className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                  Wave Intensity
                </div>
                <span className="text-white/60 text-xs sm:text-sm font-mono">{displacementScale}</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={displacementScale}
                onChange={(e) => setDisplacementScale(parseInt(e.target.value))}
                onMouseUp={applySettings}
                onTouchEnd={applySettings}
                className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-blue-400 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-400 [&::-webkit-slider-thumb]:shadow-lg"
              />
            </div>

            {/* Rain Toggle */}
            <div className="flex items-center justify-between py-2 sm:py-3 px-3 sm:px-4 bg-white/10 rounded-lg sm:rounded-xl">
              <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm font-medium">
                <CloudRain className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                Rain Effect
              </div>
              <button
                onClick={() => {
                  setEnableRain(!enableRain)
                  setTimeout(applySettings, 0)
                }}
                className={`relative w-10 sm:w-12 h-5 sm:h-6 rounded-full transition-colors duration-300 ${
                  enableRain ? 'bg-cyan-500' : 'bg-white/30'
                }`}
              >
                <div
                  className={`absolute top-0.5 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-white shadow-lg transition-transform duration-300 ${
                    enableRain ? 'translate-x-5 sm:translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {/* Apply Button */}
            <button
              onClick={applySettings}
              className="w-full py-2.5 sm:py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg sm:rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 text-sm sm:text-base"
            >
              Apply Changes
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Hint */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30">
        <div className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/20">
          <p className="text-white/70 text-xs sm:text-sm text-center">
            {showControls ? 'Adjust settings above' : 'Tap settings to customize'}
          </p>
        </div>
      </div>
    </main>
  )
}

