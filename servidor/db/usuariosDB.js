import createHashAndSalsenha from "../utils/createHashAndSalsenha.js";
import { usuariosColecao } from "./dbConnect.js";

function encontrarUsuario(nome) {
    const resultado = usuariosColecao.findOne({ nome });
    return resultado;
};

function cadastrarUsuarios({ nome, senha }) {

    const { salSenha, hashSenha } = createHashAndSalsenha(senha);

    const resultado = usuariosColecao.insertOne({ nome, salSenha, hashSenha });

    return resultado;
};

export { cadastrarUsuarios, encontrarUsuario };