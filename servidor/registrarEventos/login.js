import { encontrarUsuario } from "../db/usuariosDB.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";
import gerarJwt from "../utils/gerarJwt.js";

function checkLoginUsuario(socket, io){
    socket.on("verificar_login", async ({nome, senha}) => {
        const usuario = await encontrarUsuario(nome);
        if (usuario) {
            const autenticacao = autenticarUsuario(senha, usuario);
            if (autenticacao) {
                const tokenJwt = gerarJwt({nomeUsuario: nome});
                socket.emit("autenticado_sucesso", tokenJwt);                
            } else {
                socket.emit("falha_autenticacao", "senha");
            };
        } else {
            socket.emit("usuario_inexistente", "usuario");
        };
    });
};

export default checkLoginUsuario;