import React from "react";
import "./Story.scss";

import Button from "../../ui/Button/Button.jsx";
import storyImg from "/assets/img/asignpostimage.jpg";

export default function Story() {
  return (
    <section className="story" id="family" aria-labelledby="story-title">
      <div className="story__grid">
        <div className="story__content">
          <h2 className="story__title" id="story-title">
            OUR STORY
          </h2>

          <p className="story__text">
            Phasellus ultrices, massa vel commodo maximus, ex metus accumsan
            ante, id maximus turpis augue id lacus. Nullam porttitor mauris nec
            fermentum fermentum. Pellentesque habitant morbi.
          </p>

          <div className="story__social">
            <Button type="button" className="story__social-btn">
              Twitter
            </Button>
            <Button type="button" className="story__social-btn">
              Instagram
            </Button>
            <Button type="button" className="story__social-btn">
              Facebook
            </Button>
          </div>
        </div>

        <div className="story__media">
          <img src={storyImg} alt="Chef visual" />
        </div>
      </div>
    </section>
  );
}
