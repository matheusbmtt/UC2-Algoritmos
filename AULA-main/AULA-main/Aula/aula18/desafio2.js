/* Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo: 
O primeiro filme foi lançado antes do segundo? false
O primeiro filme foi lançado no mesmo ano do segundo? true*/

function filmes(){
    const filme1 = {
        nome: "Velozes e Furiosos",
        anoDeLançamento: 2001,
    }
    const filme2 = {
        nome: "Pica-Pau",
        anoDeLançamento: 2017,
    }
    // Desenvolvendo a logica!
    if (filme1.anoDeLançamento < filme2.anoDeLançamento){
        console.log("O primeiro filme foi lançado antes do segundo?",true,'\n',"O primeiro filme foi lançado no mesmo ano do segundo?", false)
    }
}
filmes()
