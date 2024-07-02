// indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array) // Ira impriri a undefined

array = null
console.log('b. ', array) // ira imprimir "a. null"

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
console.log('c. ', array.length) // ira imprimir "c. e 11"

let i = 0
console.log('d. ', array[i]) // ira imprimir "d. e 3"

array[i+1] = 19
console.log('e. ', array) // ira imprimir "e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]"

const valor = array[i+6]
console.log('f. ', valor) // ira imprimir "f. e 9"