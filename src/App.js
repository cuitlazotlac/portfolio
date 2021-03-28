import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Home from './pages'
import About from './pages/about'
import Menu from './pages/menu'
import { Switch, Route } from 'react-router';
import Dropdown from './components/shared/Dropdown';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <>
      <Navbar toogle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/menu' exact component={Menu} />
        <Route path='/about' exact component={About} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
