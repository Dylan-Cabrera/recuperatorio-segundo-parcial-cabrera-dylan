//importaciones
import express from "express";
import dotenv from "dotenv";
import { starDB } from "./src/config/db.js";


//configuraciones
starDB();
const app = express();
dotenv.config();
const PORT = process.env.PORT;

//middleware
app.use(express.json());

//servidor
app.listen(PORT, () => {
    console.log(`Escuchando servidor en el puerto ${PORT}`)
});