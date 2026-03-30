// ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

// Données projets
const projectsData = [
  {
    id: "1",
    title: "Portfolio",
    description: "Mon site portfolio personnel pour présenter mes projets.",
    image: "/assets/flog.jpg",
    tech: ["React", "Vite", "CSS"],
    github: "#",
    demo: "#"
  },
  {
    id: "2",
    title: "Boutique en ligne",
    description: "Site de vente en ligne avec panier et paiement sécurisé.",
    image: "/assets/flog.jpg",
    tech: ["Laravel", "MySQL", "Tailwind"],
    github: "#",
    demo: "#"
  },
  {
    id: "3",
    title: "Blog personnel",
    description: "Blog avec CMS simple pour publier mes articles.",
    image: "/assets/flog.jpg",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#"
  }
];

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return <h2 style={{ padding: "50px", color: "#fff" }}>Projet non trouvé</h2>;
  }

  return (
    <section className="project-detail">
      <div className="project-detail__container">
        <Link to="/projects" className="project-detail__back">← Retour aux projets</Link>

        <img src={project.image} alt={project.title} className="project-detail__img" />

        <h1 className="project-detail__title">{project.title}</h1>
        <p className="project-detail__desc">{project.description}</p>

        <div className="project-detail__tech">
          {project.tech.map((t, index) => (
            <span key={index} className="skill-tag">{t}</span>
          ))}
        </div>

        <div className="project-detail__links">
          <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link">GitHub</a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__link">Demo live</a>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;