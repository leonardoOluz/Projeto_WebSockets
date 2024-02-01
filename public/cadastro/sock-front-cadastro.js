import { definerCookie } from "../utils/cookies.js";
import usuarioExistente from "./cadastrar.js";

const socket = io();

function enviarCadastro(dados) {
    socket.emit("cadastrar_usuario", dados);
};

socket.on("cadastro_sucesso", (token) => {
    definerCookie("tokenJwt", token);
    alert("Cadastro realizado com sucesso!");
    window.location.href = "/";
});

socket.on("cadastro_erro", () => alert("Erro ao cadastrar!"));
socket.on("usuario_existente", (nome) => {
    console.log("cadastro existente");
    usuarioExistente(nome);
});

export default enviarCadastro;