// A) Função para calcular a área de um quadrado
function calcularAreaQuadrado(lado) {
    return lado * lado;
}

// B) Função para calcular a área de um retângulo
function calcularAreaRetangulo(base, altura) {
    return base * altura;
}

// C) Função para calcular a área de um triângulo
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

let ladoQuadrado = 5;
let baseRetangulo = 4;
let alturaRetangulo = 6;
let baseTriangulo = 3;
let alturaTriangulo = 8;

console.log("Área do quadrado com lado", ladoQuadrado, "é", calcularAreaQuadrado(ladoQuadrado));
console.log("Área do retângulo com base", baseRetangulo, "e altura", alturaRetangulo, "é", calcularAreaRetangulo(baseRetangulo, alturaRetangulo));
console.log("Área do triângulo com base", baseTriangulo, "e altura", alturaTriangulo, "é", calcularAreaTriangulo(baseTriangulo, alturaTriangulo));
