import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Saloni Kareer. All rights reserved.</p>
        <div className="mt-4">
          <a href="https://linkedin.com/in/saloni-kareer" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mx-2">
            LinkedIn
          </a>
          <a href="https://github.com/salonikareer" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mx-2">
            GitHub
          </a>
          <a href="mailto:salonikareer60@gmail.com" className="text-blue-400 hover:text-blue-300 mx-2">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer