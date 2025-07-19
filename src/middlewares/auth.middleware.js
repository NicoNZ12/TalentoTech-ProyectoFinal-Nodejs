import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

const jwt_secret = process.env.JWT_SECRET

export const authentication = (req, res, next) => {
    try{
        const token = req.headers["authorization"].split(" ")[1];

        if(!token) {
            res.status(401).json({ message: "Error de autenticación", error: "Acceso denegado, token requerido" })
            return
        }

        if(!jwt_secret) {
            throw new Error("Variable secreta no asignada")
        }

        jwt.verify(token, jwt_secret, (err, decoded) => {
            if(err){
                res.status(403).json({ message: "Error de autenticación", error: "Token inválido o expirado"})
                return;
            }

            req.user = decoded;
            next()
        })

    }catch(error){
        res.status(401).json({ message: "Error de autenticación", error: "Token inválido o expirado" })
    }
    
}