import React from "react";
import Typical from "react-typical";

import { useTranslation } from "react-i18next";


function DescriptionSection() {
  const { t, i18n } = useTranslation();

  return (
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
          ]}
        />
      </h4>
      <p className="about-text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
}

export default DescriptionSection;
