'use client'

import { useEffect } from 'react'
import { ConsultationSection } from './components/consultation-section'
import { ServicesSection } from './components/services-section'
import { MetricsSection } from './components/metrics-section'
import { CredentialsSection } from './components/credentials-section'
import { ContactSection } from './components/contact-section'

export default function Home() {
  // Add intersection observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-animate').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="py-12 sm:py-24 text-center fade-in">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent-secondary">
          Career Excellence Training & Consultation
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          Unlock Your Full Potential with Expert-Led Training and Personalized Guidance for Academic & Professional Success
        </p>
      </header>

      <main className="space-y-40 pb-40">
        <section className="section-animate">
          <ServicesSection />
        </section>
        
        <section className="section-animate">
          <MetricsSection />
        </section>
        
        <section className="section-animate">
          <CredentialsSection />
        </section>
        
        <section className="section-animate">
          <ConsultationSection />
        </section>
        
        <section className="section-animate">
          <ContactSection />
        </section>
      </main>
    </div>
  )
}
