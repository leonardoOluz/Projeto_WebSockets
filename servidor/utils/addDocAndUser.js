const conexaoUserAndDoc = [];

function checkarUserInDoc(nomeDocumento, nomeUsuario) {
    return conexaoUserAndDoc.find((conexao) =>
        conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario
    );
};

function userAndDocLogin(conexao) {
    conexaoUserAndDoc.push(conexao);
};

function checkUserforDoc(nomeDocumento) {
    return conexaoUserAndDoc
        .filter((conexao) => conexao.nomeDocumento.includes(nomeDocumento))
        .map((objDocUser) => objDocUser.nomeUsuario);
};

function removeUserDoc(nomeDocumento, nomeUsuario) {
    const indice = conexaoUserAndDoc.findIndex((conexao) => {
        return conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario;
    });

    if (indice != -1) {
        conexaoUserAndDoc.splice(indice, 1);
    };
};

export { checkarUserInDoc, userAndDocLogin, checkUserforDoc, removeUserDoc };