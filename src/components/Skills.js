import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaPhp, FaLaravel, FaVuejs, FaWordpress } from 'react-icons/fa';
import ScrollRevealText from './ScrollRevealText';

function Skills() {
  // Define your skills data
  const skills = [
    { name: 'HTML', level: '90%', icon: <FaHtml5 /> },
    { name: 'CSS', level: '85%', icon: <FaCss3Alt /> },
    { name: 'JavaScript', level: '80%', icon: <FaJs /> },
    { name: 'React', level: '75%', icon: <FaReact /> },
    { name: 'PHP', level: '70%', icon: <FaPhp /> },
    { name: 'Laravel', level: '75%', icon: <FaLaravel /> },
    // { name: 'WordPress', level: '90%', icon: <FaWordpress /> },
    { name: 'SQL', level: '75%', icon: <FaDatabase /> },
  ];

  return (
    <section className="py-12 md:py-20 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-red-500 font-bold text-center mb-8">Skills</h2>
        <ScrollRevealText>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="ring-1 ring-blue-900 shadow-md p-4 md:p-8 rounded-md flex flex-col items-center justify-center hover:bg-blue-800 hover:bg-opacity-20 transition-colors duration-300">
                {skill.icon && <span className="text-4xl md:text-5xl text-blue-900 mb-2">{skill.icon}</span>}
                <div className="text-center">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-red-300">{skill.name}</h3>
                  <p className="text-gray-600">{skill.level}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollRevealText>
      </div>
    </section>
  );
}

export default Skills;
