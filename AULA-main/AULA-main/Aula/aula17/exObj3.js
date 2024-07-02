
// Um objetos com 
const dados ={
    direcao: "Carlo Ancelotti",
    nomeDoFilme: "if ou else?",
    anoDeLancamento: 2077,
    elenco:["Vini","Rodrigol","Modric","Belegool"],
    viuOUnao: false
}

// atribui uma array nova dentro do objeto "dados"
dados.novoElenco = ["Bernado Silva","Doku","Folden","Rodri"]
// atribui outro valor a o primeiro indice da array elenco
dados.elenco[0] = "Xuxa"

for (let i = 0; i < dados.elenco.length; i++){
    console.log(`O jogador ${dados.elenco[i]} vira o jogador ${dados.novoElenco[i]}`)
}
// OU
console.log(dados.direcao,'\n',dados.nomeDoFilme,'\n',dados.anoDeLancamento,'\n',dados.elenco,'\n',dados.novoElenco,'\n',dados.viuOUnao)

