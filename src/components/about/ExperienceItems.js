import React from "react";
import { Card, Accordion, Button } from "react-bootstrap";

import { useTranslation } from "react-i18next";

function ExperienceItems({ experienceItem }) {
  const { t, i18n } = useTranslation();

  return (
    <div className="exp-tab">
      {experienceItem.map((xpitem) => {
        return (
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={xpitem.id}
                className="btn-link"
              >
                <img src={xpitem.company_logo} alt="" />
                <div>
                  <h5>{xpitem.position}</h5>
                  <h6>{xpitem.company}</h6>
                  <h6>{xpitem.duration}</h6>
                </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={xpitem.id}>
              <Card.Body className="xp-desc">
                <div>
                  <h1>{xpitem.perimeter}</h1>
                  <p>{xpitem.context}</p>
                  <h1>{t("Cat1.Text1")}</h1>
                  <ul>
                    <li>{xpitem.responsability_1}</li>
                    <li>{xpitem.responsability_2}</li>
                    <li>{xpitem.responsability_3}</li>
                    <li>{xpitem.responsability_4}</li>
                    <li>{xpitem.responsability_5}</li>
                    <li>{xpitem.responsability_6}</li>
                  </ul>
                  <h1>{t("Cat1.Text1")}</h1>
                  <ul>
                    <li>{xpitem.achievement_1}</li>
                    <li>{xpitem.achievement_2}</li>
                    <li>{xpitem.achievement_3}</li>
                  </ul>
                  <h1>{t("Cat1.Text1")}</h1>
                  <p>{xpitem.stacks}</p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
    </div>
  );
}

export default ExperienceItems;
