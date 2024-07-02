/*b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template: 
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].*/

function parametros(NOME,IDADE,ENDEREÇO,PROFISSÃO){
    const resultado = `Eu sou ${NOME}, tenho ${IDADE} anos, moro em ${ENDEREÇO}, e sou ${PROFISSÃO}.`
    console.log(resultado)
}

parametros('Stevão',17,"São Leopoldo","Futuro Progamador")