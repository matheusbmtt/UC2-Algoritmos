
const readlineSync = require('readline-sync');
let resposta1 = readlineSync.question("Insira a primeira resposta (true ou false): ");
let resposta2 = readlineSync.question("Insira a segunda resposta (true ou false): ");
resposta1 = resposta1.toLowerCase() === 'true';
resposta2 = resposta2.toLowerCase() === 'true';

console.log("Resposta 1:", resposta1);
console.log("Resposta 2:", resposta2);
console.log("Resposta 1 AND Resposta 2:", resposta1 && resposta2);
console.log("Resposta 1 OR Resposta 2:", resposta1 || resposta2);
console.log("NOT Resposta 1:", !resposta1);
console.log("NOT Resposta 2:", !resposta2);
