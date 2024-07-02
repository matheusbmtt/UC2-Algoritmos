const respostaDoUsuario = "90"
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) 
{ console.log("Passou no teste.") } 
else { console.log("Não passou no teste.") }

/*a) Explique o que o código faz. Qual o teste que ele realiza?  
ele primeiro o valor é colocado como uma string, logo em seguida a variavel troca o tipo do valor para Number, e o codigo ele faz a seguinte condição. Se 90 por divisivel por 2 e igual a 0, o codigo executado sera "Passou no teste", Se não vai rodar o codigo "Não passou no teste"

b) Para que tipos de números ele imprime no console "Passou no teste"?  0

c) Para que tipos de números a mensagem é "Não passou no teste"?  1 */