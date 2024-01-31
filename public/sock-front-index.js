import { checkNewDoc, listNameDoc, updateDocSucessoful } from "./index.js";

const socket = io();

socket.emit("solicitar_doc", (listaDoc) => {
    listaDoc.forEach((document) => {
        listNameDoc(document.nome);
    });
});

function adicionarNewDoc(newDocuments) {
    socket.emit("new_documents", newDocuments);
};

socket.on("list_update", (newDoc) => {
    listNameDoc(newDoc);
});

socket.on("doc_exitente", (nome) => {
    checkNewDoc(nome);
});

socket.on("atualizar_exluido_sucesso", (nomeDocumento) => {
    updateDocSucessoful(nomeDocumento);
});

export { adicionarNewDoc };