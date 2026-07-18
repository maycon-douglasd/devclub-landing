import "./Results.css";

const stats = [
    {
        number: "+50 mil",
        label: "Alunos",
    },
    {
        number: "+15 mil",
        label: "Contratados",
    },
    {
        number: "+200h",
        label: "Conteúdo",
    },
    {
        number: "4.9★",
        label: "Avaliação Média",
    },
];

const testimonials = [
    {
        name: "João Silva",
        role: "Desenvolvedor Front-end",
        text: "Comecei do absoluto zero e consegui minha primeira oportunidade na área em poucos meses.",
    },
    {
        name: "Maria Souza",
        role: "Desenvolvedora Full Stack",
        text: "Os projetos práticos fizeram toda a diferença durante os processos seletivos.",
    },
    {
        name: "Pedro Henrique",
        role: "Software Engineer",
        text: "A comunidade e as mentorias aceleraram muito a minha evolução profissional.",
    },
];

function Results() {
    return (
        <section className="results">
            <div className="results__container">

                <span className="results__badge">
                    CAPÍTULO 05
                </span>

                <h2 className="results__title">
                    Resultados que falam por si.
                </h2>

                <p className="results__description">
                    Milhares de alunos já transformaram suas carreiras através da prática,
                    da comunidade e da metodologia DevClub.
                </p>

                <div className="results__stats">
                    {stats.map((item) => (
                        <div className="stat-card" key={item.label}>
                            <h3>{item.number}</h3>
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>

                <div className="results__testimonials">
                    {testimonials.map((item) => (
                        <article className="testimonial-card" key={item.name}>

                            <div className="testimonial-card__stars">
                                ★★★★★
                            </div>

                            <p className="testimonial-card__text">
                                "{item.text}"
                            </p>

                            <div className="testimonial-card__author">
                                <strong>{item.name}</strong>
                                <span>{item.role}</span>
                            </div>

                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Results;