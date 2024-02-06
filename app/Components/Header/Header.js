import React from "react";
import Stars from "../Stars/Stars";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="hello-a">
        <h1 className="hero-wrapper-title">
          <span className="hello">Hello. I'm Angelo.</span>
          <br />
          <span className="frontend-dev">A Front-End Developer.</span>
        </h1>
        <p className="header-p">
          Crafting seamless web interfaces that prioritize user experience,
          accessibility, and functionality is my passion as a frontend
          developer.
        </p>
      </div>
      <div className="stars">
        <Stars />
      </div>
    </div>
  );
}

export default Header;
