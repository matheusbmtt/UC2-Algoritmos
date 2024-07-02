// eventos de mouse 
document.getElementById("ClicBtn").addEventListener('click', function(){
    alert("click: Adicionado quando um elemento é clicado")});

// evento double CLick
document.getElementById('dblclickBnt').addEventListener('dblclick',function(){
    alert("dblclick: Adicionando um elemento é clicado duas vezes seguidas. ")});

document.getElementById('mousedowBnt').addEventListener('mousedown', function(){
    alert("mousedown: Acionado quando um botão do mouse é pressionado sobre um elemento")
});

//evento quando libera um botão do mouse
document.getElementById('mouseupBnt').addEventListener('mouseup', function(){
    alert("moouseup: Acionado quando o mouse é movido sobre um elemento")
});

//over
document.getElementById('mousemoveBnt').addEventListener('mousemover', function(){
    alert("mousemover: Acionado quando o mouse é movido sobre um elemento")
});

//evento tira o mouse do elemento
document.getElementById('mouseoverBnt').addEventListener('mouseover', function(){
    alert("mouseover: Acionado quando o mouse entra em um elemento")
});

//
document.getElementById('mouseoutBnt').addEventListener('mouseout', function(){
    alert("mouseout: Acionado")
});

//
document.getElementById('contextmenuBnt').addEventListener('contextmenu', function(){
    alert("contextmenu: ")
});


// Eventos teclado

document.getElementById('KeydownBnt').addEventListener('keydown', function(){
    alert("Keydow: Acionado quando uma tecla é pressionada")
});

document.getElementById('KeypressBnt').addEventListener('keypress', function(){
    alert("Keypress: Acionado quando uma tecla é pressionada e liberada")
});

document.getElementById("KeyupBnt").addEventListener('keyup', function(){
    alert("Keyup: Acionado quando uma tecla é liberada")
});


//Evento Janela/Documento

window.addEventListener('load', function(){
    alert("load: Acionado quando a pagian esta prestes a ser descarregada.")
});

window.addEventListener('unload', function(){
    alert("unload: Acionado quando a pagina esta prestes a ser descarregada")
});

window.addEventListener('resize', function(){
    alert("resize: Acionado quando o navegador é redmensionado")
});

window.addEventListener('scroll', function(){
    alert("scroll: Acionado quando o conteudo de um elemento é rolado")
});

//Eventos de Tempo
document.getElementById('setTimeoutBnt').addEventListener('click', function(){
    setTimeout(function(){
        alert("setTimeout: Acionando após um intervalo de tempo especificado");
    }, 2000);
});

document.getElementById('setIntervalBnt').addEventListener('click', function(){
    setInterval(function(){
        alert("setInterval: Acionado quando repetidamente em intervalo de tempo especificados.");
    }, 3000)
});











