import React, { useState, useEffect } from "react";
import "./Title.css";

function Title() {
  const [fadeOut, setFadeOut] = useState(false);
  const fadeOutControl = () => {
    if (window.scrollY > 1) {
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
    <section className="title" id="portfolio">
      <div className="heading" data-scroll>
        <a href="/#portfolio" className="name">
          NICOLAS BICTEL
        </a>
      </div>
      <div className={`h1 ${fadeOut && "h1_fadeOut"}`}>
        <h1>
          Développeur web
          <br /> Full Stack
          <br /> Freelance
        </h1>
        <a href="#about" className="description">
          (PLUS)
        </a>
      </div>
    </section>
  );
}

export default Title;
