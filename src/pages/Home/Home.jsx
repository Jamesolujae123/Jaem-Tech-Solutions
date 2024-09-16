import React from "react";
import Hero from "../../components/Hero/Hero";
import IconHub from "../../components/IconH/IconHub";
import How from "../../components/How/How";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <IconHub />
      <How />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
