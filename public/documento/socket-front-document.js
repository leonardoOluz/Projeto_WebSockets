import { obterCookie } from "../utils/cookies.js";
import { atualizarDocExcluido, atualizarDocumento } from "./documento.js";

const socket = io("/usuarios", {
  auth: {
    token: obterCookie("tokenJwt"),
  },
});

socket.on(("connect_error"), (error) => {
  alert(error);
  window.location.href = "./login/index.html";
});

function enviarNomeDocumento(nomeDocumento) {
  socket.emit("selecionar_documento", nomeDocumento, (returnTextDoc) => {
    atualizarDocumento(returnTextDoc);
  });
};

function enviarTexto(dados) {
  socket.emit('text_edition', dados);
};

function excluirDocument(nomeDocumento) {
  socket.emit("excluir_doc", nomeDocumento)
};

socket.on('text_edition_client', (texto) => {
  atualizarDocumento(texto)
});

socket.on("atualizar_exluido_sucesso", (nomeDocumento) => {
  atualizarDocExcluido(nomeDocumento)
});


export { enviarTexto, enviarNomeDocumento, excluirDocument };