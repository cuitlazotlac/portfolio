import React from "react";
// import {faFacebook} from '@fortawesome/free-brands-svg-icons';
// import {faGithub} from '@fortawesome/free-brands-svg-icons';
// import {faYoutube} from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <Particles
          params={{
            particles: {
              number: {
                value: 150,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
          height="100vh"
          // width="40vw"
        />
        <h1 className="hero-text">
          Hi, I am
          <span> Cuitlaztolac.</span>
        </h1>
        <p className="h-sub-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          facere, numquam vitae placeat consequatur corrupti officia quibusdam.
          Blanditiis doloremque nemo ex facilis neque. A sint ipsam earum nemo
          omnis et.
        </p>
        <p className="h-sub-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          facere, numquam vitae placeat consequatur corrupti officia quibusdam.
          Blanditiis doloremque nemo ex facilis neque. A sint ipsam earum nemo
          omnis et.
        </p>
        <p className="h-sub-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          facere, numquam vitae placeat consequatur corrupti officia quibusdam.
          Blanditiis doloremque nemo ex facilis neque. A sint ipsam earum nemo
          omnis et.
        </p>
        <div className="icons">
          <Link to="test" className="icon-holder">
            {/* <FontAwesomeIcon icon={faFacebook} className="icon fb" /> */}
          </Link>
          <Link to="test" className="icon-holder">
            {/* <FontAwesomeIcon icon={faGithub} className="icon gh" /> */}
          </Link>
          <Link to="test" className="icon-holder">
            {/* <FontAwesomeIcon icon={faYoutube} className="icon yt"/> */}
          </Link>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
