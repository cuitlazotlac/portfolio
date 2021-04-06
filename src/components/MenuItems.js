import React from "react";

function MenuItems({ menuItem }) {
  return (
    <div className="portfolis">
      {menuItem.map((item) => {
        return (
          <div className="portfolio" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a href={item.link1}>{item.icon1}</a>
                  <a href={item.link2}>{item.icon2}</a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
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

export default MenuItems;
