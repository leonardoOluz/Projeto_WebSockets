import { MongoClient } from "mongodb";

const  cliente = new MongoClient("mongodb+srv://leonardoluzmro:HBalcasa18@projetowebsocket.jv06y41.mongodb.net/?retryWrites=true&w=majority");

try {
    await cliente.connect();

    const db = cliente.db("projetoWebSocket");
    const documentos = db.collection("documentos");
    console.log('Connect with db')    
} catch (error) {
    console.log(error)
}

