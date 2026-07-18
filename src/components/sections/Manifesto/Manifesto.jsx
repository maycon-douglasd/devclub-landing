import "./Manifesto.css";

function Manifesto() {
  return (
    <section className="manifesto">
      <div className="container">
        <span className="manifesto-badge">
          CAPÍTULO 01
        </span>

        <h2 className="manifesto-title">
          Toda transformação começa
          <br />
          com uma decisão.
        </h2>

        <p className="manifesto-description">
          Uma decisão de continuar.
          <br />
          <br />
          De aprender.
          <br />
          De errar.
          <br />
          De tentar outra vez.
          <br />
          <br />
          Até que um dia...
          <br />
          <br />
          Você olha para trás e percebe que já não é mais a mesma pessoa.
          <br />
          <br />
          Você evoluiu.
          <br />
          <br />
          E quando isso acontece, programação deixa de ser apenas código.
          <br />
          <br />
          Ela se torna o caminho entre quem você é hoje e quem você pode se tornar.
        </p>
      </div>
    </section>
  );
}

export default Manifesto;