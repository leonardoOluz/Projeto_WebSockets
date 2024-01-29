import enviarCadastro from "./sock-front-cadastro.js";

const form = document.querySelector("[data-cadastrar]");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = form["input-usuario"].value;
    const senha = form["input-senha"].value;
    enviarCadastro({nome, senha});
})