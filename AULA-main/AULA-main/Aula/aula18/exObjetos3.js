/* a) O que vai ser impresso no console?
 vai dar false pelo fato de ter a propriedade dentro do objeto "pessoa" e o segundo vai dar undefind pq esta vazio sem nada, não existe Altura como propriedade.
*/
//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))