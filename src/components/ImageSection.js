import React from "react";
import { useTranslation } from "react-i18next";
import Typical from "react-typical";
import Tittle from "../components/Tittle";
import SubTitle from "../components/shared/SubTitle";

import profile_picture from "../ressources/images/profile_img.jpg";
import gatsby_icon from "../ressources/images/skills-icons/gatsby.svg";
import runkit_icon from "../ressources/images/skills-icons/runkit.svg";

function ImageSection(title1) {
  const { t, i18n } = useTranslation();

  return (
    <div className="ImageSection">
      <div className="img">
        <img src={profile_picture} alt="" />
      </div>
      <div className="about-info">
        <h4>
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
              title1,
              5000,
            ]}
          />
        </h4>
        <p className="about-text">
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
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <SubTitle
          title_1={t("Cat1.Text1")}
          title_2={t("Cat1.Text1")}
          title_3={t("Cat1.Text1")}
          span={t("Cat1.Text1")}
        />
        <div className="about-details">
          <img src={gatsby_icon} alt="" />
          <img src={runkit_icon} alt="" />
          <img src={gatsby_icon} alt="" />
          <img src={runkit_icon} alt="" />
          <img src={gatsby_icon} alt="" />
          <img src={runkit_icon} alt="" />
          <img src={gatsby_icon} alt="" />
          <img src={runkit_icon} alt="" />
          <img src={gatsby_icon} alt="" />
          <img src={runkit_icon} alt="" />
          <img src={gatsby_icon} alt="" />
          <img src={runkit_icon} alt="" />
        </div>
        <SubTitle
          title_1={t("Cat1.Text1")}
          title_2={t("Cat1.Text1")}
          title_3={t("Cat1.Text1")}
          span={t("Cat1.Text1")}
        />
        <div className="about-details">
          <img src={gatsby_icon} alt="" />
          <img src={runkit_icon} alt="" />
          <img src={gatsby_icon} alt="" />
          <img src={runkit_icon} alt="" />
          <img src={gatsby_icon} alt="" />
        </div>

        <button className="btn-resume">Download Cv</button>
      </div>
    </div>
  );
}

export default ImageSection;
