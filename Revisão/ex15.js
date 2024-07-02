/*A) Utilize o readline-sync para solicitar ao usuário que insira dois números.
B) Armazene os números inseridos pelo usuário em duas variáveis.
C) Realize as operações de adição, subtração, multiplicação, divisão e resto entre os dois números inseridos pelo usuário.
D) Exiba os resultados das operações no console.*/
const readlineSync = require('readline-sync');
const numero1 = readlineSync.question("Digite um numero:")
const numero2 = readlineSync.question("Digite um numero:")

const adição = numero1 + numero2
const subtração = numero1 - numero2
const multiplicação = numero1* numero2
const divisão = numero1 / numero2
const resto = numero1 % numero2
console.log(adição,subtração,multiplicação,divisão,resto)
