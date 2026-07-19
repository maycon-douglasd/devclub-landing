import { useState } from "react";
import "./FAQ.css";

const questions = [
    {
        question: "Preciso saber programar para começar?",
        answer:
            "Não. O DevClub foi criado para quem está começando do zero e também para quem deseja evoluir na carreira como desenvolvedor.",
    },
    {
        question: "Como funciona o suporte aos alunos?",
        answer:
            "Você conta com uma comunidade ativa, além de mentorias e suporte para tirar dúvidas durante sua jornada de aprendizado.",
    },
    {
        question: "Vou desenvolver projetos reais?",
        answer:
            "Sim. Durante a formação você desenvolve projetos práticos que podem compor seu portfólio profissional.",
    },
    {
        question: "O DevClub oferece certificado?",
        answer:
            "Sim. Ao concluir os módulos, você poderá emitir seus certificados de conclusão.",
    },
    {
        question: "Posso estudar no meu ritmo?",
        answer:
            "Sim. As aulas ficam disponíveis para que você estude quando e onde quiser, respeitando seu próprio ritmo.",
    },
    {
        question: "Quanto tempo leva para estar preparado para o mercado?",
        answer:
            "Isso depende da dedicação de cada aluno, mas seguindo o plano de estudos e desenvolvendo os projetos, você evolui de forma consistente rumo às primeiras oportunidades.",
    },
];

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0);

    function toggleQuestion(index) {
        setActiveIndex(activeIndex === index ? -1 : index);
    }

    return (
        <section className="faq" id="faq">
            <div className="container">

                <span className="chapter">
                    CAPÍTULO 09
                </span>

                <h2>Perguntas Frequentes</h2>

                <p className="section-description">
                    Ainda tem dúvidas? Separamos as respostas para as perguntas mais
                    comuns antes de você começar sua jornada.
                </p>

                <div className="faq-container">

                    {questions.map((item, index) => (
                        <div
                            className={`faq-item ${activeIndex === index ? "active" : ""
                                }`}
                            key={index}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleQuestion(index)}
                            >
                                <span>{item.question}</span>

                                <span className="icon">
                                    {activeIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default FAQ;