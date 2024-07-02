/*A) Atualize o objeto aluno adicionando uma nova propriedade chamada 'notas', um array vazio que será usado para registrar as notas do aluno (para criar um array vazio é só não colocar nada dentro de []).
B) Adicione pelo menos três notas fictícias ao array notas.
C) Calcule a média das notas do aluno (para calcular a média, fazemos a soma das notas dividida pelo quantidade de itens no array).
D) Exiba as informações do aluno no console, incluindo seu nome, idade, curso, notas e média.*/

let aluno = {
    nomeDoAluno : "Stevão",
    idade : 18,
    curso : "TDS",
    notas: []
}

aluno.notas.push(7.5, 8.0, 6.5)

let somaNotas = aluno.notas.reduce((total, nota) => total + nota, 0);
let media = somaNotas / aluno.notas.length;

console.log(`Meu nome é ${aluno.nomeDoAluno} e tenho ${aluno.idade} e faço o cusro ${aluno.curso} e minha media é ${media} a soma das minhas nota são ${somaNotas}`)


