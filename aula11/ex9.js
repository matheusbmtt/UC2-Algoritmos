/*Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores passados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10*/

function soma (numero1,numero2){
    const soma = numero1 + numero2
    return soma
}

const resultado1 = (soma(30,3))

function soma2 (numero1,numero2){
    const soma2 = numero1 - numero2
    return soma2
}

const resultado2 = (soma2(30,3))=

function soma3 (numero1,numero2){
    const soma3 = numero1 * numero2
    return soma3
}

const resultado3 = (soma3(30,3))

function soma4 (numero1,numero2){
    const soma4 = numero1 / numero2
    return soma4
}

const resultado4 = (soma4(30,3))

console.log("Números inseridos: 30 e 3 ")
console.log("Soma:", resultado1);
console.log(`Diferença: ${resultado2}`)
console.log(`Divisão: ${resultado4}`)
console.log(`Multiplicação: ${resultado3}`)

