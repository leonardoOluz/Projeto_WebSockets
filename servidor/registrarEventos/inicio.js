import { createNewDocDB, selecionarDocumento, solicitarArrayDoc } from "../db/documentsDB.js";

function registrarEventosInicio(socket, io) {
    
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
};

export default registrarEventosInicio;