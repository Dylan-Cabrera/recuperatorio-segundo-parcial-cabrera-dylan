//importaciones
import express from "express";
import dotenv from "dotenv";
import { starDB } from "./src/config/db.js";
import languageRoutes from "./src/routes/language.routes.js";


//configuraciones
starDB();
const app = express();
dotenv.config();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use("/api", languageRoutes);

//servidor
app.listen(PORT, () => {
    console.log(`Escuchando servidor en el puerto ${PORT}`)
});