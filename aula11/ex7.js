/*c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não*/

function booleano(numero1){
    if (numero1 % 2 === 0) {
        console.log(`O Número: ${numero1}, é Par`)
    } else {
        console.log(`O Número: ${numero1}, não é Par`)
    }
}

booleano(32)
