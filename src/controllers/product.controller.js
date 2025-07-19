import { deleteProductFromBD, getAllProducts, getOneProduct, modifyProduct, saveProduct } from "../services/product.service.js";

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
    };

    static async addProduct(req, res){
        try{
            const {nombre, precio, cantidad} = req.body;

            if(!nombre || !precio || !cantidad){
                res.status(400).json({ message: "Tanto el nombre como el precio y cantidad son obligatorios" })
                return;
            }

            const producto = await saveProduct(nombre, precio, cantidad);

            if(!producto){
                res.status(400).json({ message: "Ya existe un producto con ese nombre"})
                return;
            }

            res.status(201).json({ message: "Producto creado correctamente", payload: producto })

        }catch(error){
            res.status(500).json({ message: "Error al crear el producto", log: error.message })
        }
    }

    static async updateProduct(req, res){
        try{
            const id = req.params.id;

            if(!id){
                res.status(400).json({ message: "El id del producto es necesario" })
                return;
            }

            const { nombre, precio, cantidad } = req.body;

            if(!nombre || !precio || !cantidad){
                res.status(400).json({ message: "Tanto el nombre como el precio y cantidad son obligatorios" })
                return;
            }

            const productUpdated = await modifyProduct(id, nombre, precio, cantidad)

            if(!productUpdated){
                res.status(404).json({ message: "No se encontró producto con ese ID: " + id })
                return;
            }

            res.status(200).json({ message: "Producto actualizado correctamente", payload: productUpdated })
            
        }catch(error){
            res.status(500).json({ message: "Error al modificar el producto", log: error.message })
        }
    }

    static async deleteProduct(req, res){
        try{
            const id = req.params.id;

            if(!id){
                res.status(404).json({ message: "El id del producto es necesario" })
                return;
            }

            const response = await deleteProductFromBD(id)
            
            if(!response){
                res.status(400).json({ message: "No se encontró producto con ese ID: " + id })
                return;
            }

            res.status(200).json({ message: "Producto eliminado correctamente" })

        }catch(error){
            res.status(500).json({ message: "Error al crear el producto", log: error.message })
        }
    }
}