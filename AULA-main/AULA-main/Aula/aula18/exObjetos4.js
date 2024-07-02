/*1. Resolva os passos a seguir: 
    
    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**/
/*
    // Exemplo de entrada
const pessoa = {
    nome: "Vitor Hugo", 
    apelidos: ["Vitinho", "Vitão", "Vit"]
}

 // Exemplo de saída
"Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"
 */

const pessoa = {
    nome: "Stevão",
    apelidos: ["Tevinho","Negão","Preto"]
}

function acessarObjeto(objeto){
    const pessoa2 = {
        ...objeto
    }
    console.log(`Eu sou ${pessoa2.nome}, mas pode me chamar de: ${pessoa2.apelidos[0]}, ${pessoa2.apelidos[1]} ou ${pessoa2.apelidos[2]}`)
}

acessarObjeto(pessoa)