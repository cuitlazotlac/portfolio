import {React, useState} from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import MenuItems from '../../components/MenuItems';
import ExperienceItems from "./ExperienceItems";
import portfolios from '../../data/portfolios';
import experiences from "../../data/experiences";

function ResumeAccordion() {
  const { t, i18n } = useTranslation();

  const [experienceItem, setExperienceItems] = useState(experiences);

  return (
    <div>
      <div className="exp-tab">
        <h1>{t("Cat1.Text1")}</h1>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                className="xp-title"
              >
                <p>Product Manager, Societe Generale, Montreal, CANADA</p>
                <p>2018 - current</p>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className="xp-desc">
                {" "}
                <ExperienceItems experienceItem={experienceItem} />
              </Card.Body>
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
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                Click me!
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}

export default ResumeAccordion;
