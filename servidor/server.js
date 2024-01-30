/* Import modulos */
import express from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';
import "./db/dbConnect.js";

/* Constantes */
const app = express();
const server = http.createServer(app);
const serverHttp2 = http.createServer(app);

const io = new Server(serverHttp2, {
    cors: {
        origin: "http://localhost:3000"
    }
});
const PORT = process.env.PORT || 3000;

/* Path to server public */
const pathAtual =  url.fileURLToPath(import.meta.url);
const directPublic = path.join(pathAtual, "../..", "public");
app.use(express.static(directPublic));

/* Listening to port server */
server.listen(PORT, () => console.log(`Listening one on :${PORT}`));

serverHttp2.listen(5000, () => console.log("Listening two on :5000"));

/* export do modulo io */
export default io;
