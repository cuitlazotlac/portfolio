import { React, ContextAwareToggle } from "react";

import MainTitle from "../components/shared/MainTitle";
import ImageSection from "../components/ImageSection";
import SkillsSection from "../components/about/SkillsSection";
import DescriptionSection from "../components/about/DescriptionSection";
import ResumeAccordion from "../components/about/ResumeAccordion";

import { useTranslation } from "react-i18next";
import { Card, Accordion, Button } from "react-bootstrap";

// import design from '../img/design.svg';
// import intelligence from '../img/intelligence.svg';
// import gamedev from '../img/game-dev.svg';
import blog_img from "../ressources/images/Group1.svg";

function AboutPage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="AboutPage">
      <MainTitle
        title_1={t("Cat1.Text1")}
        title_2={t("Cat1.Text1")}
        title_3={t("Cat1.Text1")}
        span={t("Cat1.Text1")}
      />
      <ImageSection />
      <DescriptionSection />
      <SkillsSection />

      <button className="btn-resume">Download Cv</button>
      <ResumeAccordion />

    </div>
  );
}

export default AboutPage;
