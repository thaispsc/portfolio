import React from 'react';

// import { Container } from './styles';

const Contato: React.FC = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contato</p>
                <p className='text-gray-300 py-4'>Entre em contato comigo preenchendo o formulário abaixo.</p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Nome'name="name"/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email'name="email"/>
            <textarea className='p-2 bg-[#ccd6f6]' name="message" rows={10} placeholder='Mensagem'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Vamos conversar!</button>
        </form>

    </div>
  )
}

export default Contato;