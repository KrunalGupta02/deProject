import React from "react";
import ui from "../asset/ui.png";
import Navbar from "../components/Navbar";

const UI = () => {
  return (
    <div>
      <Navbar />
      <figure>
        <img src={ui} />
      </figure>
    </div>
  );
};

export default UI;
