import { cadastrarUsuarios, encontrarUsuario } from "../db/usuariosDB.js";
import gerarJwt from "../utils/gerarJwt.js";

function cadastroDeUsuario(socket, io) {
    socket.on("cadastrar_usuario", async (dados) => {

        const pesquisaUsuario = await encontrarUsuario(dados.nome)

        if (pesquisaUsuario === null) {
            const resultado = await cadastrarUsuarios(dados);
            if (resultado.acknowledged) {
                const token = gerarJwt({nomeUsuario: dados.nome});
                socket.emit("cadastro_sucesso", token);
            } else {
                socket.emit("cadastro_erro");
            };
        } else {
            socket.emit("usuario_existente", dados.nome);
        };
    });
};

export default cadastroDeUsuario;