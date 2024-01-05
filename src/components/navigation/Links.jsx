/* eslint-disable react/prop-types */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';

const NavLinks = ({ closeNavbar }) => (
  <>
    <NavLink to="/" smooth duration={500} className="text-white hover:cursor-pointer hover:text-aquab hover:border-b hover:border-aquab hover:px-2 transition-all duration-300 ease-linear" onClick={closeNavbar}>Home</NavLink>
    <NavLink to="/about" smooth duration={500} className="text-white hover:cursor-pointer hover:text-aquab hover:border-b hover:border-aquab hover:px-2 transition-all duration-300 ease-linear" onClick={closeNavbar}>About</NavLink>
    <NavLink to="/contact" onClick={closeNavbar} smooth duration={500} className="text-white hover:cursor-pointer hover:text-aquab hover:border-b hover:border-aquab hover:px-2 transition-all duration-300 ease-linear" >Contact</NavLink>
    <NavLink to="/portfolio" smooth duration={500} className="text-white hover:cursor-pointer hover:text-aquab hover:border-b hover:border-aquab hover:px-2 transition-all duration-300 ease-linear" onClick={closeNavbar}>Portfolio</NavLink>
  </>
);


const Links = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className="w-1/3 flex justify-end">
        <div className="hidden w-full justify-between md:flex">
        <NavLinks closeNavbar={closeNavbar} />
        </div>
        <div className="md:hidden">
          <button type="button" onClick={toggleNavbar}>
            {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden flex flex-col items-end basis-full w-full gap-6 py-6">
          <NavLinks closeNavbar={closeNavbar} />
        </div>
      )}
    </>
  );
};

export default Links;