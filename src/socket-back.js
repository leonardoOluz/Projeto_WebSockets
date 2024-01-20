/* Import module io in the server */
import io from "./server.js";

/* Connection with document.html */
io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on('text_edition', (texto) => {
        socket.broadcast.emit('text_edition_client', texto);
    });
}

);