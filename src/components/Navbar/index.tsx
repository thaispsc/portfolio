import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
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
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre-mim">Sobre mim</a></li>
        <li><a href="#habilidades"> Habilidades</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
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

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                  <a href="/" className="flex justify-between items-center w-full text-gray-300">
                      Linkedin <FaLinkedin size={30}/>
                  </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                  <a href="/" className="flex justify-between items-center w-full text-gray-300">
                      Github<FaGithub size={30}/>
                  </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                  <a href="/" className="flex justify-between items-center w-full text-gray-300">
                      Email <HiOutlineMail size={30}/>
                  </a>
              </li>
              <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                  <a href="/" className="flex justify-between items-center w-full text-gray-300">
                      Resume <BsFillPersonLinesFill size={30}/>
                  </a>
              </li>
          </ul>

      </div>
    </div>
  );
};

export default Navbar;
