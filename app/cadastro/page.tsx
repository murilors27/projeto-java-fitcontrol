"use client";

import React, { useState } from "react";

const CadastroAluno = () => {
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    genero: "",
    cpf: "",
    telefone: "",
    endereco: "",
    altura: "",
    peso: "",
    objetivo: "",
    experiencia: "",
    restricoes: "",
    observacoes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/alunos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
  
      if (response.ok) {
        alert("Aluno cadastrado com sucesso!");
        setForm({
          nome: "",
          idade: "",
          genero: "",
          cpf: "",
          telefone: "",
          endereco: "",
          altura: "",
          peso: "",
          objetivo: "",
          experiencia: "",
          restricoes: "",
          observacoes: "",
        });
      } else {
        const erro = await response.text();
        alert("Erro ao cadastrar aluno: " + erro);
      }
    } catch (error) {
      alert("Erro na conexão com o servidor: " + error);
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-900 text-white">
      <main className="w-full max-w-2xl bg-gray-800 p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center text-blue-400 font-semibold mb-6">
          Cadastro de Aluno
        </h2>

        <form onSubmit={handleCadastro} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm mb-1">Nome completo:</label>
            <input
              name="nome"
              type="text"
              value={form.nome}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Idade:</label>
            <input
              name="idade"
              type="number"
              value={form.idade}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Gênero:</label>
            <select
              name="genero"
              value={form.genero}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Selecione</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">CPF:</label>
            <input
              name="cpf"
              type="text"
              value={form.cpf}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Telefone:</label>
            <input
              name="telefone"
              type="text"
              value={form.telefone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Endereço:</label>
            <input
              name="endereco"
              type="text"
              value={form.endereco}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Altura (m):</label>
            <input
              name="altura"
              type="text"
              value={form.altura}
              onChange={handleChange}
              placeholder="Ex: 1.75"
              className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Peso (kg):</label>
            <input
              name="peso"
              type="text"
              value={form.peso}
              onChange={handleChange}
              placeholder="Ex: 70.5"
              className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Objetivo:</label>
            <input
              name="objetivo"
              type="text"
              value={form.objetivo}
              onChange={handleChange}
              placeholder="Ex: Hipertrofia"
              className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Nível de experiência:</label>
            <select
              name="experiencia"
              value={form.experiencia}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Selecione</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Restrições médicas:</label>
            <textarea
              name="restricoes"
              value={form.restricoes}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
              rows={2}
              placeholder="Ex: Problemas cardíacos, lesões..."
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Observações gerais:</label>
            <textarea
              name="observacoes"
              value={form.observacoes}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
              rows={2}
              placeholder="Qualquer informação adicional..."
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2 rounded-md"
            >
              Cadastrar Aluno
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CadastroAluno;
