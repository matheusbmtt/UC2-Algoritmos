/*A) Utilize o readline-sync para solicitar ao usuário que insira um número positivo.
B) Crie uma variável contagem e atribua a ela o valor 0.
C) Utilize um loop while para incrementar a contagem até o valor inserido pelo usuário.
D) Exiba a contagem no console após cada iteração do loop.*/

const readlineSync = require('readline-sync');
let numero = readlineSync.question("insira um numero: ")
let contagem = 0
while (contagem <= numero) {
    console.log(contagem);
    contagem++
}