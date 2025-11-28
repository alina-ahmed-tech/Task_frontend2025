import React, { useEffect, useState } from "react";
import "./Header.scss";

import logo from "/assets/svg/izza.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header__inner">
        <a href="/" className="header__logo" aria-label="Izza home">
          <img src={logo} alt="izza" />
        </a>

        <nav className="header__nav" aria-label="Navigation">
          <a href="#menu" className="header__link">
            Menu
          </a>
          <a href="#family" className="header__link">
            Family
          </a>
          <a href="#find-us" className="header__link">
            Find Us
          </a>
        </nav>

        <a href="#contact" className="header__contact" aria-label="Contact">
          <span>contact</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
