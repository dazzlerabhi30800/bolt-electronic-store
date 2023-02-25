import React, { useState } from "react";
import { Bag, Search, List, X } from "react-bootstrap-icons";
import "./Styles/style.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showHamburger = () => {
    if (showMenu) {
      document.body.classList.remove("overflow");
      setShowMenu(false);
    } else {
      document.body.classList.add("overflow");
      setShowMenu(true);
    }
  };
  return (
    <header>
      <nav>
        <img src="./assets/logo-2.png" alt="Bolt" />
        <ul className={`links ${showMenu ? "show" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="icons--wrapper">
        <Bag className="icon" />
        <Search className="icon" />
        {showMenu ? (
          <X className="icon hamburger" onClick={showHamburger} />
        ) : (
          <List className="icon hamburger" onClick={showHamburger} />
        )}
      </div>
    </header>
  );
};

export default Header;
