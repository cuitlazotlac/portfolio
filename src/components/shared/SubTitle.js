import React from "react";
import Typical from "react-typical";

function SubTitle({ title_1, title_2, title_3,span}) {

  return (
    <div className="SubTitle">
            {/* <div className="SubTitle"> */}
      <p>
        {/* {title} */}
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            title_1,
            5000,
            title_2,
            5000,
            title_3,
            5000,
          ]}
        />
        <span>{span}</span>
      </p>
    </div>
  );
}

export default SubTitle;
