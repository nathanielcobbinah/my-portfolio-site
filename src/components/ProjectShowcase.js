import React from 'react';
import ScrollRevealText from './ScrollRevealText';

function ProjectShowcase() {
  // Define your project data
  const projects = [
    {
      title: 'Project 1',
      image: '/images/social-media.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis quam, auctor id ultricies in, commodo nec massa.',
      link: '#', // Link to project details or demo
    },
    {
      title: 'Project 2',
      image: '/images/weather.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis quam, auctor id ultricies in, commodo nec massa.',
      link: '#', // Link to project details or demo
    },
    {
      title: 'Project 3',
      image: '/images/ecommerce.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis quam, auctor id ultricies in, commodo nec massa.',
      link: '#', // Link to project details or demo
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl text-red-500 font-bold text-center mb-8">Project Showcase</h2>
        <ScrollRevealText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="relative">
                <img src={project.image} alt={project.title} className="w-full h-auto rounded-md cursor-pointer transition duration-300 transform hover:scale-105" />
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4 bg-black bg-opacity-70 text-white hover:bg-opacity-0 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-200">{project.description}</p>
                  <a href={project.link} className="mt-2 bg-white text-gray-900 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300">View Details</a>
                </div>
              </div>
            ))}
          </div>
        </ScrollRevealText>
      </div>
    </section>
  );
}

export default ProjectShowcase;
