/* Import module io in the server */
import {
    createNewDocDB,
    excluirDocumentDB,
    salvarDocumento,
    selecionarDocumento,
    solicitarArrayDoc
} from "./documentsDB.js";
import io from "./server.js";

/* Connection with document.html */
io.on("connection", (socket) => {

    socket.on("solicitar_doc", async (listaDoc) => {
        const arrayDocName = await solicitarArrayDoc();
        listaDoc(arrayDocName);
    });

    socket.on("new_documents", async (newDocuments) => {

        const docExistente = (await selecionarDocumento(newDocuments)) !== null;

        if (docExistente) {
            socket.emit("doc_exitente", newDocuments);
        } else {
            const result = await createNewDocDB(newDocuments);

            if (result.acknowledged) {
                io.emit("list_update", newDocuments);
            };
        };
    });

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

});