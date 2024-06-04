// Experience.js

import React from 'react';

function Experience() {
  const experiences = [
    {
      company: 'ABC Company',
      position: 'Frontend Developer',
      duration: 'June 2019 - Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis quam, auctor id ultricies in, commodo nec massa.',
    },
    {
      company: 'XYZ Corporation',
      position: 'Software Engineer Intern',
      duration: 'January 2018 - May 2019',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis quam, auctor id ultricies in, commodo nec massa.',
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="grid gap-6">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-md">
              <h3 className="text-lg font-semibold mb-2">{experience.company}</h3>
              <p className="text-gray-600 mb-2">{experience.position}</p>
              <p className="text-gray-600 mb-2">{experience.duration}</p>
              <p className="text-gray-600">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
