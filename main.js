// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

const textoEncriptar = document.querySelector(".texto-encriptar");
const textoEncriptado = document.querySelector(".texto-encriptador");


function botonencriptar () {
    const textencript = encriptar(textoEncriptar.value)
    textoEncriptado.value = textencript;
    textoEncriptado.style.backgroundImage = "none";
    textoEncriptar.value = "";
}


function encriptar (encript) {
    let cambios = [["e", "enter"],["i","imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    encript = encript.toLowerCase();

    for ( let i = 0; i < cambios.length; i++) {
        if(encript.includes(cambios[i][0]))
        encript = encript.replaceAll
        (cambios[i][0],cambios[i][1])
    }
        return encript
}


function botondesencriptar() {
    const textdesencript = desencriptar(textoEncriptar.value)
    textoEncriptado.value = textdesencript;
    textoEncriptar.value = "";
}

function desencriptar (desencript) {
    const cambios = [["e", "enter"],["i","imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    desencript = desencript.toLowerCase();

    for ( let i = 0; i < cambios.length; i++) {
        if(desencript.includes(cambios[i][1]))
        desencript = desencript.replaceAll
        (cambios[i][1],cambios[i][0])
    }
        return desencript
}


function copiar () {
    textoEncriptado.select();
    navigator.clipboard.writeText(textoEncriptado.value);
    textoEncriptado = "";
}