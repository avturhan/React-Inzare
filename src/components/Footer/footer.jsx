import React from "react";
import "./footer.modules.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="footer-info">
      <p>&copy; 2024 Наши Минеральные Воды</p>
      <a href="/privacy-policy">Политика конфиденциальности</a>
      <p>
        {" "}
        <a
          href="https://www.google.com/maps/search/?api=1&query=366701,+Чеченская+Респ.,+Серноводский+м.р-н,+Серноводское+с.п.,+с.+Серноводское,+ул.+Курортная,+Д.+23А"
          target="_blank"
        >
          366701, Чеченская Респ., Серноводский м.р-н, Серноводское с.п., с.
          Серноводское, ул. Курортная, Д. 23А
        </a>
      </p>
      <a href="tel:+79991234567">+7 (999) 123-45-67</a>
    </div>
    <div className="footer-icons">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
    </div>
    <div className="footer-line"></div>
  </footer>
);

export default Footer;
