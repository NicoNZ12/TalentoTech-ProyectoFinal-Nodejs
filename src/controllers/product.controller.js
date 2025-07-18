import { getAllProducts, getOneProduct } from "../services/product.service.js";

export class ProductController{
    static async getProducts(req, res){
        try{
            const products = await getAllProducts()
            if(!products){
                res.status(404).json({ message: "No se encontraron productos" })
                return;
            }

            res.status(200).json(products)
        }catch(error){
            res.status(500).json({ message: "Error al obtener los productos", log: error.message })
        }
        
    };

    static async getProductById(req, res){
        try{
            const id = req.params.id;

            if(!id){
                res.status(400).json({ message: "El id del producto es necesario" })
                return;
            }

            const product = await getOneProduct(id)

            if(!product){
                res.status(404).json({ message: "No se encontró el producto" })
                return;
            }

            res.status(200).json(product)
        }catch(error){
            res.status(500).json({ message: "Error al obtener el producto", log: error.message })
        }   
    }
}