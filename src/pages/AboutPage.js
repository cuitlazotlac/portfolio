import { React, ContextAwareToggle } from "react";
import Tittle from "../components/Tittle";
import ImageSection from "../components/ImageSection";
import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";

import { useTranslation } from "react-i18next";
import { Card, Accordion, Button } from "react-bootstrap";

// import design from '../img/design.svg';
// import intelligence from '../img/intelligence.svg';
// import gamedev from '../img/game-dev.svg';

function AboutPage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="AboutPage">
      <Tittle
        title_1={t("Cat1.Text1")}
        title_2={t("Cat1.Text1")}
        title_3={t("Cat1.Text1")}
        span={t("Cat1.Text1")}
      />
      <ImageSection />

      <Tittle
        title_1={t("Cat1.Text1")}
        title_2={t("Cat1.Text1")}
        title_3={t("Cat1.Text1")}
        span={t("Cat1.Text1")}
      />
      <div className="servives-container">
        <div className="exp-tab">
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm another body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>

      <Tittle
        title_1={t("Cat1.Text1")}
        title_2={t("Cat1.Text1")}
        title_3={t("Cat1.Text1")}
        span={t("Cat1.Text1")}
      />
      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Typescript"} progress={"30%"} width={"30%"} />
        <SkillsSection skill={"React Js"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Node Js"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Python"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"Lua"} progress={"40%"} width={"40%"} />
        <SkillsSection skill={"Java"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Web Design"} progress={"25%"} width={"25%"} />
        <SkillsSection skill={"UI/Ux Design"} progress={"76%"} width={"76%"} />
      </div>

      <Tittle
        title_1={t("Cat1.Text1")}
        title_2={t("Cat1.Text1")}
        title_3={t("Cat1.Text1")}
        span={t("Cat1.Text1")}
      />
      <div className="servives-container">
        {/* <ServicesSection image={design} title={'Web design'}  */}
        <ServicesSection
          title={"Web design"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        {/* <ServicesSection image={intelligence} title={'Artificial Intelligence'} */}
        <ServicesSection
          title={"Artificial Intelligence"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        {/* <ServicesSection image={gamedev} title={'Game Development'}  */}
        <ServicesSection
          title={"Game Development"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </div>

      <Tittle
        title_1={t("Cat1.Text1")}
        title_2={t("Cat1.Text1")}
        title_3={t("Cat1.Text1")}
        span={t("Cat1.Text1")}
      />
      <div className="servives-container">
        {/* <ServicesSection image={design} title={'Web design'}  */}
        <ServicesSection
          title={"ITIL V4"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        {/* <ServicesSection image={intelligence} title={'Artificial Intelligence'} */}
        <ServicesSection
          title={"PSPO 1"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        {/* <ServicesSection image={gamedev} title={'Game Development'}  */}
        <ServicesSection
          title={"PSM1"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </div>
    </div>
  );
}

export default AboutPage;
