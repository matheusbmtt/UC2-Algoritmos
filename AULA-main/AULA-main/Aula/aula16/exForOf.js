const ArrayDePalavras = ["oi","sumida","tudo","bem?"]
let mensagem = ''


function imprimirMensagem(ARRAY){

    for(let palavara of ARRAY)
    mensagem += palavara + " "
//         OU
//mensagem = mensagem + palavara + " ";
    console.log(mensagem);
}

(imprimirMensagem(ArrayDePalavras));


const frase1 = ["Agora","eu","entendi!"]
let JuntaElas = ''

function imprimirMensagem1(ARRAY){
    for(let mensagem1 of ARRAY)
    JuntaElas += mensagem1  + " "
    console.log(JuntaElas)
}

imprimirMensagem1(frase1)





const Pastores = ["Luiz Herminio","Andre Alves","Jucelio","Jose Rodrigues"]
let Dizimo =''

function igreja(culto){
    for(let Amem of culto)
    Dizimo += Amem + " " + "," 
    console.log(Dizimo);
}
igreja(Pastores);







