// 5. Calcular a média de 5 números: Utilize um loop for para ler 5 números do usuário e calcular a média dos números digitados. Mostre a média no console.
const numeros = [17,50,72,41,88]


let media = 0

for(let i = 0; i < numeros.length; i ++){
    media = media + numeros[i] 
}

console.log(media )
let media1 = media / 5
console.log(`A Media dos numeros são: ${media1}`)


