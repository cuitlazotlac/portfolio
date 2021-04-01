import React from "react";
// import avatar from '../img/avatar.png';
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">{/* <img src={avatar} alt=""/> */}</div>

        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolios" exact activeClassName="active">
              Portfolios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" exact activeClassName="active">
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <button onClick={() => handleClick("en")}>English</button>
            <button onClick={() => handleClick("fr")}>French</button>
            <button onClick={() => handleClick("es")}>Spanish</button>
          </li>
        </ul>

        <footer className="footer">
          <p>{t("Cat1.Text1")}</p>
          <p>{t("Cat2.Text1")}</p>
        </footer>
      </nav>
    </div>
  );
}

export default Navbar;
