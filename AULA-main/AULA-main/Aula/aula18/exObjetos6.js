// 2. Resolva os passos a seguir:   
//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
//b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:
/*
1. O valor de `nome`
2. O numero de caracteres do valor `nome`
3. O valor de `idade`
4. O valor de `profissão`
5. O numero de caracteres do valor `profissão`
*/
const pessoa1 = {
    nome: "Stevão",
    idade: 17,
    profissão: "Developer"
}

const pessoa2 = {
    nome: "Matheus",
    idade: 19,
    profissão: "Soldado"
}

function minhaFuncao(pessoa) {
    const resultado = [pessoa1.nome,pessoa1.nome.length,pessoa1.idade,pessoa1.profissão,pessoa1.profissão.length,pessoa2.nome,pessoa2.nome.length,pessoa2.idade,pessoa2.profissão,pessoa2.profissão.length]
    pessoa = resultado
    return resultado
}
console.log(minhaFuncao(pessoa1,pessoa2))
