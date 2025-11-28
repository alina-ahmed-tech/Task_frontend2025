import React, { useState } from "react";
import "./Menu.scss";

import Button from "../../ui/Button/Button.jsx";

import apizza from "/assets/img/apizzaimage.jpg";
import bpizza from "/assets/img/bpizzaimage.jpg";

const TABS = ["Pizza", "Calzone", "Desert", "Drinks"];

const ITEMS = [
  {
    title: "Pizza",
    img: apizza,
    text: "Tomato sauce, mozzarella, hot dog, caramelised onions, red onions and french's mustard drizzle.",
    cta: null,
  },
  {
    title: "Drinks",
    img: bpizza,
    text: "Mozzarella, BBQ jackfruit, peppers, red onions, sweetcorn and a BBQ drizzle.",
    cta: "Full article",
  },
  {
    title: "Calzone",
    img: apizza,
    text: "Tomato sauce, mozzarella, hot dog, caramelised onions, red onions and french's mustard drizzle.",
    cta: null,
  },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("Pizza");

  return (
    <section className="menu" id="menu" aria-labelledby="menu-title">
      <div className="menu__inner">
        <h2 className="menu__title" id="menu-title">
          Menu
        </h2>

        <div className="menu__tabs" role="tablist" aria-label="Menu categories">
          {TABS.map((tab) => (
            <Button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={`menu__tab ${activeTab === tab ? "is-active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>

        <div className="menu__grid">
          {ITEMS.map((item) => (
            <article key={item.title} className="menu-card">
              <div className="menu-card__media">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="menu-card__body">
                <h3 className="menu-card__title">{item.title}</h3>
                <p className="menu-card__text">{item.text}</p>

                {item.cta && (
                  <Button type="button" className="menu-card__cta">
                    {item.cta}
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
