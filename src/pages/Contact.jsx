function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé ! Je vous répondrai bientôt.");
  };

  return (
    <section className="section" id="contact">
      <div className="contact__inner">
        <p className="section__label">Contact</p>
        <h2 className="section__title">Travaillons <span>ensemble</span></h2>
        <p>
          Un projet en tête ? Une question ? N'hésitez pas à me laisser un message,
          je vous répondrai dans les 24h.
        </p>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__row">
            <input className="contact__input" type="text" placeholder="Votre nom" required />
            <input className="contact__input" type="email" placeholder="Votre email" required />
          </div>
          <input className="contact__input" type="text" placeholder="Sujet" required />
          
          <button>
            Envoyer le message✉️
          </button>
        </form>
        <div className="contact__socials">
          <a href="#" className="social-btn"> GitHub</a>
          <a href="#" className="social-btn"> Lié</a>
          <a href="mailto:florence@email.com" className="social-btn"> Email</a>
        </div>
      </div>
    </section>
  );
}
export default Contact;