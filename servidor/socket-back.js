/* Import module io in the server */
import registrarEventosDocumentos from "./registrarEventos/registrarEventosDocumentos.js";
import registrarEventosInicio from "./registrarEventos/registrarEventosInicio.js";
import io from "./server.js";

/* Connection with document.html */
io.on("connection", (socket) => {
    registrarEventosInicio(socket, io);
    registrarEventosDocumentos(socket, io);   
});