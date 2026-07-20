import "./Journey.css";
import { Trophy } from "lucide-react";
import { journeySteps } from "./journeyData";

function Journey() {
    return (
        <section className="journey" id="journey">
            <div className="container">

                <div className="journey__header">

                    <span className="journey__badge">
                        Capítulo 03
                    </span>

                    <h2>
                        Do primeiro código
                        <br />
                        à primeira vaga.
                    </h2>

                    <p>
                        Cada etapa foi pensada para transformar um iniciante
                        em um desenvolvedor preparado para o mercado.
                    </p>

                </div>

                <div className="journey__timeline">

                    {journeySteps.map((step) => {

                        const Icon = step.icon;

                        return (

                            <div
                                className="journey__step"
                                key={step.id}
                            >

                                <div className="journey__number">

                                    <div className="journey__icon">
                                        <Icon size={20} />
                                    </div>

                                    <span>{step.id}</span>

                                </div>

                                <div className="journey__card">

                                    <h3>{step.title}</h3>

                                    <p>{step.description}</p>

                                </div>

                            </div>

                        );

                    })}

                </div>

                <div className="journey__final">

                    <div className="journey__trophy">

                        <Trophy size={36} />

                    </div>

                    <span className="journey__final-badge">
                        Objetivo alcançado
                    </span>

                    <h3>
                        Sua primeira vaga começa com uma decisão.
                    </h3>

                    <p>
                        Você entra sem experiência.
                        Aprende com projetos reais, recebe mentorias,
                        monta um portfólio profissional e conquista
                        a confiança necessária para disputar vagas
                        no mercado de tecnologia.
                    </p>

                    <div className="journey__stats">

                        <div className="journey__stat">

                            <strong>+40</strong>

                            <span>Projetos</span>

                        </div>

                        <div className="journey__stat">

                            <strong>+300</strong>

                            <span>Aulas</span>

                        </div>

                        <div className="journey__stat">

                            <strong>∞</strong>

                            <span>Possibilidades</span>

                        </div>

                    </div>

                    <a
                        href="#contact"
                        className="btn btn-primary"
                    >
                        Quero começar agora
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Journey;