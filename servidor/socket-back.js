/* Import module io in the server */
import cadastroDeUsuario from "./registrarEventos/cadastro.js";
import registrarEventosDocumentos from "./registrarEventos/documentos.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import checkLoginUsuario from "./registrarEventos/login.js";
import io from "./server.js";

/* Connection with document.html */
io.on("connection", (socket) => {
    registrarEventosInicio(socket, io);
    registrarEventosDocumentos(socket, io);
    cadastroDeUsuario(socket, io);
    checkLoginUsuario(socket, io);
});