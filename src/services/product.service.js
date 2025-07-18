import { getProducts, getProductById, Product, createProduct, deleteProduct, updateProduct, getProductByName } from "../models/product.model.js";

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

export async function saveProduct(nombre, precio, cantidad){
    try{
        const checkIfProductExists = await getProductByName(nombre);

        if(checkIfProductExists){
            return false
        }

        const newProduct = new Product(nombre, precio, cantidad)

        const saveProduct = await createProduct(newProduct);
        return saveProduct;
        
    }catch(error){
        console.error("Error al crear el producto:", error.message);
        throw error;
    }
}

export async function modifyProduct(id, nombre, precio, cantidad) {
    try{
        const checkIfProductExists = await getOneProduct(id);

        if(!checkIfProductExists){
            return false
        }

        const product = new Product(nombre, precio, cantidad)

        const updatedproduct = await updateProduct(id, product);

        return updatedproduct;

    }catch(error){
        console.error("Error al crear el producto:", error.message);
        throw error;
    }
    
}

export async function deleteProductFromBD(id){
    try{
        const checkIfProductExists = await getOneProduct(id);

        if(!checkIfProductExists){
            return false
        }

        await deleteProduct(id)
        return true;

    }catch(error){
        console.error("Error al eliminar el producto:", error.message);
        throw error;
    }
}