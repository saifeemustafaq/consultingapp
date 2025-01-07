'use client'

import Image from 'next/image'

const services = [
  {
    title: 'Microsoft Azure AZ-900',
    description: 'Microsoft Azure Fundamentals training and certification preparation.',
    price: '$999 USD',
    features: [
      '8 training sessions',
      '1 LinkedIn Profile Curation session',
      '1 Resume review session',
      '1 Career guidance and support session',
      'One-on-one personal coaching',
      'Letter of Recommendation for University Applications'
    ],
    logo: '/images/microsoft-azure-logo.png',
    certBadge: '/images/azure-fundamentals-badge.png',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    )
  },
  {
    title: 'Microsoft Artificial Intelligence (AI) Fundamentals',
    description: 'Microsoft Artificial Intelligence (AI) Fundamentals training and certification preparation.',
    price: '$999 USD',
    features: [
      '8 training sessions',
      '1 LinkedIn Profile Curation session',
      '1 Resume review session',
      '1 Career guidance and support session',
      'One-on-one personal coaching',
      'Letter of Recommendation for University Applications'
    ],
    logo: '/images/microsoft-azure-logo.png',
    certBadge: '/images/azure-ai-fundamentals-badge.png',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    )
  },
  {
    title: 'AWS Cloud Practitioner',
    description: 'AWS Cloud Practitioner training and certification preparation.',
    price: '$999 USD',
    features: [
      '8 training sessions',
      '1 LinkedIn Profile Curation session',
      '1 Resume review session',
      '1 Career guidance and support session',
      'One-on-one personal coaching',
      'Letter of Recommendation for University Applications'
    ],
    logo: '/images/aws-logo.png',
    certBadge: '/images/aws-cloud-practitioner-badge.png',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
      </svg>
    )
  },
  {
    title: 'Python PCEP Certification',
    description: 'Python programming training and PCEP certification preparation.',
    price: '$999 USD',
    features: [
      '8 training sessions',
      '1 LinkedIn Profile Curation session',
      '1 Resume review session',
      '1 Career guidance and support session',
      'One-on-one personal coaching',
      'Letter of Recommendation for University Applications'
    ],
    logo: '/images/python-institute-logo.png',
    certBadge: '/images/pcep-badge.png',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    )
  },
  {
    title: 'Microsoft Azure AZ-900 Practice Tests',
    description: 'Intensive practice test sessions with detailed discussions.',
    price: '$999 USD',
    features: [
      '12 practice test sessions',
      'Detailed discussion of each test',
      'One-on-one personal coaching',
      'Exam preparation strategies',
      'Performance analysis',
      'Letter of Recommendation for University Applications'
    ],
    logo: '/images/microsoft-azure-logo.png',
    certBadge: '/images/azure-fundamentals-badge.png',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    )
  },
  {
    title: 'Microsoft Artificial Intelligence (AI) Fundamentals Practice Tests',
    description: 'Intensive practice test sessions with detailed discussions.',
    price: '$999 USD',
    features: [
      '12 practice test sessions',
      'Detailed discussion of each test',
      'One-on-one personal coaching',
      'Exam preparation strategies',
      'Performance analysis',
      'Letter of Recommendation for University Applications'
    ],
    logo: '/images/microsoft-azure-logo.png',
    certBadge: '/images/azure-ai-fundamentals-badge.png',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
      </svg>
    )
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Transform Your Career Path</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive certification programs with personalized coaching and university application support
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg"
          >
            <div className="flex flex-col items-center space-y-4 mb-6">
              {service.logo && (
                <div className="h-12 flex items-center">
                  <Image
                    src={service.logo}
                    alt={`${service.title} logo`}
                    width={160}
                    height={48}
                    className="object-contain max-h-12"
                  />
                </div>
              )}
              <div className="h-20 flex items-center">
                <Image
                  src={service.certBadge}
                  alt={`${service.title} certification badge`}
                  width={80}
                  height={80}
                  className="object-contain max-h-20"
                />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
            <p className="mb-4 text-muted-foreground">{service.description}</p>
            <div className="mb-4 text-lg font-semibold text-primary">{service.price}</div>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm">
                  <svg
                    className="mr-2 h-4 w-4 text-primary"
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
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
} 