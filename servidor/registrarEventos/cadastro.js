import { cadastrarUsuarios, encontrarUsuario } from "../db/usuariosDB.js";

function cadastroDeUsuario(socket, io) {
    socket.on("cadastrar_usuario", async (dados) => {

        const pesquisaUsuario = await encontrarUsuario(dados.nome)

        if (pesquisaUsuario === null) {
            const resultado = await cadastrarUsuarios(dados);
            if (resultado.acknowledged) {
                socket.emit("cadastro_sucesso");
            } else {
                socket.emit("cadastro_erro");
            };
        } else {
            socket.emit("usuario_existente", dados.nome);
        };
    });
};

export default cadastroDeUsuario;