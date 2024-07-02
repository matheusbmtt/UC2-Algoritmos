/*A) Utilize o readline-sync para solicitar ao usuário que insira sua idade.
B) Armazene a idade inserida pelo usuário em uma variável.
C) Utilize condicionais para determinar se o usuário pode ou não dirigir com base na idade inserida.
D) Exiba uma mensagem no console informando se o usuário pode ou não dirigir.*/
const readlineSync = require('readline-sync');

let nome = readlineSync.question("Nome: ")
let idade = readlineSync.question("idade: ")
const armazena = (nome,idade)
if (idade >= 18){
    console.log("pode dirigir")
} else {
    console.log("Não pode dirigir")
}
