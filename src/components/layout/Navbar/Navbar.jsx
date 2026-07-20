import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar__container">

                <a
                    href="#hero"
                    className="navbar__logo"
                >
                    DevClub
                </a>

                <div className="navbar__navigation">

                    <ul className="navbar__menu">

                        <li>
                            <a href="#hero">Início</a>
                        </li>

                        <li>
                            <a href="#about">Sobre</a>
                        </li>

                        <li>
                            <a href="#projects">Projetos</a>
                        </li>

                        <li>
                            <a href="#contact">Contato</a>
                        </li>

                    </ul>

                    <a
                        href="#cta"
                        className="navbar__button"
                    >
                        Vamos Conversar
                    </a>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;