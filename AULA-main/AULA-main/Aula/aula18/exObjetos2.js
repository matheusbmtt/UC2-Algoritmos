//2. Leia o código abaixo
/* a) O que vai ser impresso no console?
    vai copiar o objeto "cachorro"
    vai copiar o objeto "cachorro" e vai trocar o nome "Juca" por "Juba" 
    vai copiar o objeto "cachorro" e A palavra "Juba" vira "jubo"
*/
   // b) O que faz a sintaxe dos três pontos antes do nome de um objeto? ele tem a função de espelhamento 

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)