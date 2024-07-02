//  Mostrar os números pares de 1 a 20, mas pular os múltiplos de 3: Utilize um loop for para imprimir os números pares de 1 a 20 no console, mas pule os números que são múltiplos de 3.


for(let i = 0; i <= 20; i++){
    if(i % 2 === 0 && i % 3 != 0  ){ 
        // Se o resto da divisão de um indice por 3 NÃO for 0, entao o numero não é multiplo de 3, enta no terminal ira pular os multiplos por 3  , se eu quiser que apareça os que SÃO multiplos de 3:  { i % 3 === 0}
        console.log(i)
    }
}

