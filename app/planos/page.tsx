"use client";

import React, { useState } from "react";
import { IoMdCreate, IoMdTrash } from "react-icons/io";

const Planos = () => {
  const [planos, setPlanos] = useState([
    { id: 1, nome: "Iniciante", duracao: "1 mês", valor: "R$ 99,00", alunos: 12 },
    { id: 2, nome: "Intermediário", duracao: "3 meses", valor: "R$ 249,00", alunos: 20 },
    { id: 3, nome: "Avançado", duracao: "6 meses", valor: "R$ 399,00", alunos: 5 },
    { id: 4, nome: "Hipertrofia", duracao: "1 mês", valor: "R$ 129,00", alunos: 15 },
    { id: 5, nome: "Emagrecimento", duracao: "3 meses", valor: "R$ 199,00", alunos: 10 },
  ]);

  const excluirPlano = (id: number) => {
    setPlanos(planos.filter((plano) => plano.id !== id));
  };

  const editarPlano = (id: number) => {
    const novoNome = prompt("Novo nome do plano:");
    const novaDuracao = prompt("Nova duração:");
    const novoValor = prompt("Novo valor:");
    
    if (novoNome && novaDuracao && novoValor) {
      setPlanos(planos.map((plano) =>
        plano.id === id
          ? { ...plano, nome: novoNome, duracao: novaDuracao, valor: novoValor }
          : plano
      ));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-900 text-gray-200">
      <main className="w-full max-w-6xl bg-gray-800 p-16 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center text-blue-400 font-semibold mb-8">
          Lista de Planos
        </h2>
        
        {/* Lista de planos */}
        <div className="space-y-4">
          {planos.map((plano) => (
            <div key={plano.id} className="flex justify-between items-center p-4 bg-gray-700 rounded-lg shadow-md">
              <div>
                <h3 className="text-xl text-blue-400">{plano.nome}</h3>
                <p>Duração: {plano.duracao}</p>
                <p>Valor: {plano.valor}</p>
              </div>
              
              {/* Ações (editar e excluir) */}
              <div className="flex gap-4">
                <button
                  onClick={() => editarPlano(plano.id)}
                  className="flex items-center bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 duration-300"
                >
                  <IoMdCreate size={20} />
                </button>
                <button
                  onClick={() => excluirPlano(plano.id)}
                  className="flex items-center bg-red-500 text-white p-2 rounded-full hover:bg-red-600 duration-300"
                >
                  <IoMdTrash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Relatório de planos ativos */}
        <div className="mt-8">
          <h3 className="text-2xl text-blue-400 font-semibold">Relatório de Planos Ativos</h3>
          
          <div className="mt-4 space-y-2">
            {planos.map((plano) => (
              <div key={plano.id} className="flex justify-between p-4 bg-gray-700 rounded-lg shadow-md">
                <span>{plano.nome}</span>
                <span>{plano.alunos} alunos</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Planos;
