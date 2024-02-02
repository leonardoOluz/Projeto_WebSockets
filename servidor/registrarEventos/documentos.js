import { excluirDocumentDB, salvarDocumento, selecionarDocumento } from "../db/documentsDB.js";
import { checkUserforDoc, removeUserDoc, userAndDocLogin } from "../utils/addDocAndUser.js";

function registrarEventosDocumentos(socket, io) {
    socket.on("selecionar_documento", async ({ nomeDocumento, nomeUsuario }, returnTextDoc) => {
        const documento = await selecionarDocumento(nomeDocumento);

        if (documento) {
            socket.join(nomeDocumento);
            
            userAndDocLogin({ nomeDocumento, nomeUsuario });
            
            const arrayUser = checkUserforDoc(nomeDocumento);

            io.to(nomeDocumento).emit("user_in_doc", arrayUser);

            returnTextDoc(documento.texto);
        };

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

        socket.on("disconnect", () => {
            removeUserDoc(nomeDocumento, nomeUsuario);

            const arrayUser = checkUserforDoc(nomeDocumento);

            io.to(nomeDocumento).emit("user_in_doc", arrayUser);
        });

    });
};

export default registrarEventosDocumentos;