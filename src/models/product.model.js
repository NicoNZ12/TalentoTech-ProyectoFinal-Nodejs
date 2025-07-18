import db from "../db/config.js";
import { collection, getDoc, getDocs, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";

const productsCollection = collection(db, 'products');

export const getProducts = async() => {
    try{
        const snapshot = await getDocs(productsCollection)
        const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
        }));
        return products
        
    }catch(error){
        console.error("Error al obtener los productos:", error.message);
        throw error;
    }
    
}

export const getProductById = async(id) => {
    try{
        const product = await getDoc(doc(productsCollection, id))
        return product.data()

    }catch(error){
        console.error("Error al obtener el producto:", error.message);
        throw error;
    }
}