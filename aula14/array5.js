// 3. Faça um programa, seguindo os passos:
    
//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

const listaDeTarefas = []
    
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

const readlineSync = require("readline-sync")
const tarefa1 = readlineSync.question("QUal e a primeira tarefa do dia ?")
const tarefa2 = readlineSync.question("QUal e a segunda tarefa do dia ?")
const tarefa3 = readlineSync.question("QUal e a terceira tarefa do dia ?")

//const armazenado = [tarefa1,tarefa2,tarefa3]
listaDeTarefas.push(tarefa1,tarefa2,tarefa3)

//c) Imprima o array no console
console.log(listaDeTarefas)
console.log(armazenado)

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
//e) Remova da lista o item de índice que o usuário escolheu.
//f) Imprima o array no console     

const pergunta = readlineSync.question("Qual o numero da tarefa você já realizou?")
armazenado.splice(pergunta,1)
console.log(armazenado)
