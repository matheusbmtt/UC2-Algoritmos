/*A) Utilize o readline-sync para solicitar ao usuário que insira dois números.
B) Armazene os números inseridos pelo usuário em duas variáveis.
C) Faça todas as comparações entre os dois números inseridos pelo usuário utilizando operadores de comparação.
D) Exiba os resultados das comparações no console.*/
 
const readlineSync = require('readline-sync');

let numero1 = readlineSync.question("Insira o primeiro número: ");
let numero2 = readlineSync.question("Insira o segundo número: ");


numero1 = Number(numero1);
numero2 = Number(numero2);

console.log("Comparando", numero1, "e", numero2, ":");
console.log(numero1, "==", numero2, "?", numero1 == numero2);
console.log(numero1, "!=", numero2, "?", numero1 != numero2);
console.log(numero1, ">", numero2, "?", numero1 > numero2);
console.log(numero1, "<", numero2, "?", numero1 < numero2);
console.log(numero1, ">=", numero2, "?", numero1 >= numero2);
console.log(numero1, "<=", numero2, "?", numero1 <= numero2);
