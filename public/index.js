import { adicionarNewDoc } from "./sock-front-index.js";

const form = document.getElementById("form-adiciona-documento");
const inputFormulario = document.getElementById("input-documento");
const containerDoc = document.getElementById("lista-documentos");
const spanAlert = document.querySelector("[data-alert]");

function listNameDoc(nomeDocumento) {
  containerDoc.innerHTML += `
    <a href="./documento/index.html?nome=${nomeDocumento}" class="list-group-item list-group-item-action" id="documents-${nomeDocumento}">
        ${nomeDocumento}
      </a>
    `
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  adicionarNewDoc(inputFormulario.value);
  inputFormulario.value = '';
});

inputFormulario.addEventListener("click", () => {
  spanAlert.setAttribute("hidden", "hidden");
});

function updateDocSucessoful(nome) {

  const docChild = document.getElementById(`documents-${nome}`);

  containerDoc.removeChild(docChild);

};

function checkNewDoc(nome) {
  spanAlert.classList.add("text-danger");
  spanAlert.innerHTML = `O documento de nome <b>${nome}</b> já existe!`;
  spanAlert.removeAttribute("hidden")
};




export { listNameDoc, checkNewDoc, updateDocSucessoful };