import { atualizarDocumento } from "./documento.js";

const socket = io();

function enviarNomeDocumento(nomeDocumento) {
  socket.emit("selecionar_documento", nomeDocumento, (returnTextDoc) => {
    atualizarDocumento(returnTextDoc);
  });
}


function enviarTexto(dados) {
  socket.emit('text_edition', dados);
};

socket.on('text_edition_client', (texto) => {
  atualizarDocumento(texto)
})


export { enviarTexto, enviarNomeDocumento };