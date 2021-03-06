import React from 'react';

import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import Reactjs from '../../assets/react.png';
import Node from '../../assets/node.png';
import Tailwind from '../../assets/tailwind.png';
import Mongo from '../../assets/mongo.png';
import Github from '../../assets/github.png';



const Habilidades: React.FC = () => {
  return (
      <div id='habilidades' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
          <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full'>
              <div>
                  <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Experiências</p>
                  <p className='py-4'>Essas são as tecnologias com as quais eu trabalho: </p>
              </div>

              <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                      <p className='my-4 '>HTML</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                      <p className='my-4 '>CSS</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                      <p className='my-4 '>JavaScript</p>
                  </div>
                  <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                      <img className='w-20 mx-auto' src={Reactjs} alt="React icon" />
                      <p className='my-4 '>ReactJS</p>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Habilidades;