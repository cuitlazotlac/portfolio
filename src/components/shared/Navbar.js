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
  var linkedin_link = "https://www.youtube.com/";
  var github_link = "https://www.youtube.com/";
  var behance_link = "https://www.youtube.com/";
  var mail_link = "https://www.youtube.com/";

  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  const [lang_value, setValue] = useState(<i class="fas fa-globe-africa"></i>);
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img className="avatar" src={avatar} alt="" />

          <div className="light-dark-toggle">
            <input
              type="checkbox"
              id="chk"
              class="checkbox"
              onChange={() => setDarkMode(!darkMode)}
            />
            <label for="chk" class="label">
              <i class="fas fa-moon"></i>
              <i class="fas fa-sun"></i>
              <div class="ball"></div>
            </label>
          </div>

          <div className="lang-list">
            <DropdownButton
              alignRight
              title={lang_value}
              id="dropdown-menu-align-right"
              onSelect={handleSelect}
              variant="Secondary"
              size="sm"
            >
              <Dropdown.Item eventKey="🇺🇸" onClick={() => handleClick("en")}>
                {t("NavBar.English")}
              </Dropdown.Item>
              <Dropdown.Item eventKey="🇫🇷" onClick={() => handleClick("fr")}>
                {t("NavBar.French")}
              </Dropdown.Item>
              <Dropdown.Item eventKey="🇲🇽" onClick={() => handleClick("es")}>
                {t("NavBar.Spanish")}
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
        <div className="nav-items">
          <ul>
            <div className="nav-container">
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
            </div>
          </ul>
        </div>
        <div className="footer-div">
          <div className="social-btn">
            <a href={linkedin_link} target="_blank">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href={github_link} target="_blank">
              <img src={github} alt="github" />
            </a>
            <a href={behance_link} target="_blank">
              <img src={behance} alt="behance" />
            </a>
            <a href={mail_link} target="_blank">
              <img src={mail} alt="mail" />
            </a>
          </div>
          <p className="copyright">
            {" "}
            {t("NavBar.MadeWith")}
            <img className="social-btn" src={react_logo} alt="" />
          </p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
