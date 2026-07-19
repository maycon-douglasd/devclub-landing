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

                <span className="chapter">
                    CAPÍTULO 08
                </span>

                <span className="section-tag">
                    SUA EVOLUÇÃO COMEÇA AQUI
                </span>

                <h2>
                    Muito além de um curso de programação.
                </h2>

                <p className="section-description">
                    Você entra para uma comunidade que aprende junto,
                    desenvolve projetos reais e se prepara para conquistar
                    oportunidades no mercado de tecnologia.
                </p>

                {/* Comunidade */}

                <div className="community-card">

                    <h3>💬 Comunidade DevClub</h3>

                    <p>
                        Mais de <strong>50 mil desenvolvedores</strong> compartilhando
                        conhecimento diariamente.
                    </p>

                    <div className="community-items">
                        <div className="item">✅ Networking</div>
                        <div className="item">✅ Feedback</div>
                        <div className="item">✅ Mentorias</div>
                        <div className="item">✅ Eventos</div>
                    </div>

                </div>

                {/* Empresas */}

                <div className="companies-area">

                    <h3>Empresas onde nossos alunos buscam oportunidades</h3>

                    <div className="companies-grid">
                        {companies.map((logo, index) => (
                            <div className="company-card" key={index}>
                                <img src={logo} alt="Empresa" />
                            </div>
                        ))}
                    </div>

                </div>

                {/* Antes x Depois */}

                <div className="transformation">

                    <div className="before">

                        <h3>ANTES</h3>

                        <ul>
                            <li>❌ Sem direção</li>
                            <li>❌ Sem portfólio</li>
                            <li>❌ Sem experiência</li>
                            <li>❌ Insegurança nas entrevistas</li>
                        </ul>

                    </div>

                    <div className="after">

                        <h3>DEPOIS</h3>

                        <ul>
                            <li>✅ Plano de estudos</li>
                            <li>✅ Projetos reais</li>
                            <li>✅ Portfólio profissional</li>
                            <li>✅ Mais preparado para o mercado</li>
                        </ul>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Evolution;