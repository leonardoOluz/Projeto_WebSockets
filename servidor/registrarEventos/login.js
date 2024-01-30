import { encontrarUsuario } from "../db/usuariosDB.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";

function checkLoginUsuario(socket, io){
    socket.on("verificar_login", async ({nome, senha}) => {
        const usuario = await encontrarUsuario(nome);
        if (usuario) {
            const autenticacao = autenticarUsuario(senha, usuario);
            if (autenticacao) {
                socket.emit("autenticado_sucesso");                
            } else {
                socket.emit("falha_autenticacao", "senha");
            };
        } else {
            socket.emit("usuario_inexistente", "usuario");
        };
    });
};

export default checkLoginUsuario;