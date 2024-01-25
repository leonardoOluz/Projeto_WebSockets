import { documentosColecao } from "./dbConnect.js";

function solicitarArrayDoc() {
    const listaArrayDoc = documentosColecao.find().toArray();
    return listaArrayDoc
}

function selecionarDocumento(nome) {
    const documento = documentosColecao.findOne({
        nome
    })
    return documento;
};

function createNewDocDB(newDocuments) {
    const result = documentosColecao.insertOne({
        nome: newDocuments,
        texto: ""
    });

    return result;
}

function salvarDocumento(texto, nomeDocumento) {
    const docAtualizado = documentosColecao.updateOne(
        { nome: nomeDocumento }, {
        $set: {
            texto
        }
    });

    return docAtualizado;
};

function excluirDocumentDB(nome){
    const result = documentosColecao.deleteOne({
        nome
    });

    return result;
}

export {
    solicitarArrayDoc,
    selecionarDocumento,
    createNewDocDB,
    salvarDocumento,
    excluirDocumentDB
};