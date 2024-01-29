import './App.css';
import Navbar from './Components/Navabar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Portrait from './Components/Portrait';
import Contact from './Components/Contact';
import Schwingen from './Components/Schwingen';
import Informatik from './Components/Informatik';


function App() {
  return (
    <BrowserRouter>
      
      <Navbar/>

      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/Portrait" element={<Portrait/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Schwingen" element={<Schwingen/>}/>
        <Route path="/Informatik" element={<Informatik/>}/>
      </Routes>

    </BrowserRouter>
  
  );
}

export default App;
