let nome = "Pedro";
let sobrenome = "Nascimento";

// let nomeCompleto = nome + ' ' + sobrenome;
let nomeCompleto = `${nome} ${sobrenome}`; // Utilizando Template String

console.log("Nome: " + nomeCompleto); // Nome: Pedro Nascimento


let idade = 90;
let idadeString = `${idade + 2} anos`;
console.log(idadeString); // 92 anos
