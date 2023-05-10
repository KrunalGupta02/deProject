import React from "react";
import Header from "../components/Header";
import cyber from "../asset/cyber.png";

const Cyber = () => {
  return (
    <div>
      <Header />
      <figure>
        <img src={cyber} />
      </figure>
    </div>
  );
};

export default Cyber;
