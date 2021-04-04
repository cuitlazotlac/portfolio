import React, { useState } from "react";
import avatar from "../../ressources/images/hve_favicon.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Badge } from 'reactstrap';

function Navbar() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
          <div className="nav-options">
            <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
            <div className="switch-checkbox">
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => setDarkMode(!darkMode)}
                />
                <span className="slider round"> </span>
              </label>
            </div>
            <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
          </div>
        </div>

        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              ABOUT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolios" exact activeClassName="active">
              PORTFOLIOS 
            </NavLink>
            <Badge pill>14</Badge>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" exact activeClassName="active">
              BLOGS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              CONTACT
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
