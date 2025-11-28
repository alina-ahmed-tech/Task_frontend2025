import React from "react";
import "./Footer.scss";

import izzaLogo from "/assets/svg/izza.svg";
import facebook from "/assets/svg/facebook.svg";
import insta from "/assets/svg/insta.svg";
import twitter from "/assets/svg/twitter.svg";
import linkedin from "/assets/svg/linkedin.svg";

export default function Footer() {
  return (
    <footer className="footer" aria-labelledby="footer-title">
      <h2 id="footer-title" className="sr-only">
        Footer
      </h2>

      <div className="footer__inner">
        <div className="footer__left">
          <img className="footer__logo" src={izzaLogo} alt="Izza" />
          <p className="footer__legal">
            ©IZZA is a company limited by guarantee registered in England and
            Wales
          </p>
        </div>

        <div className="footer__right">
          <div className="footer__block">
            <p className="footer__block-title">Contact Us</p>
            <div className="footer__rule" />
            <p className="footer__phone">01234 567890</p>
          </div>

          <div className="footer__block">
            <p className="footer__block-title">Follow Us</p>
            <div className="footer__rule" />
            <nav className="footer__social" aria-label="Social links">
              <a href="#" aria-label="Facebook">
                <img src={facebook} alt="" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src={insta} alt="" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src={twitter} alt="" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={linkedin} alt="" />
              </a>
            </nav>
          </div>
        </div>

        <div className="footer__madeby">
          <span>Made By</span>
          <span className="footer__cloudfy">cloudfy.</span>
        </div>
      </div>
    </footer>
  );
}
