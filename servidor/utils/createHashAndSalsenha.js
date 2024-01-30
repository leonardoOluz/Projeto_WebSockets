import { randomBytes, scryptSync } from "crypto";

function createHashAndSalsenha(senhaCadastrada) {
    const salSenha = randomBytes(16).toString("hex");
    const hashSenha = scryptSync(senhaCadastrada, salSenha, 64).toString("hex");
    return { salSenha, hashSenha };
};

export default createHashAndSalsenha;