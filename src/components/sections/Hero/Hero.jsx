import React from "react";
import "./Hero.scss";

import heroImg from "/assets/img/hero.jpg";

const Hero = () => {
  return (
    <section className="hero" aria-label="Hero">
      <div
        className="hero__bg"
        role="img"
        aria-label="Fresh pizza on a table"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      <div className="hero__overlay" />

      <div className="hero__content">
        <h1 className="hero__title">
          There is always <br />
          time for pizza...
        </h1>
      </div>
    </section>
  );
};

export default Hero;
