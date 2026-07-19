import "./CTA.css";

function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container">

        <span className="chapter">
          CAPÍTULO 10
        </span>

        <h2>Pronto para transformar sua carreira?</h2>

        <p className="section-description">
          Junte-se a milhares de alunos que já deram o primeiro passo
          rumo ao mercado de tecnologia. O próximo pode ser você.
        </p>

        <a
          href="https://devclub.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          QUERO FAZER PARTE DO DEVCLUB
        </a>

        <footer className="footer">

          <div className="footer-top">

            <h3>DevClub</h3>

            <nav>
              <a href="#hero">Início</a>
              <a href="#about">Sobre</a>
              <a href="#projects">Projetos</a>
              <a href="#results">Resultados</a>
              <a href="#faq">FAQ</a>
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