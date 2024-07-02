function cliqueNoBotao(){
    const iamgem = document.getElementById("imagem");
    if (iamgem.style.display === "none"){
        iamgem.style.display = "block"; // Tornar a imagem invisivel
    } else {
        iamgem.style.display = "none"; // oculta a imagem se ja estiver visivel
    }
    // alert("Você clicou no botão!!!");
}
document.getElementById("meuBotão").addEventListener("click", cliqueNoBotao);
