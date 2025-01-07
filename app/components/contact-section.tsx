'use client'

import { useState } from 'react'

const contactInfo = {
  email: 'contact@mustafa.dev',
  location: 'Dubai, UAE',
  availability: 'Sunday - Thursday, 9:00 AM - 6:00 PM GST',
  social: [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"></path>
        </svg>
      )
    }
  ]
}

export function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a question or want to work together? Drop me a message!
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-3 py-2 border border-border rounded-md bg-background"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-3 py-2 border border-border rounded-md bg-background"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-3 py-2 border border-border rounded-md bg-background"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {formStatus === 'success' && (
              <p className="text-green-600 dark:text-green-400 text-center">
                Message sent successfully!
              </p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <h3 className="font-semibold">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {contactInfo.email}
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {contactInfo.location}
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {contactInfo.availability}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex gap-4">
              {contactInfo.social.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/50 text-foreground hover:bg-secondary transition-colors"
                  aria-label={platform.name}
                >
                  {platform.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 