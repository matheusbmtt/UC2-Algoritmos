// Somar os números de 1 a 10: Utilize um loop for para calcular e mostrar a soma de todos os números de 1 a 10 no console.

const numeros = [1,2,3,4,5,6,7,8,9,10];
let soma = 0

    for(let i = 0; i < numeros.length; i++)
        soma += numeros[i]
    //       OU
        //soma = soma + numeros[i]

console.log(soma) // Resultado 55
