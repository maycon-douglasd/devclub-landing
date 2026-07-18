import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero__container">

                {/* ======================================================
                    CONTEÚDO
                ====================================================== */}

                <div className="hero__content">

                    <h1 className="hero__title">
                        Domine as habilidades que transformam seu futuro na tecnologia.
                    </h1>

                    <p className="hero__description">
                        Aprenda com projetos reais, desenvolva experiência prática e
                        construa um portfólio capaz de abrir portas para sua carreira
                        na tecnologia.
                    </p>

                    <div className="hero__buttons">

                        <button className="hero__button hero__button--primary">
                            Começar minha jornada
                        </button>

                        <button className="hero__button hero__button--secondary">
                            Conhecer a metodologia
                        </button>

                    </div>

                </div>

                {/* ======================================================
                    MOCKUP DA PLATAFORMA
                ====================================================== */}

                <div className="hero__mockup">

                    <div className="hero__dashboard">

                        {/* Header */}

                        <header className="dashboard__header">

                            <span className="dashboard__brand">
                                 DevClub
                            </span>

                        </header>

                        {/* Conteúdo */}

                        <main className="dashboard__content">

                            <span className="dashboard__label">
                                Minha Jornada
                            </span>

                            <h2 className="dashboard__title">
                                Full Stack Roadmap
                            </h2>

                            <div className="dashboard__progress">

                                <span className="dashboard__progress-number">
                                    72%
                                </span>

                                <div className="dashboard__progress-bar">
                                    <div className="dashboard__progress-fill"></div>
                                </div>

                            </div>

                            <div className="dashboard__current-module">

                                <span className="dashboard__module-label">
                                    Você está estudando
                                </span>

                                <strong className="dashboard__module-name">
                                    React Fundamentals
                                </strong>

                            </div>

                        </main>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;