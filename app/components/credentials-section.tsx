'use client'

import Image from 'next/image'

const credentials = {
  education: {
    university: 'Carnegie Mellon University',
    degree: 'Master of Science in Software Product Management',
    gpa: '4.0/4.0',
    year: '2024-2025',
    location: 'Mountain View, CA'
  },
  companies: [
    {
      name: 'Microsoft',
      role: 'Azure PAAS Developer',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      )
    },
    {
      name: 'Amazon Web Services',
      role: 'Developer Advocate',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      )
    },
    {
      name: 'Harness.io',
      role: 'Developer Relations Engineer',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      )
    }
  ],
  certifications: [
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      )
    },
    {
      name: 'Microsoft Azure AI Fundamentals (AI-900)',
      issuer: 'Microsoft',
      year: '2023',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      )
    },
    {
      name: 'Microsoft Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      year: '2023',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      )
    },
    {
      name: 'PCEP Python Certified',
      issuer: 'Python Institute',
      year: '2023',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      )
    }
  ],
  expertise: [
    'Cloud Architecture & DevOps',
    'AI & Machine Learning',
    'Software Product Management',
    'Technical Program Management',
    'Developer Relations & Advocacy',
    'Cross-functional Team Leadership',
    'Product Development Lifecycle',
    'Data-Driven Decision Making',
    'User-Centric Development'
  ],
  testimonials: [
    {
      quote: "Mustafa's expertise in cloud architecture and AI technologies has been transformative for our team's capabilities.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "TechCorp"
    },
    {
      quote: "His ability to bridge technical complexity with practical business solutions makes him an exceptional consultant.",
      author: "Michael Chen",
      position: "Engineering Director",
      company: "InnovateSoft"
    }
  ],
  about: {
    image: '/images/profile.jpg', // You'll need to add your profile image
    description: `As a Software Product Management graduate student at Carnegie Mellon University, I bring a unique blend of technical expertise and product leadership. With experience at industry giants like Microsoft, AWS, and Harness, I've developed a deep understanding of cloud technologies, AI/ML, and developer tools.

    My journey includes significant contributions as a Developer Advocate at AWS, where I led initiatives impacting over 46,000 developers, and as an Azure PAAS Developer at Microsoft, where I earned recognition for outstanding support. At Harness.io, I bridged the gap between complex technical solutions and user needs, driving substantial improvements in customer retention and product adoption.

    I'm passionate about creating clarity, generating energy, and delivering success in everything I do. My approach combines technical depth with strategic thinking, always focusing on delivering impactful results that drive business value.`
  }
}

export function CredentialsSection() {
  return (
    <section id="credentials" className="py-12 space-y-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Credentials & Expertise</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Backed by prestigious education, industry experience, and technical excellence
        </p>
      </div>

      {/* Education */}
      <div className="bg-card border border-border rounded-2xl p-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-2">{credentials.education.university}</h3>
          <p className="text-lg text-primary mb-1">{credentials.education.degree}</p>
          <p className="text-muted-foreground">GPA: {credentials.education.gpa} • {credentials.education.year}</p>
          <p className="text-muted-foreground">{credentials.education.location}</p>
        </div>
      </div>

      {/* Companies */}
      <div className="grid gap-8 md:grid-cols-3">
        {credentials.companies.map((company, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card"
          >
            <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
              {company.icon}
            </div>
            <h3 className="font-semibold mb-2">{company.name}</h3>
            <p className="text-sm text-muted-foreground">{company.role}</p>
          </div>
        ))}
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

      {/* About Me */}
      <div className="bg-card border border-border rounded-2xl p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3">
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <Image
                src={credentials.about.image}
                alt="Mustafa Saifee"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">About Me</h3>
            <div className="prose prose-sm max-w-none">
              {credentials.about.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-muted-foreground">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
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