import "./Tutors.css";

import rodolfoMori from "../../../assets/images/tutors/rodolfomori.jpg";

function Tutors() {
  return (
    <section className="tutors">
      <div className="tutors__container">

        <span className="tutors__badge">
          CAPÍTULO 06
        </span>

        <h2 className="tutors__title">
          Aprenda com quem vive tecnologia.
        </h2>

        <p className="tutors__description">
          Tenha acesso a conteúdos práticos, mentorias e uma metodologia criada
          por profissionais que atuam diariamente no mercado.
        </p>

        <div className="tutors__content">

          <div className="tutors__image">
            <img
              src={rodolfoMori}
              alt="Rodolfo Mori"
            />
          </div>

          <div className="tutors__info">

            <span className="tutors__role">
              Fundador do DevClub
            </span>

            <h3>
              Rodolfo Mori
            </h3>

            <p>
              Desenvolvedor de software, empreendedor e fundador do DevClub.
              Sua missão é tornar a programação acessível para quem deseja
              conquistar uma carreira na tecnologia através da prática.
            </p>

            <div className="tutors__skills">

              <span>React</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Carreira</span>

            </div>

            <button className="tutors__button">
              Conheça a metodologia
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Tutors;