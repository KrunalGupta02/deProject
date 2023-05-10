import React from "react";
import Navbar from "../components/Navbar";
import cyber from "../asset/cyber.png";

const Cyber = () => {
  return (
    <div>
      <Navbar />
      <figure>
        <img src={cyber} />
      </figure>
    </div>
  );
};

export default Cyber;
