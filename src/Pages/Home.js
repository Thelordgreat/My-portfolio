import React from "react";
import Contact from "../Components/Contact/Contact";
import Experience from "../Components/Experience/Experience";
import Header from "../Components/Header/Header";
import Portfolio from "../Components/Portfolio/Portfolio";
import Skills from "../Components/Skills/Skills";

const Home = () => {
  return (
    <>
      <Header />
      <Portfolio />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
