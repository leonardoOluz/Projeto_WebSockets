import verificarLoginUsuario from "./socket-front-login.js";

const form = document.querySelector("[data-login]");
const inputLogin = document.querySelectorAll("[data-registro]");
const avisoSpan = document.querySelectorAll("[data-span]");

inputLogin.forEach((input) => {
    input.addEventListener("click", ()=> {
        ocultarSpan(input.dataset.registro);
    });
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = form["input-usuario"].value;
    const senha = form["input-senha"].value;
    
    verificarLoginUsuario({nome, senha});

});

function ocultarSpan(inputSelecionado){
    avisoSpan.forEach((span) => {
        if (span.dataset.span === inputSelecionado) {
            span.setAttribute("hidden", "hidden");
        };
    });
};

function loginErrado(verificarDado){
    avisoSpan.forEach((span) => {
        if (span.dataset.span === verificarDado) {
            const dado = verificarDado === "senha" ? "sua " + verificarDado : "o nome de usuario";
            span.classList.add("text-danger"); 
            span.innerHTML = `Verifique ${dado} !`;
            span.removeAttribute("hidden");
        };
    });    
};

export default loginErrado;
