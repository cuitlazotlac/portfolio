import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DropdownButton, Dropdown, Badge } from "react-bootstrap";
import avatar from "../../ressources/images/hve_favicon.svg";
import react_logo from "../../ressources/images/react.svg";
import behance from "../../ressources/images/social-media-btn/behance.svg";
import github from "../../ressources/images/social-media-btn/github.svg";
import mail from "../../ressources/images/social-media-btn/mail.svg";
import linkedin from "../../ressources/images/social-media-btn/linkedin.svg";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  const [lang_value, setValue] = useState("en");
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

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

          <div>
            <DropdownButton
              alignRight
              title={lang_value}
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="EN" onClick={() => handleClick("en")}>
                {t("NavBar.English")}
              </Dropdown.Item>
              <Dropdown.Item eventKey="FR" onClick={() => handleClick("fr")}>
                {t("NavBar.French")}
              </Dropdown.Item>
              <Dropdown.Item eventKey="ES" onClick={() => handleClick("es")}>
                {t("NavBar.Spanish")}
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              {t("NavBar.Home")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              {t("NavBar.About")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolios" exact activeClassName="active">
              {t("NavBar.Portfolios")}{" "}
              <Badge pill variant="secondary">
                14
              </Badge>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" exact activeClassName="active">
              {t("NavBar.Blogs")}{" "}
              <Badge pill variant="secondary">
                14
              </Badge>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              {t("NavBar.Contact")}
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <div>
            <img src={linkedin} alt="" />
            <img src={github} alt="" />
            <img src={behance} alt="" />
            <img src={mail} alt="" />
          </div>
          <p className="copyright">
            {" "}
            {t("NavBar.MadeWith")}
            <img src={react_logo} alt="" />
          </p>
        </footer>
      </nav>
    </div>
  );
}

export default Navbar;
