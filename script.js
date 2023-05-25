document.getElementById('modo-texto-codificado').style.display = 'none';

  
var textarea = document.querySelector('textarea');
let buttonCripto = document.querySelector('#criptografar');
let buttonDescri= document.querySelector('#descriptografar');
let finalText = document.querySelector('#texto_final');
let buttonCopiar = document.querySelector('#copiar');

function testeVazio (text) {
    return text.replace(/\s/g,'').length;
}

function criptografar () {

    var newText = "";
    var subText = [];

    let tamanho = testeVazio(textarea.value);

    if (tamanho != 0) {

        let text = textarea.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        text = text.toLowerCase();

        for (var i = 0; i < text.length; i++) {
            subText[i] = text[i];
        }

        for(var i = 0; i < subText.length; i++) {
            if (subText[i] == "e") {
                subText [i] = "enter";
            } else if (subText[i] == "i") {
                subText[i] = "imes";
            } else if (subText[i] == "a") {
                subText[i] = "ai";
            } else if (subText[i] == "o") {
                subText[i] = "ober";
            } else if (subText[i] == "u") {
                subText[i] = "ufat";
            }
        }

        for (var i = 0; i < subText.length; i++) {
            newText = newText + subText[i];
        }

        document.getElementById('modo-texto-codificado').style.display = "inline-block";
        document.getElementById('modo-sem-texto').style.display = 'none';

        finalText.textContent = newText;  
        textarea.value = "";    
        
    }

}

function descriptografar () {

    let tamanho = testeVazio(textarea.value);

    if (tamanho != 0) {

        let newText = textarea.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        newText = newText.toLowerCase();
        newText = newText.replace(/ai/gi, "a");
        newText = newText.replace(/enter/gi, "e");
        newText = newText.replace(/ober/gi, "o");
        newText = newText.replace(/imes/gi, "i");
        newText = newText.replace(/ufat/gi, "u");
        finalText.textContent = newText;
        textarea.value = "";

        document.getElementById('modo-texto-codificado').style.display = "inline-block";
        document.getElementById('modo-sem-texto').style.display = 'none';

    }
}

function copiarTexto() {
    const textcopy = finalText.innerHTML;  
    navigator.clipboard.writeText(textcopy);
}

buttonCripto.onclick = criptografar;
buttonDescri.onclick = descriptografar;
buttonCopiar.onclick = copiarTexto;