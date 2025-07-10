import { Router } from "express";
import { getAll, getById } from "../controllers/language.controllers.js";

const router = Router();

router.get("/languages", getAll);
router.get("/languages/:id", getById);

export default router;

