
let = idade = 17
if (idade >= 18) {
    console.log('Você é de maior!')
} else {
    console.log("Você é de menor!")
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual a sua idade?", (idade) =>{
    //Exibindo a idade Inserida pelo usuário
    console.log("Sua idade é:", idade);
    rl.close();
});



