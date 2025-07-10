import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

//configuracion de la base de datos
export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);