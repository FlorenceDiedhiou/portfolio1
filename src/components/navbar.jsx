import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/style.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <div className="nav__logo">
        Florence<span>.</span>
      </div>

      <ul className={`nav__links ${isOpen ? "nav__links--open" : ""}`}>
        <li><NavLink to="/" end onClick={closeMenu}>Accueil</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>À propos</NavLink></li>
        <li><NavLink to="/skills" onClick={closeMenu}>Compétences</NavLink></li>
        <li><NavLink to="/projects" onClick={closeMenu}>Projets</NavLink></li>
        <li><NavLink to="/contact" className="nav__cta" onClick={closeMenu}>Me contacter</NavLink></li>
      </ul>

      <div className="nav__burger" onClick={toggleMenu}>
        <div className={`burger-line ${isOpen ? "burger-line1" : ""}`}></div>
        <div className={`burger-line ${isOpen ? "burger-line2" : ""}`}></div>
        <div className={`burger-line ${isOpen ? "burger-line3" : ""}`}></div>
      </div>

      {/* Overlay flou derrière le menu */}
      {isOpen && <div className="nav__overlay" onClick={closeMenu}></div>}
    </nav>
  );
}

export default Navbar;