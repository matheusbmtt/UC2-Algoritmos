/*
Escreva uma funcao que receba o nome de uma pessoa como entrada e retorne uma saudacao simples usando concatenacao de strings.
    b)Escreva uma funcao chamada "criarEmail" que receba o nome e sobrenome de uma pessoa, seu ano de nascimento e uma empresa como entrada, e retorne um e-mail personalizado concatenando as informacoes.
*/

//a)

function pessoa(){
    let nome = "Stevao"
    const O = "O"
    const I = "I"
    let concatenando = O + I 
    console.log(concatenando, "meu nome é", nome)
}
pessoa()


//b) 
function criarEmail(nome,sobrenome,anoNascimento,empresa,){
nome = "Stevão";
sobrenome = "Rodrigues";
anoNascimento = 2006;
empresa = "SAP";
emailPersonalizado = (nome, sobrenome, anoNascimento, empresa);
console.log("E-mail personalizado:", emailPersonalizado);
}
criarEmail()
