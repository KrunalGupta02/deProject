import React from "react";
import Navbar from "../components/Navbar";
import android from "../asset/android.png";
const Android = () => {
  return (
    <div>
      <Navbar />
      <figure>
        <img src={android} />
      </figure>
    </div>
  );
};

export default Android;
