import React from "react";
import "./Header.modules.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Импортируем иконки из react-icons

const SocialIcons = () => (
  <div className="social-icons">
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
);

export default SocialIcons;
