'use client'

import { CalendlyWidget } from './calendly-widget'

export function ConsultationSection() {
  return (
    <section id="consultation" className="rounded-2xl border border-border p-8 bg-card">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Schedule a Consultation</h2>
        <p className="text-muted-foreground mb-8 text-center">
          Book a one-on-one consultation session to discuss your needs and how I can help you achieve your goals.
        </p>
        
        <CalendlyWidget />
      </div>
    </section>
  )
} 