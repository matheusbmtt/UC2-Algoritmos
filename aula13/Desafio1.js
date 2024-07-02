const personagem = ["Messi","Cristiano","Neymar","Gabigol"]

function quemSou(array){
    const desafio1 = Math.floor(Math.random() * array.length);
    return array[desafio1]
}
const personagemEscolhido = quemSou(personagem)

console.log("Você é: ", personagemEscolhido)