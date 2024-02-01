import jwt from "jsonwebtoken";

function autorizarUsuario(socket, next) {
    const tokenJwt = socket.handshake.auth.token;
    console.log(tokenJwt);
    try {
        jwt.verify(tokenJwt, process.env.KEY);
        next();
    } catch (error) {
        next(error);
    }
};

export default autorizarUsuario;