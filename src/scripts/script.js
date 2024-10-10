const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');

inputEmail.addEventListener('focus', function() {
    this.placeholder = '';  
});

inputPassword.addEventListener('focus', function() {
    this.placeholder = '';  
});

inputEmail.addEventListener('blur', function() {
    this.placeholder = 'Digite seu nomexemplo@gmail.com';
});

inputPassword.addEventListener('blur', function() {
    this.placeholder = '0123456';
});

document.querySelector('.google-login-btn').addEventListener('click', function() {
    window.location.href = 'https://www.google.com'; 
});

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

