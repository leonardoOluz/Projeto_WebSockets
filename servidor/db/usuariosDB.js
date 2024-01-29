import {usuariosColecao} from "./dbConnect.js";

function cadastrarUsuarios({nome, senha}) {
    const resultado = usuariosColecao.insertOne({nome, senha});
    return resultado;    
};

export default cadastrarUsuarios;