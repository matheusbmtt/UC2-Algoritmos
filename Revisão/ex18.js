/*A) Utilize o readline-sync para solicitar ao usuário que insira cinco números inteiros.
B) Armazene os números inseridos pelo usuário em um array.
C) Calcule e exiba a média dos números inseridos pelo usuário no console.*/

const readlineSync = require('readline-sync');

let numeros = [];
for (let i = 0; i < 5; i++) {
    numeros.push(Number(readlineSync.question(`Insira o ${i + 1}º número inteiro: `)));
}

console.log("Números inseridos:", numeros);

let soma = numeros.reduce((total, numero) => total + numero, 0);
let media = soma / numeros.length;
console.log("Média dos números inseridos:", media);
