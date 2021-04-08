import "./App.css";

import NavBar from "./components/shared/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfliosPage from "./pages/PortfoliosPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";

import { useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const [navToggle, setNavToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="App">
        <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
          <NavBar />
        </div>
        <div className="nav-btn" onClick={navClick}>
          <div className="lines-1"></div>
          <div className="lines-2"></div>
          <div className="lines-3"></div>
        </div>
        <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/about" exact>
                <AboutPage />
              </Route>
              <Route path="/portfolios" exact>
                <PortfliosPage />
              </Route>
              <Route path="/blogs" exact>
                <BlogsPage />
              </Route>
              <Route path="/contact" exact>
                <ContactPage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
