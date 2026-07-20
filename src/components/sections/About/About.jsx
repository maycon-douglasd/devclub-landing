import "./About.css";

function About() {
    return (
        <section className="about" id="about">

        <div className="container">

            <div className="about__header">

                <span className="about__badge">
                    Capítulo 02
                </span>

                <h2>
                    Ninguém evolui sozinho.
                </h2>

                <p>
                    Todo desenvolvedor já esteve exatamente onde você está hoje.
                </p>

            </div>

            <div className="about__journey">

                <div className="journey-card">

                    <div className="journey-card__icon">
                        😟
                    </div>

                    <h3>Dúvidas</h3>

                    <p>
                        Todo mundo começa sem saber por onde seguir.
                    </p>

                </div>

                <div className="journey-card">

                    <div className="journey-card__icon">
                        😰
                    </div>

                    <h3>Medo</h3>

                    <p>
                        Errar faz parte do aprendizado de qualquer desenvolvedor.
                    </p>

                </div>

                <div className="journey-card">

                    <div className="journey-card__icon">
                        🚀
                    </div>

                    <h3>Persistência</h3>

                    <p>
                        Quem continua aprendendo inevitavelmente evolui.
                    </p>

                </div>

            </div>

        </div>

    </section>
  );
}
export default About;
