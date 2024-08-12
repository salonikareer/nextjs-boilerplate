import React from 'react'

const experiences = [
  {
    title: 'Software Engineer 1',
    company: 'CloudEQ',
    period: 'September 2023 - Present',
    responsibilities: [
      'Designed and implemented responsive UI for Zabihah food App using Next',
      'Employed Redux Toolkit for optimized state management',
      'Developed Application Command Centres with New Relic',
      'Created DevOps Command Centres to oversee CI/CD pipelines',
      'Implemented Nerd Graph and NRQL for data retrieval efficiency',
    ],
  },
  {
    title: 'Software Trainee',
    company: 'CloudEQ',
    period: 'March 2023 - September 2023',
    responsibilities: [
      'Proficient in AWS (EC2, S3, Lambda) and terraform for infrastructure-as-code',
      'Skilled in Git/GitHub for version control, and Docker/Kubernetes for containerization and orchestration',
    ],
  },
]

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-semibold">{exp.title}</h3>
          <p className="text-xl text-gray-200">{exp.company}</p>
          <p className="text-gray-500 mb-2">{exp.period}</p>
          <ul className="list-disc list-inside">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="text-lg">{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Experience