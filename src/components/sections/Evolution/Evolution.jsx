import "./Evolution.css";

import nubank from "../../../assets/images/companies/nubank.png";
import stone from "../../../assets/images/companies/stone.png";
import magalu from "../../../assets/images/companies/magalu.png";
import vivo from "../../../assets/images/companies/vivo.png";
import picpay from "../../../assets/images/companies/picpay.png";
import xp from "../../../assets/images/companies/xp.png";
import devclub from "../../../assets/images/companies/devclub.png";
import ifood from "../../../assets/images/companies/ifood.png";

const companies = [
    nubank,
    stone,
    magalu,
    vivo,
    picpay,
    xp,
    devclub,
    ifood,
];

function Evolution() {
    return (
        <section className="evolution" id="evolution">
            <div className="container">

                {/* HEADER */}

                <div className="section-header">

                    <span className="chapter">
                        CAPÍTULO 07
                    </span>

                    <span className="section-tag">
                        SUA EVOLUÇÃO CONTINUA AQUI
                    </span>

                    <h2>
                        Você nunca estará sozinho nessa jornada.
                    </h2>

                    <p className="section-description">
                        Aprender programação é apenas o começo.
                        A verdadeira evolução acontece quando você faz parte
                        de uma comunidade que compartilha conhecimento,
                        cria oportunidades e cresce junto todos os dias.
                    </p>

                </div>

                {/* CARD PRINCIPAL */}

                <div className="community-card">

                    <h3>
                        Cresça ao lado de milhares de desenvolvedores.
                    </h3>

                    <p>
                        Compartilhe conhecimento, tire dúvidas,
                        participe de mentorias e evolua diariamente
                        com pessoas que possuem o mesmo objetivo
                        que você.
                    </p>

                    <div className="community-items">

                        <div className="item">
                            🤝 Networking
                        </div>

                        <div className="item">
                            🎯 Mentorias
                        </div>

                        <div className="item">
                            💬 Comunidade
                        </div>

                        <div className="item">
                            🚀 Mercado
                        </div>

                    </div>

                </div>

                {/* MOSAICO */}

                <div className="evolution-grid">

                    {/* EMPRESAS */}

                    <div className="companies-area">

                        <h3>
                            Empresas que fazem parte do objetivo dos nossos alunos.
                        </h3>

                        <div className="companies-grid">

                            {companies.map((logo, index) => (

                                <div
                                    className="company-card"
                                    key={index}
                                >

                                    <img
                                        src={logo}
                                        alt="Empresa"
                                    />

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* EVOLUÇÃO */}

                    <div className="transformation">

                        <div className="before">

                            <h3>ANTES</h3>

                            <ul>

                                <li>😕 Estudando sozinho</li>

                                <li>📚 Apenas teoria</li>

                                <li>❌ Sem direção</li>

                                <li>😟 Insegurança nas entrevistas</li>

                            </ul>

                        </div>

                        <div className="after">

                            <h3>DEPOIS</h3>

                            <ul>

                                <li>🤝 Aprendendo em comunidade</li>

                                <li>💻 Projetos reais</li>

                                <li>🧭 Método validado</li>

                                <li>🚀 Mais confiança para o mercado</li>

                            </ul>

                        </div>

                    </div>

                </div>

                {/* FECHAMENTO */}

                <div className="community-footer">

                    <h3>
                        Nenhum desenvolvedor cresce sozinho.
                    </h3>

                    <p>
                        Na DevClub, você encontra uma comunidade pronta
                        para caminhar ao seu lado em cada etapa da sua evolução.
                    </p>

                </div>

            </div>
        </section>
    );
}

export default Evolution;