/* Escreva uma funcao que receba dois numeros como parametros e retorne a soma, divisão e o resto deles.
b) Crie uma funcao que calcule o fatorial de um numero. */

function numeros(numero1,numero2){
    let soma = numero1 + numero2
    let divisão = numero1 / numero2
    let resto = numero1 % numero2
    console.log(soma)
    console.log(divisão)
    console.log(resto)
    return numeros
}

numeros(10,2)

//b)
function calcularFatorial(numero) {
    if (numero < 0) {
        return "Não é possível calcular o fatorial de um número negativo.";
    }

    if (numero === 0 || numero === 1) {
        return 1;
    }

    let resultado = 1;

    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

let numero = 5;
let fatorial = calcularFatorial(numero);
console.log("O fatorial de", numero, "é:", fatorial);

