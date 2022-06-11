import React from "react";

// import { Container } from './styles';

const SobreMim: React.FC = () => {
  return (
    <div id="sobre-mim" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">Sobre mim</p>
          </div>
          <div>
          </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Oi, eu sou Thais, prazer em lhe conhecer. Por favor dê uma olhada no meu portfólio.</p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quisquam blanditiis repudiandae mollitia esse vitae qui ullam expedita nihil, illum vero excepturi at, assumenda voluptatum architecto voluptas eaque itaque ratione? Sint hic, facere delectus officia aut eveniet iusto fugiat molestias architecto alias deserunt quibusdam ratione beatae nisi laborum voluptas accusamus!
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SobreMim;
