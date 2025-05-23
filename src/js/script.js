// script.js

const alunos = [];

document.getElementById("form-cadastro").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const matricula = document.getElementById("matricula").value.trim();
  const idade = document.getElementById("idade").value.trim();
  const mae = document.getElementById("mae").value.trim();
  const telefone = document.getElementById("telefone").value.trim();

  if (!nome || !matricula || !idade || !mae || !telefone) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const aluno = {
    nome,
    matricula,
    idade: parseInt(idade),
    mae,
    telefone
  };

  alunos.push(aluno);
  console.log("Aluno cadastrado:", aluno);
  alert("Aluno cadastrado com sucesso!");

  // Limpa o formulário
  document.getElementById("form-cadastro").reset();
});
