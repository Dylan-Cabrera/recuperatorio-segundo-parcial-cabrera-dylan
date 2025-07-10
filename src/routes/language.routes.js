import { Router } from "express";
import { getAll, getById, createLanguage, updateLanguage, deleteLanguage } from "../controllers/language.controllers.js";

const router = Router();

router.get("/languages", getAll);
router.get("/languages/:id", getById);
router.post("/languages", createLanguage);
router.put("/languages/:id", updateLanguage);
router.delete("/languages/:id", deleteLanguage);

export default router;

