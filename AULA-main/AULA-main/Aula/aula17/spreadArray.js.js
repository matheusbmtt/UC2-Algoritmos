const listaDeNomes = ["mika","Paulo","Vitor"]

const copiaListaDeNomes = [...listaDeNomes]
copiaListaDeNomes[0] = "Vitor"

console.log(copiaListaDeNomes) // ["Vitor","Paulo","Vitor"]