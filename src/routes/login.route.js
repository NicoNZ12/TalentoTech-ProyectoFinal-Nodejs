import { Router } from "express";
import { Auth } from "../controllers/auth.controller.js";

const router = Router()

router.post("/login", Auth.login)

export default router