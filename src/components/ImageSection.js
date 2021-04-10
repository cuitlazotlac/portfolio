import React from "react";
import { useTranslation } from "react-i18next";
import Typical from "react-typical";

import profile_picture from "../ressources/images/profile_img.jpg";
import gatsby_icon from "../ressources/images/skills-icons/gatsby.svg"
import runkit_icon from "../ressources/images/skills-icons/runkit.svg"


function ImageSection() {
  const { t, i18n } = useTranslation();

  return (
    <div className="ImageSection">
      <div className="img">
        <img src={profile_picture} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am
          <span>
            <p>{t("Cat1.Text1")}</p>
          </span>
        </h4>
        <p className="about-text">
          {/* I'm a{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Product Manager 👨🏻‍💻",
              5000,
              "Web Designer 🦕",
              5000,
              "Data-driven Guy 📈",
              5000,
              "French 🇫🇷 Egyptian 🇪🇬 Mexican 🇲🇽 Guy",
              5000,
            ]}
          /> */}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p><img className="skills-icons" src={gatsby_icon} alt="" /></p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p><img className="skills-icons" src={runkit_icon} alt="" /></p>
            <p>: 50</p>
            <p>: French</p>
            <p>: French, Spanish, English</p>
            <p>: 2 Beightbridge, BN7 GB9, United kingdom</p>
            <p>: France, Spain, Germany</p>
          </div>
        </div>
        <button className="btn">Download Cv</button>
      </div>
    </div>
  );
}

export default ImageSection;
