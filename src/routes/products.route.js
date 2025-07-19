import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";
import { authentication } from "../middlewares/auth.middleware.js";

const router = Router()

router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProductById);
router.post("/create", authentication, ProductController.addProduct);
router.put("/:id", authentication, ProductController.updateProduct);
router.delete("/:id", authentication, ProductController.deleteProduct)

export default router