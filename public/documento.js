import { enviarNomeDocumento, enviarTexto, excluirDocument } from "./socket-front-document.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");
const btnExcluir = document.getElementById("excluir-documento");
const textEditor = document.getElementById("editor-texto");
const titulo = document.querySelector("#titulo-documento");

titulo.textContent = nomeDocumento || "Documento sem título";

enviarNomeDocumento(nomeDocumento);

btnExcluir.addEventListener("click", () => {
    excluirDocument(nomeDocumento)
});

textEditor.addEventListener("keyup", () => {
    enviarTexto({
        texto: textEditor.value, 
        nomeDocumento,
    });
});

function atualizarDocumento(texto) {
    textEditor.value = texto;
};

function atualizarDocExcluido(nome){
    if (nome === nomeDocumento) {
        window.location.href = "/";        
    };
};


export { atualizarDocumento, atualizarDocExcluido };