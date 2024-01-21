import { enviarNomeDocumento, enviarTexto } from "./socket-front-document.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const textEditor = document.getElementById('editor-texto');
const titulo = document.querySelector('#titulo-documento');

titulo.textContent = nomeDocumento || "Documento sem título";

enviarNomeDocumento(nomeDocumento);

textEditor.addEventListener("keyup", () => {
    enviarTexto({
        texto: textEditor.value, 
        nomeDocumento,
    });
});


function atualizarDocumento(texto) {
    textEditor.innerText = texto;
}


export { atualizarDocumento };