import {scryptSync, timingSafeEqual,} from "crypto";

function autenticarUsuario(senhaDigitada, usuario){
    const hashDigitado = scryptSync(senhaDigitada, usuario.salSenha, 64);
    const hashUsuarioBuffer = Buffer.from(usuario.hashSenha, "hex");
    const safeEqual = timingSafeEqual(hashDigitado, hashUsuarioBuffer);
    return safeEqual;
};

export default autenticarUsuario;