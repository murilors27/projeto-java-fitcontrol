import React from "react";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { IoMdFitness, IoMdHeart, IoMdCart } from "react-icons/io";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Corpo da Página */}
      <main className="flex-grow px-6 py-12 flex items-center justify-center">
        {/* Dashboard aumentado */}
        <div className="w-full max-w-5xl mx-auto bg-white p-12 rounded-lg shadow-lg relative">
          <div className="flex flex-col items-start gap-12">
            <div className="text-left text-4xl text-sky-700 font-semibold w-full">
              Escolha uma opção
            </div>
            <div className="flex flex-row gap-12 justify-center mt-6">
              {/* Botão Planos com Link */}
              <Link href="/planos">
                <div className="flex items-center gap-4 bg-sky-700 text-white px-6 py-5 rounded-lg shadow-md cursor-pointer hover:bg-sky-800 duration-300">
                  <IoMdCart size={28} />
                  <span className="text-lg">Planos</span>
                </div>
              </Link>

              {/* Botão Cardio com Link */}
              <Link href="/cardio">
                <div className="flex items-center gap-4 bg-sky-700 text-white px-6 py-5 rounded-lg shadow-md cursor-pointer hover:bg-sky-800 duration-300">
                  <IoMdHeart size={28} />
                  <span className="text-lg">Cardio</span>
                </div>
              </Link>

              {/* Botão Funcional com Link */}
              <Link href="/funcional">
                <div className="flex items-center gap-4 bg-sky-700 text-white px-6 py-5 rounded-lg shadow-md cursor-pointer hover:bg-sky-800 duration-300">
                  <IoMdFitness size={28} />
                  <span className="text-lg">Funcional</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Botão "Novo Treino +" estilizado */}
          <button className="absolute top-6 right-6 bg-blue-600 text-white px-3 py-3 rounded-lg flex items-center gap-2 text-lg hover:bg-blue-700 transition">
            <IoMdAdd size={24} />
            Novo Treino +
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
