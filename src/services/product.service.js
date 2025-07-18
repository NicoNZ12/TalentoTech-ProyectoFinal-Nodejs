import { getProducts, getProductById } from "../models/product.model.js";

export async function getAllProducts(){
    try{
        const products = await getProducts();
        if(products.length === 0){
            return false;
        }
        return products
    }catch(error){
        console.error("Error al obtener los productos:", error.message);
        throw error;
    }
}

export async function getOneProduct(id) {
    try{
        const product = await getProductById(id);

        if(!product){
            return false;
        }

        return product

    }catch(error){
        console.error("Error al obtener el producto:", error.message);
        throw error;
    }
    
}