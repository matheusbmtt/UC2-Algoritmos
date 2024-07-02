/*d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.*/

function escrita(string){
    const escrita = (`E ai sor ${string}`)
    console.log(escrita.toLocaleUpperCase())
}

escrita("Qual vai ser do fifa?")
