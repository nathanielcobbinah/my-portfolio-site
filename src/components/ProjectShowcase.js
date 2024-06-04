import React from 'react';
import ScrollRevealText from './ScrollRevealText';

function ProjectShowcase() {
  // Define your project data
  const projects = [
    {
      title: 'A Responsive Blog',
      image: '/images/blog.png',
      description: 'Responsive blog with user authentication built using HTML, PHP and Tailwind CSS.',
      projectLink: '#', 
      codeLink: '#',
    },
    
    {
      title: 'Weather Forecaster App',
      image: '/images/weather.png',
      description: 'Weather app providing current conditions and 5-day forecast using React.js and Tailwind CSS.',
      projectLink: '#', 
      codeLink: '#',
    },
    
    {
      title: 'Word Scramble Game',
      image: '/images/word-scramble.png',
      description: 'Random word scramble game using JavaScript, HTML, and CSS with browser save feature.',
      projectLink: '#', 
      codeLink: '#',
    },
    
    {
      title: 'Facebook UI',
      image: '/images/facebook.png',
      description: 'Responsive Facebook UI clone using HTML and CSS, responsive to all devices.',
      projectLink: '#', 
      codeLink: '#',
    },
    
    {
      title: 'VR Header and Hero UI',
      image: '/images/virtual-world.png',
      description: 'Virtual reality header and hero section with login and signup forms using HTML and CSS.',
      projectLink: '#', 
      codeLink: '#',
    },
    
  ];

  return (
    <section id="projects" className="py-20 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl text-red-500 font-bold text-center mb-8">Project Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <ScrollRevealText>
              <div key={index} className="rounded-md overflow-hidden shadow-lg transition duration-300 transform hover:scale-105 ring-2 ring-blue-950 p-1">
                <img src={project.image} alt={project.title} className="w-full h-52 cursor-pointer" />
                <div className="p-4 bg-gray-900">
                  <h3 className="text-lg font-semibold mb-2 text-gray-400">{project.title}</h3>
                  <p className="text-gray-500">{project.description}</p>
                  <div className="mt-2 space-x-2">
                    <a href={project.projectLink} className="inline-block bg-gray-900 text-blue-800 ring-2 ring-blue-950 px-2 py-1 rounded-md hover:bg-gray-700 transition duration-300">Check Project</a>
                    <a href={project.codeLink} className="inline-block bg-gray-900 text-blue-800 ring-2 ring-blue-950 px-2 py-1 rounded-md hover:bg-gray-700 transition duration-300">Check Code</a>
                  </div>
                </div>
              </div>
                </ScrollRevealText>
            ))}
          </div>
      </div>
    </section>
  );
}

export default ProjectShowcase;
