import React from "react";
import { motion } from "framer-motion";
import Portfolio from "../components/portfolio/Portfolio";
import Title from "../components/title/Title";
import SmoothScroll from "../components/smoothScroll/SmoothScroll";
import "./Home.css";
import About from "../components/about/about";

function Home() {
  return (
    <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1,transition: {duration:1} }}
    exit={{ opacity: 0 }}
    className="home"
    id="home"
    >
      <Title />
      <SmoothScroll>
        <Portfolio />
        <About />
      </SmoothScroll>
    </motion.section>
  );
}

export default Home;
