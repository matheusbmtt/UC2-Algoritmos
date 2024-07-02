/*A) Crie uma função que receba dois números como parâmetros e retorne a soma deles.
B) Utilize o readline-sync para solicitar ao usuário que insira dois números.
C) Chame a função criada, passando os números inseridos pelo usuário como argumentos, e exiba o resultado da soma no console.*/

const readlineSync = require('readline-sync');

function somarNumeros(num1, num2) {
    return num1 + num2;
}


let numero1 = readlineSync.question("Insira o primeiro número: ");
let numero2 = readlineSync.question("Insira o segundo número: ");

let resultado = somarNumeros(numero1, numero2);
console.log("A soma dos números é:", resultado);
