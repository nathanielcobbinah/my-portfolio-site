import React from "react";
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ProjectShowcase from "./components/ProjectShowcase";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";


function App() {
  return (

    <div className="px-1">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      {/* <Experience /> */}
      <ProjectShowcase />
      <ContactMe />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
export default App;