import React, { useState, useEffect } from 'react';
import ScrollRevealText from './ScrollRevealText';

function AboutMe() {
  const projectImages = [
    '/images/word-scramble.png',
    '/images/facebook.png',
    '/images/blog.png',
    '/images/weather.png',
    '/images/virtual-world.png',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === projectImages.length - 1 ? 0 : prevSlide + 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDownloadResume = () => {
    // Replace 'your_resume.pdf' with the path to your resume PDF
    const resumeUrl = '/path/to/your_resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Nathaniel_de_Escade_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="mx-5 py-1">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Introduction Text */}
          <div className="md:order-2">
            <ScrollRevealText>
              <h2 className="text-3xl text-red-500 font-bold mb-4">About Me</h2>
              <p className="text-lg text-gray-500 mb-6">
                {/* Hi there, I'm Nathaniel Cobbinah, a passionate full stack web developer. Specializing in frontend technologies like JavaScript, React, and Vue.js, I focus on crafting beautiful and functional websites. With expertise in backend development using PHP and Laravel, I ensure seamless integration and top-notch performance. Experienced in WordPress, I deliver versatile solutions to suit diverse project needs. Let's create something exceptional together.               */}
                Hello! I'm Nathaniel Cobbinah, a passionate web developer specializing in building high-quality web applications that prioritize user experience and business objectives. With expertise in HTML, CSS, JavaScript, React.js, PHP, Laravel, Tailwind CSS, and Bootstrap, I bring a versatile skill set to every project. From crafting innovative interfaces to implementing robust backend solutions, I thrive on creating seamless digital experiences that leave a lasting impact.
              </p>
              {/* Add Download Resume Button */}
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleDownloadResume}>
                Download Resume
              </button>
            </ScrollRevealText>
          </div>
          {/* Project Slider */}
          <div className="md:order-1">
            <ScrollRevealText>
              <img
                src={projectImages[currentSlide]}
                alt={`Project ${currentSlide + 1}`}
                className="w-full h-56 md:w-96 md:h-72 object-cover"
              />
            </ScrollRevealText>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
