import React from "react";

function ExperienceItems({ experienceItem }) {
  return (
    <div className="portfolis">
      {experienceItem.map((xpitem) => {
        return (
          <div key={xpitem.id}>
            <h5>{xpitem.title}</h5>
            <h4>
              {/* here add a new description into allportfolios.js to have something dynamic */}
              <p>Placeholder paragraph</p>
            </h4>
          </div>
        );
      })}
    </div>
  );
}

export default ExperienceItems;
