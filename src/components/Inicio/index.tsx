import React, { HTMLAttributes } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';


const Inicio: React.FC = () => {
  return (
      <div id="inicio" className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Olá, meu nome é</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Thais Cavalcante.</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Desenvolvedora Front-End.</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>Engenheira civil por formação e apaixonada por tecnologia. Tenho sólidas habilidades de resolução de problemas e o desejo de sempre aprender mais.</p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>Mais informações
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
              </span>
              </button>
          </div>
        </div>
      </div>
  );
}

export default Inicio;