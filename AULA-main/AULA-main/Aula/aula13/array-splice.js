// ELE REMOVE APARTIR DO INDICE QUE EU COLOCAR TIPO.
const letras = ["A","B","C","D","E","F","G","H"]
      //INDICES  0   1   2   3   4   5   6   7
letras.splice(2,1)
// Letras "A","B","D","E","F","G","H"
// letra "C" Retirada!

letras.splice(3,6)
// letras "A","B","C","D"

console.log(letras)