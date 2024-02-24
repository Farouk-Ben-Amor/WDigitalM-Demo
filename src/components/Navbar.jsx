import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/Logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" fixed top-0 left-0 right-0 z-50 bg-blueGray-200 shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={"/"} className="flex items-center">
            <img className="w-auto h-16 sm:h-7" src={logo} alt="Company Logo" />
          </Link>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button onClick={toggleMenu} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
              {!isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu */}
        <div className={`lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <NavLink to={"/purpose"} lineMobile> Purpose </NavLink>
            <NavLink to={"/"} lineMobile> Services </NavLink>
            <NavLink to={"/contact"} lineMobile> Contact </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

function NavLink({ to, children, lineMobile }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  const mobileLineClass = lineMobile ? 'border-b-2 border-blue-500 w-1/5' : 'border-b-2 border-blue-500';
  return (
    <Link to={to} className={`my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 ${isActive ? 'border-b-2 border-blue-500' : 'hover:text-blue-500 dark:hover:text-blue-400'} md:mx-4 md:my-0 ${lineMobile ? 'w-1/4' : ''}`}>{children}</Link>
  );
}
