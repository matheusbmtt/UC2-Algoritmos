/*Agora faça um programa que verifica que turno do dia um aluno estuda. Escolha entre M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else. 💡 Dica ⭐ Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem "Boa Tarde!" Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)

Se o usuário digitar "V", a saída deve ser: "Boa Tarde!" */

let turno = 'V'

if ( turno === 'M') {
    console.log ('Boa tarde')
} else if ( turno === 'V') {
    console.log("Bom dia")
} else {
    console.log("Boa noite")
}

/*Repita o exercício anterior, mas utilizando a estrutura de switch case agora. */

switch (turno){
    case "M":
    console.log('Boa tarde') 
    break;
    case "V":
    console.log("Bom dia")
    break;
    default:
    console.log("Boa noite")
    break;
} 