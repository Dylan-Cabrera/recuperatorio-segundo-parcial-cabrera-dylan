import { Router } from "express";
import { getAll } from "../controllers/language.controllers.js";

const router = Router();

router.get("/languages", getAll);

export default router;

