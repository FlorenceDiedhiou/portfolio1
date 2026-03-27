function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__logo">Florence<span>.</span></div>
      <ul className="nav__links">
        <li><a href="#accueil">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#skills">Compétences</a></li>
          <li><a href="#projects">Projets</a></li>
        <li><a href="#contact" className="nav__cta">Me contacter</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;