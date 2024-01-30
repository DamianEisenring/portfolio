import './App.css';
import Navbar from './Components/Navabar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Portrait from './Components/Portrait';
import Contact from './Components/Contact';
import Schwingen from './Components/Schwingen';
import Informatik from './Components/Informatik';
import React,{useState} from 'react';


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="custom-scrollbar">
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />

        <Routes>
          {!isOpen && <Route path="" element={<Home />} />}
          {!isOpen && <Route path="/Portrait" element={<Portrait />} />}
          {!isOpen && <Route path="/Kontakt" element={<Contact />} />}
          {!isOpen && <Route path="/Schwingen" element={<Schwingen />} />}
          {!isOpen && <Route path="/Informatik" element={<Informatik />} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
