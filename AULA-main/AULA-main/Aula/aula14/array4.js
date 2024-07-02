// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
const preferida = ["Pizza","Massa","Carne","Pastel","Sorvete"] 

//a) Imprima no console o array completo

console.log(preferida)

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

console.log(`Essas são minhas comidas preferidas: \n${preferida.join('\n')}`)

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista

const readlineSync = require("readline-sync")
const novacomida = readlineSync.question("Qual sua comida favorita ? ")
preferida[1]= novacomida
console.log(preferida)