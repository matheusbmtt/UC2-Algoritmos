/* Crie um objeto chamado "roupas" com propriedades como "pecas", "modelos" e "preco".
   b) Crie um programa que simule um cadastro de produtos em uma loja, utilizando objetos para representar cada produto. */

//a)
let roupas = {
    pecas: "",
    modelos: "",
    preçoes:""
}

let loja = {
    ...roupas.pecas,
    pecas: "Azul",
    pecas2: "Preta",
    ...roupas.modelos,
    modelos: "Social",
    modelos2: "Esportivo",
    ...roupas.preçoes,
    preço: "99,99",
    preço2: "86,99"
}
console.log(roupas)
console.log(loja)