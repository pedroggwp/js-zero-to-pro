// let idade = 90;

// if (idade >= 18) {
//     console.log('Maior de idade');
// } else {
//     console.log('Menor de idade');
// }



// Diferença entre == e ===
// let idade = 20;

// if (idade == 20) {
//     console.log('Você tem 20 anos');
// }

// idade = "20";

// if (idade == 20) {
//     console.log('Você tem 20 anos');
// }

// idade = 20;
// if (idade === 20) {
//     console.log('Você tem 20 anos');
// }

// idade = "20";
// if (idade === 20) {
//     console.log('Você tem 20 anos');
// }


// let idade = 90;

// if (idade < 18) {
//     console.log('CRIANÇA')
// } else if (idade >= 18 && idade < 60) {
//     console.log('ADULTO')
// } else if (idade >= 60) {
//     console.log('IDOSO')
// }


// Operador ternário
// let isMember = true;
// let shipping = isMember ? 2 : 10;

// console.log(isMember ? 'É MEMBRO' : 'NÃO É MEMBRO')
// console.log(`Frete: R$${shipping}`)

// Switch
let profession = 'pedreiro';
console.log(`Profissão : ${profession}`)

switch (profession) {
    case 'Fiscal':
        console.log('CAMISA VERDE')
        break;
    case 'Bombeiro':
        console.log('CAMISA VERMELHA')
        break;
    case 'Policial':
        console.log('CAMISA AZUL')
        break;
    default:
        console.log('CAMISA PRETA')
        break;
}