const pessoa = {
    nome: "Gustavo",
    idade: 29,
    generoMusical: "Gospel",
}

function criaNovoobjeto(objeto){
    const pessoa2 = {
        ...objeto,
        nome: "Stevão",
        idade: 17,
        generoMusical: "Eletrônica",
        time: "Grêmio",
        comidas: ["Massa","Pizza","Churrasco","Pipoca"],
        melhorAmigo: {
            nome: "Portela",
            idade: 16,
        }
    }
console.log(`O nome da pessoa é ${pessoa2.nome}, e suas comidas favorita são ${pessoa2.comidas[0]},${pessoa2.comidas[1]},${pessoa2.comidas[2]},${pessoa2.comidas[3]}\n e Seu melhor amigo se chama ${pessoa2.melhorAmigo.nome} e ele tem ${pessoa2.melhorAmigo.idade} anos. `)
}


criaNovoobjeto(pessoa)

