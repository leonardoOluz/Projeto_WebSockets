const socket = io();

function enviarCadastro(dados) {
    socket.emit("cadastrar_usuario", dados);
};

socket.on("cadastro_sucesso", () => alert("Cadastro realizado com sucesso!"));
socket.on("cadastro_erro", () => alert("Erro ao cadastrar!"));

export default enviarCadastro;