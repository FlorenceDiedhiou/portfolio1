function Accueil() {
  return (
    <section className="hero" id="accueil">
      <div className="hero__content">
        <div className="hero__tag">Disponible pour des projets</div>
        <h1 className="hero__title">
          Florence<br />
          <span className="line2">Diedhiou</span>
        </h1>
        <p className="hero__desc">
          Développeuse Web Full Stack passionnée par la création d'expériences digitales
          élégantes et performantes. Je transforme vos idées en produits concrets.
        </p>
        <div className="hero__btns">
          <a href="#about" className="btn-primary">En savoir plus</a>
          <a href="#contact" className="btn-secondary">Me contacter</a>
        </div>
      </div>
      
    </section>
  );
}
export default Accueil;