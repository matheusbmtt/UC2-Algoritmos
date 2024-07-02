/*Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra,você vai fornecer algumas informações:

Nome completo;
Tipo de jogo: 
IN indica internacional;
e DO indica doméstico;
Etapa do jogo: SF indica semi-final;
DT indica decisão de terceiro lugar; e FI indica final
Categoria: pode ser as opções 1, 2, 3 ou 4;
Quantidade de ingressos
O sistema deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Junto nesta pasta há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser multiplicados pelo valor do dólar (considerar o dólar = R$4,10) */


let Nome = 'Stevão Severo Rodrigues'
let TipoDeJogo = 'IN'
let EtapaDoJogo = 'SF'
let Categoria = 2 
let preço
let ValorDoIngresso; 
switch (EtapaDoJogo) {
    case "SF":
        switch (Categoria) {
            case 1 :
                ValorDoIngresso = 700
                break;
            case 2 :
                ValorDoIngresso = 800
                break;
            case 3 :
                ValorDoIngresso = 890
                break;
            case 4 :
            ValorDoIngresso = 900
            break;
        default:
    console.log('Categoria de ingresso invalida!')
        
        }
} switch (EtapaDoJogo) {
    case "FI":
        switch (Categoria) {
            case 1 :
                ValorDoIngresso = 1.000
                break
            case 2:
                ValorDoIngresso = 1.200
                break
            case 3 :
                ValorDoIngresso = 1.340
                break
            case 4 :
                ValorDoIngresso = 1.500
                break;
            default:
        console.log('Categoria de ingresso invalida')
        
        }
} switch (EtapaDoJogo){
    case "DT" : 
        switch (Categoria) {
            case 1 :
                ValorDoIngresso = 180
                break;
            case 2 :
                ValorDoIngresso = 240
                break ;
            case 3 :
                ValorDoIngresso = 300
                break;
            case 4 :
                ValorDoIngresso = 400
                break;
            default:
                console.log("Categoria de ingresso invalida!")
        } 
}

let quantidade = 5
let total1 = (quantidade*ValorDoIngresso)

if (TipoDeJogo === 'IN'){
    total1 = (total1*4.10)  // ingressos em dolar
}


console.log('Nome Completo:' ,Nome)
console.log('Tipo de Jogo:', TipoDeJogo)
console.log("Etapa do Jogo:", EtapaDoJogo)
console.log("Categoria:", Categoria)
console.log("Quantidade de Ingresssos:", quantidade)
console.log("Valor do Ingresso:", ValorDoIngresso)
console.log("Valor Total:", total1 )
/* Meu objetivo é que o terminal exeute o segionte codigo:
Nome Completo : "Stevão Severo Rodrigues"
Tipo de Jogo : "IN"
Etapa do Jogo : "SF"
Categoria : "2"
Quantidade de Ingressos : "5"
Valor do Ingresso : "800"
Valor Total : "16,400" */
