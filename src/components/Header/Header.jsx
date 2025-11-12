import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavBar = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <h1 className="header__title">ROQUE INK</h1>
      <div className="header__nav-wrapper">
        <div className="header__nav-burger" onClick={toggleNavBar}>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>

        <nav className={`header__nav-list ${isOpen ? "active" : ""}`}>
          <a className="header__link" href="#about" onClick={closeNavBar}>
            SOBRE MIM
          </a>
          <a className="header__link" href="#portfolio" onClick={closeNavBar}>
            PORTFÓLIO
          </a>
          <a className="header__link" href="#catalog" onClick={closeNavBar}>
            CATÁLOGO
          </a>
          <a className="header__link" href="#contacts" onClick={closeNavBar}>
            CONTATOS
          </a>
        </nav>
      </div>
    </header>
  );
}
