const dados ={
    direcao: "Carlo Ancelotti",
    nomeDoFilme: "if ou else?",
    anoDeLancamento: 2077,
    elenco:["Vini","Rodrigol","Modric","Belegool"],
    viuOUnao: false
}

console.log(dados.direcao,'\n',dados.nomeDoFilme,'\n',dados.anoDeLancamento,'\n',dados.elenco,'\n',dados.viuOUnao)
// OU
console.log("Esses são meus dados:")
console.log(dados.direcao)
console.log(dados.nomeDoFilme)
console.log(dados["anoDeLancamento"])
console.log(dados["elenco"])
console.log(dados.viuOUnao)