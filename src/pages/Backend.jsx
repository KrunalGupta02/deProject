import React from "react";
import Navbar from "../components/Navbar";
import back from "../asset/back.png";

const Backend = () => {
  return (
    <div>
      <Navbar />
      <figure>
        <img src={back} />
      </figure>
    </div>
  );
};

export default Backend;
