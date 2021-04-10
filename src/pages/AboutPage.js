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
import blog_img from '../ressources/images/Group1.svg';


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
      <div className="servives-container">
        {/* <ServicesSection image={blog_img} title={'Web design'}  */}
        <ServicesSection
          title={"Web design"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        {/* <ServicesSection image={blog_img} title={'Artificial Intelligence'} */}
        <ServicesSection
          title={"Artificial Intelligence"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        {/* <ServicesSection image={blog_img} title={'Game Development'}  */}
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
