import image from "../assets/image/flog.jpg";

function About() {
  return (
    <section className="section about" id="about">
      <div className="about__grid">
        
        {/* Bloc photo */}
        <div className="about__photo-wrapper">
          <div className="about__image-wrapper">
            <div className="about__image">
              <img src={image} alt="Florence Diedhiou" />
            </div>
            <span className="about__name">Florence Diedhiou</span>
          </div>

          <div className="about__deco"></div> {/* Tu peux cacher ce div si ce n'est pas utile */}
        </div>

        {/* Bloc texte */}
        <div className="about__text">
          <p className="section__label">À propos</p>
          <h2 className="section__title">
            Passionnée par le <span>code</span> et le design
          </h2>

          <p>
            Je suis Florence Diedhiou, développeuse web full stack basée au Sénégal.
          </p>

          <div className="about__stats">
            <div>
              <div className="about__stat-num">2</div>
              <div className="about__stat-label">Années d'expérience</div>
            </div>
            <div>
              <div className="about__stat-num">10+</div>
              <div className="about__stat-label">Projets réalisés</div>
            </div>
            <div>
              <div className="about__stat-num">5+</div>
              <div className="about__stat-label">Technologies maîtrisées</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;