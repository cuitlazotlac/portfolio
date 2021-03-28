import React from "react";
import ImgOne from "../../images/Baby-Yoda-1.jpeg";
import ImgTwo from "../../images/Baby-Yoda-2.jpeg";

const Content = () => {
  return (
    <>
      <div className="home-card">
        <img
          src={ImgOne}
          alt="bbyoda"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Baby Yoda</h2>
          <p className="mb-2">Just a cute picture</p>
          <span>⬆️</span>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImgTwo}
          alt="bbyoda2"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Baby Yoda</h2>
          <p className="mb-2">Just a cute picture</p>
          <span>⬆️</span>
        </div>
      </div>
    </>
  );
};

export default Content;
