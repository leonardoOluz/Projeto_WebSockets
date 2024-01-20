import { enviarTexto } from "./socket-front-document.js";

const textEditor = document.getElementById('editor-texto');

textEditor.addEventListener('keyup', () => {
    enviarTexto(textEditor.value);
})

function atualizarDocumento(texto){
    textEditor.innerText = texto;
}


export {atualizarDocumento};