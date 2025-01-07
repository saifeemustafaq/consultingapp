import { ConsultationSection } from './components/consultation-section'
import { ServicesSection } from './components/services-section'
import { MetricsSection } from './components/metrics-section'
import { CredentialsSection } from './components/credentials-section'
import { ContactSection } from './components/contact-section'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Training & Consultation Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional training and consultation services to help you achieve your goals
        </p>
      </header>

      <main className="space-y-32 pb-32">
        <ServicesSection />
        <MetricsSection />
        <CredentialsSection />
        <ConsultationSection />
        <ContactSection />
      </main>
    </div>
  )
}
