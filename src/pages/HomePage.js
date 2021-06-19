import React from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import Particles from "react-particles-js";
import ContactItem from "../components/ContactItem";
import img from "../ressources/images/abc.png";

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
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faYoutube} className="icon yt" />
          </Link>
        </div>{" "}
        <div className="contact-sect">
          <ContactItem
            icon={img}
            title={"Title."}
            text1={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            text2={
              " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          />
          <ContactItem
            icon={img}
            title={"Title."}
            text1={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            text2={
              " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          />
          <ContactItem
            icon={img}
            title={"Title."}
            text1={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            text2={
              " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          />
        </div>
      </header>
    </div>
  );
}

export default HomePage;
