import React from "react";
import "./Newsletter.scss";

import Button from "../../ui/Button/Button.jsx";

import pizzaImg from "/assets/img/bpizzaimage.jpg";

export default function Newsletter() {
  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__grid">
        <div className="newsletter__content">
          <p className="newsletter__tag">Exclusive offer</p>

          <h2 className="newsletter__title" id="newsletter-title">
            Sign up to our news letter for exclusive offers for 2020
          </h2>

          <Button type="button" className="newsletter__cta">
            Read more
          </Button>
        </div>

        <div className="newsletter__media">
          <img src={pizzaImg} alt="Pizza with toppings" />
        </div>
      </div>
    </section>
  );
}
