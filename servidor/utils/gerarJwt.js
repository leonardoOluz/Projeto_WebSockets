import jwt from "jsonwebtoken";

function gerarJwt(payLoad){
    const key = process.env.KEY;
    const tokenJwt = jwt.sign(payLoad, key, {
        expiresIn: "1h"
    });

    return tokenJwt;
};

export default gerarJwt;