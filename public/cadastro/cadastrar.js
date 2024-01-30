import enviarCadastro from "./sock-front-cadastro.js";

const form = document.querySelector("[data-cadastrar]");
const usuarioSpan = document.querySelector("[data-existente]");
const nome = document.querySelector("[data-usuario]");

nome.addEventListener("click", () => {
    usuarioSpan.setAttribute("hidden", "hidden");
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = form["input-usuario"].value;
    const senha = form["input-senha"].value;
    enviarCadastro({nome, senha});
});

function usuarioExistente(nome){
    usuarioSpan.classList.add("text-danger");
    usuarioSpan.innerHTML = `Usuario <b>${nome}</b> já registrado!`;
    usuarioSpan.removeAttribute("hidden");
};

export default usuarioExistente;