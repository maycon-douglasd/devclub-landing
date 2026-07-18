import "./Journey.css";

const steps = [
    {
        number: "01",
        title: "Entrar no DevClub",
        description: "Tenha acesso à comunidade e à plataforma."
    },
    {
        number: "02",
        title: "Fundamentos",
        description: "Domine HTML, CSS, JavaScript e Git."
    },
    {
        number: "03",
        title: "Projetos Reais",
        description: "Construa aplicações para o seu portfólio."
    },
    {
        number: "04",
        title: "Comunidade",
        description: "Aprenda junto com milhares de alunos."
    },
    {
        number: "05",
        title: "Mentorias",
        description: "Receba orientação de desenvolvedores experientes."
    },
    {
        number: "06",
        title: "Primeira oportunidade",
        description: "Esteja preparado para conquistar sua vaga."
    }
];

function Journey() {
    return (
        <section className="journey">
            <div className="journey__container">

                <span className="journey__badge">CAPÍTULO 03</span>

                <h2 className="journey__title">
                    Sua jornada começa aqui.
                </h2>

                <p className="journey__description">
                    Cada etapa foi construída para transformar quem está começando em um profissional preparado para o mercado.
                </p>

                <div className="journey__timeline">
                    {steps.map((step) => (
                        <div className="journey__step" key={step.number}>

                            <div className="journey__number">
                                {step.number}
                            </div>

                            <div className="journey__content">
                                <div className="journey__circle"></div>

                                <div className="journey__text">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Journey;