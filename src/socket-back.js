import io from "./server.js";

/* Connection with document.html */ 
io.on('connection', (socket) => console.log('a user connected', socket.id));