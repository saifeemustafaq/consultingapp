'use client'

const credentials = {
  certifications: [
    {
      name: 'AWS Solutions Architect Professional',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      )
    },
    {
      name: 'Google Cloud Professional Architect',
      issuer: 'Google Cloud',
      year: '2023',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      )
    }
  ],
  expertise: [
    'Cloud Architecture & DevOps',
    'Microservices Design',
    'Serverless Applications',
    'CI/CD Implementation',
    'Security Best Practices',
    'Performance Optimization'
  ],
  testimonials: [
    {
      quote: "Mustafa's training transformed our development team's capabilities. His expertise in cloud architecture is exceptional.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp",
      company: "TechCorp"
    },
    {
      quote: "The consultation services provided were invaluable to our cloud migration project. Highly recommended!",
      author: "Michael Chen",
      position: "Engineering Director",
      company: "InnovateSoft"
    }
  ]
}

export function CredentialsSection() {
  return (
    <section id="credentials" className="py-12 space-y-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Credentials & Expertise</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Backed by industry certifications and years of hands-on experience
        </p>
      </div>

      {/* Certifications */}
      <div className="grid gap-8 md:grid-cols-2">
        {credentials.certifications.map((cert, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card"
          >
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              {cert.icon}
            </div>
            <div>
              <h3 className="font-semibold mb-1">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">
                {cert.issuer} • {cert.year}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Expertise */}
      <div className="bg-secondary/50 rounded-2xl p-8">
        <h3 className="text-xl font-semibold mb-6 text-center">Areas of Expertise</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.expertise.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-3 rounded-xl bg-background border border-border"
            >
              <svg
                className="w-5 h-5 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="grid gap-8 md:grid-cols-2">
        {credentials.testimonials.map((testimonial, index) => (
          <figure
            key={index}
            className="p-6 rounded-2xl border border-border bg-card"
          >
            <blockquote className="mb-4">
              <p className="text-lg italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="flex items-center gap-2">
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.position}, {testimonial.company}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
} 