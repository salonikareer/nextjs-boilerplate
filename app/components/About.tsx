import React from 'react'
import Image from 'next/image'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <Image
            src="/saloni.jpeg"
            alt="Saloni Kareer"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">Saloni Kareer</h1>
          <h2 className="text-2xl text-gray-600 mb-4">Software Engineer</h2>
          <p className="text-lg">
            Skilled in frontend development, specializing in JavaScript and React. 
            Experienced in creating intuitive dashboards and dynamic web applications.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About