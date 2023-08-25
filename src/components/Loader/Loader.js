import React from "react";
import "./Loader.scss";

function Loader() {
  return (
    <div className="container">
      <div className="loader flex align-center justify-center">
        <img
          src="https://raw.githubusercontent.com/vishal-arora96/snapup-redux/df4117d951668e0652fb253474d1da8729077a9f/src/assets/images/loader.svg"
          width='80px'
        />
      </div>
    </div>
  );
}

export default Loader;
