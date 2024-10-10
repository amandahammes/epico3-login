function esconderElemento() {
    var larguraTela = window.innerWidth;
    var elemento = document.getElementById("espaco-logo");

    if (larguraTela < 824) {
        elemento.style.display = "none"; 
    } else {
        elemento.style.display = "flex";
    }
}

window.onload = esconderElemento;
window.onresize = esconderElemento;

