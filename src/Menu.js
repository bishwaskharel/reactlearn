import React from "react";
import "./menustyle.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navstyle">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Contact">Contact Us</Link>
        </li>
        <li>
          <Link to="About">Abous Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;