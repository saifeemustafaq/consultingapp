'use client'

const benefits = {
  career: {
    title: "Career Advancement",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    points: [
      {
        title: "Industry-Recognized Credentials",
        description: "Earn prestigious certifications from Microsoft, AWS, and other leading tech companies that instantly boost your resume"
      },
      {
        title: "Salary Enhancement Potential",
        description: "Position yourself for higher-paying roles with validated cloud and AI expertise that employers actively seek"
      },
      {
        title: "Global Career Opportunities",
        description: "Access international job markets with universally recognized certifications and skills"
      }
    ]
  },
  academic: {
    title: "Academic Excellence",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    points: [
      {
        title: "Strong University Applications",
        description: "Enhance your academic profile with professional certifications that demonstrate technical aptitude and commitment"
      },
      {
        title: "Letters of Recommendation",
        description: "Receive personalized recommendations highlighting your achievements and potential for academic success"
      },
      {
        title: "Practical Industry Knowledge",
        description: "Bridge the gap between academic theory and real-world applications through hands-on training"
      }
    ]
  },
  personal: {
    title: "Personal Growth",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    points: [
      {
        title: "Confidence Building",
        description: "Develop technical expertise and professional communication skills that boost your self-assurance"
      },
      {
        title: "Professional Network",
        description: "Connect with industry professionals and like-minded peers to build lasting professional relationships"
      },
      {
        title: "Lifelong Learning Mindset",
        description: "Cultivate a growth mindset and develop habits for continuous professional development"
      }
    ]
  }
}

export function BenefitsSection() {
  return (
    <section className="py-12 space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Transform Your Future</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover the comprehensive benefits of our professional certification programs
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {Object.values(benefits).map((category, index) => (
          <div key={index} className="space-y-6 p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            
            <div className="space-y-4">
              {category.points.map((point, pointIndex) => (
                <div key={pointIndex} className="space-y-1">
                  <h4 className="font-medium text-primary">{point.title}</h4>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 