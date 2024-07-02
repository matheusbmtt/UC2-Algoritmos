//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const pessoa = {
    nome: "Stevão",
    apelidos: ["Tevinho","Negão","Preto"]
}

function acessarObjeto(objeto){
    const pessoa1 = {
        ...objeto,
        apelidos: ["Modric","O cara","Lenda"],
        }
        console.log(`Eu sou ${pessoa1.nome}, mas pode me chamar de: ${pessoa1.apelidos[0]}, ${pessoa1.apelidos[1]} ou ${pessoa1.apelidos[2]}`)
    }


acessarObjeto(pessoa) 

