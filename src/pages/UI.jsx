import React from "react";
import ui from "../asset/ui.png";
import Header from "../components/Header";

const UI = () => {
  return (
    <div>
      <Header />
      <figure>
        <img src={ui} />
      </figure>
    </div>
  );
};

export default UI;
