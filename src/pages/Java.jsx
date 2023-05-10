import React from "react";
import Navbar from "../components/Navbar";
import java from "../asset/java.png";

const Java = () => {
  return (
    <div>
      <Navbar />
      <figure>
        <img src={java} />
      </figure>
    </div>
  );
};

export default Java;
