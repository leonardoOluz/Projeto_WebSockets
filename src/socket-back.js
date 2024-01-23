/* Import module io in the server */
import io from "./server.js";

const documentos = [
    {
        nome: "JavaScript",
        texto: "Documento de JavaScript..."
    },
    {
        nome: "Node",
        texto: "Documento de Node..."
    },
    {
        nome: "Socket.io",
        texto: "Documento de Socket.io..."
    },
]


/* Connection with document.html */
io.on('connection', (socket) => {

    console.log('a user connected', socket.id);

    socket.on("selecionar_documento", (nomeDocumento, returnTextDoc) => {
        socket.join(nomeDocumento);
        
        const documento = selecionarDocumento(nomeDocumento);
        
        if (documento) {
            returnTextDoc(documento.texto);
        }
        
    })

    socket.on('text_edition', ({ texto, nomeDocumento }) => {
        const documento = selecionarDocumento(nomeDocumento);
        
        if (documento) {
            documento.texto = texto;
            socket.to(nomeDocumento).emit('text_edition_client', texto);
        }
    });

});

function selecionarDocumento(nomeDocumento){
    const documento = documentos.find((documento) => {
        return documento.nome.includes(nomeDocumento);
    });
    return documento;
};