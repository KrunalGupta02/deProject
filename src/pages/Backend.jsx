import React from "react";
import Header from "../components/Header";
import back from "../asset/back.png";

const Backend = () => {
  return (
    <div>
      <Header />
      <figure>
        <img src={back} />
      </figure>
    </div>
  );
};

export default Backend;
