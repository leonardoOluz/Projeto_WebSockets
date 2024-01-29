import { excluirDocumentDB, salvarDocumento, selecionarDocumento } from "../db/documentsDB.js";

function registrarEventosDocumentos(socket, io){

    socket.on("selecionar_documento", async (nomeDocumento, returnTextDoc) => {
        socket.join(nomeDocumento);

        const documento = await selecionarDocumento(nomeDocumento);

        if (documento) {
            returnTextDoc(documento.texto);
        };

    });

    socket.on("text_edition", async ({ texto, nomeDocumento }) => {
        const docAtualizado = await salvarDocumento(texto, nomeDocumento);

        if (docAtualizado.modifiedCount) {
            socket.to(nomeDocumento).emit('text_edition_client', texto);
        }
    });

    socket.on("excluir_doc", async (nomeDocumento) => {
        const result = await excluirDocumentDB(nomeDocumento);
        if (result.deletedCount) {
            io.emit("atualizar_exluido_sucesso", nomeDocumento);
        };
    });

};

export default registrarEventosDocumentos;