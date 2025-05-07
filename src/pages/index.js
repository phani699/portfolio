import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Skills />
      <Projects />
      <Experience />
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default Home;
