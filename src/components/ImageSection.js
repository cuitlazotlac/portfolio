import React from "react";
import profile_picture from '../ressources/images/profile_img.jpg';
import { useTranslation } from "react-i18next";
import Typical from "react-typical";

function ImageSection() {
  const { t, i18n } = useTranslation();

  return (
    <div className="ImageSection">
      <div className="img"><img src={profile_picture} alt=""/></div>
      <div className="about-info">
        <h4>
          I am
          <span>
            <p>{t("Cat1.Text1")}</p>
          </span>
        </h4>
        <p className="about-text">
          I'm a{" "}
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
          />
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Lorem Ipsum</p>
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
