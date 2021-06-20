import { React, useState } from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import MenuItems from "../../components/MenuItems";
import ExperienceItems from "./ExperienceItems";
import portfolios from "../../data/portfolios";
import experiences from "../../data/experiences";

function ResumeAccordion() {
  const { t, i18n } = useTranslation();

  const [experienceItem, setExperienceItems] = useState(experiences);

  return (
    <div>
      <div className="exp-tab">
        <h1>{t("Cat1.Text1")}</h1>
        <Accordion defaultActiveKey="0">
          <ExperienceItems experienceItem={experienceItem} />
        </Accordion>
      </div>
    </div>
  );
}

export default ResumeAccordion;
