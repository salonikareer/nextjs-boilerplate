import React from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'E-Commerce App',
    description: 'Developed a responsive platform using ReactJS for online Shopping, focusing on front-end design and user interface development Also design design AdminDqashboard and also add payment gateway .',
    technologies: ['ReactJS', 'Redux', 'NodeJS','Express','Razorpay'],
    image: '/ecom.jpeg',
  },
  {
    title: 'IMDb Clone',
    description: 'Designed and built a static replica of the IMDb Clone homepage using Tailwind CSS and Next.js. Implemented responsive design for cross-device compatibility.',
    technologies: ['Next.js', 'Tailwind CSS'],
    image: '/imdb.jpeg',
  },
]

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image 
              src={project.image} 
              alt={project.title} 
              width={600} 
              height={300} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-gray-200 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects