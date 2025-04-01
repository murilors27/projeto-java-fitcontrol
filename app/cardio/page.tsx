  "use client";

  import React, { useState } from "react";
  import { IoMdCreate, IoMdTrash } from "react-icons/io";

  interface Exercicio {
    id: number;
    nome: string;
    duracao: string;
    intensidade: string;
    equipamento: string | null;
  }

  const Cardio = () => {
    const [exercicios, setExercicios] = useState<Exercicio[]>([
      { id: 1, nome: "Esteira", duracao: "30 min", intensidade: "Moderada", equipamento: "Esteira elétrica" },
      { id: 2, nome: "Bicicleta", duracao: "40 min", intensidade: "Alta", equipamento: "Bicicleta ergométrica" },
      { id: 3, nome: "Remo", duracao: "25 min", intensidade: "Moderada", equipamento: "Remo indoor" },
      { id: 4, nome: "Pular corda", duracao: "15 min", intensidade: "Alta", equipamento: "Corda de pular" },
    ]);

    const adicionarExercicio = () => {
      const nome = prompt("Nome do exercício:");
      const duracao = prompt("Duração recomendada:");
      const intensidade = prompt("Intensidade (Leve, Moderada, Alta):");
      const equipamento = prompt("Equipamento necessário (ou deixe em branco):");
      
      if (nome && duracao && intensidade) {
        setExercicios([
          ...exercicios,
          {
            id: Date.now(),
            nome,
            duracao,
            intensidade,
            equipamento: equipamento || "Nenhum",
          },
        ]);
      }
    };

    const editarExercicio = (id: number) => {
      const novoNome = prompt("Novo nome do exercício:");
      const novaDuracao = prompt("Nova duração:");
      const novaIntensidade = prompt("Nova intensidade:");
      const novoEquipamento = prompt("Novo equipamento:");

      if (novoNome && novaDuracao && novaIntensidade) {
        setExercicios(
          exercicios.map((ex) =>
            ex.id === id
              ? {
                  ...ex,
                  nome: novoNome,
                  duracao: novaDuracao,
                  intensidade: novaIntensidade,
                  equipamento: novoEquipamento || "Nenhum",
                }
              : ex
          )
        );
      }
    };

    const excluirExercicio = (id: number) => {
      setExercicios(exercicios.filter((ex) => ex.id !== id));
    };

    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-900 text-white">
        <main className="w-full max-w-6xl bg-gray-800 p-16 rounded-lg shadow-lg">
          <h2 className="text-3xl text-center text-blue-400 font-semibold mb-8">Lista de Exercícios Cardio</h2>

          <button
            onClick={adicionarExercicio}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-6 hover:bg-blue-600 transition"
          >
            + Adicionar Exercício
          </button>

          <div className="space-y-4">
            {exercicios.map((ex) => (
              <div key={ex.id} className="flex justify-between items-center p-4 bg-gray-700 rounded-lg shadow-md">
                <div>
                  <h3 className="text-xl text-blue-300">{ex.nome}</h3>
                  <p>Duração: {ex.duracao}</p>
                  <p>Intensidade: {ex.intensidade}</p>
                  <p>Equipamento: {ex.equipamento}</p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => editarExercicio(ex.id)}
                    className="flex items-center bg-blue-500 text-white p-2 rounded-full hover:bg-yellow-600 duration-300"
                  >
                    <IoMdCreate size={20} />
                  </button>
                  <button
                    onClick={() => excluirExercicio(ex.id)}
                    className="flex items-center bg-red-500 text-white p-2 rounded-full hover:bg-red-600 duration-300"
                  >
                    <IoMdTrash size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Relatório de utilização */}
          <div className="mt-8">
            <h3 className="text-2xl text-blue-400 font-semibold">Relatório de Utilização</h3>
            <div className="mt-4 space-y-2">
              {exercicios.map((ex) => (
                <div key={ex.id} className="flex justify-between p-4 bg-gray-600 rounded-lg shadow-md">
                  <span>{ex.nome}</span>
                  <span>Tempo médio: {ex.duracao}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  };

  export default Cardio;