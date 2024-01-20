import { atualizarDocumento } from "./documento.js";

const socket = io();

function enviarTexto(texto){
    socket.emit('text_edition', texto);
};

socket.on('text_edition_client', (texto) => {
  atualizarDocumento(texto)  
})


export {enviarTexto};