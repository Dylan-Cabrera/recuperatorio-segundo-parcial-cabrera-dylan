import { Router } from "express";
import { getAll, getById, createLanguage } from "../controllers/language.controllers.js";

const router = Router();

router.get("/languages", getAll);
router.get("/languages/:id", getById);
router.post("/languages", createLanguage);

export default router;

