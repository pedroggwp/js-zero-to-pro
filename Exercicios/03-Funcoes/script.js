/*
Calcule a porcentagem entre dois números.
Exemplo: 25% de 40 é 10.
Fórmula da porcentagem: (y / x) * 100.
*/

function percentage(x, y) {
  return (y / x) * 100;
}

let x = 40;
let y = 10;
let prc = percentage(x, y);

console.log(`${prc}% de ${x} é ${y}`);

/*
Calcule o preço do imóvel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m3 é 1.5x
*/

function calculateProperty(meters, bedrooms) {
  let m2 = 3000;
  let price = 0;

  switch (bedrooms) {
    case 1:
      price = m2 * meters;
      break;
    case 2:
      price = m2 * 1.2 * meters;
      break;
    case 3:
      price = m2 * 1.5 * meters;
      break;
  }

  return price;
}

let footage = 123;
let bedrooms = 1;
let price = calculateProperty(footage, bedrooms);
console.log(`A casa custa R$${price}`);

/*
Crie uma função que valide usuário e senha.
Usuário correto: pedro
Senha correta 123
*/

function validadePassword(username, password) {
  if (username === "pedro" && password === 123) {
    return true;
  }

  return false;
}

let user = "pedro";
let password = 123;
let validated = validadePassword(user, password);

if (validated) {
  console.log("Acesso concedido!");
} else {
  console.log("Acesso negado!");
}
