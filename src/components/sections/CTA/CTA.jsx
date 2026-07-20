import "./CTA.css";

import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="cta" id="cta">

      <div className="container">

        {/* HEADER */}

        <div className="cta__header">

          <span className="chapter">
            CAPÍTULO 08
          </span>

          <h2>
            Agora é a sua vez.
          </h2>

          <p className="section-description">

            Se você chegou até aqui, é porque a programação
            despertou algo em você.

          </p>

          <p className="cta__description">

            Você conheceu o caminho, descobriu uma metodologia
            baseada em projetos reais, conheceu quem vai te
            acompanhar nessa jornada e viu que milhares de alunos
            já conquistaram espaço no mercado de tecnologia.

          </p>

          <p className="cta__highlight">

            Agora só falta dar o primeiro passo.

          </p>

        </div>

        {/* CTA */}

        <div className="cta__content">

          <a
            href="https://aulas.devclub.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >

            Quero começar minha jornada

            <ArrowRight size={20} />

          </a>

          <div className="cta__benefits">

            <div className="benefit">

              💻

              <span>
                Projetos Reais
              </span>

            </div>

            <div className="benefit">

              🤝

              <span>
                Comunidade
              </span>

            </div>

            <div className="benefit">

              🎯

              <span>
                Mentorias
              </span>

            </div>

            <div className="benefit">

              🚀

              <span>
                Mercado
              </span>

            </div>

          </div>

        </div>

        {/* FOOTER */}

        <footer className="footer">

          <div className="footer-top">

            <div className="footer-brand">

              <h3>
                DevClub
              </h3>

              <p>

                Aprenda programação através de projetos
                reais e acelere sua entrada no mercado
                de tecnologia.

              </p>

            </div>

            <nav>

              <a href="#hero">
                Início
              </a>

              <a href="#manifesto">
                Manifesto
              </a>

              <a href="#projects">
                Projetos
              </a>

              <a href="#results">
                Resultados
              </a>

              <a href="#tutors">
                Mentor
              </a>

            </nav>

          </div>

          <div className="footer-bottom">

            <p>

              © 2026 DevClub. Todos os direitos reservados.

            </p>

          </div>

        </footer>

      </div>

    </section>
  );
}

export default CTA;