import React from "react";

function Skills() {
  const skills = [
    {
      icon: "💻",
      name: "Frontend",
      desc: "Création d’interfaces modernes et responsives",
      tags: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      icon: "⚙️",
      name: "Backend",
      desc: "Développement de la logique serveur",
      tags: ["Node.js", "Laravel", "PHP"]
    },
    {
      icon: "🗄️",
      name: "Base de données",
      desc: "Gestion et structuration des données",
      tags: ["MySQL", "MongoDB"]
    },
    {
      icon: "🎨",
      name: "Design",
      desc: "UI/UX et interfaces modernes",
      tags: ["Figma", "Canva"]
    }
  ];

  return (
    <section className="section" id="skills">
      <p className="section__label">Compétences</p>

      <h2 className="section__title">
        Mon <span>stack</span> technique
      </h2>

      <p className="section__sub">
        Les technologies que j'utilise pour construire des projets robustes et modernes.
      </p>

      <div className="skills__grid">
        {skills.map((s, i) => (
          <div className="skill-card" key={i}>
            
            <div className="skill-card__icon">
              {s.icon}
            </div>

            <div className="skill-card__name">
              {s.name}
            </div>

            <div
              className="skill-card__desc"
              style={{ color: "var(--grey)", fontSize: "13px" }}
            >
              {s.desc}
            </div>

            <div className="skill-card__tags">
              {s.tags.map((t, index) => (
                <span className="skill-tag" key={index}>
                  {t}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;