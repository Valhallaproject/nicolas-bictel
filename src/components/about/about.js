import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about" id="about" >
      <div className="text" >
        <p>
          Je suis diplomé du parcours Développeur Web OpenClassrooms en 2021
        </p>
        <p>
          Je peux vous acompagner sur la réalisation vos projets avec HTML/CSS,
          SASS, JavaScript et React.JS sur la partie front, Node.JS, Express,
          MongoDB et MySQL pour la partie back de vos sites
        </p>
        <p>
          Vous pouvez me contacter par Email, je me ferais un plaisir de vous
          répondre.
        </p>
      </div>
      <div className="contact" >
        <div className="email">
          <h4>Email</h4>
          <p>nicolas.bictel@yahoo.com</p>
        </div>
        <div className="twitter">
          <h4>Twitter</h4>
          <p><a href="https://twitter.com/NBictel" target="blank">@NBictel</a></p>
        </div>
        <div className="github">
          <h4>Github</h4>
          <p><a href="https://github.com/Valhallaproject" target="blank">NBictel</a></p>
        </div>
      </div>
    </div>
  );
}

export default About;
