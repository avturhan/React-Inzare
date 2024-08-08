// Header.js
import React from "react";
import SocialIcons from "./SocialIcons";
import "./Header.modules.scss";

const Header = () => (
  <header>
    <div className="container header-top">
      <SocialIcons />
      <h1>Чеченские Минеральные Воды</h1>
      <div className="contact-info">
        <a href="tel:+79991234567">+7 (999) 123-45-67</a>
      </div>
    </div>
    <hr className="header-divider" />
  </header>
);

export default Header;
