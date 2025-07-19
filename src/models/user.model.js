import db from "../db/config.js";
import { collection, getDocs, addDoc, query, where} from "firebase/firestore";

export class User{
    constructor(username, email, password){
        this.username = username
        this.email = email;
        this.password = password
    };

    toJSON(){
        return {
            username: this.username,
            email: this.email,
            password: this.password
        }
    }
}

const userCollection = collection(db, 'users');

export const createUser = async(user) => {
    try{
        const newUser = await addDoc(userCollection, user.toJSON())
        return {id: newUser.id, ...user.toJSON()}

    }catch(error){
        console.error("Error al crear el usuario:", error.message);
        throw error;
    }
}

export const getUserByEmail = async(email) => {
    try{
        const usersRef = await collection(db, "users")
        const q = query(usersRef, where("email", "==", email));
        const users = await getDocs(q);

        if (users.empty) {
            return null; 
        }

        // Obtenemos solo el docuemento que buscamos por nombre
        const user = users.docs[0];
        return { id: user.id, ...user.data() };

    }catch(error){
        console.error("Error al obtener el producto:", error.message);
        throw error;
    }
}