import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png";

// import { Container } from './styles';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo image" style={{ width: "75px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>Início</li>
        <li>Sobre mim</li>
        <li>Minhas habilidades</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-sreen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Início</li>
        <li className="py-6 text-4xl">Sobre mim</li>
        <li className="py-6 text-4xl">Minhas habilidades</li>
        <li className="py-6 text-4xl">Projetos</li>
        <li className="py-6 text-4xl">Contato</li>
      </ul>

      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
