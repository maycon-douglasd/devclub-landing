import "./Results.css";
import { ArrowRight } from "lucide-react";

import { stats, testimonials } from "./resultsData";

function Results() {
    const featured = testimonials.find((item) => item.featured);
    const others = testimonials.filter((item) => !item.featured);

    return (
        <section className="results" id="results">
            <div className="container">

                <div className="results__header">

                    <span className="results__badge">
                        Capítulo 05
                    </span>

                    <h2>
                        Resultados que falam
                        <br />
                        por si.
                    </h2>

                    <p>
                        Milhares de alunos já transformaram suas carreiras
                        através da prática, da comunidade e da metodologia DevClub.
                    </p>

                </div>

                {/* ==========================
                    ESTATÍSTICAS
                =========================== */}

                <div className="results__stats">

                    {stats.map((stat) => (

                        <div
                            className="stat-card"
                            key={stat.id}
                        >

                            <h3>{stat.value}</h3>

                            <span>{stat.label}</span>

                            <p>{stat.description}</p>

                        </div>

                    ))}

                </div>

                {/* ==========================
                    DEPOIMENTO DESTAQUE
                =========================== */}

                <div className="testimonial-featured">

                    <div className="testimonial-featured__avatar">

                        {featured.initials}

                    </div>

                    <div className="testimonial-featured__content">

                        <div className="testimonial-featured__stars">

                            ★★★★★

                        </div>

                        <p>

                            "{featured.text}"

                        </p>

                        <div className="testimonial-featured__author">

                            <strong>

                                {featured.name}

                            </strong>

                            <span>

                                {featured.role}

                            </span>

                            <small>

                                {featured.company}

                            </small>

                        </div>

                    </div>

                </div>

                {/* ==========================
                    OUTROS DEPOIMENTOS
                =========================== */}

                <div className="testimonials-grid">

                    {others.map((testimonial) => (

                        <article
                            className="testimonial-card"
                            key={testimonial.id}
                        >

                            <div className="testimonial-card__avatar">

                                {testimonial.initials}

                            </div>

                            <div className="testimonial-card__stars">

                                ★★★★★

                            </div>

                            <p>

                                "{testimonial.text}"

                            </p>

                            <div className="testimonial-card__author">

                                <strong>

                                    {testimonial.name}

                                </strong>

                                <span>

                                    {testimonial.role}

                                </span>

                                <small>

                                    {testimonial.company}

                                </small>

                            </div>

                        </article>

                    ))}

                </div>

                {/* ==========================
                    CTA FINAL
                =========================== */}

                <div className="results__cta">

                    <h2>

                        A próxima história
                        <br />
                        pode ser a sua.

                    </h2>

                    <p>

                        Tudo começa com uma decisão.
                        Dê o primeiro passo hoje.

                    </p>

                    <a
                        href="#contact"
                        className="btn btn-primary"
                    >

                        Quero começar agora

                        <ArrowRight size={18} />

                    </a>

                </div>

            </div>
        </section>
    );
}

export default Results;