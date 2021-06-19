import React from "react";

import SubTitle from "../shared/SubTitle";

import gatsby_icon from "../../ressources/images/skills-icons/gatsby.svg";
import runkit_icon from "../../ressources/images/skills-icons/runkit.svg";

import { useTranslation } from "react-i18next";

function SkillsSection() {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* <SubTitle
        title_1={t("Cat1.Text1")}
        title_2={t("Cat1.Text1")}
        title_3={t("Cat1.Text1")}
        span={t("Cat1.Text1")}
      /> */}
      <h1>{t("Cat1.Text1")}</h1>
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
      <br />
      <h1>{t("Cat1.Text1")}</h1>
      <div className="about-details">
        <img src={gatsby_icon} alt="" />
        <img src={runkit_icon} alt="" />
        <img src={gatsby_icon} alt="" />
        <img src={runkit_icon} alt="" />
        <img src={gatsby_icon} alt="" />
      </div>
    </>
  );
}

export default SkillsSection;
