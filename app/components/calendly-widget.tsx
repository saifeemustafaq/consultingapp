'use client'

import { useEffect } from 'react'

export function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div 
      className="calendly-inline-widget w-full" 
      data-url="https://calendly.com/saifeemustafaq/30min"
      style={{
        height: '400px',
        overflow: 'hidden'
      }}
    />
  )
} 