import React from "react";
import { Github, Instagram, Linkedin, Facebook } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src="./assets/logo-2.png" alt="bolt" />
      </div>
      <ul className="link--wrapper">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Contact-Us</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
      </ul>
      <div className="social--wrapper">
        <Github className="social--icon" />
        <Instagram className="social--icon" />
        <Linkedin className="social--icon" />
        <Facebook className="social--icon" />
      </div>
      <span> &copy; Bolt 2023. All rights reserved </span>
    </footer>
  );
};

export default Footer;
