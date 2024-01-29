import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navigateToHome = () => {
    navigate('/');
    closeMenu();
  };

  const navigateToPortrait = () => {
    navigate('/Portrait');
    closeMenu();
  };

  const navigateToSchwingen = () => {
    navigate('/Schwingen');
    closeMenu();
  };

  const navigateToInformatik = () => {
    navigate('/Informatik');
    closeMenu();
  };

  const navigateToKontakt = () => {
    navigate('/Kontakt');
    closeMenu();
  };

  return (
    <div className="relative flex items-center justify-between bg-gray-900 h-100px px-8 " style={{ height: '80px' }}>
      <button
        className="text-white p-2 focus:outline-none focus:bg-gray-600"
        onClick={toggleMenu}
      >
        <RxHamburgerMenu className='text-2xl text-v' style={{ fontSize : '35px' }}/>
      </button>

      {!isOpen && <h1 className="text-white text-2xl" >Damian Eisenring</h1>}

      <div
        className={`absolute top-0 left-0 w-full h-screen bg-gray-900 transform transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >

        {/* Your menu items go here */}
        <ul className="flex flex-col p-4">
          <li className="text-white py-2" onClick={navigateToHome}>
            Home
          </li>
          <li className="text-white py-2" onClick={navigateToPortrait}>
            Portrait
          </li>
          <li className="text-white py-2" onClick={navigateToSchwingen}>
            Schwingen
          </li>
          <li className="text-white py-2" onClick={navigateToInformatik}>
            Informatik
          </li>
          <li className="text-white py-2" onClick={navigateToKontakt}>
            Kontakt
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
