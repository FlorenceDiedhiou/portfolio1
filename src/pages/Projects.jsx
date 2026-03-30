import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  // Définition des projets
  const projects = [
    {
      id: "1",
      emoji: "🌐",
      bg: "#fce4ec",
      cat: "Web",
      title: "Portfolio",
      desc: "Mon site portfolio personnel pour présenter mes projets.",
      stack: ["React", "Vite", "CSS"],
      github: "#",
      demo: "#"
    },
    {
      id: "2",
      emoji: "🛒",
      bg: "#e0f7fa",
      cat: "E-commerce",
      title: "Boutique en ligne",
      desc: "Site de vente en ligne avec panier et paiement sécurisé.",
      stack: ["Laravel", "MySQL", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      id: "3",
      emoji: "📝",
      bg: "#fff3e0",
      cat: "Blog",
      title: "Blog personnel",
      desc: "Blog avec CMS simple pour publier mes articles.",
      stack: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="section projects" id="projects">
      <p className="section__label">Projets</p>
      <h2 className="section__title">
        Ce que j'ai <span>construit</span>
      </h2>
      <p className="section__sub">
        Une sélection de mes projets récents, du prototype au déploiement.
      </p>

      <div className="projects__grid">
        {projects.map((p) => (
          <Link to={`/project/${p.id}`} key={p.id}>
            <div className="project-card">
              <div
                className="project-card__img"
                style={{ background: p.bg }}
              >
                {p.emoji}
              </div>

              <div className="project-card__body">
                <div className="project-card__cat">{p.cat}</div>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>

                <div className="project-card__stack">
                  {p.stack.map((t, index) => (
                    <span className="skill-tag" key={index}>{t}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a href={p.github} className="project-card__link">GitHub</a>
                  <a href={p.demo} className="project-card__link">Demo live</a>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;