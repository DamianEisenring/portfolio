import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar({ isOpen, toggleMenu, closeMenu }) {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
    closeMenu();
  };

  const navigateToPortrait = () => {
    navigate('/Portrait');
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
    <div className="relative flex items-center justify-between bg-gray-900 h-100px px-8 " style={{ height: '50px' }}>
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

        <ul className="flex flex-col p-4">
          <li className="text-white py-2 hover:cursor-pointer w-px" onClick={navigateToHome}>
            Home
          </li>
          <li className="text-white py-2 hover:cursor-pointer w-px" onClick={navigateToPortrait}>
            Portrait
          </li>
          <li className="text-white py-2 hover:cursor-pointer w-px" onClick={navigateToInformatik}>
            Informatik
          </li>
          <li className="text-white py-2 hover:cursor-pointer w-px" onClick={navigateToKontakt}>
            Kontakt
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
