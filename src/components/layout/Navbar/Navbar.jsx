import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <h2 className="navbar__logo">DevClub</h2>

                <ul className="navbar__menu">
                    <li><a href="#">Início</a></li>

                    <li><a href="#">Sobre</a></li>

                    <li><a href="#">Serviços</a></li>

                    <li><a href="#">Contato</a></li>
                </ul>

                <button className="navbar__button">Vamos Conversar
                </button>
            </div>
        </nav>
    );
}

export default Navbar;