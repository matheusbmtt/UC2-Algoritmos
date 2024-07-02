// 2. Mostrar os números pares de 1 a 10: Utilize um loop for para imprimir apenas os números pares de 1 a 10 no console.

const numeros = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i <= numeros.length;  i++){ // ELE TEM A FUNÇAO DE PERCORRER 
    if (i % 2 === 0){
        console.log(i)
    }
} 