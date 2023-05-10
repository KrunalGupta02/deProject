import React from "react";
import Navbar from "../components/Navbar";
import Blockchain from "../asset/block.png";

const Blockchain = () => {
  return (
    <div>
      <Navbar />
      <figure>
        <img src={Blockchain} alt="block" />
      </figure>
    </div>
  );
};

export default Blockchain;
