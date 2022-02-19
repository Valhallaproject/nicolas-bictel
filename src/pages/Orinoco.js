import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SmoothScroll from "../components/smoothScroll/SmoothScroll";
import Arrow from "../images/arrow.png";
import About from "../components/about/aboutSites";
import orinoco from "../images/orinoco.png";
import mobile1 from "../images/orinoco/mobile1.png";
import mobile2 from "../images/orinoco/mobile2.png";
import mobile3 from "../images/orinoco/mobile3.png";
import mobile4 from "../images/orinoco/mobile4.png";
import tab1 from "../images/orinoco/tab1.png";
import tab2 from "../images/orinoco/tab2.png";
import desktop1 from "../images/orinoco/desktop1.png";
import Parallax from "react-rellax";
import "./Pages.css";
import { NavHashLink } from "react-router-hash-link";

function Orinoco() {
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
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: {duration:1}}}
        exit={{ opacity: 0 }}
        className="pageSite"
        id="orinoco"
       >
        <section className="titlePage">
          <NavHashLink to="/#home">
            <img className="arrow" src={Arrow} alt="retour"></img>
          </NavHashLink>

          <h1>Orinoco</h1>

          <div className={`infoSite ${fadeOut && "h1_fadeOut"}`}>
            <p>
              Pour ce projet (formation), j'ai réalisé un site e commerce de matériel photographique
              . Pour la réalisation j'ai utilisé HTML/CSS et javaScript.
            </p>
            <a href="https://github.com/Valhallaproject/spatial" target="blank">
              GITHUB
            </a>
          </div>
        </section>
        <SmoothScroll>
          <div className="content">
            <div className="firstImg">
              <img src={orinoco} alt="" />
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
    </>
  );
}

export default Orinoco;
