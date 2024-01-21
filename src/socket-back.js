/* Import module io in the server */
import io from "./server.js";

let documentos = [
    {
        nome: "JavaScript",
        documentos: "Documento de JavaScript..."
    },
    {
        nome: "Node",
        documentos: "Documento de Node..."
    },
    {
        nome: "Socket.io",
        documentos: "Documento de Socket.io..."
    },
]


/* Connection with document.html */
io.on('connection', (socket) => {

    console.log('a user connected', socket.id);

    socket.on("selecionar_documento", (nomeDocumento, returnTextDoc) => {
        socket.join(nomeDocumento);
        
        const documento = selecionarDocumento(nomeDocumento);
        
        if (documento) {
            returnTextDoc(documento.documentos);
        }
        
    })

    socket.on('text_edition', ({ texto, nomeDocumento }) => {
        const documento = selecionarDocumento(nomeDocumento);
        if (documento) {
            socket.to(nomeDocumento).emit('text_edition_client', texto);
        }
    });

});

function selecionarDocumento(nomeDocumento){
    let documento = documentos.find((documento) => {
        return documento.nome.includes(nomeDocumento);
    });
    return documento;
};