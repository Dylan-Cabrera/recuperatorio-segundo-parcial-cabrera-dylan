//importaciones
import express from "express";
import dotenv from "dotenv";


//configuraciones
const app = express();
dotenv.config();
const PORT = process.env.PORT;

//middleware
app.use(express.json());

//servidor
app.listen(PORT, () => {
    console.log(`Escuchando servidor en el puerto ${PORT}`)
});