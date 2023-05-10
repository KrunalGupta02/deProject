import React from "react";
import Header from "../components/Header";
import front from "../asset/frontend.png";

const Frontend = () => {
  return (
    <div>
      <Header />
      <figure>
        <img src={front} />
      </figure>
    </div>
  );
};

export default Frontend;
