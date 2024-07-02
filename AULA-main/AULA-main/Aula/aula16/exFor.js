
let maior = 0
let menor = 0

const numeros = [0,28,30,90]

function verificaMaior(array1){
    for(let i = 0; i < array1.length; i++){ 
    // ELE TEM A FUNÇAO DE PERCORRER MINHA ARRAY, E ME DIZER SE É MAIOR,MENOR OU IGUAL
        if (array1[i] > maior){
            maior = array1[i]
} } return maior 
}
console.log(verificaMaior(numeros))

function verificaMenor(array2){
    for(let i = 0; i < array2.length; i++){ 
    // ELE TEM A FUNÇAO DE PERCORRER MINHA ARRAY, E ME DIZER SE É MAIOR,MENOR OU IGUAL
        if (array2[i] < menor){
            menor = array2[i]
} } return menor
}
console.log(verificaMenor(numeros))






