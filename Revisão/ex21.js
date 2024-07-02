/*A) Utilize o readline-sync para solicitar ao usuário que insira seu nome, idade e cidade.
B) Armazene as informações inseridas pelo usuário em um objeto.
C) Exiba as informações do objeto no console.*/
const readlineSync = require('readline-sync');

let nome = readlineSync.question("Nome: ")
let idade = readlineSync.question("idade: ")
let cidade = readlineSync.question("cidade: ")
const armazena = (nome,idade,cidade)
console.log(armazena)