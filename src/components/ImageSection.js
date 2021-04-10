import React from "react";

import { useTranslation } from "react-i18next";

import profile_picture from "../ressources/images/profile_img.jpg";

function ImageSection(title1) {
  const { t, i18n } = useTranslation();

  return (
    <div className="ImageSection">
      <div className="img">
        <img src={profile_picture} alt="" />
      </div>
    </div>
  );
}

export default ImageSection;
