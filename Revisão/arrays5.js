// A) Criando o array de nomes
let nomes = ["   Paulo ", "tevinho ", "  Pedro  "];

// B) Transformando todos os nomes em letras minúsculas
for (let nome of nomes){
let nomesMinusculos = nomes.push(nome.toLowerCase());
console.log("Nomes em letras minúsculas:", nomesMinusculos);
}
// Alternativa para B sem usar map
let nomesMinusculosSemMap = [];
for (let nome of nomes) {
    nomesMinusculosSemMap.push(nome.toLowerCase());
}
console.log("Nomes em letras minúsculas sem map:", nomesMinusculosSemMap);

// C) Transformando todos os nomes em letras maiúsculas
for (let nome of nomes){
let nomesMaiusculos = nomes.push(nome.toUpperCase());
console.log("Nomes em letras maiúsculas:", nomesMaiusculos);
}

// Alternativa para C sem usar map
let nomesMaiusculosSemMap = [];
for (let nome of nomes) {
    nomesMaiusculosSemMap.push(nome.toUpperCase());
}
console.log("Nomes em letras maiúsculas sem map:", nomesMaiusculosSemMap);

// D) Removendo espaços em branco no início e no final de todos os nomes
for (let nome of nomes) {
let nomesSemEspacos = nomes.push(nome.trim());
console.log("Nomes sem espaços em branco:", nomesSemEspacos);
}

// Alternativa para D sem usar map
let nomesSemEspacosSemMap = [];
for (let nome of nomes) {
    nomesSemEspacosSemMap.push(nome.trim());
}
console.log("Nomes sem espaços em branco sem map:", nomesSemEspacosSemMap);

// E) Verificando se cada nome contém a letra 'a'
for (let nome of nomes) {
let contemA = nomes.map(nome.includes('a'));
console.log("Cada nome contém a letra 'a'?", contemA);
}

// Alternativa para E sem usar map
let contemASemMap = [];
for (let nome of nomes) {
    contemASemMap.push(nome.includes('a'));
}
console.log("Cada nome contém a letra 'a' sem map?", contemASemMap);

// F) Substituindo todas as ocorrências da letra 'a' pelo símbolo '#'
for (let nome of nomes) {
let nomesSubstituidos = nomes.push(nome.replaceAll('a', '#'));
console.log("Nomes com 'a' substituído por '#':", nomesSubstituidos);
}

// Alternativa para F sem usar map
let nomesSubstituidosSemMap = [];
for (let nome of nomes) {
    nomesSubstituidosSemMap.push(nome.replaceAll('a', '#'));
}
console.log("Nomes com 'a' substituído por '#' sem map:", nomesSubstituidosSemMap);
