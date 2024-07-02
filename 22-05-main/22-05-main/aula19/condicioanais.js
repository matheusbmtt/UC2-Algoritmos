/* 
b) Escreva um programa que determine se um ano e bissexto ou nao.
 */

//A)
const readlineSync = require('readline-sync');
let numero = readlineSync.question("Insira um numero: ")

if(numero % 3 === 0){
    console.log("é divisivel")
} else {
    console.log("Não é")
}

//b)
// Solicitar ao usuário que insira um ano
let ano = readlineSync.question("Insira um ano:")

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(ano + " é um ano bissexto.");
} else {
    console.log(ano + " não é um ano bissexto.");
}
