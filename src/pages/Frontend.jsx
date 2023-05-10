import React from "react";
import Navbar from "../components/Navbar";
import front from "../asset/frontend.png";

const Frontend = () => {
  return (
    <div>
      <Navbar />
      <figure>
        <img src={front} />
      </figure>
    </div>
  );
};

export default Frontend;
