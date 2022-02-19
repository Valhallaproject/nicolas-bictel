import React from "react";
import Space from "../../images/spatial.png";
import Groupo from "../../images/groupomania.png";
import ohmyfood from "../../images/ohmyfood.png";
import sunnyside from "../../images/sunnyside.png";
import orinoco from "../../images/orinoco.png";
import Parallax from "react-rellax";
import "./Portfolio.css";
import { NavHashLink } from "react-router-hash-link";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className=" right">
        <Parallax speed={10}>
          <NavHashLink to="/spatial#spatail">
            <h2 className="">Spatial</h2>
          </NavHashLink>
        </Parallax>
        <NavHashLink to="/spatial#spatial">
          <img className="spatial" src={Space} alt="Spatial" />
        </NavHashLink>
      </div>

      <div className=" left">
        <NavHashLink to="/groupomania#groupomania">
          <img className="groupomania" src={Groupo} alt="Groupomania" />
        </NavHashLink>
        <Parallax speed={8}>
          <NavHashLink to="/groupomania#groupomania">
            <h2 className="">Groupomania</h2>
          </NavHashLink>
        </Parallax>
      </div>

      <div className="right">
        <Parallax speed={2}>
          <NavHashLink to="/ohmyfood#ohmyfood">
            <h2 className="">Ohmyfood</h2>
          </NavHashLink>
        </Parallax>
        <NavHashLink to="/ohmyfood#ohmyfood">
          <img className="ohmyfood" src={ohmyfood} alt="Ohmyfood" />
        </NavHashLink>
      </div>

      <div className="left">
        <NavHashLink to="/sunnyside#sunnyside">
          <img className="sunnyside" src={sunnyside} alt="sunnyside" />
        </NavHashLink>
        <Parallax speed={8}>
          <NavHashLink to="/sunnyside#sunnyside">
            <h2 className="">Sunnyside</h2>
          </NavHashLink>
        </Parallax>
      </div>

      <div className=" right">
        <Parallax speed={1}>
          <NavHashLink to="/#orinoco">
            <h2 className="">Orinoco</h2>
          </NavHashLink>
        </Parallax>
        <NavHashLink to="/orinoco#orinoco">
          <img className="orinoco" src={orinoco} alt="orinoco" />
        </NavHashLink>
      </div>
    </div>
  );
}

export default Portfolio;
