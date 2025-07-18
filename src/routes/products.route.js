import { Router } from "express";

const router = Router()

router.get("/");
router.get("/:id");
router.post("/create");
router.put("/:id");
router.delete("/:id")

export default router