/*a)a)Escreva um programa que verifique se uma pessoa pode se aposentar com base na idade e no tempo de contribuicao.
b) Crie um programa que determine se uma pessoa pode solicitar um emprestimo bancario com base na sua renda mensal e no historico de credito.*/

//a)

let idade = 80
let contribuicao = 70
if (idade <= contribuicao){
    console.log("Ele pode  sim!!!")
} else {
    console.log("Ele não pode!!!!!!!")
}

//b)
const readlineSync = require('readline-sync');
let rendaMensal = readlineSync.question("Qual é a sua renda mensal?");
let historicoCredito = readlineSync.question("Qual é o seu histórico de crédito? (bom/ruim)");

const limiteRenda = 5000; 
const historicoBom = "bom"; 

if (rendaMensal >= limiteRenda && historicoCredito === historicoBom) {
    console.log("Parabéns! Você pode solicitar um empréstimo bancário.");
} else {
    console.log("Desculpe, você não pode solicitar um empréstimo bancário.");
}
