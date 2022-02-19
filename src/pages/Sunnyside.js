import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SmoothScroll from "../components/smoothScroll/SmoothScroll";
import Arrow from "../images/arrow.png";
import About from "../components/about/aboutSites";
import sunnyside from "../images/sunnyside/sunnyside.png";
import mobile1 from "../images/sunnyside/mobile1.png";
import mobile2 from "../images/sunnyside/mobile2.png";
import mobile3 from "../images/sunnyside/mobile3.png";
import mobile4 from "../images/sunnyside/mobile4.png";
import tab1 from "../images/sunnyside/tab1.png";
import tab2 from "../images/sunnyside/tab2.png";
import desktop1 from "../images/sunnyside/desktop1.png";
import Parallax from "react-rellax";
import "./Pages.css";
import { NavHashLink } from "react-router-hash-link";

function Sunnyside() {
  const [fadeOut, setFadeOut] = useState(false);
  const fadeOutControl = () => {
    if (window.scrollY > 700) {
      setFadeOut(true);
    } else {
      setFadeOut(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", fadeOutControl);
    return () => {
      window.removeEventListener("scroll", fadeOutControl);
    };
  }, []);

  return (
    <div id="sunnyside">

      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {duration:1}}}
      exit={{ opacity: 0 }}
      className="pageSite"
      
      >
        <section className="titlePage">
          <NavHashLink to="/#home">
            <img className="arrow" src={Arrow} alt="retour"></img>
          </NavHashLink>
          <h1>Sunnyside</h1>
          <div className={`infoSite ${fadeOut && "h1_fadeOut"}`}>
            <p>
              Pour ce projet, j'ai réalisé l'intégration d'une maquette sur
              frontend mentor. Pour la réalisation j'ai utilisé HTML / CSS
            </p>
            <a
              href="https://valhallaproject.github.io/sunnyside/"
              target="blank"
            >
              SITE
            </a>
            <a
              href="https://github.com/Valhallaproject/sunnyside"
              target="blank"
            >
              GITHUB
            </a>
          </div>{" "}
        </section>
        <SmoothScroll>
          <div className="content">
            <div className="firstImg">
              <img src={sunnyside} alt="" />
            </div>
            <section className="mobile">
              <img src={mobile1} alt="" />
              <img src={mobile2} alt="" />
              <img src={mobile3} alt="" />
              <img src={mobile4} alt="" />
            </section>
            <section className="tab">
              <Parallax speed={2} className="img">
                <img src={tab1} alt="" />
              </Parallax>
              <Parallax speed={1} className="img">
                <img src={tab2} alt="" />
              </Parallax>
            </section>
            <section className="desktop">
              <img src={desktop1} alt="" />
            </section>
          </div>
          <About />
        </SmoothScroll>
      </motion.div>
    </div>
  );
}

export default Sunnyside;
