import "./Community.css";

const communityItems = [
    {
        icon: "💬",
        title: "Discord",
        description: "Tire dúvidas em tempo real com alunos e mentores.",
    },
    {
        icon: "🤝",
        title: "Networking",
        description: "Conecte-se com milhares de desenvolvedores.",
    },
    {
        icon: "💻",
        title: "Feedback",
        description: "Receba avaliações sobre seus projetos e evolua mais rápido.",
    },
    {
        icon: "🚀",
        title: "Eventos",
        description: "Participe de lives, desafios e mentorias exclusivas.",
    },
];

function Community() {
    return (
        <section className="community">
            <div className="community__container">

                <span className="community__badge">
                    CAPÍTULO 07
                </span>

                <h2 className="community__title">
                    Você nunca programa sozinho.
                </h2>

                <p className="community__description">
                    Faça parte de uma comunidade ativa onde milhares de desenvolvedores
                    compartilham conhecimento, resolvem dúvidas e evoluem juntos.
                </p>

                <div className="community__grid">
                    {communityItems.map((item) => (
                        <article className="community-card" key={item.title}>

                            <div className="community-card__icon">
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                        </article>
                    ))}
                </div>

                <div className="community__footer">

                    <h3>+50 mil membros</h3>

                    <p>
                        Sempre existe alguém pronto para ajudar você a evoluir.
                    </p>

                </div>

            </div>
        </section>
    );
}

export default Community;