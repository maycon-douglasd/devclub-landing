import "./Tutors.css";

import { ArrowRight } from "lucide-react";

import { tutor } from "./tutorsData";

function Tutors() {
  return (
    <section className="tutors" id="tutors">

      <div className="container">

        <div className="tutors__content">

          <div className="tutors__image-column">

            <span className="tutors__background-text">
              MENTOR
            </span>

            <div className="tutors__image-wrapper">

              <img
                src={tutor.image}
                alt={tutor.name}
                className="tutors__image"
              />

            </div>

          </div>

          <div className="tutors__text">

            <span className="tutors__badge">

              Capítulo 06

            </span>

            <h2>

              {tutor.headline}

            </h2>

            <p className="tutors__subtitle">

              {tutor.subtitle}

            </p>

            <div className="tutors__letter">

              {tutor.letter.map((paragraph, index) => (

                <p key={index}>

                  {paragraph}

                </p>

              ))}

            </div>

            <div className="tutors__tags">

              {tutor.tags.map((tag) => (

                <span key={tag}>

                  {tag}

                </span>

              ))}

            </div>

            <a
              href="#contact"
              className="btn btn-primary tutors__button"
            >

              Quero aprender com essa metodologia

              <ArrowRight size={18} />

            </a>

            <div className="tutors__signature">

              <strong>

                {tutor.signature}

              </strong>

              <span>

                {tutor.role}

              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Tutors;