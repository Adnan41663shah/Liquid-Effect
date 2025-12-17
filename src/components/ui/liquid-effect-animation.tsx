"use client"

import { useEffect, useState, useMemo } from "react"

interface LiquidEffectAnimationProps {
  imageUrl?: string
  metalness?: number
  roughness?: number
  displacementScale?: number
  enableRain?: boolean
  className?: string
}

export function LiquidEffectAnimation({
  imageUrl = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  metalness = 0.75,
  roughness = 0.25,
  displacementScale = 5,
  enableRain = false,
  className = "",
}: LiquidEffectAnimationProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsMounted(true)
    // Give iframe time to load
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  // Generate iframe HTML content
  const iframeContent = useMemo(() => {
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; overflow: hidden; background: #0f172a; }
    canvas { display: block; width: 100%; height: 100%; }
  </style>
</head>
<body>
  <canvas id="liquid-canvas"></canvas>
  <script type="module">
    import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.22/build/backgrounds/liquid1.min.js';
    
    const canvas = document.getElementById('liquid-canvas');
    if (canvas) {
      try {
        const app = LiquidBackground(canvas);
        app.loadImage('${imageUrl.replace(/'/g, "\\'")}');
        app.liquidPlane.material.metalness = ${metalness};
        app.liquidPlane.material.roughness = ${roughness};
        app.liquidPlane.uniforms.displacementScale.value = ${displacementScale};
        app.setRain(${enableRain});
        
        // Notify parent
        window.parent.postMessage({ type: 'liquidReady' }, '*');
      } catch (error) {
        console.error('Liquid effect error:', error);
        window.parent.postMessage({ type: 'liquidError', error: error.message }, '*');
      }
    }
  </script>
</body>
</html>`
    return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`
  }, [imageUrl, metalness, roughness, displacementScale, enableRain])

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'liquidReady') {
        setIsLoading(false)
      } else if (event.data?.type === 'liquidError') {
        setIsLoading(false)
        console.error('Liquid effect error:', event.data.error)
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  // SSR placeholder
  if (!isMounted) {
    return (
      <div
        className={`fixed inset-0 z-0 m-0 w-full h-full touch-none overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black ${className}`}
        suppressHydrationWarning
      />
    )
  }

  return (
    <div
      className={`fixed inset-0 z-0 m-0 w-full h-full touch-none overflow-hidden ${className}`}
      suppressHydrationWarning
    >
      {/* Iframe with liquid effect */}
      <iframe
        src={iframeContent}
        className="absolute inset-0 w-full h-full border-0 z-0"
        style={{ border: 'none', pointerEvents: 'auto' }}
        title="Liquid Effect Background"
        allow="accelerometer; autoplay; encrypted-media; gyroscope"
      />
      
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black transition-opacity duration-700">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 border-[3px] border-cyan-500/30 rounded-full" />
              <div className="absolute inset-0 w-12 h-12 border-[3px] border-transparent border-t-cyan-400 rounded-full animate-spin" />
            </div>
            <p className="text-white/60 text-sm font-medium">Loading liquid effect...</p>
          </div>
        </div>
      )}
    </div>
  )
}
