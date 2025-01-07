/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import {
  Card,
  CardBody,
  Typography,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";

const contactInfo = {
  email: 'contact@example.com',
  location: 'San Francisco, CA',
  availability: 'Mon-Fri, 9AM-5PM PST',
  social: [
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
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
        <Typography
          variant="h2"
          className="text-3xl font-bold mb-4"
          color="blue-gray"
          {...({} as any)}
        >
          Get in Touch
        </Typography>
        <Typography
          className="text-muted-foreground max-w-2xl mx-auto"
          color="blue-gray"
          {...({} as any)}
        >
          Have a question or want to work together? Drop me a message!
        </Typography>
      </div>

      <div className="grid gap-12 md:grid-cols-2 max-w-4xl mx-auto px-4 sm:px-6">
        {/* Contact Form */}
        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                label="Name"
                required
                crossOrigin={undefined}
                className="!border-border focus:!border-primary"
                {...({} as any)}
              />
            </div>

            <div>
              <Input
                type="email"
                label="Email"
                required
                crossOrigin={undefined}
                className="!border-border focus:!border-primary"
                {...({} as any)}
              />
            </div>

            <div>
              <Textarea
                label="Message"
                required
                rows={4}
                className="!border-border focus:!border-primary"
                {...({} as any)}
              />
            </div>

            <Button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full bg-primary"
              size="lg"
              {...({} as any)}
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </Button>

            {formStatus === 'success' && (
              <Typography color="green" className="text-center" {...({} as any)}>
                Message sent successfully!
              </Typography>
            )}
            {formStatus === 'error' && (
              <Typography color="red" className="text-center" {...({} as any)}>
                Failed to send message. Please try again.
              </Typography>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card className="border border-border bg-card" {...({} as any)}>
            <CardBody className="space-y-4" {...({} as any)}>
              <Typography variant="h5" color="blue-gray" {...({} as any)}>
                Contact Information
              </Typography>
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
            </CardBody>
          </Card>

          <Card className="border border-border bg-card" {...({} as any)}>
            <CardBody className="space-y-4" {...({} as any)}>
              <Typography variant="h5" color="blue-gray" {...({} as any)}>
                Connect
              </Typography>
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
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  )
} 