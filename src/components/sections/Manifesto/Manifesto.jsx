import "./Manifesto.css";

function Manifesto() {
  return (
    <section className="manifesto" id="manifesto">

      <div className="manifesto__glow"></div>

      <span className="manifesto__number">
        01
      </span>

      <div className="container manifesto__container">

        <div className="manifesto__header">

          <span className="manifesto__badge">
            Capítulo 01
          </span>

          <h2 className="manifesto__title">
            Toda transformação
            <br />
            começa com uma
            <span> decisão.</span>
          </h2>

        </div>

        <div className="manifesto__timeline">

          <div className="manifesto__item">
            <div className="manifesto__dot"></div>
            <p>Continuar.</p>
          </div>

          <div className="manifesto__item">
            <div className="manifesto__dot"></div>
            <p>Aprender.</p>
          </div>

          <div className="manifesto__item">
            <div className="manifesto__dot"></div>
            <p>Errar.</p>
          </div>

          <div className="manifesto__item">
            <div className="manifesto__dot"></div>
            <p>Recomeçar.</p>
          </div>

          <div className="manifesto__item">
            <div className="manifesto__dot"></div>
            <p>Persistir.</p>
          </div>

        </div>

        <div className="manifesto__message">

          <p className="manifesto__subtitle">
            Até que um dia...
          </p>

          <h3 className="manifesto__final">
            Você evoluiu.
          </h3>

          <p className="manifesto__description">
            O código mudou.
            <br />
            Mas principalmente quem escreveu o código.
          </p>

        </div>

      </div>

      <div className="manifesto__card manifesto__card--html">
        HTML
      </div>

      <div className="manifesto__card manifesto__card--css">
        CSS
      </div>

      <div className="manifesto__card manifesto__card--js">
        JavaScript
      </div>

      <div className="manifesto__card manifesto__card--react">
        React
      </div>

      <div className="manifesto__card manifesto__card--git">
        Git
      </div>

      <div className="manifesto__card manifesto__card--node">
        Node.js
      </div>

      <div className="manifesto__bridge">

        <div className="manifesto__line"></div>

        <p>
          Mas existe algo que todos os grandes desenvolvedores têm em comum.
        </p>

        <h3>
          Eles nunca caminharam sozinhos.
        </h3>

        <span>
          Continue descendo
        </span>

        <div className="manifesto__arrow">
          ↓
        </div>

      </div>

    </section>
  );
}

export default Manifesto;