/* Import module io in the server */
import "dotenv/config.js"
import io from "./server.js";
import cadastroDeUsuario from "./registrarEventos/cadastro.js";
import registrarEventosDocumentos from "./registrarEventos/documentos.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import checkLoginUsuario from "./registrarEventos/login.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

/* nameSpace */
const nspUsuarios = io.of("/usuarios");

/* middlwears autorizarUsuario */
nspUsuarios.use(autorizarUsuario);

nspUsuarios.on("connection", (socket) => {
    registrarEventosInicio(socket, nspUsuarios);
    registrarEventosDocumentos(socket, nspUsuarios);
});

/* Connection with document.html */
io.on("connection", (socket) => {
    cadastroDeUsuario(socket, io);
    checkLoginUsuario(socket, io);
});