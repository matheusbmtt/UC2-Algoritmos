let textoDoUsuario = 'Cenouras crescem na terra';

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("Cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


/*
a. Explique o que essa função faz e qual é sua utilidade
Essa Função ela esta retornado o valor que foi atribuido ao parametro e com isso nessa função, ela invoca valor chamado argumento, essa Funcão ela esta fazendo com que a palavra fique Minuscula e vendo se na frase posta na variavel escopo global tem o valor "cenoura". Resultado do console.log(resposta) = TRUE



b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
    i.   `Eu gosto de cenoura` = TRUE
    ii.  `CENOURA é bom pra vista` FALSE
    iii. `Cenouras crescem na terra` FALSE
     */ 

