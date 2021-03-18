import React from "react";
import { Link } from "react-router-dom";

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const toggleMenu = () => {
  var header = document.querySelector("header");
  header.classList.toggle("active");
};
const Navbar = () => {
  return (
    <header id="header">
      <a href="/" className="logo">
        <span>M</span>ovies
      </a>
      <div className="toggle" id="toggle" onClick={toggleMenu}></div>
      <ul>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/add-movie" onClick={toggleMenu}>
            Add Movie
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
