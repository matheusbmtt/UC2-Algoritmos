/* ) Utilize o readline-sync para solicitar ao usuário que insira seu nome completo.
B) Armazene o nome inserido pelo usuário em uma variável.
C) Exiba o nome inserido pelo usuário em maiúsculas no console.
D) Exiba o nome inserido pelo usuário em minúsculas no console.
E) Exiba o comprimento do nome inserido pelo usuário no console.*/

const readlineSync = require('readline-sync');
let nome = readlineSync.question("insira seu nome completo: ");
let armazena = (nome)
console.log(armazena.toLocaleLowerCase()) // mi
console.log(armazena.toLocaleUpperCase()) // ma
console.log(armazena)