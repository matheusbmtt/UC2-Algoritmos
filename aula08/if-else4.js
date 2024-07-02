/*Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que mostre qual o gênero de filme que vão assistir e o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme" */

let genero = 'Fantasia'
let ingresso = 17

if (genero === "Fantasia" && ingresso <= 15) {
    console.log("Bom filme!")
} else {
    console.log('Escolha outro filme')
} 
