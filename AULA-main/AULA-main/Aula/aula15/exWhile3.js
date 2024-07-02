const readlineSync = require('readline-sync');
let numero 
let soma = 0

while(numero !== 0){
    numero = Number(readlineSync.question("DIGITE UM NUMERO:"))
    soma += numero 
    // soma = soma + numero
    // Soma recebe 0 + 10 = 10
}
console.log(soma)