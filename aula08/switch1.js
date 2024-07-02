/*2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
*/
let fruta = 'Pêra'
let preco = 5.5

switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
     // BREAK PARA O ITEM c.
  default:
    preco = 5
    break
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) 

/*Para que serve o código acima? Para saber qual fruta é o valor dessa fruta.

b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
"O preco da fruta Maçã é, R$ 2.50 ".

c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?  vai rodar o seguinte codico, 'O preço da fruta Pêra, é R$ 5 */