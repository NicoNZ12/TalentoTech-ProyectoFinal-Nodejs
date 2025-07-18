import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";

const router = Router()

router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProductById);
// router.post("/create");
// router.put("/:id");
// router.delete("/:id")

export default router