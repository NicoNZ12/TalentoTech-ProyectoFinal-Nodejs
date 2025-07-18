import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";

const router = Router()

router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProductById);
router.post("/create", ProductController.addProduct);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct)

export default router