import "./Companies.css";

import nubank from "../../../assets/images/companies/nubank.png";
import ifood from "../../../assets/images/companies/ifood.png";
import xp from "../../../assets/images/companies/xp.png";
import devclub from "../../../assets/images/companies/devclub.png";
import stone from "../../../assets/images/companies/stone.png";
import magalu from "../../../assets/images/companies/magalu.png";
import vivo from "../../../assets/images/companies/vivo.png";
import picpay from "../../../assets/images/companies/picpay.png";

const companies = [
    { name: "Nubank", logo: nubank },
    { name: "iFood", logo: ifood },
    { name: "XP Inc.", logo: xp },
    { name: "DevClub", logo: devclub },
    { name: "Stone", logo: stone },
    { name: "Magalu", logo: magalu },
    { name: "Vivo", logo: vivo },
    { name: "PicPay", logo: picpay },
];

function Companies() {
    return (
        <section className="companies">
            <div className="companies__container">

                <span className="companies__badge">
                    CAPÍTULO 08
                </span>

                <h2 className="companies__title">
                    Preparando profissionais para o mercado.
                </h2>

                <p className="companies__description">
                    As habilidades desenvolvidas durante a formação são valorizadas por
                    empresas que buscam profissionais preparados para resolver problemas
                    reais.
                </p>

                <div className="companies__grid">
                    {companies.map((company) => (
                        <article className="company-card" key={company.name}>

                            <img
                                src={company.logo}
                                alt={company.name}
                                className="company-card__logo"
                            />

                        </article>
                    ))}
                </div>

                <div className="companies__footer">
                    <h3>E muitas outras empresas.</h3>

                    <p>
                        O mercado procura profissionais que dominam tecnologia na prática.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Companies;