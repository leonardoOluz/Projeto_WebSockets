import { enviarNomeDocumento, enviarTexto, excluirDocument } from "./socket-front-document.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");
const btnExcluir = document.getElementById("excluir-documento");
const textEditor = document.getElementById("editor-texto");
const titulo = document.querySelector("#titulo-documento");
const ulUserLogado = document.getElementById("usuarios-conectados");

titulo.textContent = nomeDocumento || "Documento sem título";

function tratarAutorizacaoSucesso(payloadToken) {
    enviarNomeDocumento({ nomeDocumento, nomeUsuario: payloadToken.nomeUsuario });
};

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

function atualizarDocExcluido(nome) {
    if (nome === nomeDocumento) {
        window.location.href = "/";
    };
};

function showLoginPerson(arrayUser) {
    console.log(arrayUser);
    ulUserLogado.innerHTML = "";
    

    arrayUser.forEach((user) => {
        ulUserLogado.innerHTML += `
    <li class="list-group-item">${user}</li>
    `
    });
};


export { atualizarDocumento, atualizarDocExcluido, tratarAutorizacaoSucesso, showLoginPerson };