// Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let index = frutas.indexOf("Abacaxi");
console.log(`Qual é o índice da palavra Abacaxi ? ${index}`)
let length1 = frutas.length
console.log(`Qual é o tamanho dessa array ? ${length1}`)
let includes = frutas.includes("Abacaxi")
console.log(`Tem a palavra Abacaxi ? ${includes}`)