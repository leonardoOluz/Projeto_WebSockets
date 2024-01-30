import loginErrado from "./login.js";

const socket = io();

function verificarLoginUsuario(dados){
    socket.emit("verificar_login", dados);
};

socket.on("autenticado_sucesso", () => {
    alert("Autenticado com sucesso");
    window.location.href = "/";
});

socket.on("falha_autenticacao", (dado) => {
    loginErrado(dado);
});

socket.on("usuario_inexistente", (dado) => {
    loginErrado(dado);
});

export default verificarLoginUsuario;