import { generateToken } from "../utils/generateToken.js";
import { getUserByEmail } from "../models/user.model.js";
import { isValidEmail } from "../services/user.service.js";

export class Auth{
    static async login(req, res){
        try{
            const {email, password} = req.body;

            if(!email || !password){
                res.status(400).json({ message: "El email y la contraseña son obligatorios" })
                return;
            }

            if(!isValidEmail(email)){
                res.status(400).json({ message: "Email no válido" })
                return;
            }

            const user = await getUserByEmail(email);

            if(!user){
                res.status(400).json({ message: "El correo no está asociado a ningún usuario" })
                return;
            }

            if(user && user.password !== password){
                res.status(400).json({ message: "Contraseña incorrecta" })
                return;
            }

            const token = generateToken(user)
            res.status(200).json({token: token, user: {username: user.username, email: user.email}})


        }catch(error){
            res.status(500).json({ message: "Error al hacer el login", log: error.message })
        }
    }
}