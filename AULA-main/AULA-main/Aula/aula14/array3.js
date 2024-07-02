// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const readlineSync = require('readline-sync');

// Fazendo perguntas e armazenando as respostas
const nome = readlineSync.question("Qual o seu nome? ");
const email = readlineSync.question("Qual o seu e-mail? ");

// Exibindo as respostas
console.log("Nome: " + nome);
console.log("e-mail: " + email);
console.log(`/O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome} !`)