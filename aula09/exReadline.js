// Importando o Modulo readline
const readline = require('readline');

//Criando uma instância de interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Solicitando ao usuário que insira sua idade 
rl.question("Qual a sua idade?", (idade) =>{
//Exibindo a idade Inserida pelo usuário
console.log("Sua idade é:", idade);
rl.close();
 // Fechando a interface de leitura

});