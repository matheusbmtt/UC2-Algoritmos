/*Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", mostre qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que valor da variavel. Exemplo Entradas: "fantasia" | "10" Saída: Qual snack que você quer comprar?​Entrada: "chocolate" Saída: "Bom filme!" "Aproveite o seu chocolate"*/

let genero = 'Fantasia'
let ingresso = 15
let lanchinho = 'Chocolate'

if (genero === "Fantasia" && ingresso <= 15 && lanchinho === 'Chocolate') {
    console.log("Bom filme!, Aproveite seu",lanchinho )
} else {
    console.log('Escolha outro filme')
} 
