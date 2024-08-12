import React from 'react'

const skills = [
  { category: 'Languages', items: ['C++', 'HTML', 'CSS', 'JavaScript'] },
  { category: 'Frameworks/Libraries', items: ['ReactJS', 'Next.js'] },
  { category: 'Tools', items: ['Git/GitHub', 'Docker', 'Kubernetes'] },
  { category: 'Cloud', items: ['AWS (EC2, S3, Lambda)'] },
  { category: 'Other', items: ['Terraform', 'SQL'] },
  { category: 'Soft Skills', items: ['Teamwork', 'Problem Solving', 'Patience', 'Efficiency'] },
]

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-gray-600 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
            <ul className="list-disc list-inside">
              {skillGroup.items.map((skill, idx) => (
                <li key={idx} className="text-lg">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills