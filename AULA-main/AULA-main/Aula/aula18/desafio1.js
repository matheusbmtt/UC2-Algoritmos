/ Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.
const readlineSync = require('readline-sync');
function pergunta(readlineSync){
// Fazendo perguntas e armazenando as respostas
let nome = readlineSync.question("Qual o seu nome? ");
let idade = readlineSync.question("Qual a sua idade? ");
let profissao = readlineSync.question("Qual e sua profisao? ");
// Exibindo as respostas
funçao = {
    nome: nome,
    idade: idade,
    profissão: profissao,
    }
}
pergunta(readlineSync)
console.log(funçao)
console.log(typeof funçao)

