//Variables
const input = document.getElementById('input');
const mensaje = document.getElementById('mensaje');
const encriptarBtn = document.getElementById('encriptar');
const desencriptarBtn = document.getElementById('desencriptar');
const copiarBtn = document.getElementById('copiar');

//Llaves de encriptación
const llavesEncriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encriptar() {
    let texto = input.value.toLowerCase();
    for (const letra in llavesEncriptacion) {
        texto = texto.replaceAll(letra, llavesEncriptacion[letra]);
    }

    mensaje.value = texto;
}

function desencriptar() {
    let texto = input.value;

    for (const letra in llavesEncriptacion) {
        texto = texto.replaceAll(llavesEncriptacion[letra], letra);
    }

    mensaje.value = texto;
}

function copiar() {
    mensaje.select();
    document.execCommand('copy');
    alert("Texto copiado al portapapeles!");
}

encriptarBtn.addEventListener('click', encriptar);
desencriptarBtn.addEventListener('click', desencriptar);
copiarBtn.addEventListener('click', copiar);