import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Main from './components/pages/Main'
import About from './components/pages/About'
import Work from './components/pages/Work'
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
        <Route path='/' exact component={Main} />
        <Route path='/Work' exact component={Work} />
        <Route path='/About' exact component={About} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
