function gravidade() {
  console.log("A gravidade do planeta é:");
  console.log(9.8);
}

// gravidade();

/*
A gravidade do planeta é:
9.8
*/

function somar(n1, n2) {
  console.log(`Resultado: ${n1 + n2}`);
}

// somar(10, 15); // Resultado: 25

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

let nome = nomeCompleto("Pedro", "Nascimento");
console.log(nome); // Pedro Nascimento

function maiorDeIdade(idade) {
  if (idade >= 18) {
    return true;
  }

  return false;
}

let verificacao = maiorDeIdade(14);
console.log(verificacao); // false

const sum = (x, y) => {
  return x + y;
};

const sum2 = (x, y) => x + y;

console.log(sum(10, 5)); // 15
console.log(sum2(10, 5)); // 15
