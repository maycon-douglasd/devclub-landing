import "./About.css";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs
} from "react-icons/fa";

function About() {
    return (
        <section className="about">

            <div className="about__container">

                <div className="about__content">

                    <span className="about__badge">
                        CAPÍTULO 02
                    </span>

                    <h2 className="about__title">
                        Ninguém evolui sozinho.
                    </h2>

                    <div className="about__description">

                        <p>
                            Todo desenvolvedor já esteve exatamente onde você está hoje.
                        </p>

                        <p>Com dúvidas.</p>

                        <p>Com medo de errar.</p>

                        <p>Com vontade de desistir.</p>

                        <p>
                            Mas também com o desejo de construir um futuro diferente.
                        </p>

                        <p className="about__highlight">
                            É por isso que <strong>o DevClub existe.</strong>
                        </p>

                        <p>
                            Para mostrar que você nunca precisou fazer essa jornada sozinho.
                        </p>

                        <p>
                            Aqui, cada desafio se transforma em aprendizado.
                        </p>

                        <p>
                            Cada conquista inspira a próxima.
                        </p>

                        <p>
                            E cada passo aproxima você da carreira que sempre imaginou.
                        </p>

                    </div>

                </div>

                <div className="about__illustration">

                    <div className="about__card">

                        <div className="about__card-header">

                            <span className="about__card-badge">
                                DevClub
                            </span>

                            <h3 className="about__card-title">
                                Sua evolução em um só lugar
                            </h3>

                        </div>

                        <div className="about__card-body">

                            <div className="about__overall-progress">

                                <div className="about__overall-header">
                                    <span>Progresso Geral</span>
                                    <span>68%</span>
                                </div>

                                <div className="about__progress-bar">
                                    <div className="about__progress-fill"></div>
                                </div>

                            </div>

                            <div className="about__progress-item">

                                <span className="about__progress-tech">
                                    <FaHtml5 className="about__tech-icon about__tech-icon--html" />
                                    <FaCss3Alt className="about__tech-icon about__tech-icon--css" />
                                    HTML & CSS
                                </span>

                                <span className="about__progress-status about__progress-status--completed">
                                    Concluído
                                </span>

                            </div>

                            <div className="about__progress-item">

                                <span className="about__progress-tech">
                                    <FaJs className="about__tech-icon about__tech-icon--js" />
                                    JavaScript
                                </span>

                                <span className="about__progress-status about__progress-status--progress">
                                    Em andamento
                                </span>

                            </div>

                            <div className="about__progress-item">

                                <span className="about__progress-tech">
                                    <FaReact className="about__tech-icon about__tech-icon--react" />
                                    React
                                </span>

                                <span className="about__progress-status about__progress-status--upcoming">
                                    Próximo
                                </span>

                            </div>

                            <div className="about__progress-item">

                                <span className="about__progress-tech">
                                    <FaNodeJs className="about__tech-icon about__tech-icon--node" />
                                    Node.js
                                </span>

                                <span className="about__progress-status about__progress-status--pending">
                                    Não iniciado
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;