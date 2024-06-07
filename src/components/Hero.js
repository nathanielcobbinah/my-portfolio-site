import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import ScrollRevealText from './ScrollRevealText';
import Typewriter from './Typewriter';

function Hero() {
  return (
    <section className="relative text-white py-20 md:px-20 overflow-hidden">
      {/* Colorful dots */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        {/* Red dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-move-dot-red"></div>
        <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-red-500 rounded-full animate-move-dot-red"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-red-500 rounded-full animate-move-dot-red"></div>
        {/* Blue dots */}
        <div className="absolute top-1/5 left-1/5 w-4 h-4 bg-blue-500 rounded-full animate-move-dot-blue"></div>
        <div className="absolute top-1/3 left-1/6 w-3 h-3 bg-blue-500 rounded-full animate-move-dot-blue"></div>
        <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-blue-500 rounded-full animate-move-dot-blue"></div>
        {/* Green dots */}
        <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-green-500 rounded-full animate-move-dot-green"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-green-500 rounded-full animate-move-dot-green"></div>
        <div className="absolute top-2/3 left-1/5 w-4 h-4 bg-green-500 rounded-full animate-move-dot-green"></div>
        
        <div className="absolute top-1/6 left-2/5 w-3 h-3 bg-yellow-500 rounded-full animate-move-dot-yellow"></div>
        <div className="absolute top-2/5 right-1/6 w-2 h-2 bg-yellow-500 rounded-full animate-move-dot-yellow"></div>
        {/* Purple dots */}
        <div className="absolute top-2/5 left-1/6 w-2 h-2 bg-purple-500 rounded-full animate-move-dot-purple"></div>
        <div className="absolute top-3/4 right-1/5 w-3 h-3 bg-purple-500 rounded-full animate-move-dot-purple"></div>
      </div>

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-left mb-10 md:mb-0">
          <Typewriter text="Hi, I'm Nathaniel Cobbinah" speed={100} />

          <ScrollRevealText>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">Crafting <span className="font-semibold text-blue-900">exceptional digital experiences</span> just for you!</p>
          </ScrollRevealText>

          <div className="flex mt-4 items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
              Contact Me
            </button>
            <div className="flex">
              <a href="https://www.linkedin.com/in/nathaniel-cobbinah/" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FaLinkedin size={32} />
              </a>
              {/* <a href="https://twitter.com/natcobbinah" target="_blank" rel="noopener noreferrer" className="mr-4">
                <FaTwitter size={32} />
              </a> */}
              <a href="https://github.com/nathanielcobbinah" target="_blank" rel="noopener noreferrer">
                <FaGithub size={32} />
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-right -py-20">
          <ScrollRevealText>
            <img src="/images/nat-preview.png" alt="Nathaniel Cobbinah" className="mx-auto md:mx-0 md:ml-auto max-w-full border-4 border-blue-900 p-2" />
          </ScrollRevealText>
        </div>
      </div>
    </section>
  );
}


export default Hero;
