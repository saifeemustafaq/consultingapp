'use client'

import { useEffect, useRef, useState } from 'react'

const metrics = [
  {
    value: 500,
    label: 'Professionals Trained',
    prefix: '+',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    )
  },
  {
    value: 1000,
    label: 'Training Hours',
    prefix: '+',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    )
  },
  {
    value: 98,
    label: 'Client Satisfaction',
    suffix: '%',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    )
  },
  {
    value: 50,
    label: 'Enterprise Clients',
    prefix: '+',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    )
  }
]

function AnimatedNumber({ value, prefix = '', suffix = '' }: { value: number, prefix?: string, suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0
          const duration = 2000 // 2 seconds
          const step = 16 // 60fps
          const increment = (value * step) / duration

          const timer = setInterval(() => {
            start += increment
            if (start >= value) {
              setDisplayValue(value)
              clearInterval(timer)
            } else {
              setDisplayValue(Math.floor(start))
            }
          }, step)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={counterRef} className="text-4xl font-bold">
      {prefix}{displayValue}{suffix}
    </div>
  )
}

export function MetricsSection() {
  return (
    <section id="metrics" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Impact & Achievement</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Numbers that reflect our commitment to excellence and client success
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-2xl border border-border bg-card text-center"
          >
            <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
              {metric.icon}
            </div>
            <AnimatedNumber
              value={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
            />
            <p className="mt-2 text-muted-foreground">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
} 