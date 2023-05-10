import React from "react";
import Header from "../components/Header";
import block from "../asset/block.png";

const Blockchain = () => {
  return (
    <div>
      <Header />
      <figure>
        <img src={block} alt="block" />
      </figure>
    </div>
  );
};

export default Blockchain;
