import "./Projects.css";

import landingImage from "../../../assets/images/projects/landing.png";
import dashboardImage from "../../../assets/images/projects/dashboard.png";
import fullstackImage from "../../../assets/images/projects/fullstack.png";

const projects = [
    {
        image: landingImage,
        title: "Landing Page Responsiva",
        description:
            "Desenvolva uma landing page moderna utilizando HTML, CSS e JavaScript com foco em responsividade e boas práticas.",

        technologies: ["HTML", "CSS", "JavaScript"],

        level: "Iniciante",

        duration: "5 horas",

        rating: "★★★★★",

        url: "landing.devclub.com",
    },

    {
        image: dashboardImage,
        title: "Dashboard Interativo",
        description:
            "Construa um dashboard profissional consumindo APIs, gráficos e indicadores em tempo real.",

        technologies: ["React", "API", "Charts"],

        level: "Intermediário",

        duration: "8 horas",

        rating: "★★★★★",

        url: "dashboard.devclub.com",
    },

    {
        image: fullstackImage,
        title: "Aplicação Full Stack",
        description:
            "Desenvolva uma aplicação completa utilizando React, Node.js e banco de dados.",

        technologies: ["React", "Node.js", "MongoDB"],

        level: "Avançado",

        duration: "12 horas",

        rating: "★★★★★",

        url: "fullstack.devclub.com",
    },
];

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects__container">

                <div className="projects__header">

                    <span className="projects__badge">
                        CAPÍTULO 04
                    </span>

                    <h2 className="projects__title">
                        Projetos que desenvolvem profissionais.
                    </h2>

                    <p className="projects__description">
                        Aprenda construindo aplicações que simulam desafios reais
                        do mercado de tecnologia.
                    </p>

                </div>

                <div className="projects__grid">

                    {projects.map((project) => (

                        <article
                            className="project-card"
                            key={project.title}
                        >

                            <div className="project-card__browser">

                                <div className="browser__dots">

                                    <span></span>
                                    <span></span>
                                    <span></span>

                                </div>

                                <div className="browser__url">

                                    {project.url}

                                </div>

                            </div>

                            <div className="project-card__image-wrapper">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-card__image"
                                />

                            </div>

                            <div className="project-card__content">

                                <div className="project-card__technologies">

                                    {project.technologies.map((tech) => (

                                        <span key={tech}>
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                                <h3>

                                    {project.title}

                                </h3>

                                <p>

                                    {project.description}

                                </p>

                                <div className="project-card__footer">

                                    <div className="project-card__meta">

                                        <span>

                                            {project.rating}

                                        </span>

                                        <span>

                                            ⏱ {project.duration}

                                        </span>

                                        <span>

                                            {project.level}

                                        </span>

                                    </div>

                                    <button className="project-card__button">

                                        Explorar projeto →

                                    </button>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Projects;