import { MongoClient } from "mongodb";

const DB = process.env.DB; 
const PASS = process.env.PASS;

let documentosColecao, usuariosColecao ;

const cliente = new MongoClient(`mongodb+srv://${DB}:${PASS}@projetowebsocket.jv06y41.mongodb.net/?retryWrites=true&w=majority`);

try {
    await cliente.connect();

    const db = cliente.db("projetoWebSocket");
    
    documentosColecao = db.collection("documentos");
    usuariosColecao = db.collection("usuarios");

    console.log('Connect with db')

} catch (error) {
    console.log(error)
}

export { documentosColecao, usuariosColecao };