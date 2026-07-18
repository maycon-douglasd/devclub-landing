import "./Projects.css";

import landingImage from "../../../assets/images/projects/landing.png";
import dashboardImage from "../../../assets/images/projects/dashboard.png";
import fullstackImage from "../../../assets/images/projects/fullstack.png";

const projects = [
    {
        image: landingImage,
        title: "Landing Page Responsiva",
        description:
            "Crie interfaces modernas utilizando HTML, CSS e JavaScript.",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
        image: dashboardImage,
        title: "Dashboard Interativo",
        description:
            "Consuma APIs, exiba gráficos e manipule dados em tempo real.",
        technologies: ["React", "API", "Charts"],
    },
    {
        image: fullstackImage,
        title: "Aplicação Full Stack",
        description:
            "Desenvolva um sistema completo utilizando React e Node.js.",
        technologies: ["React", "Node.js", "MongoDB"],
    },
];

function Projects() {
    return (
        <section className="projects">
            <div className="projects__container">
                <span className="projects__badge">CAPÍTULO 04</span>

                <h2 className="projects__title">
                    Projetos que desenvolvem profissionais.
                </h2>

                <p className="projects__description">
                    Aprenda construindo aplicações que simulam desafios reais do mercado
                    de tecnologia.
                </p>

                <div className="projects__grid">
                    {projects.map((project) => (
                        <article className="project-card" key={project.title}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-card__image"
                            />

                            <div className="project-card__content">
                                <div className="project-card__technologies">
                                    {project.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                <button className="project-card__button">
                                    Ver detalhes →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;