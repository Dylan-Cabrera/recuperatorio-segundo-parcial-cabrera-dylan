import { sequelize } from "./database.js";

//inicializacion de la base de datos

export const starDB = async () => {
    try {
        sequelize.authenticate();
        console.log("Se conecto a la base de datos")
        sequelize.sync();

    } catch (error) {
        console.log("error al conectar con la base de datos");
        process.exit(1);
    }
};