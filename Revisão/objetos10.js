/*A) Atualize o objeto aluno adicionando uma nova propriedade chamada 'endereco', que será um objeto com as seguintes propriedades:
B) país (string): O nome do país onde o aluno mora
C) anoNaEscola: O ano (ou série) em que o aluno está na escola
D) cidade (string): A cidade onde o aluno mora.
E) Exiba as informações completas do aluno, incluindo seu nome, idade, curso e todas as propriedades do objeto endereco (rua, número, cidade e CEP) no console.*/

// A) Atualizando o objeto aluno adicionando a propriedade 'endereco'
let aluno = {
    nome: "Stevao",
    idade: 18,
    curso: "TDS",
    endereco: {
        pais: "Brasil",
        anoNaEscola: 2,
        cidade: "São Leopoldo"
    }
};

// B) Adicionando mais propriedades ao objeto endereco
aluno.endereco.rua = "Rua Campestre";
aluno.endereco.numero = 516;
aluno.endereco.cep = "12345-678";

// E) Exibindo as informações completas do aluno e do endereço no console
console.log("Nome:", aluno.nome);
console.log("Idade:", aluno.idade);
console.log("Curso:", aluno.curso);
console.log("Endereço:", aluno.endereco);
