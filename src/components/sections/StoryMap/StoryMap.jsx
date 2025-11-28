import React, { useState } from "react";
import "./StoryMap.scss";

import Button from "../../ui/Button/Button.jsx";
import Modal from "../../ui/Modal/Modal.jsx";

import storyMapImg from "/assets/img/asignpostimage.jpg";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1615.9254597722654!2d-1.1339286902650432!3d52.63915745447631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7314784b68c14c0!2sUn.titled!5e0!3m2!1sen!2suk!4v1575994684235!5m2!1sen!2suk";

export default function StoryMap() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="storymap" id="find-us" aria-labelledby="storymap-title">
      <div className="storymap__grid">
        <div className="storymap__content">
          <h2 className="storymap__title" id="storymap-title">
            OUR STORY
          </h2>

          <p className="storymap__text">
            Phasellus ultrices, massa vel commodo maximus, ex metus accumsan
            ante, id maximus turpis augue id lacus. Nullam porttitor mauris nec
            fermentum fermentum. Pellentesque habitant morbi
          </p>

          <Button
            type="button"
            className="storymap__cta"
            onClick={() => setIsOpen(true)}
          >
            View Map
          </Button>
        </div>

        <div className="storymap__media">
          <img src={storyMapImg} alt="Chef visual" />
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        closeLabel="Close"
      >
        <iframe
          src={MAP_SRC}
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          title="Google Map"
        />
      </Modal>
    </section>
  );
}
