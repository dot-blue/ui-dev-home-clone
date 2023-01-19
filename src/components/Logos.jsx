import React from "react";
import logoList from "../assets/logo-list.svg";

function Logos() {
  return (
    <div className="logos-container">
      <figure className="logos-figure">
        <img src={logoList} alt="" className="company-logos" />
        <figcaption className="fig-text">
          You’ll be in great company with other developers we’ve trained
        </figcaption>
      </figure>
    </div>
  );
}

export default Logos;
