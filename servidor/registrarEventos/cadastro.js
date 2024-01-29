import cadastrarUsuarios from "../db/usuariosDB.js";

function cadastroDeUsuario(socket, io) {
    socket.on("cadastrar_usuario", async (dados) => {
        const resultado = await cadastrarUsuarios(dados);
        if (resultado.acknowledged) {
            socket.emit("cadastro_sucesso");
        } else {
            socket.emit("cadastro_erro");
        };
    });
};

export default cadastroDeUsuario;