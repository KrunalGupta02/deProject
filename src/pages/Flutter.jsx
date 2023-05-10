import React from "react";
import Navbar from "../components/Navbar";
import flutter from "../asset/flutter.png";

const Flutter = () => {
  return (
    <div>
      <Navbar />
      <figure>
        <img src={flutter} />
      </figure>
    </div>
  );
};

export default Flutter;
