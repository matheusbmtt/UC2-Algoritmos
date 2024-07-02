//Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaço

const readline = require(`readline-sync`);
const frase = readline.question("Por favor, insira uma frase:");

// Função para remover espaços vazios de uma palavra
function removerEspacoVazio(palavra){
    return palavra !== "" // Retorna true se a palavra não for vazia, caso contrário retorna false;.
}

console.log((frase.split)("").filter(removerEspacoVazio))

