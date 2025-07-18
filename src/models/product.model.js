import db from "../db/config.js";
import { collection, getDoc, getDocs, addDoc, deleteDoc, updateDoc, doc, query, where } from "firebase/firestore";

export class Product{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    };

    toJSON() {
        return {
            nombre: this.nombre,
            precio: this.precio,
            cantidad: this.cantidad
        };
    }
}

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

export const getProductByName = async(nombre) => {
    try{
        const productsRef = await collection(db, "products")
        const q = query(productsRef, where("nombre", "==", nombre));
        const products = await getDocs(q);

        if (products.empty) {
            return null; 
        }

        // Obtenemos solo el docuemento que buscamos por nombre
        const product = products.docs[0];
        return { id: product.id, ...product.data() };

    }catch(error){
        console.error("Error al obtener el producto:", error.message);
        throw error;
    }
}

export const createProduct = async(product) => {
    try{
        const newProduct = await addDoc(productsCollection, product.toJSON())
        return {id: newProduct.id, ...product.toJSON()}

    }catch(error){
        console.error("Error al crear el producto:", error.message);
        throw error;
    }
}

export const updateProduct = async(id, product) => {
    try{
        const docRef = doc(productsCollection, id);
        await updateDoc(docRef, product.toJSON());
        return { id: docRef.id, ...product.toJSON() };

    }catch(error){
        console.error("Error al actualizar el producto:", error.message);
        throw error;
    }
}

export const deleteProduct = async(id) => {
    try{
        await deleteDoc(doc(productsCollection, id))

    }catch(error){
        console.error("Error al eliminar el producto:", error.message);
        throw error;
    }
}