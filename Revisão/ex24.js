/*A) Utilize o readline-sync para solicitar ao usuário que insira um número positivo.
B) Utilize um loop for para exibir todos os números pares de 0 até o número inserido pelo usuário.
C) Exiba os números pares no console.*/

const readlineSync= require('readline-sync');
let numero = readlineSync.question("Insira um numero : ");


if (numero > 0 && numero % 1 === 0) {
    console.log("Números pares de 0 até", numero, ":");

    for (let i = 0; i <= numero; i += 2) {
        console.log(i);
    }
}
