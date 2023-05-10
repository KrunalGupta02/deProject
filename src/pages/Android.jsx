import React from "react";
import android from "../asset/android.png";
import Header from "../components/Header";
const Android = () => {
  return (
    <div>
      <Header />
      <figure>
        <img src={android} />
      </figure>
    </div>
  );
};

export default Android;
