// 8. Ler 10 números do usuário e mostrar o maior e o menor número digitado: Utilize um loop for para ler 10 números do usuário e encontrar o maior e o menor número digitado. Mostre os resultados no console

let maior = 0
let menor = 0

const numeros = [0,28,30,90,66,55,44,10,997,1]

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
