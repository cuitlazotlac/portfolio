import React from "react";
import image1 from "../../ressources/images/img1.png";
import image2 from "../../ressources/images/img2.png";
import image3 from "../../ressources/images/img3.png";
import thumb1 from "../../ressources/images/thumb1.png";
import thumb2 from "../../ressources/images/thumb2.png";
import thumb3 from "../../ressources/images/thumb3.png";
import facebook from "../../ressources/images/facebook.png";
import instagram from "../../ressources/images/instagram.png";
import twitter from "../../ressources/images/twitter.png";

const Main = () => {
  function imgSlider(anything) {
    document.querySelector(".img").src = anything;
  }
  function changeCircleColor(color) {
    const circle = document.querySelector(".circle");
    circle.style.background = color;
  }

  return (
    <div>
      <div className="circle"></div>
      <div className="content">
        <div className="textBox">
          <h2>Section Title</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <a href="#">Click here!</a>
        </div>
        <div className="imgBox">
          <img src={image1} className="img" />
        </div>
      </div>
      <ul className="thumb">
        <li>
          <img
            src={thumb1}
            onClick={function (event) {
              imgSlider('../../ressources/images/img1.png');
              changeCircleColor("#017143");
            }}
          />
        </li>
        <li>
          <img
            src={thumb2}
            onClick={function (event) {
              imgSlider({});
              changeCircleColor("#eb7495");
            }}
          />
        </li>
        <li>
          <img
            src={thumb3}
            // onClick="imgSlider('images/img3.png');changeCircleColor('#d752b1')"
            onClick={function (event) {
              imgSlider({image3});
              changeCircleColor("#d752b1");
            }}
          />
        </li>
      </ul>
      <ul className="sci">
        <li>
          <img src={facebook} />
        </li>
        <li>
          <img src={twitter} />
        </li>
        <li>
          <img src={instagram} />
        </li>
      </ul>
      <script src="main.js"></script>
    </div>
  );
};

export default Main;
