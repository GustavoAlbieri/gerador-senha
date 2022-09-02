let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.getElementById("valor");
let password = document.getElementById("password");

let containerPassword = document.querySelector("#container-password");

let charset = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789.!@#$%&*";
let novasenha = "";

sizePassword.innerHTML= sliderElement.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}
function gerar() {

    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novasenha = pass;

}

function copiar() {
    navigator.clipboard.writeText(novasenha);
    alert("Senha copiada com sucesso!");
}

